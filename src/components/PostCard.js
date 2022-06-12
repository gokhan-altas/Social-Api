import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import normalizeISODateD from "../utils/formatDate";

function PostCard({ id, avatar, src, name, date, desc, likes, tag, ownerId }) {
  const navigate = useNavigate();
  const [proId, setProId] = useState([]);
  const handleCardClick = (id) => {
    setProId(id);
    console.log(id);
    navigate("/userdetails/" + id);
  };

  return (
    <div className="max-w-lg">
      <div className="border my-7 bg-white rounded-md">
        {/* <!-- Post Header --> */}

        <div className="flex items-center p-5">
          <a href="#">
            <img
              className="h-12 rounded-full border p-1 mr-3"
              src={avatar}
              alt="user-image"
              onClick={() => handleCardClick(ownerId)}
            />
          </a>
          <p
            className="flex-1 font-bold cursor-pointer"
            onClick={() => handleCardClick(ownerId)}
          >
            {name}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </div>

        {/* Post Image */}
        <a>
          <img className="w-full object-cover" src={src} />
        </a>

        {/* Post buttons */}

        <div className="flex flex-col p-4 gap-3 ">
          <div className="flex flex-row gap-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              ></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              ></path>
            </svg>
          </div>
        </div>

        <span className="font-bold mr-2 p-4 cursor-pointer">
          {likes + " Likes"}
        </span>

        <p className="font-bold p-5 cursor-pointer">
          {"#" + tag[0] + " #" + tag[1] + " #" + tag[2]}
        </p>

        <p className="p-5 ">
          <span
            className="font-bold mr-2 cursor-pointer "
            onClick={() => handleCardClick(ownerId)}
          >
            {name}
          </span>
          {desc}
        </p>
        <p className="p-5 text-gray-400">{normalizeISODateD(date)}</p>

        {/* <!-- Post input box --> */}

        <form className="flex items-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <input
            className="border-none flex-1 focus:ring-0"
            type="text"
            placeholder="Enter your comment"
          />
          <button className="font-bold text-blue-400">Post</button>
        </form>
      </div>
    </div>
  );
}

export default PostCard;
