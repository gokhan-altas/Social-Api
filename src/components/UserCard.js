import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// <div className="p-4 w-3/5" onClick={() => handleCardClick(ownerId)}>
function UserCard({ pTitle, src, name, surname, mail, ownerId }) {
  const navigate = useNavigate();
  const [proId, setProId] = useState([]);
  const handleCardClick = (id) => {
    setProId(id);
    console.log(id);
    navigate("/userdetails/" + id);
  };
  return (
    <div
      className="w-full cursor-pointer"
      onClick={() => handleCardClick(ownerId)}
    >
      <div className="mb-3">
        <div className="bg-white rounded shadow p-4 overflow-hidden flex gap-3 items-center">
          <div className="w-20 rounded-full">
            <img src={src} className="max-w-full rounded-full" />
          </div>
          <div className="flex flex-col gap-2 flex-grow">
            <p>
              <b>First Name : </b> {name}
            </p>
            <p>
              <b>Last Name : </b> {surname}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
