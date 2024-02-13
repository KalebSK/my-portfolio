import projectInfo from "./projectInfo.json";
import ProjectCard from "./ProjectCard";
import ProjectCarousel from "./ProjectCarousel";
import missing from "../missing.png";
import portfolio from "../portfolio.png";
import simplefit from "../simplefit.png"
import discordgoogle from "../discordgoogle.png"
import { StaticImageData } from "next/image";
export default function Projects() {
    const images = new Map<string, StaticImageData>([
        ["portfolio", portfolio],
        ["missing", missing],
        ["simplefit", simplefit],
        ["discordgoogle", discordgoogle]
    ]);
    const projectCards = projectInfo.map((project) => {
        return (
            <ProjectCard
                key={project.name}
                name={project.name}
                description={project.description}
                technology={project.technology}
                image={images.get(project.image) ?? missing}
                links={project.links}
            />
        );
    });

    return (
        <main className="bg-white min-h-screen">
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="md:text-4xl text-2xl font-medium text-secondary flex pointer-events-none">
                    <span className="text-primary">{">"}</span>Projects
                    <span className="invisible">{">"}</span>
                </h1>
                <ProjectCarousel ProjectCards={projectCards} />
            </div>
        </main>
    );
}
