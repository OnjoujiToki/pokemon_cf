import {Plus} from "lucide-react"

import {Logo} from "@/components/logo";
import {Button} from "@/components/ui/button";
import {OrganizationSwitcher, UserButton} from "@clerk/nextjs";


const Navbar = () => {
    return (
        <nav className={"fixed z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center"}>
            {/*TODO: Mobile SideBar*/}
            <div className={"flex items-center gap-x-4"}>
                <div className={"hidden md:flex"}>
                    <Logo/>
                </div>
                <Button size={"sm"} className={"rounded-sm hidden md:block h-auto py-1.5 px-2"}>
                    Create
                </Button>
                <Button size={"sm"} className={"rounded-sm block md:hidden"}>
                    <Plus className="h-4 w-4"/>
                </Button>
            </div>
            <div className={"ml-auto flex items-center gap-x-2"}>
                <OrganizationSwitcher
                    hidePersonal
                    afterCreateOrganizationUrl="/organization/:id"
                    afterSwitchOrganizationUrl="/select-org"
                    afterSelectPersonalUrl={"/organization/:id"}
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

export default Navbar;