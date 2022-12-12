//@ts-ignore
import Fade from "react-reveal/Fade";
import portfoliodemo from "../images/portfoliodemo.png";
import redesign from "../images/redesign.png";
import iterdesign from "../images/iterdesign.png";
import DemoItem from "./DemoItem";

export default function UIUXProjects() {
    return (
        <>
            <div className="relative overflow-hidden pt-16 pb-32">
                <DemoItem
                    demoTitle="Personas & Storyboarding"
                    demoDescription="Class Assignment (UI/UX)"
                    paragraphs={[
                        "How do different users interact with the same novel interface? What can we learn about users based on how they interact with the interface?",
                        "I chose to observe people using a waching machine, where I eventually derived user personas based on recorded observations and analysis.",
                    ]}
                    imgsrc={portfoliodemo}
                    left={true}
                    siteLinks={[
                        {
                            buttonText: "Read More",
                            toPath: "/personas",
                        },
                    ]}
                />

                <div className="relative py-8">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <Fade bottom>
                            <div className=" mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                                <div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-bold tracking-tight ">
                                            Site Re-Design
                                        </h2>
                                        <h4 className="text-gray-400 text-md pb-1">
                                            Class Assignment (UI/UX)
                                        </h4>
                                        <p className="mt-4 text-lg text-neutral-700">
                                            For this project, our team created a
                                            user interface for a Y-Combinator
                                            startup named OnScale. OnScale seeks
                                            to connect creators with brands so
                                            that the creators can spend more
                                            time creating. With this premise in
                                            mind, our team created concepts for
                                            webpages, then wireframes for a
                                            possible app, and finally, a high
                                            fidelity mock up to test with real
                                            users.
                                        </p>
                                        <p className="mt-4 text-lg text-neutral-700">
                                            TODO: Add the enumerated stuff they
                                            talk about on handout
                                        </p>
                                        <div className="mt-6 flex space-x-4">
                                            {/* <a
                                                href="https://thoughtfulkoala666.github.io/redesigned-site/"
                                                className="inline-flex rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-pink-600 transition-colors duration-300"
                                                target={"_blank"}
                                                rel="noreferrer"
                                            >
                                                Re-Designed Site
                                            </a> */}
                                            <a
                                                href="https://snowyowl323.github.io/iterative-design/"
                                                className="inline-flex rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-pink-600 transition-colors duration-300"
                                                target={"_blank"}
                                                rel="noreferrer"
                                            >
                                                Full Write Up
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="mt-8 border-t border-gray-200 pt-6">
                            <blockquote>
                                <div>
                                    <p className="text-base text-gray-500">
                                        &ldquo;Cras velit quis eros eget rhoncus
                                        lacus ultrices sed diam. Sit orci risus
                                        aenean curabitur donec aliquet. Mi
                                        venenatis in euismod ut.&rdquo;
                                    </p>
                                </div>
                                <footer className="mt-3">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-6 w-6 rounded-full"
                                                src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                                alt=""
                                            />
                                        </div>
                                        <div className="text-base font-medium text-gray-700">
                                            Marcia Hill, Digital Marketing
                                            Manager
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </div> */}
                            </div>

                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                    {/* <img
                                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                                alt="Inbox user interface"
                            /> */}
                                    <img
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src={iterdesign}
                                        alt="A preview of the redesigned site"
                                    />
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    );
}
