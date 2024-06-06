import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import iconCancel from '/src/assets/ic_cancel.svg';
import imageTempProduct from '/src/assets/image_addProduct.svg';
import Input from '/src/components/Input';

function FileInput() {
  return (
    <>
      <img src={imageTempProduct} alt='이미지 미리보기' />
      <Input
        htmlFor='productImage'
        id='productImage'
        type='file'
        accept='image/png, image/jpeg'
      />
    </>
  );
}

export default FileInput;
