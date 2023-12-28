
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./theme-toggle";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
    return ( 
        <div className="flex items-center p-4">
            <MobileSidebar />
            <div className="flex w-full items-center justify-between">
                <div className="flex w-full justify-end px-5">
                    <UserButton afterSignOutUrl="/" />
                </div>
                <ModeToggle />
            </div>
        </div>
     );
}
 
export default Navbar;