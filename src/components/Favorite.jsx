import styled from 'styled-components';
import iconHeartEmpty from '/src/assets/ic_heart_empty.svg';
import iconHeartFill from '/src/assets/ic_heart_fill.svg';
import '/src/styles/Color.css';

const FavoriteDiv = styled.div`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  border-radius: 35px;
  border: 1px solid var(--gray-200);
  padding: 4px 12px;
  color: var(--gray-500);

  margin-top: 24px;
`;
// size small / large

function Favorite({ children }) {
  return (
    <FavoriteDiv>
      <img src={iconHeartEmpty} alt='heart' />
      <span>{children}</span>
    </FavoriteDiv>
  );
}

export default Favorite;
