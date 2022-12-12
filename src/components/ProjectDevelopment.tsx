import { Link } from "react-router-dom";
//@ts-ignore
import { HashLink } from "react-router-hash-link";
// ^ https://github.com/rafgraph/react-router-hash-link
// This is a solution to React Router's issue of not scrolling to #hash-fragments when using the <Link> component to navigate.
import main_image from "../images/Albums.png";
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
                        <h1 className="text-5xl font-extrabold">Development</h1>
                        <div className="p-2" />
                        <h3 className="text-3xl ">
                            Creating a Web Application to Sort, Filter, and Save
                            Data
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
                            Designing an interface is one thing, but building it
                            is a different beast entirely! In this project, I
                            used React to. In doing so, I employed standard
                            React patterns of handling data and managing state.
                        </p>
                        <div className="p-2" />
                        <p className="text-xl w-4/6 text-center">
                            From a design standpoint, learnability was a large
                            principle that was considered in the development of
                            this application. The layout was kept consistent
                            with many sort/filter interfaces of the same flavor,
                            such as those found in online shopping. Even though
                            the topic is different, the user is still very
                            capable of learning the interface and material.
                        </p>
                        <div className="p-2" />
                        <p className="text-xl w-4/6 text-center">
                            If you're interesting in checking out the web app
                            itself, you can try it out here:
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
                            href="https://thoughtfulkoala666.github.io/development/"
                            className="inline-flex rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-bold text-white shadow-sm hover:bg-pink-600 transition-colors duration-300"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            Web Application
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
