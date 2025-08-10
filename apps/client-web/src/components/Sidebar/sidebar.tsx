import { CircleUserRound, FileSearch2, History, KeyRound, MonitorSmartphone, UserRoundCog, Users } from "lucide-react";

export default function sidebar() {
    return (
        <div className="flex flex-col w-62 h-screen bg-[#2D2D2D] text-white border border-[#ccc]">
            <div className="flex items-center px-[12px] h-16 cursor-pointer hover:bg-[#3A3A3A]">
                <MonitorSmartphone />
                <span className="text-[16px] ml-2">User session</span>
            </div>

            <div className="flex items-center px-[12px] h-16 cursor-pointer hover:bg-[#3A3A3A]">
                <CircleUserRound />
                <span className="text-[16px] ml-2">Profile</span>
            </div>

            <div className="flex items-center px-[12px] h-16 cursor-pointer hover:bg-[#3A3A3A]">
                <CircleUserRound />
                <span className="text-[16px] ml-2">Role management</span>
            </div>

            <div className="flex items-center px-[12px] h-16 cursor-pointer hover:bg-[#3A3A3A]">
                <KeyRound />
                <span className="text-[16px] ml-2">Permission management</span>
            </div>

            <div className="flex items-center px-[12px] h-16 cursor-pointer hover:bg-[#3A3A3A]">
                <UserRoundCog />
                <span className="text-[16px] ml-2">User Adminstration</span>
            </div>

            <div className="flex items-center px-[12px] h-16 cursor-pointer hover:bg-[#3A3A3A]">
                <Users />
                <span className="text-[16px] ml-2">Impersonation</span>
            </div>

            <div className="flex items-center px-[12px] h-16 cursor-pointer hover:bg-[#3A3A3A]">
                <FileSearch2 />
                <span className="text-[16px] ml-2">Audit Log</span>
            </div>

            <div className="flex items-center px-[12px] h-16 cursor-pointer hover:bg-[#3A3A3A]">
                <History />
                <span className="text-[16px] ml-2">Session management</span>
            </div>
        </div>
    );
}