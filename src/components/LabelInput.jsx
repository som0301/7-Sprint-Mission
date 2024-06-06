import PasswordVisibilityButton from './PasswordVisibilityButton';
export default function LabelInput({
  onChange = '',
  value = '',
  labelHeader = '',
  placeholder = '',
  type = '',
  name = '',
  visibilityLogo = '',
}) {
  const isPassword = type === 'password';
  return (
    <label className="">
      <h3 className="mb-2 text-base font-bold text-gray-800">{labelHeader}</h3>
      <div className="relative">
        <input
          onChange={onChange}
          value={value}
          type={type}
          name={name}
          placeholder={placeholder}
          autoComplete={type}
          className="w-full h-14 px-6 py-4 mb-2 rounded-xl bg-gray-100 text-base font-normal placeholder-gray-400"
          required
        />
        {isPassword && <PasswordVisibilityButton />}
      </div>
    </label>
  );
}
