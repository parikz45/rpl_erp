import Navbar from "@client-web/components/Navbar/navbar";
import Sidebar from "@client-web/components/Sidebar/sidebar";
import { Button } from "@client-web/components/ui/button";

export default function sidebar() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <div className="flex">
                <Sidebar />
                
                {/* main page contents */}
                <div className="flex-1 p-6 bg-[#F5F5F5] flex flex-col items-center ">
                    {/* title */}
                    <h2 className="text-[30px] text-center font-bold mb-4">Permission Management</h2>
                    
                    {/* content */}
                    <div className="rounded-lg shadow-md max-w-sm w-full bg-white p-6">
                        <div className="flex flex-col gap-4">
                            <span>Define new permission</span>
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Enter permission name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <Button variant="default" className="ml-2 px-4 py-2">
                                    Add Permission
                                </Button>
                            </div>
                            <div>
                                <span className="font-bold text-[20px]">Existing Permissions:</span>
                                <ul className="list-disc pl-5 mt-2">
                                    <li>Permission 1</li>
                                    <li>Permission 2</li>
                                    <li>Permission 3</li>
                                </ul>
                            </div>
                        </div>

                        

                        {/* <div className="py-4 px-6 ">
                            <Button variant="secondary" className="px-5 py-2">
                                Save Changes
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}