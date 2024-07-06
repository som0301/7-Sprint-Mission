/// <reference types="vite/client" />

// 프로젝트에서 전역적으로 사용되는 타입 혹은 환경 변수 타입을 중앙에서 관리하기 위해 사용
interface ImportMetaEnv {
  VITE_API_URL: string;
}
