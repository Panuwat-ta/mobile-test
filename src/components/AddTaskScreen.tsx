import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

interface AddTaskScreenProps {
  onBack: () => void;
  onSubmit: (task: { title: string; description: string }) => void;
}

const AddTaskScreen = ({ onBack, onSubmit }: AddTaskScreenProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) return; // เช็ค title ว่าง
    onSubmit({ title, description });
    setTitle("");
    setDescription("");
    onBack(); // กลับไปหน้าเดิม
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-primary p-6 flex items-center">
        <button onClick={onBack} className="mr-4">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-xl font-bold">รายงานการส่งงาน</h1>
      </div>

      {/* Form */}
      <div className="p-4 flex-1">
        <Card className="p-4 rounded-2xl space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">ชื่องาน</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="กรอกชื่องาน"
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">รายละเอียดงาน</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="รายละเอียดเพิ่มเติม"
              className="w-full p-2 border rounded h-24 resize-none"
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              onClick={onBack}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              ยกเลิก
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-primary text-white rounded"
            >
              ส่ง
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AddTaskScreen;
