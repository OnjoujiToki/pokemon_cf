import {Plus} from "lucide-react"

import {Logo} from "@/components/logo";
import {Button} from "@/components/ui/button";
import {OrganizationSwitcher, UserButton} from "@clerk/nextjs";


const Navbar = () => {
    return (
        <nav className={"fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center"}>
            <div className={"md:max-w-screen-2xl mx-auto flex items-center w-full justify-between"}>
                <div className={"hidden md:flex"}>
                    <Logo/>
                </div>

                <Button size={"sm"} className={"rounded-sm block md:hidden"}>
                    <Plus className="h-4 w-4"/>
                </Button>
            </div>
            <div className={"ml-auto flex items-center gap-x-2"}>

                <div className={"mr-2"}>
                    <UserButton
                        afterSignOutUrl={"/"}
                        //afterSignInUrl={"/dashboard"}
                        appearance={
                            {
                                elements: {
                                    avatarBox: {
                                        height: "30px",
                                        width: "30px",
                                    },
                                },
                            }
                        }
                    />
                </div>
            </div>

        </nav>
    )
}

export default Navbar;