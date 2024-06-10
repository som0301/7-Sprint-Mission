import { Helmet } from 'react-helmet';
import AddItemForm from '/src/components/AddItemForm';
import { StyledMain } from '/src/components/common/CommonComponents';

function AddItemPage() {
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

export default AddItemPage;
