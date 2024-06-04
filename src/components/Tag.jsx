import '../styles/Tag.css';
import grayXIc from '../assets/icons/ic_x_gray.svg';
import Button from './Button';

function Tag({ name, onDeleteClick }) {
  // const [name, setName] = useState("");
  const onClickHandle = () => {
    onDeleteClick(name);
  };
  return (
    <div className='tag'>
      <span className='tag-name'>{name}</span>
      <Button onClick={onClickHandle}>
        <img src={grayXIc} alt='삭제 버튼' className='tag-btn-delete' />
      </Button>
    </div>
  );
}

export default Tag;
