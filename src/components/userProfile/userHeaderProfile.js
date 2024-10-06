import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import { MdOutlineVerified } from "react-icons/md";

export default function UserHeaderProfile({ Profile }) {
  const { logoutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
     <div className="flex items-center space-x-2">
      <p className="text-white">{Profile.user_metadata.full_name} </p>
      <div className="relative">
        <img
          onClick={toggleDropdown}
          src={Profile.user_metadata.avatar_url}
          className="w-8 h-8 rounded-full cursor-pointer"
          alt="User avatar"
        />
        <MdOutlineVerified 
          className="absolute top-1 -right-2 transform translate-x-1/2 -translate-y-1/2"
          color="grey"
          size={16} 
        />
      </div>
    </div>
      {isOpen && (
        <div className="absolute z-10 right-0 mt-2 w-48 bg-primary-dark border border-primary-light rounded-lg shadow-lg">
          <ul className="py-1">
            {/* <li>
              <a
                href="#profile"
                className="block px-4 py-2 text-white hover:bg-secondary-dark rounded-md"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#settings"
                className="block px-4 py-2 text-white hover:bg-secondary-dark rounded-md"
              >
                Settings
              </a>
            </li> */}
            <li>
              <button
                onClick={logoutUser}
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 rounded-md"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
