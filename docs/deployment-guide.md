# Semaduck 배포 가이드

## 배포 흐름

```
코드 수정 → git push origin main → GitHub Actions → Docker Hub → Claude Code SSH 수동 배포
```

## 일반 배포

```bash
# 1. feature 브랜치에서 작업
git checkout -b feature/새기능

# 2. 작업 후 커밋
git add .
git commit -m "feat: 새 기능"

# 3. main에 merge & push
git checkout main
git merge feature/새기능
git push origin main

# 4. GitHub Actions 빌드 완료 확인 후 → Claude Code에게 배포 요청
```

**main push 후 GitHub Actions 빌드가 완료되면 Claude Code가 SSH로 서버에 접속해 자동 배포합니다.**

---

## 인프라 구성

| 구성 요소      | 역할          | 상세                               |
| -------------- | ------------- | ---------------------------------- |
| GitHub Actions | CI/CD         | main push 시 Docker 이미지 빌드    |
| Docker Hub     | 이미지 저장소 | `masterkein/semaduck:latest`       |
| Plesk Docker   | 컨테이너 실행 | 포트 `32778:3001`                  |
| Claude Code    | 수동 배포     | SSH(plink)로 서버 접속 후 재배포   |
| Apache Proxy   | 리버스 프록시 | `127.0.0.1:32778` → `semaduck.com` |

---

## Claude Code 배포 방법

`.env.local`에 서버 접속 정보를 저장해두면 Claude Code가 plink(PuTTY)로 SSH 접속 후 자동 배포합니다.

**`.env.local` 설정:**

```env
DEPLOY_HOST=64.176.162.29
DEPLOY_USER=root
DEPLOY_PORT=22
DEPLOY_PASSWORD=<비밀번호>
```

**Claude Code가 실행하는 명령어:**

```bash
plink -ssh -pw <PASSWORD> root@<HOST> \
  "docker pull masterkein/semaduck:latest && \
   docker stop semaduck && \
   docker rm semaduck && \
   docker run -d --name semaduck -p 32778:3001 --restart unless-stopped masterkein/semaduck:latest"
```

> `.env.local`은 gitignore되어 있어 git에 올라가지 않습니다.

## 긴급 수동 배포

직접 터미널에서 실행 시:

```bash
docker pull masterkein/semaduck:latest && docker stop semaduck && docker rm semaduck && docker run -d --name semaduck -p 32778:3001 --restart unless-stopped masterkein/semaduck:latest
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

### 배포 후 반영 안 될 때

```bash
# 컨테이너 재시작
docker restart semaduck

# 또는 Claude Code에게 재배포 요청
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
