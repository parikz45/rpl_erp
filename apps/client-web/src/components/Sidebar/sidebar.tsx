import { CircleUserRound, FileSearch2, History, KeyRound, MonitorSmartphone, UserRoundCog, Users } from "lucide-react";
import { Button } from "../ui/button";

export default function sidebar() {
    return (
        <div className="flex flex-col w-62 h-screen bg-[#2D2D2D] text-white border border-[#ccc]">

            {/* User session */}
            <div className="flex items-center px-[12px] h-16 cursor-pointer hover:bg-[#3A3A3A]">
                <MonitorSmartphone />
                <span className="text-[15px] ml-2">User session</span>
            </div>

            {/* Profile */}
            <div className="flex items-center px-[12px] h-16 cursor-pointer hover:bg-[#3A3A3A]">
                <CircleUserRound />
                <span className="text-[16px] ml-2">Profile</span>
            </div>

            {/* Role management */}
            <div className="flex items-center px-[12px] h-16 cursor-pointer hover:bg-[#3A3A3A]">
                <CircleUserRound />
                <span className="text-[16px] ml-2">Role management</span>
            </div>

            {/* Permission management */}
            <div className="flex items-center px-[12px] h-16 cursor-pointer hover:bg-[#3A3A3A]">
                <KeyRound />
                <span className="text-[16px] ml-2">Permission management</span>
            </div>

            {/* User Administration */}
            <div className="flex items-center px-[12px] h-16 cursor-pointer hover:bg-[#3A3A3A]">
                <UserRoundCog />
                <span className="text-[16px] ml-2">User Adminstration</span>
            </div>

            {/* Impersonation */}
            <div className="flex items-center px-[12px] h-16 cursor-pointer hover:bg-[#3A3A3A]">
                <Users />
                <span className="text-[16px] ml-2">Impersonation</span>
            </div>

            {/* audit log */}
            <div className="flex items-center px-[12px] h-16 cursor-pointer hover:bg-[#3A3A3A]">
                <FileSearch2 />
                <span className="text-[16px] ml-2">Audit Log</span>
            </div>

            {/* session management */}
            <div className="flex items-center px-[12px] h-16 cursor-pointer hover:bg-[#3A3A3A]">
                <History />
                <span className="text-[16px] ml-2">Session management</span>
            </div>

            <Button variant="destructive" className="w-30 mt-[20px] mx-[50px] px-2 py-2">
                ← Back
            </Button>
        </div>
    );
}