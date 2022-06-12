import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

function User() {
  const [user, setUser] = useState([]);

  const [number, setNumber] = useState(10);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchData();
  }, [number]);

  const fetchData = () => {
    const options = {
      headers: { "app-id": "62a3420f9659ae5fc3b9df4c" },
    };
    axios
      .get(`https://dummyapi.io/data/v1/user?limit=${number}`, options)
      .then((response) => {
        if (number == 30) {
          setHasMore(false);
        }

        setData(response.data.data);

        //Array.prototype.push.apply(data, response.data.data);
        // setData(data);
      });
  };

  const getMoreData = () => {
    setNumber(number + 10);
  };

  console.log(number);

  const handleSearch = (event) => {
    if (event.target.value.length > 2) {
      let filtered = data.filter(
        (f) =>
          f.firstName
            .toLowerCase()
            .includes(event.target.value.toLocaleLowerCase().trim()) ||
          f.lastName
            .toLowerCase()
            .includes(event.target.value.toLocaleLowerCase().trim())
      );
      setFilteredData(filtered);
    }

    if (event.target.value.length == 0) {
      setFilteredData([]);
    }
  };

  return (
    <div class="flex flex-wrap flex-col items-center bg-gray-200 min-w-screen p-5">
      <input
        type="text"
        class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-100 text-gray-300 placeholder-gray-400 
            focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out max-w-lg h-14"
        placeholder="Search"
        onChange={handleSearch}
      />

      <div className="max-w-lg w-full ">
        {/* <div className="flex flex-wrap flex-col items-center bg-gray-200 min-w-screen p-5"> */}
        <div className="flex flex-wrap flex-col items-center bg-gray-200 min-w-screen py-5 w-full post">
          <InfiniteScroll
            className="w-full"
            dataLength={data.length}
            next={getMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {filteredData.length > 0 &&
              filteredData.map((item, index) => (
                <UserCard
                  key={index}
                  ownerId={item.id}
                  pTitle={item.title}
                  src={item.picture}
                  name={item.firstName}
                  surname={item.lastName}
                />
              ))}

            {filteredData.length == 0 &&
              data.map((item, index) => (
                <UserCard
                  key={index}
                  ownerId={item.id}
                  pTitle={item.title}
                  src={item.picture}
                  name={item.firstName}
                  surname={item.lastName}
                />
              ))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

export default User;
