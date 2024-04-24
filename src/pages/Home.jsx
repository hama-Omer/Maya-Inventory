import MayaInput from "../components/MayaInput";
import { faPassport, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="w-full h-96">
      <MayaInput type="text" placeholder="Username" icon={faUser} />
    </div>
  );
}
