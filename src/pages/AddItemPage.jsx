import styled from 'styled-components';
import AddItemForm from '../components/AddItemForm';
import { useResponsiveApi } from '../Responsive';

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
    <StyledAddItemMain>
      <AddItemForm />
    </StyledAddItemMain>
  );
}

export default AddItem;
