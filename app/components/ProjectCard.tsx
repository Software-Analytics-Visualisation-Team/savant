import React from "react";
import { Card as CardNextUi, CardBody, Image} from "@nextui-org/react";

interface ProjectProps {
    imageSource: string,
    projectName: string,
    projectDescription: string,
    projectContact: string,
    funding: string,
    status: string,
    href: string,
}

export default function ProjectCard(props: ProjectProps) {
    const [liked, setLiked] = React.useState(false);

    return (
 <CardNextUi
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[640px] min-w-[340px]"
            shadow="sm"
        >
            <a href={props.href} className="hover:bg-red-100">
                <CardBody>
                <div className="flex flex-col items-center justify-cente">
                    <div className="relative col-start-1 col-span-1 md:col-span-2">
                        <div className="grid grid-cols-6 gap-2 items-center">
                            {props.imageSource != "" &&
                                <Image
                                    alt="Project image"
                                    className="object-cover col-span-1"
                                    height={100}
                                    shadow="md"
                                    src={props.imageSource}
                                    width={100}
                                />
                            }
                            
                            <div className="col-start-2 col-span-5">
                                <h3 className="font-semibold text-2xl text-foreground/90">{props.projectName}</h3>
                            </div>
                        </div>
                        <div className="flex justify-center">
                        {props.projectDescription}
                        </div>
                        <div className="grid grid-cols-3 gap-2 items-center">
                            <div>Contacts: {props.projectContact}</div>
                            <div>Funding: {props.funding}</div>
                            <div>Status: {props.status}</div>
                        </div>
                    </div>
                </div>
            </CardBody>
            </a>
        </CardNextUi>
    );
}
