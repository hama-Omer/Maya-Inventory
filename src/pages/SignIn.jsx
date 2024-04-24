import MayaButton from "../components/MayaButton";
import MayaCheckBox from "../components/MayaCheckBox";
import MayaComboBox from "../components/MayaComboBox";
import MayaInput from "../components/MayaInput";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

export default function SignIn() {
  const options = [
    { value: "volvo", label: "Volvo" },
    { value: "saab", label: "Saab" },
    { value: "mercedes", label: "Mercedes" },
    { value: "audi", label: "Audi" },
    { value: "audi", label: "Audi" },
    { value: "audi", label: "Audi" },
  ];
  console.log("Options:", options);
  return (
    <div className="w-1/2 h-96 rounded-md flex flex-col  items-center bg-gray-300 shadow-md text-black"></div>
  );
}
