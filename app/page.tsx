import portphoto from "./portphoto.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="bg-white min-h-screen flex flex-col gap-10">
            <div className="flex justify-center items-center md:gap-4 gap-2 pt-20">
                <Image
                    className="rounded-full ring-4 md:w-64 md:h-64 sm:w-48 sm:h-48 w-32 h-32 md:mx-0 mx-2 ring-accent"
                    src={portphoto}
                    priority={true}
                    alt="Kaleb's photo"
                />
                <div className="md:text-3xl sm:text-2xl text-xl h-fit flex-wrap text-secondary md:w-96 sm:w-72 w-48 pointer-events-none justify-start flex">
                    <p className="h-fit pr-1">
                        {"Hello I'm "}
                        <span className="text-primary font-medium">Kaleb</span>,
                        a <span className="font-medium">software engineer</span>{" "}
                        based in{" "}
                        <span className="text-primary font-medium">
                            Michigan{" "}
                        </span>
                        currently seeking new opportunities.
                    </p>
                    <div className="w-full h-fit flex justify-end">
                        <Link
                            className="md:w-56 w-36 h-fit flex items-center pointer-events-auto group"
                            href="/contact"
                        >
                            <p className="md:text-2xl text-base text-white border-4 group-hover:border-accent group-hover:bg-accent border-primary p-1 md:pr-4 md:pl-4 bg-primary">
                                Hire Me?
                            </p>
                            <p className="md:text-2xl text-base text-primary border-4 group-hover:border-accent group-hover:text-accent border-primary p-1 md:pr-4 md:pl-4">
                                {"Let's Talk"}
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="md:h-14 h-10 w-full bg-accent flex justify-center items-center">
                <p className="lg:text-4xl md:text-2xl text-sm text-center text-secondary">
                    Design - Development - Critical Thinking - Customer Focused
                    - Detail Oriented - Problem Solving
                </p>
            </div>
        </main>
    );
}
