import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()], // 플러그인 목록입니다. react()와 tsconfigPaths()가 포함됩니다.
  build: {
    outDir: 'dist', // 빌드 결과물이 생성될 디렉토리 경로입니다.
  },
  server: {
    port: 3000, // Vite 개발 서버의 포트 번호입니다.
  },
});
