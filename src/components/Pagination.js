import React, { useState, useEffect } from 'react';
import Style from './Pagination.module.css';

export function Pagination({ pageLimit, defaultPage = 1, onChange }) {
  const [current, setCurrent] = useState(defaultPage);

  useEffect(() => {
    onChange && onChange(current);
  }, [current]);

  const handelNextPage = () => {
    if (current > 1) {
      setCurrent(next => next + 1);
    }
  };

  const handlePrePage = () => {
    if (current < pageLimit) {
      setCurrent(prev => prev - 1);
    }
  };

  const handleChangePage = page => {
    setCurrent(page);
  };

  return (
    <>
      <div className={Style.pageButton_box}>
        <button
          className={Style.pageButton}
          onClick={handlePrePage}
        >
          &lt;
        </button>

        {Array.from({ length: pageLimit }, (_, index) => index + 1).map(
          page => {
            return (
              <button
                className={Style.pageButton}
                key={page}
                onClick={() => handleChangePage(page)}
              >
                {page}
              </button>
            );
          }
        )}
        <button
          className={Style.pageButton}
          onClick={handelNextPage}
        >
          &gt;
        </button>
      </div>
    </>
  );
}
