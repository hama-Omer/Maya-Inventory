import React, { useState } from "react";
import MayaButton from "./MayaButton";
import MayaInput from "./MayaInput";
import MayaCheckBox from "./MayaCheckBox";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function MayaTable({ columns, data, onEdit, onDelete }) {
  const [search, setSearch] = useState("");

  const typeOFItems = [
    "Computer",
    "Monitor",
    "Device",
    "Phone",
    "Printer",
    "AV",
    "Network Device",
    "System",
  ];

  const buttonColor = "bg-indigo-900";
  const hoverTextxColor = "hover:text-gray-700";
  const hoverBgColor = "hover:bg-indigo-300";

  const inputColor = "border-gray-700";
  const inputTextColor = "text-gray-700";
  const checkBoxTextColor = "text-black";
  return (
    <div>
      <MayaInput
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        textColor="text-gray-700"
        size="w-full"
        borderColor={inputColor}
        placeholder="Search"
        iconColor={inputTextColor}
        icon={faSearch}
        value={search}
      />

      <div className="flex">
        {typeOFItems.map((checkboxes) => {
          return (
            <MayaCheckBox
              key={checkboxes}
              text={checkboxes}
              color={checkBoxTextColor}
            />
          );
        })}
      </div>

      <section className="w-full h-[80vh] overflow-scroll bg-slate-50 rounded-2xl p-2 ">
        <table
          className={`w-full  overflow-hidden  bg-almond-50 backdrop-blur-md shadow-md rounded-2xl`}
        >
          <thead>
            <tr className="w-4 h-14  bg-slate-800 ">
              {columns.map((column) => (
                <th className="w-36" key={column.key}>
                  {column.label}
                </th>
              ))}
              <th className="bg-red-400">Edit</th>
              <th className="bg-green-400">Delete</th>
            </tr>
          </thead>
          <tbody className="[&>*:nth-child(even)]:bg-slate-400  [&>*:nth-child(odd)]:bg-slate-600 cursor-pointer  h-1/2 overflow-y-auto overflow-x-hidden">
            {data
              .filter((item) => {
                return search.toLocaleLowerCase() === ""
                  ? item
                  : item.name.toLocaleLowerCase().includes(search) ||
                      item.serialNumber.toLocaleLowerCase().includes(search) ||
                      item.location.toLocaleLowerCase().includes(search) ||
                      item.user.toLocaleLowerCase().includes(search) ||
                      item.department.toLocaleLowerCase().includes(search) ||
                      item.brand.toLocaleLowerCase().includes(search) ||
                      item.status.toLocaleLowerCase().includes(search) ||
                      item.vendor.toLocaleLowerCase().includes(search) ||
                      item.Type.toLocaleLowerCase().includes(search);
              })
              .map((item) => (
                <tr
                  className="text-center w-10  h-16 bg-slate-500   border-gray-600 "
                  key={item.id}
                >
                  {columns.map((column) => (
                    <td key={column.key}>{item[column.key]}</td>
                  ))}
                  <td className="w-24">
                    <MayaButton
                      onClick={() => onEdit(item)}
                      text="Edit"
                      size="w-full"
                      color={buttonColor}
                      hoverBgColor={hoverBgColor}
                      hoverTextxColor={hoverTextxColor}
                    />
                  </td>
                  <td className="w-24">
                    <MayaButton
                      onClick={() => onDelete(item)}
                      text="Delete"
                      size="w-full"
                      color={buttonColor}
                      hoverBgColor={hoverBgColor}
                      hoverTextxColor={hoverTextxColor}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
