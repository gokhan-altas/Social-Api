import React from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function UserDetails() {
  const { userId } = useParams();

  const [user, setUser] = useState();
  useEffect(() => {
    const options = {
      headers: { "app-id": "62a3420f9659ae5fc3b9df4c" },
    };
    const getData = async () => {
      await axios
        .get("https://dummyapi.io/data/v1/user/" + userId, options)
        .then((res) => {
          console.log(res.data + userId);
          setUser(res.data);
        });
    };
    getData();
  }, []);

  return (
    <div className="bg-gray-200  flex flex-wrap flex-col items-center min-w-screen p-5">
      {console.log(user)}

      {user && (
        <div className="mb-16 ">
          <div className="bg-white rounded shadow p-4 overflow-hidden flex md:flex-row flex-col">
            <div className="flex-grow">
              <div className="truncate"></div>
              <img src={user.picture} className="h-60 w-60 py-1 p-3" />
              <br />
              <b>
                <h1 className="p-3">
                  {user.title + " " + user.firstName + " " + user.lastName}
                </h1>
              </b>
            </div>
            <div className="flex-grow py-1 p-3">
              <div className="font-semibold text-lg truncate"></div>
              <div className="truncate">
                <b>Gender:</b> {user.gender}
              </div>
              <div className="truncate">
                <b>Date of birth:</b> {user.dateOfBirth}
              </div>
              <div className="truncate">
                <b>Register date:</b> {user.registerDate}
              </div>
              <br />
              <div className="truncate">
                <b>Email:</b> {user.email}
              </div>
              <div className="truncate">
                <b>Phone:</b> {user.phone}
              </div>

              <div className="flex-grow">
                <b>Address</b>
                <div className="truncate">
                  <b>State:</b> {user.location.state}
                </div>
                <div className="truncate">
                  <b>Street:</b> {user.location.street}
                </div>
                <div className="truncate">
                  <b>City:</b> {user.location.city}
                </div>
                <div className="truncate">
                  <b>Country:</b> {user.location.country}
                </div>
                <div className="truncate">
                  <b>Timezone:</b> {user.location.timezone}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
