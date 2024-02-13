"use client";
import { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
type ProjectCarouselProps = {
    ProjectCards: JSX.Element[];
};

type CurrentProject = {
    index: number;
};
export default function ProjectCarousel(props: ProjectCarouselProps) {
    const projectCards = props.ProjectCards;
    const [currentProject, setCurrentProject] = useState(0);

    function CurrentProject(props: CurrentProject) {
        return projectCards[props.index];
    }

    function NextProject() {
        setCurrentProject((prev) => {
            if (prev === projectCards.length - 1) {
                return 0;
            } else {
                return prev + 1;
            }
        });
    }

    function PreviousProject() {
        setCurrentProject((prev) => {
            if (prev === 0) {
                return projectCards.length - 1;
            } else {
                return prev - 1;
            }
        });
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center shadow-md ring ring-accent rounded-xl">
                <CurrentProject index={currentProject} />
            </div>
            <div className="flex gap-2 pb-3 pt-3">
                <button
                    className="w-10 lg:w-12 h-10 lg:h-12 rounded-lg bg-primary text-accent flex items-center justify-center text-2xl"
                    onClick={() => {
                        PreviousProject();
                    }}
                >
                    <MdArrowBack />
                </button>
                <button
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg text-accent bg-primary flex items-center justify-center text-2xl"
                    onClick={() => {
                        NextProject();
                    }}
                >
                    <MdArrowForward />
                </button>
            </div>
        </>
    );
}
