import portphoto from "../profilepic.jpg";
import Image from "next/image";
import Link from "next/link";
export default function About() {
    return (
        <main className="bg-white min-h-screen pb-5">
            <div className="flex flex-col items-center justify-center">
                <h1 className="md:text-4xl text-2xl font-medium text-secondary flex pointer-events-none">
                    <span className="text-primary">{">"}</span>About
                    <span className="invisible">{">"}</span>
                </h1>
                <div
                    className="flex flex-col lg:flex-row pb-2 lg:pb-0 relative items-center shadow-secondary/50 shadow-md
                w-72 md:w-96 lg:w-fit lg:h-fit rounded-xl gap-2 lg:gap-0 bg-white border-4 border-accent/30"
                >
                    <h1 className="absolute text-primary font-medium text-5xl top-64 md:top-90 lg:hidden left-2">
                        About Me
                    </h1>
                    <Image
                        src={portphoto}
                        alt="Kaleb's photo"
                        priority={true}
                        className="w-full h-72 md:h-96 lg:w-110 lg:h-110 lg:rounded-tr-none lg:rounded-l-lg rounded-t-lg"
                    />
                    <div className="flex lg:w-110 lg:h-110 flex-col lg:pt-2 gap-3 lg:gap-2 items-center h-full">
                        <div className="lg:flex text-primary text-5xl flex-row hidden w-110 items-end pl-2">
                                About Me
                        </div>
                        <p className="text-secondary pl-2 pr-2 text-justify">
                            {
                                "Hello, I'm Kaleb, ever since I was young, I have been interested in technology which has lead me to where I am today. Currently, I'm looking for new opportunities to work with software system's, that be maintaining or modifying existing systems or creating brand new exciting products. I'm a graduate of Michigan State University with a bachelor of science degree in Computer Science. Throughout my studies, I was able to maintain a 3.82 Overall GPA and gain vital skills in algorithms and data structures, object-oriented software design, mobile application development, web application architecture and development, database systems, operating systems, and computer networks. This academic experience has allowed me to develop a proficiency in various software systems with the ability to design, implement, and maintain systems in various languages including SQL, PHP, Java, C++, JavaScript, TypeScript, and Python. If you would like to learn more about my skills and experiences, check out my resume, view my projects on the projects page, and contact me if you have any questions!"
                            }
                        </p>
                        <div className="flex flex-row gap-2 pb-3 lg:pb-0">
                            <a
                                href="resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary rounded-lg text-accent flex justify-center items-center md:text-base text-sm lg:h-10 lg:w-32 w-28 h-8"
                            >
                                Download My Resume
                            </a>
                            <Link
                                href="/contact"
                                className="bg-primary rounded-lg text-accent flex justify-center items-center md:text-base text-sm lg:h-10 lg:w-32 w-28 h-8"
                            >
                                Contact Me!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
