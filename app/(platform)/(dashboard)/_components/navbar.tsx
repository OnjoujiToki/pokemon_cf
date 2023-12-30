import {Plus} from "lucide-react"

import {Logo} from "@/components/logo";
import {Button} from "@/components/ui/button";
import {OrganizationSwitcher, UserButton} from "@clerk/nextjs";
import {MobileSidebar} from "@/app/(platform)/(dashboard)/_components/mobileSidebar";
import {ConnectHandleButton} from "@/app/(platform)/(dashboard)/_components/connectHandle";

const Navbar = () => {
    return (
        <nav className={"fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center"}>
            <MobileSidebar/>
            <div className={"md:max-w-screen-2xl mx-auto flex items-center w-full justify-between"}>
                <div className={"hidden md:flex"}>
                    <Logo/>
                </div>
                <div className="rounded-sm hidden md:block h-auto  py-1.5 px-2 mr-4">
                    <ConnectHandleButton/>
                </div>
                <div className={"rounded-sm block md:hidden"}>
                   <ConnectHandleButton/>
                </div>



            </div>
            <div className={"ml-auto flex items-center gap-x-2"}>
                <OrganizationSwitcher
                    hidePersonal
                    afterCreateOrganizationUrl="/teams/:id"
                    afterLeaveOrganizationUrl="/select-team"
                    afterSelectOrganizationUrl="/team/:id"
                    appearance={{
                        elements: {
                            rootBox: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            },
                        },
                    }}
                />
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

export {Navbar};