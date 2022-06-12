import React from "react";
import PostCard from "./PostCard";
import axios from "axios";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function Post() {
  const [page, setPage] = useState(10);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const getMoreData = () => {
    setPage(page + 10);
  };

  useEffect(() => {
    const fetchData = () => {
      const options = {
        headers: { "app-id": "62a3420f9659ae5fc3b9df4c" },
      };
      axios
        .get(`https://dummyapi.io/data/v1/post?limit=${page}`, options)
        .then((response) => {
          if (page === 30) {
            setHasMore(false);
          }
          setData(response.data.data);
        });
    };

    fetchData();
  }, [page]);

  const handleSearch = (event) => {
    if (event.target.value.length > 2) {
      let filtered = data.filter(
        (f) =>
          f.owner.firstName
            .toLowerCase()
            .includes(event.target.value.toLocaleLowerCase().trim()) ||
          f.owner.lastName
            .toLowerCase()
            .includes(event.target.value.toLocaleLowerCase().trim()) ||
          f.tags.includes(event.target.value.toLocaleLowerCase().trim()) ||
          f.text
            .toLowerCase()
            .includes(event.target.value.toLocaleLowerCase().trim())
      );
      setFilteredData(filtered);
    }

    if (event.target.value.length === 0) {
      setFilteredData([]);
    }
  };

  return (
    <div
      className="flex flex-wrap flex-col items-center bg-gray-200 min-w-screen p-5"
      id="scrollableDiv"
    >
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-100 text-gray-300 placeholder-gray-400 
          focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out max-w-lg h-14"
        placeholder="Search"
        onChange={handleSearch}
      />
      <InfiniteScroll
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
            <PostCard
              key={index}
              id={item.id}
              src={item.image}
              avatar={item.owner.picture}
              name={item.owner.firstName + " " + item.owner.lastName}
              date={item.publishDate}
              desc={item.text}
              likes={item.likes}
              tag={item.tags}
              ownerId={item.owner.id}
            />
          ))}

        {filteredData.length === 0 &&
          data.map((item, index) => (
            <PostCard
              key={index}
              id={item.id}
              src={item.image}
              avatar={item.owner.picture}
              name={item.owner.firstName + " " + item.owner.lastName}
              date={item.publishDate}
              desc={item.text}
              likes={item.likes}
              tag={item.tags}
              ownerId={item.owner.id}
            />
          ))}
      </InfiniteScroll>
    </div>
  );
}

export default Post;
