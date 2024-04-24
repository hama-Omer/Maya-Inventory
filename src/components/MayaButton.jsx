import { faCalendar } from "@fortawesome/free-solid-svg-icons";
export default function MayaButton({
  htmltype,
  size,
  color,
  text,
  hoverBgColor,
  hoverTextxColor,
  onClick = () => {},
}) {
  return (
    <button
      type={htmltype}
      onClick={onClick}
      className={`${size} flex items-center justify-center 
      h-14 text-white ${color} cursor-pointer ${hoverBgColor}  ${hoverTextxColor} transition-700 duration-500  rounded-3xl`}
    >
      {text}
    </button>
  );
}

/**
 function button(onClick, onBlur, onSomethingElse) {
  if(event === "click"){
    onClick(event);
  }

  else if (event === "blur"){
    onBlur();
  }

  let processorType = getProcessorType();

  if(....){
    onSomethingElse(processorType)
  }

 }
 */
