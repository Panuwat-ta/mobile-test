import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

interface NotificationScreenProps {
  onBack: () => void;
}

const NotificationScreen = ({ onBack }: NotificationScreenProps) => {
  const notifications = [
    {
      id: 1,
      title: "งานใหม่: ทำความสะอาดห้องประชุมชั้น 3",
      description: "จะครบกำหนดภายใน 1 ชั่วโมง",
      status: "unread",
    },
    {
      id: 2,
      title: "ข่าวสาร/ประกาศ: การประชุมประจำเดือน",
      description: "“มีการอัปเดตนโยบายการจัดการขยะของอาคาร”",
      status: "read",
    },
    {
      id: 3,
      title: "งานใหม่: ทำความสะอาดห้องประชุมชั้น 3",
      description: "จะครบกำหนดภายใน 1 ชั่วโมง",
      status: "read",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-primary p-6 flex items-center">
        <button onClick={onBack} className="mr-4">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-xl font-bold">แจ้งเตือน</h1>
      </div>

      {/* Tabs */}
      <div className="flex space-x-3 p-4">
        <button className="px-4 py-2 bg-white rounded-full shadow text-sm font-medium">
          ทั้งหมด 3
        </button>
        <button className="px-4 py-2 bg-white rounded-full shadow text-sm font-medium">
          ยังไม่ได้อ่าน 1
        </button>
        <button className="px-4 py-2 bg-white rounded-full shadow text-sm font-medium">
          อ่านแล้ว 2
        </button>
      </div>

      {/* Notifications */}
      <div className="flex-1 p-4 space-y-4">
        {notifications.map((item) => (
          <Card
            key={item.id}
            className="p-4 rounded-2xl shadow-md flex flex-col space-y-2"
          >
            <p className="font-semibold text-orange-500">{item.title}</p>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NotificationScreen;
