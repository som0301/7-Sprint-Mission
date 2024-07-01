import React from "react";
import Select from "react-select";

const orderOptions = [
  { value: "recent", label: "최신순" },
  { value: "favorite", label: "인기순" },
];

interface OrderSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    width: 130,
    border: "1px solid var(--gray-200)",
    borderRadius: 12,
    padding: 4,
    marginLeft: 10,
  }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: 12,
    border: "1px solid var(--gray-200)",
  }),
  option: (
    provided: any,
    state: { isSelected: boolean; isFocused: boolean },
  ) => ({
    ...provided,
    backgroundColor: state.isSelected || state.isFocused ? 'transparent' : 'transparent',
    color: 'black',
    borderRadius: state.isFocused ? 4 : 0,
    padding: 10,
  }),
};

const OrderSelect: React.FC<OrderSelectProps> = ({ value, onChange }) => {
  const handleChange = (
    selectedOption: { value: string; label: string } | null,
  ) => {
    if (selectedOption) {
      onChange(selectedOption.value);
    }
  };

  const selectedOption = orderOptions.find((option) => option.value === value);

  return (
    <Select
      styles={customStyles}
      value={selectedOption}
      onChange={handleChange}
      options={orderOptions}
    />
  );
};

export default OrderSelect;
