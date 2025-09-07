import { ArrowLeft, Truck } from "lucide-react";
import { Card } from "@/components/ui/card";

interface GridScreenProps {
  onBack: () => void;
}

const GridScreen = ({ onBack }: GridScreenProps) => {
  const services = [
    { id: 1, name: "ขยะทั่วไป", icon: "🗑️" },
    { id: 2, name: "ขยะรีไซเคิล", icon: "♻️" },
    { id: 3, name: "ขยะอันตราย", icon: "⚠️" },
    { id: 4, name: "ขยะเปียก", icon: "🥬" },
    { id: 5, name: "ขยะแห้ง", icon: "📦" },
    { id: 6, name: "ขยะอิเล็กทรอนิกส์", icon: "📱" },
    { id: 7, name: "แก้ว/กระจก", icon: "🍾" },
    { id: 8, name: "พลาสติก", icon: "🥤" },
    { id: 9, name: "กระดาษ", icon: "📄" },
    { id: 10, name: "โลหะ", icon: "🔧" },
    { id: 11, name: "ผ้า/เสื้อผ้า", icon: "👕" },
    { id: 12, name: "ขยะอื่นๆ", icon: "📦" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary p-6 flex items-center">
        <button onClick={onBack} className="mr-4">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-xl font-bold">ตรวจสอบอุปกรณ์</h1>
      </div>

      {/* Grid Content */}
      <div className="p-4">
        <div className="grid grid-cols-3 gap-3">
          {services.map((service) => (
            <Card key={service.id} className="aspect-square p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="text-3xl mb-2 bg-secondary/30 w-12 h-12 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <span className="text-xs font-medium text-foreground leading-tight">
                  {service.name}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridScreen;