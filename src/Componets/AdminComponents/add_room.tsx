import React, { useState } from "react";
import "../../../src/css/add_room.css";

interface FormData {
  roomNumber: string;
  city: string;
  area: string;
  pincode: string;
  price: string;
}

const AddRoom: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    roomNumber: "",
    city: "",
    area: "",
    pincode: "",
    price: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Room data submitted:", formData);
  };

  return (
    <div className="add-room-container">
      <button className="close-button">&times;</button>
      <h2>Add Room</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Room Number:
          <input
            type="text"
            name="roomNumber"
            value={formData.roomNumber}
            onChange={handleChange}
            placeholder="Enter room number"
          />
        </label>

        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter city"
          />
        </label>

        <label>
          Area:
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="Enter area"
          />
        </label>

        <label>
          Pincode:
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Enter pincode"
          />
        </label>

        <label>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
          />
        </label>

        <button type="submit">Add Room</button>
      </form>
    </div>
  );
};

export default AddRoom;
