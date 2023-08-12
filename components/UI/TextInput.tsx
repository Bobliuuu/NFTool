type TextInputProps = {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  classes?: string;
};

export default function TextInput({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  classes,
}: TextInputProps) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      className={`w-full rounded-md border border-blue2 bg-blue4 px-4.5 py-5 text-white outline-none placeholder:text-white placeholder:opacity-50 focus:border-blue2 xl:rounded-lg xl:px-6 xl:py-4.5 ${classes}`}
    />
  );
}
