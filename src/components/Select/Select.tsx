
interface SelectProps<T> {
  options: T[];
  value: T;
  onChange: (value: T) => void;
  getOptionLabel: (option: T) => string;
  getOptionValue: (option: T) => string;
}

function Select<T>({
  options,
  value,
  onChange,
  getOptionLabel,
  getOptionValue,
}: SelectProps<T>) {
  return (
    <select
      value={getOptionValue(value)}
      onChange={(e) => {
        const selectedOption = options.find(
          (option) => getOptionValue(option) === e.target.value
        );
        if (selectedOption) {
          onChange(selectedOption);
        }
      }}
      className="block w-full py-3 pl-1 pr-4 border-b border-gray-400 outline-none text-sm text-gray-400"
    >
      {options.map((option) => (
        <option key={getOptionValue(option)} value={getOptionValue(option)}>
          {getOptionLabel(option)}
        </option>
      ))}
    </select>
  );
}

export default Select;