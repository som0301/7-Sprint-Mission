import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()], // 플러그인 목록
  build: {
    outDir: 'dist', // 빌드 결과물이 생성될 디렉토리
  },
  server: {
    port: 3000, // Vite 개발 서버의 포트 번호
  },
});
