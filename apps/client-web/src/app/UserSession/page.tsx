import Navbar from "@client-web/components/Navbar/navbar";
import Sidebar from "@client-web/components/Sidebar/sidebar";

export default function UserSessionPage() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <div className="flex">
                <Sidebar/>
            </div>
        </div>
    );
}