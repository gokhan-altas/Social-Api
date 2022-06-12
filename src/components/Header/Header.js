import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-gray-400 p-4 relative header">
      <Link to="/">
        <img
          src="https://media-exp1.licdn.com/dms/image/D4E03AQGs7gcfDhhBsg/profile-displayphoto-shrink_800_800/0/1646845491801?e=1660780800&v=beta&t=ON6dWtMFf-pZplWbyOZrRpyj9R7kZS0n3tWO6vB0PJI"
          className=" rounded-full h-20 border inline"
        />
      </Link>
      <Link to="/" className="absolute left-2/4 logo">
        <img
          src="https://marka-logo.com/wp-content/uploads/2020/04/Instagram-Logo.png"
          className="w-28 inline"
        />
      </Link>
      <nav>
        <section className=" flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/" onClick={() => setIsNavOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/users" onClick={() => setIsNavOpen(false)}>
                  Contact
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="" onClick={() => setIsNavOpen(false)}>
                  DM
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex mx-8">
          <li>
            <Link to="/" onClick={() => setIsNavOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/users" onClick={() => setIsNavOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="" onClick={() => setIsNavOpen(false)}>
              DM
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
