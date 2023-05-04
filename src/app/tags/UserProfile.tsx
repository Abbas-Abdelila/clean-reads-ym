import Image from "next/image";

const UserProfile = () => {
  return (
    <div className="hidden sm:flex space-x-4 items-center">
      <div className="hidden profile-picture md:flex">
        <Image
          src="/images/Mike-Greenwood.jpg"
          width={50}
          height={50}
          alt="profile picture"
          className="hidden md:flex rounded-full"
        />
      </div>
      <div className="sm:flex flex-col items-start">
        <p className="text-sm sm:text-md md:text-lg font-semibold">Au Chang</p>
        <p className="hidden text-sm xl:flex md:text-lg  text-gray-600 font-light">
          I love observing and writing
        </p>
      </div>
      <div>
        <button className="hidden sm:flex sm:text-sm border bg-green-500 text-white py-1 px-3 rounded-2xl">
          Follow
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
