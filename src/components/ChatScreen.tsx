import { ArrowLeft, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ChatScreenProps {
  onBack: () => void;
}

const ChatScreen = ({ onBack }: ChatScreenProps) => {
  const messages = [
    {
      id: 1,
      text: "กรุณาปิดใน ข้อมูลแรงงานที่ทำงาน สรุปคณะทำการต่างๆ ที่ส",
      time: "9:41",
      isSent: false,
      isSystem: true,
    },
    {
      id: 2,
      text: "ขุ่นครับผม ขาวนักงานเสมอมา เค้าบารมีให้อิม จบแล้ว",
      time: "9:41",
      isSent: true,
    },
    {
      id: 3,
      text: "กรุณาปิดใน ข้อมูลแรงงานที่ทำงาน สรุปคณะทำการต่างๆ ที่ส",
      time: "9:41",
      isSent: false,
      isSystem: true,
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

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[80%] ${message.isSent ? "order-1" : "order-2"}`}>
              <Card
                className={`p-3 rounded-2xl ${
                  message.isSent
                    ? "bg-primary text-white rounded-tr-md"
                    : message.isSystem
                    ? "bg-secondary text-secondary-foreground rounded-tl-md"
                    : "bg-card text-card-foreground rounded-tl-md"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </Card>
              <div className={`text-xs text-muted-foreground mt-1 ${
                message.isSent ? "text-right" : "text-left"
              }`}>
                {message.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center space-x-3">
          <Input
            placeholder="พิมพ์ข้อความ..."
            className="flex-1 rounded-full border-input h-12 px-4"
          />
          <Button size="icon" className="rounded-full w-12 h-12 bg-primary">
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;