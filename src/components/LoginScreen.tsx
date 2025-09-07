import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Shield } from "lucide-react";

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen = ({ onLogin }: LoginScreenProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("arailaaa@gmail.com");
  const [password, setPassword] = useState("••••••••");

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="bg-white/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-white text-2xl font-bold">เข้าสู่ระบบ</h1>
          <p className="text-white/80 text-sm mt-2">กรุณาเข้าสู่ระบบเพื่อดำเนินการต่อ</p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-1">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-0 bg-transparent text-base h-12"
              placeholder="อีเมล"
            />
          </div>

          <div className="bg-white rounded-2xl p-1 relative">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-0 bg-transparent text-base h-12 pr-12"
              placeholder="รหัสผ่าน"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-muted-foreground" />
              ) : (
                <Eye className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
          </div>

          <div className="flex items-center space-x-2 mt-4">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="text-white text-sm">
              จดจำฉัน
            </label>
            <div className="ml-auto">
              <a href="#" className="text-white/80 text-sm underline">
                ลืมรหัสผ่าน?
              </a>
            </div>
          </div>

          <Button
            onClick={onLogin}
            className="w-full bg-white text-primary hover:bg-white/90 rounded-2xl h-12 text-base font-medium mt-8"
          >
            เข้าสู่ระบบ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;