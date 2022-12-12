import { Link } from "react-router-dom";
//@ts-ignore
import { HashLink } from "react-router-hash-link";
// ^ https://github.com/rafgraph/react-router-hash-link
// This is a solution to React Router's issue of not scrolling to #hash-fragments when using the <Link> component to navigate.
import main_image from "../images/redesign-2.png";
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
                            Responsive Redesign
                        </h1>
                        <div className="p-2" />
                        <h3 className="text-3xl ">
                            Redesigning a Webpage Based on Usability and
                            Accessibility Standards
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
                            When a website is nice to use, you don't really
                            think about how it was designed, it kinda just,
                            works! You only really notice a poorly designed
                            website when it starts to get in the way, can't do
                            what you want to do, or is otherwise just confusing.
                            Identifying flaws in an interface is a valueable
                            skill that translates well into making informed
                            design decisions of your own. In this project, I got
                            the ability to not only identify, but fix various
                            accessibility and usability problems with a website
                            that I use a lot.
                        </p>
                        <div className="p-2" />
                        <p className="text-xl w-4/6 text-center">
                            By closely adhering to a step-by-step methodology, I
                            was able to design a more accessible and usable
                            interface for a website that I had previously used.
                            From identification of problems, to lo-fi design, to
                            hi-fi, to implementation, the step-by-step process
                            was essential in staying on track and actually
                            desining toward a specific purpose. This project,
                            above anything else, helped to bridge the gap
                            between potentially arbitrary design decisions and
                            their practical impact on an interface.
                        </p>
                        <div className="p-2" />
                        <p className="text-xl w-4/6 text-center">
                            If you're interested in learning more about the
                            specific problems I identified and the steps I took
                            to address them in my re-design, check out the full
                            write up! If you want to see the redesigned site as
                            it stands, you can check that out as well!
                        </p>
                    </div>
                </Fade>
                <div className="p-4"></div>
                <Fade bottom>
                    <div
                        id="external"
                        className=" flex space-x-4 items-center align-center "
                    >
                        <a
                            href="https://thoughtfulkoala666.github.io/redesign-portfolio/"
                            className="inline-flex rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-bold text-white shadow-sm hover:bg-pink-600 transition-colors duration-300"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            Full Writeup
                        </a>
                        <a
                            href="https://thoughtfulkoala666.github.io/redesigned-site/"
                            className="inline-flex rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-bold text-white shadow-sm hover:bg-pink-600 transition-colors duration-300"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            Redesigned Site
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
