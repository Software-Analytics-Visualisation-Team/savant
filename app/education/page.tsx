'use client'
import React from "react";
import { Card as CardNextUi, CardBody, Image } from "@nextui-org/react";
import HeartIcon from "../../public/savant.png";

export default function Card() {
    const [liked, setLiked] = React.useState(false);

    return (
        <CardNextUi
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[640px] min-w-[340px]"
            shadow="sm"
        >
            <CardBody>
                <div className="flex flex-col items-center justify-center">
                    <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
                        <h1 className="text-2xl font-bold mb-4">Project Title</h1>
                        <p className="text-gray-600 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vivamus euismod, urna nec tincidunt lacinia, justo odio
                            dignissim nulla.
                        </p>
                        {/* Video Section */}
                        <div className="mb-4">
                            <iframe
                                title="Project Video"
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/TGwZ7MNtBFU?autoplay=0"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                        {/* Contact Section */}
                        <div className="border-t mt-4 pt-4">
                            <h2 className="text-lg font-semibold mb-2">Contact</h2>
                            <p className="text-gray-600">
                                Person Responsible: John Doe
                                <br />
                                Email: john.doe@example.com
                                <br />
                                Phone: +1 123-456-7890
                            </p>
                        </div>
                    </div>
                </div>
            </CardBody>
        </CardNextUi>
    );
}