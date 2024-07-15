import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ArrowIcon from "@/assets/images/icons/ic_arrow_down.svg";
import DropdownIcon from "@/assets/images/icons/ic_sort.svg";

interface OrderDropdownProps {
  options: { value: string; label: string }[];
  selected: string;
  onSelect: (value: string) => void;
}

const OrderDropdown: React.FC<OrderDropdownProps> = ({
  options,
  selected,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  const selectedLabel = options.find(
    (option) => option.value === selected,
  )?.label;

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center sm:justify-between justify-center sm:w-[130px] w-[42px] h-[42px] py-2 sm:px-5 px-0 border border-gray-300 rounded-xl bg-white text-gray-800 text-base font-normal focus:outline-none'
      >
        <span className='hidden sm:block'>{selectedLabel}</span>
        <span className='block sm:hidden'>
          <Image src={DropdownIcon} alt='arrow icon' width={24} height={24} />
        </span>
        <span className='hidden sm:block'>
          <Image src={ArrowIcon} alt='arrow icon' width={24} height={24} />
        </span>
      </button>
      {isOpen && (
        <div className='absolute mt-1 w-full min-w-[100px] right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10'>
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderDropdown;
