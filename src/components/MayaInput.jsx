import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MayaInput({
  size,
  onChange,
  textColor,
  textAlignment,
  borderColor,
  type,
  placeholder,
  value,
  icon,
  iconColor,
}) {
  return (
    <div className={`relative  ${size}`}>
      <input
        onChange={onChange}
        className={`w-full h-14 ${textColor} bg-transparent ${textAlignment} outline-none rounded-3xl placeholder-gray-400 ${borderColor} border-2 p-1`}
        type={type}
        placeholder={placeholder}
        value={value}
      ></input>
      <FontAwesomeIcon
        className={`absolute right-5 top-1/3 ${iconColor}`}
        icon={icon}
      />
    </div>
  );
}
