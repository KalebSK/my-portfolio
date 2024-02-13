"use client";
import { handleFormSubmit } from "./actions";
import { useFormStatus } from "react-dom";
import { useReCaptcha } from "next-recaptcha-v3";
export default function ContactForm() {
    const { executeRecaptcha } = useReCaptcha();
    function Submit() {
        const { pending } = useFormStatus();
        return (
            <button
                disabled={pending}
                className="bg-primary disabled:bg-accent disabled:text-primary text-accent rounded-lg w-28 self-center text-2xl h-12"
            >
                {pending ? "Submitting..." : "Submit"}
            </button>
        );
    }
    async function onFormSubmit(formData: FormData) {
        const token = await executeRecaptcha("contact");
        const res = await handleFormSubmit(token, formData);
        alert(res.message);
    }
    return (
        <form
            action={onFormSubmit}
            className="flex flex-col w-full gap-4 lg:pl-12 lg:pr-12 lg:pb-10 lg:pt-10 md:pl-5 md:pr-5 md:pb-3 md:pt-3 h-full text-secondary"
        >
            <div className="flex w-full">
                <div className="flex flex-col gap-4 w-full">
                    <label className="flex gap-1 w-full">
                        <span className="w-8">name*</span>
                        <input
                            type="text"
                            name="name"
                            required
                            className="border lg:w-44 w-full rounded-md text-sm border-accent ring-accent pl-1 pr-1 focus-visible:outline-2 focus-visible:outline-accent"
                        />
                    </label>
                    <label className="flex gap-1">
                        <span className="w-8">email*</span>
                        <input
                            type="email"
                            name="email"
                            required
                            className="border lg:w-44 w-full rounded-md text-sm border-accent focus-visible:outline-2 focus-visible:outline-accent pl-1 pr-1"
                        />
                    </label>
                </div>
                <p className="w-full hidden h-16 text-3xl text-primary text-center lg:flex items-center justify-center lg:mr-9">
                    I look forward to speaking with you!
                </p>
            </div>
            <label className="flex gap-1">
                <span className="w-9 hidden invisible lg:block text-secondary"></span>
                <textarea
                    name="message"
                    placeholder="Tell me about your project or what you are looking for. I'll let you know my thoughts!"
                    className="w-full h-36 border rounded-md self-center border-accent text-left resize-none pl-1 pr-1 focus-visible:outline-2 focus-visible:outline-accent"
                />
                <span className="w-9 hidden invisible lg:block"></span>
            </label>
            <Submit />
            <p className="text-2xl w-full h-fit flex items-center justify-center text-primary lg:hidden">
                I look forward to speaking with you!
            </p>
        </form>
    );
}
