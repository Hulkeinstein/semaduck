# Semaduck 배포 가이드

## 배포 흐름

```
코드 수정 → git push origin main → GitHub Actions → Docker Hub → Watchtower → 자동 배포
```

## 일반 배포 (자동)

```bash
# 1. feature 브랜치에서 작업
git checkout -b feature/새기능

# 2. 작업 후 커밋
git add .
git commit -m "feat: 새 기능"

# 3. main에 merge
git checkout main
git merge feature/새기능
git push origin main

# 4. 5분 후 자동 배포 (Watchtower)
```

**main 브랜치에 push하면 5분 내 자동 배포됩니다.**

---

## 인프라 구성

| 구성 요소      | 역할          | 상세                               |
| -------------- | ------------- | ---------------------------------- |
| GitHub Actions | CI/CD         | main push 시 Docker 이미지 빌드    |
| Docker Hub     | 이미지 저장소 | `masterkein/semaduck:latest`       |
| Plesk Docker   | 컨테이너 실행 | 포트 `32778:3001`                  |
| Watchtower     | 자동 업데이트 | 5분마다 새 이미지 감지 → 재시작    |
| Apache Proxy   | 리버스 프록시 | `127.0.0.1:32778` → `semaduck.com` |

---

## 긴급 수동 배포

Plesk SSH 접속 후:

```bash
# 최신 이미지 pull
docker pull masterkein/semaduck:latest

# 기존 컨테이너 중지 및 삭제
docker stop semaduck
docker rm semaduck

# 새 컨테이너 실행
docker run -d --name semaduck -p 32778:3001 --restart unless-stopped masterkein/semaduck:latest
```

---

## 배포 상태 확인

### GitHub Actions 빌드 확인

```bash
gh run list --limit 5
```

### Docker Hub 이미지 확인

```bash
curl -s "https://hub.docker.com/v2/repositories/masterkein/semaduck/tags/latest" | jq '.last_updated'
```

### 사이트 동작 확인

```bash
curl -s "https://semaduck.com" | head -20
```

---

## 트러블슈팅

### 503 에러 발생 시

1. **컨테이너 상태 확인**

   ```bash
   docker ps | grep semaduck
   ```

2. **포트 매핑 확인**
   - Docker: `32778:3001`
   - Apache: `ProxyPass / http://127.0.0.1:32778/`

3. **컨테이너 로그 확인**
   ```bash
   docker logs semaduck
   ```

### Watchtower가 업데이트 안 할 때

```bash
# Watchtower 상태 확인
docker ps | grep watchtower

# Watchtower 로그 확인
docker logs watchtower --tail 50

# Watchtower 재시작
docker restart watchtower
```

---

## Apache 설정 (참고)

**HTTP & HTTPS 둘 다 동일하게 설정:**

```apache
ProxyPass / http://127.0.0.1:32778/
ProxyPassReverse / http://127.0.0.1:32778/
ProxyPreserveHost On
```

---

## 주의사항

- **main 브랜치**에 push해야 배포됨
- feature 브랜치 push는 배포 트리거 안 됨
- 포트 변경 시 Apache 설정도 함께 변경 필요
