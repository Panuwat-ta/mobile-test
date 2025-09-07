import { Home, Search, Plus, MessageSquare, User } from "lucide-react";

interface BottomNavigationProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

const BottomNavigation = ({ currentScreen, onNavigate }: BottomNavigationProps) => {
  const navItems = [
    { id: "dashboard", icon: Home, label: "หน้าหลัก" },
    { id: "grid", icon: Search, label: "อุปกรณ์" },
    { id: "add", icon: Plus, label: "เพิ่มงาน", isSpecial: true },
    { id: "chat", icon: MessageSquare, label: "แจ้งเตือน" },
    { id: "profile", icon: User, label: "บัญชี" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          
          if (item.isSpecial) {
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="flex flex-col items-center py-2 px-4"
              >
                <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center mb-1">
                  <Icon className="w-6 h-6 text-secondary-foreground" />
                </div>
              </button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center py-2 px-4 ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className={`w-6 h-6 mb-1 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;