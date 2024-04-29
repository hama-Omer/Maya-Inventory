import React from "react";

export default function MayaCheckBox(props) {
  return (
    <div className="flex align-middle m-4">
      <label className={`${props.color}`}>
        <input
          className="mr-2  bg-red-500"
          type="checkbox"
          onChange={props.onChange}
          value={props.value}
        />
        {props.text}
      </label>
    </div>
  );
}
