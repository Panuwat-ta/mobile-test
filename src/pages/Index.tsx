import { useState } from "react";
import LoginScreen from "@/components/LoginScreen";
import DashboardScreen from "@/components/DashboardScreen";
import GridScreen from "@/components/GridScreen";
import ProfileScreen from "@/components/ProfileScreen";
import ChatScreen from "@/components/Notifications";
import BottomNavigation from "@/components/BottomNavigation";
import AddTaskScreen from "@/components/AddTaskScreen";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("dashboard");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
  };

  const handleBack = () => {
    setCurrentScreen("dashboard");
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case "dashboard":
        return <DashboardScreen />;
      case "grid":
        return <GridScreen onBack={handleBack} />;
      case "profile":
        return <ProfileScreen onBack={handleBack} />;
      case "chat":
        return <ChatScreen onBack={handleBack} />;
      case "add":
       return <AddTaskScreen
               onBack={handleBack}
               onSubmit={(task) => {
                 console.log("เพิ่มงาน:", task);
                 handleNavigate("dashboard");
               }}
             />;
      default:
        return <DashboardScreen />;
    }
  };

  return (
    <div className="relative min-h-screen bg-background">
      <div className="pb-16"> {/* Add padding bottom for navigation */}
        {renderScreen()}
      </div>
      <BottomNavigation currentScreen={currentScreen} onNavigate={handleNavigate} />
    </div>
  );
};

export default Index;
