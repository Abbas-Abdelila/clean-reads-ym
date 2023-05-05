import {
  mediumLogo,
  notificationIcon,
  profileIcon,
  searchIcon,
  writeBlogIcon,
} from "../../../../public/icons/icons";

const NavbarAuth = () => {
  return (
    <nav className="px-10 md:px-20 py-2 flex justify-between items-center  border-gray-200 border-b ">
      <div className="flex items-center space-x-4">
        <div className="cursor-pointer">{mediumLogo}</div>
        <div className="flex items-center space-x-2 bg-gray-100 rounded-3xl px-2 py-1 text-sm text-gray-500 ">
          <div className="cursor-pointer">{searchIcon}</div>
          <input
            placeholder="Search Medium"
            className="bg-gray-100 py-1 px-2 focus:outline-none"
          ></input>
        </div>
      </div>
      <div className="flex items-center space-x-4 text-gray-500">
        <div className="flex items-center space-x-1 cursor-pointer">
          {writeBlogIcon}
          <span className="text-sm text-gray-500">Write</span>
        </div>
        <div className="cursor-pointer">{notificationIcon}</div>
        <div className="p-2 border rounded-full cursor-pointer">{profileIcon}</div>
      </div>
    </nav>
  );
};

export default NavbarAuth;
