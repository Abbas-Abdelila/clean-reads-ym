import UserProfile from "./UserProfile";

const TopWriters = () => {
  return (
    <div className="hidden sm:flex flex-col space-y-4 mt-16">
      <h1 className="text-xl font-semibold">Top Writers</h1>
      <UserProfile />
      <UserProfile />
      <UserProfile />
    </div>
  );
};

export default TopWriters;
