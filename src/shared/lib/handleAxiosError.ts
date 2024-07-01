import { AxiosError } from 'axios';

// AxiosError 핸들러
export function handleAxiosError(error: AxiosError) {
  const errorMappings: Record<string, string> = {
    responseError: '응답 오류',
    noResponse: '응답 없음',
    requestError: '요청 오류',
    unknownError: '알 수 없는 오류',
  };

  let errorMessage = errorMappings.unknownError;
  let details: any = null;

  if (error.response) {
    errorMessage = errorMappings.response_error;
    details = error.response.data;
  } else if (error.request) {
    errorMessage = errorMappings.noResponse;
    details = error.request;
  } else {
    errorMessage = errorMappings.requestError;
    details = error.message;
  }
  console.error(errorMessage, { details });
}
