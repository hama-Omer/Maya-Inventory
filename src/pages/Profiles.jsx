import { useEffect, useState } from "react";

export default function Profiles() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem("items");
    if (items) {
      setData(items);
      console.log(data);
    }
  });
  return <div className="w-full  h-96 bg-yellow-500">Profiles</div>;
}
