import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-ios-lightGray dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-ios-darkGray dark:text-white">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 text-sm text-primary hover:bg-ios-lightGray dark:hover:bg-gray-700 rounded-xl transition-colors duration-200"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-ios-darkGray dark:text-white mb-4">Welcome back!</h2>
          <p className="text-ios-coolGray dark:text-gray-400">
            This is your dashboard. Start adding your content here.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;