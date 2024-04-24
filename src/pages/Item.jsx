import {
  faCalendar,
  faCode,
  faMarker,
  faMoneyBill,
  faSection,
  faStore,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import MayaInput from "../components/MayaInput";
import MayaComboBox from "../components/MayaComboBox";
import MayaButton from "../components/MayaButton";
import MayaTable from "../components/MayaTable";
import { useEffect, useState } from "react";

export default function Item() {
  const inputColor = "border-gray-700";
  const inputTextColor = "text-gray-700";
  const buttonColor = "bg-gray-700";

  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [location, setLocation] = useState("");
  const [user, setUser] = useState("");
  const [department, setDepartment] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [brand, setBrand] = useState("");
  const [status, setStatus] = useState("");
  const [vendor, setVendor] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [itemInfo, setItemInfo] = useState([]);
  const tableHeader = [
    { label: "name", key: "name" },
    { label: "Serial number", key: "serialNumber" },
    { label: "Location", key: "location" },
    { label: "user", key: "user" },
    { label: "Department", key: "department" },
    { label: "Brand", key: "brand" },
    { label: "Status", key: "status" },
    { label: "Vendor", key: "vendor" },
    { label: "Price", key: "price" },
    { label: "Type", key: "type" },
  ];

  const options = [
    { value: "In store", label: "In store" },
    { value: "Distrbuted", label: "Distrbuted" },
    { value: "Broken", label: "Broken" },
    { value: "Sold", label: "Sold" },
  ];

  const Manifacture = [
    { value: "Apple", label: "Apple" },
    { value: "HP", label: "HP" },
    { value: "Asus", label: "Asus" },
    { value: "Dell", label: "Dell" },
  ];

  const Location = [
    { value: "3rd floor", label: "3rd floor" },
    { value: "ground Floor", label: "ground Floor" },
    { value: "Store 1", label: "Store 1" },
    { value: "Mezzanine", label: "Mezzanine" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    let item = {
      name: name,
      serialNumber: serialNumber,
      location: location,
      user: user,
      department: department,
      purchaseDate: purchaseDate,
      brand: brand,
      status: status,
      vendor: vendor,
      price: price,
      type: type,
    };

    if (!id) {
      (item.id = Math.floor(Math.random() * 100000000)),
        setItemInfo([...itemInfo, item]);
      let items = JSON.stringify([...itemInfo, item]);

      localStorage.setItem("items", items);
    } else {
      const newItems = itemInfo.map((i) =>
        i.id /* <--- table item id */ ===
        id /* <--- id stateakay sarawa (selected item) **/
          ? { id, ...item }
          : i
      );

      setItemInfo(newItems);
      let items = JSON.stringify(newItems);
      localStorage.setItem("items", items);
    }
  };

  const handleDelete = (item) => {
    const newItems = itemInfo.filter((i) => i.id !== item.id);
    setItemInfo(newItems);
    let items = JSON.stringify(newItems);
    localStorage.setItem("items", items);
  };

  const handleClickEdit = (item) => {
    setId(item.id);
    setName(item.name);
    setSerialNumber(item.serialNumber), setLocation(item.user);
    setUser(item.department);
    setDepartment(item.department);
    setPurchaseDate(item.purchaseDate);
    setBrand(item.brand);
    setStatus(item.status);
    setLocation(item.location);
    setVendor(item.vendor);
    setprice(item.price);
    setType(item.type);
  };

  useEffect(() => {
    const items = localStorage.getItem("items");
    if (items) {
      const jsonItems = JSON.parse(items);
      setItemInfo(jsonItems);
    }
  }, []);

  return (
    <div className="flex w-full">
      <div className=" w-1/3">
        <h1 className={`mb-8 text-4xl ${inputTextColor}`}>Item</h1>
        <div className={`w-full h-auto p-2 box-border  rounded-md `}>
          <form onSubmit={handleSubmit}>
            <MayaInput
              onChange={(e) => setName(e.target.value)}
              type="text"
              textColor="text-gray-700"
              size="w-1/2"
              borderColor={inputColor}
              placeholder="Name"
              iconColor={inputTextColor}
              icon={faMarker}
              value={name}
            />
            <br />
            <MayaInput
              onChange={(e) => setSerialNumber(e.target.value)}
              type="text"
              textColor="text-gray-700"
              size="w-1/2"
              borderColor={inputColor}
              placeholder="Serial Number"
              iconColor={inputTextColor}
              icon={faCode}
              value={serialNumber}
            />
            <br />
            <MayaComboBox
              onChange={(e) => setLocation(e.target.value)}
              selects="Location"
              options={Location}
              value={location}
            />
            <br />
            <MayaInput
              onChange={(e) => setUser(e.target.value)}
              type="text"
              textColor="text-gray-700"
              size="w-1/2"
              borderColor={inputColor}
              placeholder="User"
              iconColor={inputTextColor}
              icon={faUser}
              value={user}
            />
            <br />
            <MayaInput
              onChange={(e) => setDepartment(e.target.value)}
              type="text"
              textColor="text-gray-700"
              size="w-1/2"
              borderColor={inputColor}
              placeholder="Department"
              iconColor={inputTextColor}
              icon={faSection}
              value={department}
            />
            <br />
            <MayaInput
              onChange={(e) => setPurchaseDate(e.target.value)}
              type="date"
              textColor="text-gray-700"
              size="w-1/2"
              borderColor={inputColor}
              placeholder="purchase Date"
              iconColor={inputTextColor}
              icon={faCalendar}
              value={purchaseDate}
            />
            <br />
            <div className="flex flex-row gap-4">
              <MayaComboBox
                onChange={(e) => setBrand(e.target.value)}
                selects="Brand"
                options={Manifacture}
                value={brand}
              />
              <MayaComboBox
                onChange={(e) => setStatus(e.target.value)}
                selects="Status"
                options={options}
                value={status}
              />
            </div>
            <br />
            <MayaInput
              onChange={(e) => setVendor(e.target.value)}
              type="text"
              textColor="text-gray-700"
              size="w-1/2"
              borderColor={inputColor}
              placeholder="Vendor"
              iconColor={inputTextColor}
              icon={faStore}
              value={vendor}
            />
            <br />
            <MayaInput
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              textColor="text-gray-700"
              size="w-1/2"
              borderColor={inputColor}
              placeholder="Price"
              iconColor={inputTextColor}
              icon={faMoneyBill}
              value={[price]}
            />
            <br />
            <MayaInput
              onChange={(e) => setType(e.target.value)}
              type="text"
              textColor="text-gray-700"
              size="w-1/3"
              borderColor={inputColor}
              placeholder="Type"
              iconColor={inputTextColor}
              icon={faSection}
              value={type}
            />
            <br />
            <MayaButton
              text={id ? "Update" : "Add"}
              size="w-1/3"
              color={buttonColor}
              htmltype="submit"
            />
          </form>
        </div>
      </div>
      <div className="w-full pr-8 ">
        <h1 className={`mb-8 text-4xl ${inputTextColor}`}>Items</h1>
        <div className="w-ful  roun ded-2xl">
          <MayaTable
            columns={tableHeader}
            data={itemInfo}
            onEdit={handleClickEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
