import { Button } from "@client-web/components/ui/button";

export default function Navbar() {
    return (
        <div className="px-4 py-1.5 bg-[#2D2D2D] flex items-center justify-between border border-[#ccc]">

            {/* Left: Logo */}
            <div className="flex items-center w-57.5 gap-3 pr-4 border-r border-[#ccc]">
                <img
                    src="rpl_logo.png"
                    alt="RPL Logo"
                    className="w-[55px] h-[50px] rounded-[5px]"
                />
                <span className="text-[#A5C4A6] text-[46px] font-bold">RPL</span>
            </div>

            {/* Middle: Title */}
            <div>
                <h1 className="text-[#CDCDCD] text-[28px] font-bold">
                    Administration Module
                </h1>
            </div>

            {/* Right: User + Logout */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 px-3 py-1.5 rounded-[5px] bg-[#4C595A]">
                    <div className="rounded-full bg-[#70E7FF] w-[35px] h-[35px] flex items-center justify-center font-bold">
                        AA
                    </div>
                    <span className="text-white text-[16px]">USER NAME</span>
                </div>
                <Button variant="destructive" className="px-5 py-2">
                    Logout
                </Button>
            </div>
        </div>
    );
}
