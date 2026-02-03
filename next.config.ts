import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [],
  },
  // Next.js 16: turbopack 설정은 최상위 레벨에 위치
  turbopack: {
    // Windows symlink 이슈 해결을 위한 root 설정
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
