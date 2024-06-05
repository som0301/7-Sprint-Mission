export default function LabelInput({
  labelHeader = '',
  placeholder = '',
  type = '',
  name = '',
  isPassword = false,
}) {
  return (
    <label className="mb-6">
      <h3 className="mb-2 text-base font-bold text-gray-800">{labelHeader}</h3>
      <input
        className="w-full h-14 px-6 py-4 mb-4 rounded-xl bg-gray-100 text-base font-normal placeholder-gray-400"
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={type}
        required
      />
    </label>
  );
}
