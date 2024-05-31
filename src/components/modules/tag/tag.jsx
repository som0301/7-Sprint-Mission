import { classModuleName } from '../../../modules';
import deleteImage from '../../../images/icons/ic_X.svg'

function Tag({ style, value, className }) {
  return (
    <div className={classModuleName(className, style)}>
      <p>{value}</p>
      <img src={deleteImage} alt="삭제" />
    </div>
  );
}

export default Tag;