import { Helmet } from 'react-helmet';
import AddItemForm from '../components/AddItemForm';

function AddItem() {
  return (
    <>
      <Helmet>
        <title>판다마켓 - 상품 등록</title>
      </Helmet>
      <StyledMain>
        <AddItemForm />
      </StyledMain>
    </>
  );
}

export default AddItem;
