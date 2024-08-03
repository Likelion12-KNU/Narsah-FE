import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000, // Optional: Ensure this matches your desired port
    proxy: {
      // Proxy 설정: `/api`로 시작하는 요청을 `localhost:8080`으로 전달
      '/api': {
        target: 'http://localhost:8080', // API 서버 주소
        changeOrigin: true, // 호스트 헤더를 target URL로 변경
        secure: false, // HTTPS 사용 시 true로 변경
        rewrite: (path) => path.replace(/^\/api/, '') // URL에서 '/api' 제거
      }
    }
  },
  plugins: [react()],
});

