import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
//@ts-ignore
import Fade from "react-reveal/Fade";
import UIUXProjects from "./components/UIUXProjects";

function App() {
    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(" ");
    }

    const navigation = [
        { name: "Test 123", href: "#" },
        { name: "Test Nav", href: "#" },
        { name: "Test Dash", href: "#" },
        { name: "Test 456", href: "#" },
    ];

    return (
        <div className="">
            {Header()}
            <div
                id="main"
                className="flex flex-col items-center justify-center"
            >
                {Intro()}
                <div className="font-bold text-2xl pb-10">
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                </div>
                <div className="p-20" />

                <div
                    id="uiux"
                    className="flex flex-col items-center justify-center w-5/6"
                >
                    <Fade>
                        <h3 className=" text-4xl font-extrabold">UI/UX</h3>
                        <p className="text-center text-xl pt-2">
                            Here are some various projects I did trying to hone
                            my UI/UX skills:
                        </p>
                    </Fade>
                    <UIUXProjects />
                </div>
            </div>
        </div>
    );
}

export default App;

function Header() {
    return (
        <div
            id="name"
            className="h-30 border-b-2 border-t-2 w-full font-bold text-2xl font-mono flex flex-col items-center justify-center"
        >
            <p className="font-bold text-4xl xl:text-6xl pt-6 pb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
                thoughtfulkoala666
            </p>
            {/* <div className="p-2" /> */}
            <div
                id="nav-items"
                className="flex w-full justify-center space-x-6 font-sans text-neutral-700 p-4 "
            >
                {/* {navigation.map((item) => (
            <a
                className="border-neutral-700 border-2 rounded-md px-2 hover:bg-neutral-200 transition-colors duration-100"
                key={item.name}
                href={item.href}
            >
                {item.name}
            </a>
        ))} */}
            </div>
        </div>
    );
}

function Intro() {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div className="p-6" />
            <div className="w-3/4">
                <Fade duration={1000}>
                    <h3 className="text-3xl">
                        <b>Hi!</b> My name is{" "}
                        <b>
                            <i>thoughtfulkoala666</i>
                        </b>
                        , and I'm a Full-Stack Software Engineer with a passion
                        for trying new things!
                    </h3>
                </Fade>
                <div className="p-6 " />
                <Fade delay={1000} duration={1500}>
                    <h4 className="text-2xl">
                        Below you'll find some of my selected work in various
                        fields I've dabbled in!
                    </h4>
                </Fade>
                {/* <Fade> */}
                <p className="pt-48 animate-pulse">Scroll to see more</p>
                {/* </Fade> */}
            </div>
        </div>
    );
}
