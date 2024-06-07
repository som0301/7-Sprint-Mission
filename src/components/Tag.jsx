import '../styles/Tag.scss';
import grayXIc from '../assets/icons/ic_x_gray.svg';
import Button from './Button';

function Tag({ name, onDeleteClick }) {
  return (
    <div className='tag'>
      <span className='tag-name'>{name}</span>
      <Button onClick={onDeleteClick}>
        <img
          name={name}
          src={grayXIc}
          alt='삭제 버튼'
          className='tag-btn-delete'
        />
      </Button>
    </div>
  );
}

export default Tag;
