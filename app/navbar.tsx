import { IoLogoGithub, IoLogoLinkedin, IoMdMenu } from "react-icons/io";
import Link from "next/link";
export default function Navbar() {
    return (
        <div className="flex flex-row items-center justify-between md:h-16 h-10 md:px-6 mx-3 bg-transparent text-black">
            <div className="flex flex-row items-center">
                <Link href="/">
                    <h1 className="md:text-4xl text-3xl font-medium group text-secondary flex gap-2  md:hover:text-primary cursor-pointer">
                        <span className="text-primary md:group-hover:animate-ping">
                            {">"}
                        </span>
                        KalebSK
                    </h1>
                </Link>
            </div>
            <nav className="md:gap-24 flex-row items-center text-secondary md:flex hidden">
                <Link
                    href="/about"
                    className="text-xl font-medium hover:text-accent"
                >
                    About
                </Link>
                <Link
                    href="/projects"
                    className="text-xl font-medium hover:text-accent"
                >
                    Projects
                </Link>
                <Link
                    href="/contact"
                    className="text-xl font-medium hover:text-accent"
                >
                    Contact
                </Link>
            </nav>
            <div className="flex-row items-center gap-2 text-primary md:flex hidden">
                <Link
                    href="https://github.com/KalebSK"
                    target="_blank"
                    rel="nopener noreferrer"
                >
                    <IoLogoGithub className="md:h-10 md:w-10 w-6 h-6 hover:text-accent" />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/kaleb-koebel-25798416b/"
                    target="_blank"
                    rel="nopener noreferrer"
                >
                    <IoLogoLinkedin className="md:h-11 md:w-11 w-8 h-8 hover:text-accent" />
                </Link>
            </div>
            <div className="h-8 md:hidden group z-10">
                <button>
                    <IoMdMenu className="w-8 h-8 text-primary group-hover:text-accent"></IoMdMenu>
                </button>
                <div
                    className="absolute top-10 right-3 shadow-primary bg-white rounded-lg shadow-sm pl-2 pr-2  pb-1 pt-1
                 text-secondary group-hover:flex flex-col items-center hidden"
                >
                    <Link href="/about" className="text-base hover:text-accent">
                        About
                    </Link>
                    <Link
                        href="/projects"
                        className="text-base border-t border-primary hover:text-accent"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/contact"
                        className="text-base border-t border-primary hover:text-accent"
                    >
                        contact
                    </Link>
                    <div className="flex flex-row gap-2 items-center">
                        <IoLogoGithub className="w-4 h-4 text-primary"/>
                        <IoLogoLinkedin className="w-4 h-4 text-primary"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
