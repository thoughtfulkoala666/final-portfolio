//@ts-ignore
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
//@ts-ignore
import { HashLink } from "react-router-hash-link";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

// Define the type for demo item props
interface DemoItemProps {
    demoTitle: string;
    demoDescription: string;
    paragraphs: string[];
    imgsrc: any;
    left?: boolean;
    aLinks?: { buttonText: string; href: string }[]; // list of hrefs to link to
    siteLinks?: { buttonText: string; toPath: string }[]; // list of hrefs to link to
    imgalttext?: string;
}

export default function DemoItem(props: DemoItemProps) {
    return (
        <div className="py-8 ">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                <Fade bottom>
                    <div
                        className={classNames(
                            props.left ? "lg:col-start-2" : "",
                            "mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0 "
                        )}
                    >
                        <div>
                            <div className="mt-6">
                                <h2 className="text-3xl font-bold tracking-tight">
                                    {props.demoTitle}
                                </h2>
                                <h4 className="text-gray-400 text-md pb-1">
                                    {props.demoDescription}
                                </h4>
                                {props.paragraphs.map((paragraph) => (
                                    <p className="mt-4 text-lg text-neutral-700">
                                        {paragraph}
                                    </p>
                                ))}
                                <div className="mt-6 space-x-2">
                                    {props.siteLinks?.map((link) => (
                                        <HashLink
                                            className="inline-flex rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-pink-600 transition-colors duration-300"
                                            to={link.toPath}
                                        >
                                            {link.buttonText}
                                        </HashLink>
                                    ))}
                                    {props.aLinks?.map((link) => (
                                        <a
                                            href={link.href}
                                            className="inline-flex rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-pink-600 transition-colors duration-300"
                                            target={"_blank"}
                                            rel="noreferrer"
                                        >
                                            {link.buttonText}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"mt-12 sm:mt-16 lg:mt-0 "}>
                        <div className="flex justify-center items-center lg:m-0 lg:h-full lg:px-0">
                            <img
                                className={classNames(
                                    props.left ? "lg:right-0" : "lg:left-0",
                                    "w-full rounded-xl shadow-md ring-1 ring-black ring-opacity-10 absolute h-fit"
                                )}
                                src={props.imgsrc}
                                alt={props.imgalttext}
                            />
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
