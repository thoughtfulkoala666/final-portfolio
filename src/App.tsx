import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
//@ts-ignore
import Fade from "react-reveal/Fade";
import UIUXProjects from "./components/UIUXProjects";
import { Link } from "react-router-dom";

function App() {
    // function classNames(...classes: any[]) {
    //     return classes.filter(Boolean).join(" ");
    // }

    return (
        <div className="">
            {/* <Link className="text-2xl" to="/rachel">
                rachel
            </Link> */}
            <div
                id="main"
                className="flex flex-col items-center justify-center"
            >
                {Intro()}
                <div className="font-bold text-sm pb-10 animate-pulse">
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                </div>
                <div className="p-20" />

                <div id="projects" />
                <div className="flex flex-col items-center justify-center w-5/6">
                    {/* <Fade> */}
                    <div className="w-3/4 items-center text-center">
                        <h3 className=" text-4xl font-extrabold">UI/UX</h3>
                        <p className="text-center text-xl pt-3">
                            In order to improve my ability to design interfaces
                            and experiences, I've tackled assorted projects
                            which span the gamut of UI/UX principles. Each
                            project has contributed to my understanding of UI/UX
                            in its own special way.
                        </p>
                    </div>
                    {/* </Fade> */}

                    <UIUXProjects />
                </div>
            </div>
        </div>
    );
}

export default App;

function Intro() {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div className="p-6" />
            <div className="w-3/4">
                <Fade duration={1000}>
                    <h3 className="text-3xl">
                        Hi! My name is{" "}
                        <b>
                            <i>thoughtfulkoala666</i>
                        </b>
                        , and I'm a Full-Stack Software Engineer with a passion
                        for trying new things!
                    </h3>
                </Fade>
                <div className="p-8 " />
                <Fade delay={1000} duration={1500}>
                    <div className="flex items-center justify-center flex-col">
                        <h4 className="text-2xl font-bold">About</h4>
                        <div className="w-5/6">
                            <p className="text-center text-xl pt-3">
                                As someone interested in education, I've always
                                had a desire to bridge the gap between every day
                                users and the technology they use.
                                <div className="p-2" />
                                Studying UI/UX has armed me with the tools to
                                examine problems in a whole new light. Thinking
                                about usability, accessibility, learnability,
                                and memorability are critical considerations in
                                all areas of development, from web pages to the
                                backend API interface designs.
                                <div className="p-2" />
                                Here are some of the projects I worked on to
                                help get me where I am today
                            </p>
                        </div>
                    </div>
                </Fade>
                {/* <Fade> */}
                <p className="pt-48 animate-pulse">Scroll to see more</p>
                {/* </Fade> */}
            </div>
        </div>
    );
}
