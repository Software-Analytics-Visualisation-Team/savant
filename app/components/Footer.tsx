'use client';

export default function Footer() {
    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
            <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li>
                        <a
                            href="https://set.win.tue.nl"
                            className="text-sm text-gray-600 hover:text-red-600"
                        >
                            Part of the Software Engineering & Technology Cluster
                        </a>
                    </li>
                </ul>
                <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li>
                        <a
                            href="https://www.tue.nl/en/"
                            className="text-sm text-gray-600 hover:text-red-600"
                        >
                            Eindhoven University of Technology
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
