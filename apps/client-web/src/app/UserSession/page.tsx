import Navbar from "@client-web/components/Navbar/navbar";
import Sidebar from "@client-web/components/Sidebar/sidebar";
import { Button } from "@client-web/components/ui/button";

export default function UserSessionPage() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <div className="flex">
                <Sidebar />

                {/* main page contents */}
                <div className="flex-1 p-6 bg-[#F5F5F5] flex flex-col items-center  ">
                    {/* title */}
                    <h2 className="text-[30px] text-center font-bold mb-4">User Session</h2>
                    {/* content */}
                    <div className="rounded-lg shadow-md max-w-sm w-full bg-white p-6">
                        <div className="py-4 px-6 ">
                            <span className="font-bold text-[20px] ">Username:</span>
                            <span className="text-[16px] ml-2">John Doe</span>
                        </div>

                        <div className="py-4 px-6 ">
                            <span className="font-bold text-[20px] ">Session ID:</span>
                            <span className="text-[16px] ml-2">session123</span>
                        </div>

                        <div className="py-4 px-6 ">
                            <span className="font-bold text-[20px] ">Status:</span>
                            <span className="text-[16px] ml-2">Active</span>
                        </div>

                        <div className="py-4 px-6 ">
                            <span className="font-bold text-[20px] ">Session Timeout:</span>
                            <span className="text-[16px] ml-2">1 year</span>
                        </div>

                        <div className="py-4 px-6 ">
                            <span className="font-bold text-[20px] ">Time Remaining:</span>
                            <span className="text-[16px] ml-2">11:20</span>
                        </div>

                        <div className="py-4 px-6 ">
                            <Button variant="destructive" className="px-5 py-2">
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}