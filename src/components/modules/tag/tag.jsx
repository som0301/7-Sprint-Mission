import { classModuleName } from '../../../modules';
import deleteImage from '../../../images/icons/ic_X.svg';

function Tag({ style, value, className, index, onDelete }) {

  const handleClickDelete = (e) => {
    e.preventDefault();
    console.log(index);
    onDelete(index);
  }

  return (
    <div className={classModuleName(className, style)}>
      <p>{value}</p>
      <button onClick={handleClickDelete}>
        <img src={deleteImage} alt="삭제" />
      </button>
    </div>
  );
}

export default Tag;
