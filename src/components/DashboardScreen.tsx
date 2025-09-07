import { Bell, Calendar, CheckCircle2, Circle } from "lucide-react";
import { Card } from "@/components/ui/card";

const DashboardScreen = () => {
  const tasks = [
    {
      id: 1,
      title: "คำขอเก็บขยะท่าทราย 207",
      date: "26 เม.ย., 2567 เวลา 12.40 น.",
      status: "completed",
      color: "bg-green-100",
    },
    {
      id: 2,
      title: "คำขอเก็บขยะท่าหนองคาสิงห์ ซอย 13",
      date: "26 เม.ย., 2567 เวลา 12.38 น.",
      status: "pending",
      color: "bg-secondary",
    },
    {
      id: 3,
      title: "คุณขำนวณขยะอันตราย",
      date: "วันนี้, เวลา 12.35 น.",
      status: "alert",
      color: "bg-accent/20",
    },
    {
      id: 4,
      title: "คุณขำนวณขยะอันตราย ครั้งที่ 2",
      date: "วันนี้, เวลา 12.33 น.",
      status: "pending",
      color: "bg-secondary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary p-6 pb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-white text-xl font-bold">รายการงานของฉัน</h1>
          <Bell className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 -mt-4">
        <div className="space-y-3">
          {tasks.map((task) => (
            <Card key={task.id} className="p-4 rounded-2xl shadow-sm">
              <div className="flex items-start space-x-3">
                <div className={`w-12 h-12 ${task.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  {task.status === "completed" ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  ) : task.status === "alert" ? (
                    <Circle className="w-6 h-6 text-accent" />
                  ) : (
                    <Calendar className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground text-sm leading-tight">
                    {task.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mt-1">
                    {task.date}
                  </p>
                </div>

                <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 ${
                  task.status === "completed" 
                    ? "bg-green-500" 
                    : task.status === "alert" 
                    ? "bg-accent" 
                    : "bg-secondary"
                }`} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;