export default function Header() {
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