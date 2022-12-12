import { Link } from "react-router-dom";
//@ts-ignore
import { HashLink } from "react-router-hash-link";
// ^ https://github.com/rafgraph/react-router-hash-link
// This is a solution to React Router's issue of not scrolling to #hash-fragments when using the <Link> component to navigate.
import main_image from "../images/P1-3.png";
//@ts-ignore
import Fade from "react-reveal/Fade";

export default function ProjectWrapper() {
    return (
        <>
            <div className="flex flex-col text-center justify-center items-center">
                <div className="w-2/6 p-16">
                    <HashLink
                        to={"/#projects"}
                        smooth
                        className="inline-flex text-2xl font-bold rounded-md border border-transparent bg-blue-500 px-4 py-2  text-white shadow-sm hover:bg-pink-600 transition-colors duration-300"
                    >
                        Back to projects
                    </HashLink>
                </div>
                <Fade>
                    <div
                        id="intro"
                        className="flex flex-col text-center justify-center items-center align-center"
                    >
                        <h1 className="text-5xl font-extrabold">
                            Personas & Storyboarding
                        </h1>
                        <div className="p-2" />
                        <h3 className="text-3xl ">
                            Analyzing the Interface of a Commercial Washing
                            Machine at Brown University
                        </h3>
                        <img
                            src={main_image}
                            className="w-1/2 shadow-lg p-2"
                            alt="main"
                        ></img>
                    </div>
                </Fade>
                <div className="p-4" />
                <Fade bottom>
                    <div
                        id="overview"
                        className="flex flex-col items-center justify-center "
                    >
                        <div className="p-2" />
                        <h2 className="text-4xl font-extrabold">Overview</h2>
                        <div className="p-2" />
                        <p className="text-xl w-4/6 text-center">
                            So... what's the point? Great question! It might not
                            seem that watching people use a washing machine is a
                            particularly stimulating excersize, let alone a
                            useful one. On the contrary!
                        </p>
                        <div className="p-2" />
                        <p className="text-xl w-4/6 text-center">
                            UI/UX design stems from a fundamental understanding
                            of how users will <i>want to</i> interact with your
                            system. With this understanding, intuitive and
                            functional interfaces can be designed. If you don't
                            understand your users, you can't design a good
                            interface!
                        </p>
                        <div className="p-2" />
                        <p className="text-xl w-4/6 text-center">
                            Even though there was no technical development
                            utilized in the assignment, the skills I learned
                            were invaluable and improved my ability to design
                            interfaces overall. If you're interesting in
                            learning more about the process, check out the full
                            write up for the project:
                        </p>
                    </div>
                </Fade>
                <div className="p-4"></div>
                <Fade bottom>
                    <div
                        id="external"
                        className="w-full flex flex-col items-center align-center "
                    >
                        <a
                            href="https://thoughtfulkoala666.github.io/personas/"
                            className="inline-flex rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-bold text-white shadow-sm hover:bg-pink-600 transition-colors duration-300"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            Full Writeup
                        </a>
                    </div>
                </Fade>
                <div className="p-8"></div>
                <div className="w-2/6 p-16">
                    <HashLink
                        to={"/#projects"}
                        smooth
                        className="inline-flex text-2xl font-bold rounded-md border border-transparent bg-blue-500 px-4 py-2  text-white shadow-sm hover:bg-pink-600 transition-colors duration-300"
                    >
                        Back to projects
                    </HashLink>
                </div>
            </div>
        </>
    );
}
