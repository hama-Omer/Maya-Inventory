import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faHouse,
  faSquarePollHorizontal,
  faSquareCaretDown,
  faUser,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";

export default function SideMenu() {
  const siderMenuIconColor = "text-blue-500";
  const siderMenuIconHoverColor = "bg-slate-100";

  let siderMenuBackground = "bg-white ";
  return (
    <div className="h-screen  flex">
      <div
        className={`w-20  ${siderMenuBackground} flex align-center shadow-md items-center flex-col text-center`}
      >
        <div className="w-full h-14 "></div>

        <Link className={"w-full hover:bg-slate-100 text-center"} to="/">
          <FontAwesomeIcon
            icon={faDoorOpen}
            className={`${siderMenuIconColor} text-3xl mb-4 mt-4 transform hover:text-blue-700 transition-500 duration-500 hover:scale-125`}
          />
        </Link>

        <Link className={"w-full hover:bg-slate-100 text-center"} to="/home">
          <FontAwesomeIcon
            icon={faHouse}
            className={`${siderMenuIconColor} text-3xl mb-4 mt-4 transform hover:text-blue-700 transition-500 duration-500 hover:scale-125`}
          />
        </Link>
        <Link
          className={"w-full hover:bg-slate-100 text-center"}
          to="/profiles"
        >
          <FontAwesomeIcon
            icon={faUser}
            className={`${siderMenuIconColor} text-3xl mb-4 mt-4   hover:text-blue-600 transition-700 duration-500 hover:scale-125`}
          />
        </Link>
        <Link className={"w-full hover:bg-slate-100 text-center"} to="/item">
          <FontAwesomeIcon
            icon={faSquarePollHorizontal}
            className={`${siderMenuIconColor} text-3xl mb-4 mt-4  hover:text-blue-600 transition-700 duration-500 hover:scale-125`}
          />
        </Link>
        <Link className={"w-full hover:bg-slate-100 text-center"} to="/items">
          <FontAwesomeIcon
            icon={faSquareCaretDown}
            className={`${siderMenuIconColor} text-3xl mb-4 mt-4   hover:text-blue-600 transition-700 duration-500 hover:scale-125`}
          />
        </Link>
      </div>
    </div>
  );
}
