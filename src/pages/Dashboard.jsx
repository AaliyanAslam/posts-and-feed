import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AddFeeds from "../components/AddFeeds";
import ShowFeeds from "../components/showFeeds";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const navigate = useNavigate();

 localStorage.setItem("user", JSON.stringify(user));
const getuser = JSON.parse(localStorage.getItem("user"));

const handleLogout = () => {
  localStorage.removeItem("user");
  window.location.reload();
}
useEffect(() => {
  if (getuser === null) {
    navigate("/");
 } else {
  navigate("/dashboard");
 }
}, [user])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Header Section */}
      <header className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 shadow-lg rounded-b-xl">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white tracking-tight">
          Dashboard
        </h1>
        <div className="flex items-center space-x-4">
          <span className="text-lg font-medium text-gray-600 dark:text-gray-300">
            Welcome, {getuser} 
            <button onClick={handleLogout}>Logout</button>
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Add Feeds Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md animate-in">
          <AddFeeds />
        </div>

        {/* Feeds Display Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <ShowFeeds />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
