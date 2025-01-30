import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const DarkModeSwitch = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial dark mode preference
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="fixed top-4 right-4">
      <Button
        onClick={toggleDarkMode}
        variant="outline"
        size="icon"
        className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-ios-darkGray dark:text-white" />
        ) : (
          <Sun className="h-4 w-4 text-ios-darkGray dark:text-white" />
        )}
      </Button>
    </div>
  );
};

export default DarkModeSwitch;