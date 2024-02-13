import dynamic from "next/dynamic";
import { ReCaptchaProviderWrapper } from "./recaptchawrapper";
export default function Contact() {
const ContactForm = dynamic(() => import('./ContactForm'), { ssr: false })
    return (
        <main className="bg-white min-h-screen pb-5">
            <div className="flex flex-col items-center justify-center">
                <h1 className="md:text-4xl text-2xl font-medium text-secondary flex pointer-events-none">
                    <span className="text-primary">{">"}</span>Contact
                    <span className="invisible">{">"}</span>
                </h1>
                <div
                    className="flex flex-col p-2 relative items-center shadow-secondary/50 shadow-md
                w-72 md:w-96 lg:w-240 lg:h-128 h-fit rounded-xl gap-2 lg:gap-0 bg-white border-4 border-accent/30"
                >
                    <h1 className=" text-primary font-medium self-start text-5xl top-64 md:top-90 left-2">
                        {"Let's Talk"}
                    </h1>
                    <h2 className="text-secondary border-b border-accent pb-2">
                        Have a project that you’re interested in having me work
                        on or have a position that you think I would be a good
                        fit for? Fill out the form below and I will shoot you a
                        reply and we can begin discussing!
                    </h2>
                    <ReCaptchaProviderWrapper>
                        <ContactForm />
                    </ReCaptchaProviderWrapper>
                </div>
            </div>
        </main>
    );
}
