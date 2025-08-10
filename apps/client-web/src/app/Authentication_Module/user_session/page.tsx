import { Button } from "@client-web/components/ui/button";
import AuthenticationModuleLayout from "../AuthenticationModuleLayout";

export default function UserSessionPage() {
    return (
        <AuthenticationModuleLayout>

            {/* notifications page main content */}
            <div className="flex-1 flex flex-col items-center  ">
                {/* title */}
                <h2 className="text-[36px] text-center font-bold mb-4">User Session</h2>
                {/* content */}
                <div className="max-w-sm w-full bg-white p-6">
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
                        <Button
                            className="font-serif text-[20px] h-[40px]"
                            variant="destructive"
                            size="lg"
                            
                        >
                            Logout
                        </Button>
                    </div>
                </div>
            </div>

        </AuthenticationModuleLayout>
    );
}
