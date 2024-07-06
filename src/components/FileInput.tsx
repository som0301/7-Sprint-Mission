import imageTempProduct from '@assets/images/image_addProduct.svg';
import { Input } from '@components/Input';

function FileInput() {
  return (
    <>
      <img src={imageTempProduct} alt='이미지 미리보기' />
      <Input
        id='productImage'
        type='file'
        // accept='image/png, image/jpeg'
      />
    </>
  );
}

export default FileInput;
