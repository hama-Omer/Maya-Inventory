import React from "react";

export default function MayaComboBox({
  selects,
  size,
  options,
  value,
  onChange,
}) {
  //   const optionElements = options.map((option, index) => {
  //     <options key={index} value={option.value}>
  //       {option.label}
  //     </options>;
  //   });
  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-whit"
        htmlFor="cars"
      >
        {selects}
      </label>
      <select
        value={value}
        onChange={onChange}
        className={`bg-gray-50 border
         border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-500
           focus:border-blue-500 block ${size} p-2.5
            dark:bg-gray-700 dark:border-gray-600 
             dark:placeholder-gray-400 dark:text-white
              dark:focus:ring-blue-500 dark:focus:border-blue-500`}
      >
        {/* {optionElements} */}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
