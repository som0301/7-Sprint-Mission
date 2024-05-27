import styles from './selectpage.module.css';
import { classModuleName } from '../../../modules';
import arrowLeft from '../../../images/icons/ic_arrow_left.svg';
import arrowRight from '../../../images/icons/ic_arrow_right.svg';

const PAGE_MIN = 1;
const PAGE_MAX = 5;

function SelectPage({ onChange, page }) {
  const pageNum = [1, 2, 3, 4, 5];

  const handleOnClickPageNum = (e) => {
    const nextPage = e.target.value;
    onChange(nextPage);
  };

  const handleOnClickArrow = (e) => {
    const nextPage = Number(page) + Number(e.currentTarget.value);
    if (nextPage < PAGE_MIN || nextPage > PAGE_MAX) return;
    onChange(nextPage);
  };

  return (
    <section className={classModuleName('select-page-container', styles)}>
      <button value={-1} onClick={handleOnClickArrow} className={classModuleName('select-page-button arrow', styles)}>
        <img src={arrowLeft} alt="<" />
      </button>
      {pageNum.map((e) => {
        const className = e == page ? 'select-page-button selected' : 'select-page-button';
        return (
          <button key={e} value={e} onClick={handleOnClickPageNum} className={classModuleName(className, styles)}>
            {e}
          </button>
        );
      })}
      <button value={1} onClick={handleOnClickArrow} className={classModuleName('select-page-button arrow', styles)}>
        <img src={arrowRight} alt=">" />
      </button>
    </section>
  );
}

export default SelectPage;
