import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import {cn} from "@/lib/utils";
const headFont = localFont({src: "../public/fonts/font.woff2"})
export const Logo = () => {
    return (
        <Link href={"/"} className={"hover:opacity-75 transition items-center gap-x-2 hidden md:flex"}>
            <div>
                <Image src="/logo.svg" alt="Logo" height={30} width={30} />
                    <p className={cn("text-lg text-neutral-700 pb-1", headFont.className)}>
                        CP x Pokemon
                    </p>


            </div>
        </Link>
    );
}

