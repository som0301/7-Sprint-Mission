import '../styles/Tag.css';
import grayXIc from '../assets/icons/ic_x_gray.svg';

function Tag({ name, onDeleteClick }) {
  // const [name, setName] = useState("");
  const onClickHandle = () => {
    onDeleteClick(name);
  };
  return (
    <div className='tag'>
      <span className='tag-name'>{name}</span>
      <button onClick={onClickHandle} className='tag-btn-delete'>
        <img src={grayXIc} alt='삭제 버튼' />
      </button>
    </div>
  );
}

export default Tag;
