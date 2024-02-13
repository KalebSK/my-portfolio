import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Links = {
    name: string;
    url: string;
};

type ProjectCardProps = {
    name: string;
    technology: string;
    description: string;
    image: StaticImageData;
    links: Links[];
};

export default function ProjectCard(props: ProjectCardProps) {
    const linkComps = props.links.map((link) => {
        return (
            <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-secondary underline text-base lg:text-lg"
            >
                {link.name}
            </Link>
        );
    });

    function ProjectSection(props: {
        title: string;
        data: string | typeof linkComps;
    }) {
        if (typeof props.data === "string") {
            return (
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-secondary text-xl lg:text-2xl">
                        <span className="text-primary">{"<"}</span>
                        {props.title}
                        <span className="text-primary">{">"}</span>
                    </h3>
                    <p className="text-justify text-base lg:text-lg text-secondary">
                        {props.data}
                    </p>
                </div>
            );
        }
        return (
            <div className="flex flex-col items-center justify-center">
                <h3 className="text-secondary text-xl lg:text-2xl">
                    <span className="text-primary">{"<"}</span>
                    {props.title}
                    <span className="text-primary">{">"}</span>
                </h3>
                {props.data}
            </div>
        );
    }

    return (
        <div className="flex flex-col lg:flex-row lg:items-start items-center justify-center w-72 md:w-128 lg:w-300 h-full rounded-xl gap-2">
            <Image
                src={props.image}
                alt={`image of ${props.name}`}
                className="w-72 h-72 md:w-128 md:h-128 rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl"
                priority={true}
            />
            <div className="flex flex-col pl-2 pr-2 gap-2 lg:gap-4 pb-2 lg:pb-0">
                <h2 className="self-start text-primary text-2xl lg:text-3xl">
                    {props.name}
                </h2>
                <ProjectSection
                    title="Technology & Skills"
                    data={props.technology}
                />
                <ProjectSection title="Description" data={props.description} />
                {linkComps.length !== 0 && <ProjectSection title="Additional Resources" data={linkComps} />}
            </div>
        </div>
    );
}
