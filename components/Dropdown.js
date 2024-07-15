import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/components/Dropdown.module.css';
import dropdownIcon_basic from '@/assets/images/dropdownIcon_basic.svg';
import dropdownIcon_mobile from '@/assets/images/dropdownIcon_mobile.svg';

export default function Dropdown({ selectedOption, onOptionSelect, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 743);
    };

    handleResize(); // Initialize state based on current window size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownToggle} onClick={toggleDropdown}>
        {!isMobile && (
          <div className={styles.isNonMobileDropdown}>
            <span className={styles.dropdownSelectedOption}>
              {items.find((item) => item.value === selectedOption)?.label}
            </span>
            <div className={styles.dropdownIcon}>
              <Image
                src={dropdownIcon_basic}
                width={24}
                height={24}
                alt='Dropdown icon in desktop and tablet'
              />
            </div>
          </div>
        )}
        {isMobile && (
          <div className={styles.isMobileDropdown}>
            <Image
              src={dropdownIcon_mobile}
              width={24}
              height={24}
              alt='Dropdown icon in mobile'
            />
          </div>
        )}
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {items.map((item) => (
            <li
              key={item.value}
              className={styles.dropdownItem}
              onClick={() => handleOptionClick(item.value)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
