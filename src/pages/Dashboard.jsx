import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AddFeeds from "../components/AddFeeds";
import { useNavigate } from "react-router-dom";
import ShowFeeds from "../components/ShowFeeds";
// import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const navigate = useNavigate();

 localStorage.setItem("user", JSON.stringify(user));
const getUser = JSON.parse(localStorage.getItem("user"));





const handleLogout = () => {
  localStorage.removeItem("user");
  navigate("/");
  // window.location.reload();
}
useEffect(() => {
  if (getUser === null) {
    navigate("/");
 } else {
  navigate("/dashboard");
 }
}, [user])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Header Section */}
      <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-lg rounded-b-xl">
        <div className="text-lg font-bold text-gray-800 dark:text-white tracking-tight">
          Chat <span className="text-blue-600">Book</span>
        </div>
            <div className="text-xs sm:text-sm md:text-base font-medium text-gray-600 dark:text-gray-300">Welcome {getUser} </div>
        <div>
            <button className="btn flex justify-center  items-center  bg-red-500 text-xs w-auto p-2 h-6  text-white hover:bg-red-400 " onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md animate-in">
          <AddFeeds />
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <ShowFeeds />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
