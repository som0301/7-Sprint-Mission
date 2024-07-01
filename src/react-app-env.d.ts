/// <reference types="react-scripts" />
interface ProcessEnv {
    readonly REACT_APP_API_URL: string;
    readonly REACT_APP_OTHER_ENV: string;
  }
  
  declare namespace NodeJS {
    interface ProcessEnv extends ProcessEnv {}
  }