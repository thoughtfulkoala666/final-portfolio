import { Link } from "react-router-dom";
//@ts-ignore
import { HashLink } from "react-router-hash-link";
// ^ https://github.com/rafgraph/react-router-hash-link
// This is a solution to React Router's issue of not scrolling to #hash-fragments when using the <Link> component to navigate.
import main_image from "../images/iterdesign.png";
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
                            Iterative Design
                        </h1>
                        <div className="p-2" />
                        <h3 className="text-3xl ">
                            Blindly Creating an Alternative Interface Based on
                            Concept Only
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
                            Once you see a design for a particular product, it
                            can be very easy to take design decisions that the
                            interface has as "given." But are those decisions
                            inherently good just because they exist already?
                        </p>
                        <div className="p-2" />
                        <p className="text-xl w-4/6 text-center">
                            By independently designing an interface to solve a
                            given problem, we are able to thoroughly and
                            exhaustively consider a user's flow without bias
                            from existing infrastructure. Not only did our team
                            gain a better understanding of designing interfaces
                            themselves, but once tested and compared to the
                            existing interface we were able to glean which
                            designb decisions were perhaps more common than
                            others, even informing us of potential choices to be
                            made in the future.
                        </p>
                        <div className="p-2" />
                        <p className="text-xl w-4/6 text-center">
                            If you're interesting in learning more about the
                            process, and the design decisions we made along the
                            way, check out the full write up for the project:
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
                            href="https://snowyowl323.github.io/iterative-design/"
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
