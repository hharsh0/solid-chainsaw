import { RoughNotation } from "react-rough-notation";
import Link from 'next/link';

export default function Home() {
 
  return (
    <>
      <div>
        <div className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row">
          <div className="pt-6">
            <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hi, I am{" "}
              <span className="text-[#DE1D8D] dark:text-[#DE1D8D]">Harsh</span>
            </h1>
            <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
              Welcome to this website. I am a Part time front-end engineer who
              is passionate about Data Science and Automation. In my free time,
              I like developing side projects and learning new technologies.
            </h2>
            <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
              This website was created for the purpose of my internship assesment.
            </h2>
            <p className="pt-5 text-lg relative leading-7 text-slate-600 dark:text-slate-300 sm:block md:hidden lg:hidden">
              <RoughNotation
                animate={true}
                type="highlight"
                show={true}
                color="#DE1D8D"
                animationDelay={1000}
                animationDuration={2500}
              >
                Have a good read!{" "}
              </RoughNotation>
            </p>
            <p className="hidden pt-10 relative text-lg leading-7 text-slate-600 dark:text-slate-300 md:block">
              <RoughNotation
                animate={true}
                type="highlight"
                show={true}
                color="#DE1D8D"
                animationDelay={1000}
                animationDuration={2500}
              >
                Have a good read!{" "}
              </RoughNotation>
              <div className="mt-8 text-slate-600 dark:text-slate-400">
                <span className="text-sm">Press</span>{" "}
                <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
                  ⌘
                </span>{" "}
                <span className="text-sm">+ </span>
                <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
                  K
                </span>{" "}
                <span className="text-sm">to start</span>
              </div>
            </p>
          </div>
          <div className="flex items-center justify-center w-fit shrink-0">
            <div className="grid grid-cols-1 grid-rows-3 gap-8 py-12">
              <div className="my-2 grid items-start gap-8">
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-emerald-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="/data">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 -rotate-6 text-pink-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        <span className="pr-6 text-gray-900 dark:text-gray-100">
                          Check employees
                        </span>
                      </span>
                      <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        Data&nbsp;&rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
