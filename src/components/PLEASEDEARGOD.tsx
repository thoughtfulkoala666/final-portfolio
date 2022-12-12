import { Link } from "react-router-dom";

export default function PLEASEDEARGOD() {
    return (
        <div className="text-center flex flex-col items-center justify-center w-screen h-screen ">
            <h1 className="font-bold text-6xl">awww sheeee</h1>
            <p className="text-2xl">this page doesn't exist sorry :(</p>
            <Link
                className="mt-4 inline-flex rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-pink-600 transition-colors duration-300"
                to={"/"}
            >
                Back to Home
            </Link>
        </div>
    );
}
