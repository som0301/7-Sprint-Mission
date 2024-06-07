import styles from './tag.module.css'
import { classModuleName } from '../../../modules';
import deleteImage from '../../../images/icons/ic_X.svg';

function Tag({ value, index, onDelete, canDelete = true }) {

  const handleClickDelete = (e) => {
    e.preventDefault();
    onDelete(index);
  }

  return (
    <div className={classModuleName('tag', styles)}>
      {canDelete ? <p>{value}</p> : <p>{`#${value}`}</p>}
      {canDelete && <button onClick={handleClickDelete}>
        <img src={deleteImage} alt="삭제" />
      </button>}
    </div>
  );
}

export default Tag;
