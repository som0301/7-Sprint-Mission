import styled from 'styled-components';
import AddItemForm from '../components/AddItemForm';

const StyledAddItemMain = styled.div`
  width: 1200px;
`;

function AddItem() {
  return (
    <StyledAddItemMain>
      <AddItemForm />
    </StyledAddItemMain>
  );
}

export default AddItem;
