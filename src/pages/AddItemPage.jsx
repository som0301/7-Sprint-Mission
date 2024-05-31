import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import AddItemForm from '../components/AddItemForm';

const StyledAddItemMain = styled.div`
  width: 1200px;

  @media (max-width: 1199px) {
    width: 696px;
  }
  @media (max-width: 767px) {
    width: 344px;
  }
`;

function AddItem() {
  return (
    <>
      <Helmet>
        <title>판다마켓 - 상품 등록</title>
      </Helmet>
      <StyledAddItemMain>
        <AddItemForm />
      </StyledAddItemMain>
    </>
  );
}

export default AddItem;
