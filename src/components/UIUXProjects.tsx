//@ts-ignore
import Fade from "react-reveal/Fade";
import portfoliodemo from "../images/portfoliodemo.png";
import redesign from "../images/redesign.png";
import iterdesign from "../images/iterdesign.png";
import devproject from "../images/Albums.png";
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
                        "I chose to observe people using a waching machine, where I eventually derived user personas based on recorded observations and analysis, and inferred potential behavior based on my generated personas.",
                    ]}
                    imgsrc={portfoliodemo}
                    left={true}
                    siteLinks={[
                        {
                            buttonText: "Read More",
                            toPath: "/personas#very-top",
                        },
                    ]}
                />

                <DemoItem
                    demoTitle="Responsive Site Redesign"
                    demoDescription="Class Assignment (UI/UX)"
                    paragraphs={[
                        "How can an existing website be improved from a User Experience standpoint?",
                        "For this project, I chose to re-design the website of a dive center I worked at over the summer, focusing on improving usability and accessibility.",
                    ]}
                    imgsrc={redesign}
                    left={false}
                    siteLinks={[
                        {
                            buttonText: "Read More",
                            toPath: "/redesign#very-top",
                        },
                    ]}
                />

                <DemoItem
                    demoTitle="Development (Filter/Sortable Data)"
                    demoDescription="Class Assignment (UI/UX)"
                    paragraphs={[
                        "How can we build an intuitive interface to?",
                        "Leveraging React to...",
                    ]}
                    imgsrc={devproject}
                    left={true}
                    siteLinks={[
                        {
                            buttonText: "Read More",
                            toPath: "/development#very-top",
                        },
                    ]}
                />

                <DemoItem
                    demoTitle="Iterative Design"
                    demoDescription="Class Assignment (UI/UX)"
                    paragraphs={[
                        "How can we build an intuitive interface to?",
                        "For this project, our team created a user interface for a Y-Combinator startup named OnScale. OnScale seeks to connect creators with brands so that the creators can spend more time creating. With this premise in mind, our team created concepts for webpages, then wireframes for a possible app, and finally, a high fidelity mock up to test with real users.",
                    ]}
                    imgsrc={iterdesign}
                    left={false}
                    siteLinks={[
                        {
                            buttonText: "Read More",
                            toPath: "/iterative#very-top",
                        },
                    ]}
                />
            </div>
        </>
    );
}
