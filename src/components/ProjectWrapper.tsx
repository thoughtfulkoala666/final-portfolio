import { Link } from "react-router-dom";
//@ts-ignore
import { HashLink } from "react-router-hash-link";
// ^ https://github.com/rafgraph/react-router-hash-link
// This is a solution to React Router's issue of not scrolling to #hash-fragments when using the <Link> component to navigate.

export default function ProjectWrapper() {
    return (
        <>
            <div className="flex flex-col text-center justify-center items-center">
                <div className="w-1/6 ">
                    <HashLink
                        to={"/#projects"}
                        smooth
                        className="inline-flex rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-pink-600 transition-colors duration-300"
                    >
                        Back to projects
                    </HashLink>
                </div>

                <div className="p-2" />
                <h1 className="text-5xl font-extrabold">Responsive Redesign</h1>
                <div className="p-2" />
                <h3 className="text-3xl font-bold">
                    Redesigning a Webpage Based on Usability and Accessibility
                    Standards
                </h3>
            </div>
        </>
    );
}
