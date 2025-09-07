import { ArrowLeft, Camera } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ProfileScreenProps {
  onBack: () => void;
}

const ProfileScreen = ({ onBack }: ProfileScreenProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary p-6 flex items-center">
        <button onClick={onBack} className="mr-4">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-xl font-bold">ข้อมูลพนักงาน</h1>
      </div>

      {/* Profile Content */}
      <div className="p-6">
        <Card className="p-6 rounded-2xl">
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
              </div>
              <button className="absolute -bottom-1 -right-1 bg-secondary p-2 rounded-full">
                <Camera className="w-4 h-4 text-secondary-foreground" />
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                ชื่อ-นามสกุล
              </label>
              <Input
                defaultValue="นนท์ ธัญญะเดช"
                className="rounded-xl border-input h-12"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                ตำแหน่งงาน
              </label>
              <Input
                defaultValue="พนักงาน"
                className="rounded-xl border-input h-12"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                หมายเลขโทรศัพท์
              </label>
              <Input
                defaultValue="081-XXX-XXXX"
                className="rounded-xl border-input h-12"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                อีเมล
              </label>
              <Input
                defaultValue="somchai@ยeework.com"
                className="rounded-xl border-input h-12"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                สาขาของงาน
              </label>
              <Input
                defaultValue="แขวงบางรัก-ธัดทราย"
                className="rounded-xl border-input h-12"
              />
            </div>

            <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl h-12 mt-8">
              บันทึกข้อมูล
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfileScreen;