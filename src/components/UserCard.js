import React from "react";
import { useNavigate } from "react-router-dom";

function UserCard({ picture: imageUrl, firstName, lastName, id }) {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate("/userdetails/" + id);
  };

  return (
    <div className="w-full cursor-pointer" onClick={() => handleCardClick(id)}>
      <div className="mb-3">
        <div className="bg-white rounded shadow p-4 overflow-hidden flex gap-3 items-center">
          <div className="w-20 rounded-full">
            <img
              src={imageUrl}
              className="max-w-full rounded-full"
              alt="User Picture"
            />
          </div>
          <div className="flex flex-col gap-2 flex-grow">
            <p>
              <b>First Name : </b> {firstName}
            </p>
            <p>
              <b>Last Name : </b> {lastName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
