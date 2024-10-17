import React from 'react';
import { Card as CardNextUi, CardBody, Image } from '@nextui-org/react';

interface ProjectProps {
  imageSource: string;
  projectName: string;
  projectDescription: string;
  projectContact: string;
  funding: string;
  status: string;
  href: string;
}

export default function ProjectCard(props: ProjectProps) {
  const [liked, setLiked] = React.useState(false);

  return (
    <CardNextUi
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[640px] min-w-[340px] hover:bg-red-100"
      shadow="sm"
    >
      <a href={props.href}>
        <CardBody>
          <div className="flex flex-col items-center justify-center p-1">
            <div className="relative col-start-1 col-span-1 gap-1 md:col-span-2">
              {props.imageSource != '' && (
                <div className="grid grid-cols-6 gap-2 items-center">
                  <Image
                    alt="Project image"
                    className="object-cover col-span-1"
                    height={100}
                    shadow="md"
                    src={props.imageSource}
                    width={100}
                  />
                  <div className="col-start-2 col-span-5 mb-[5px]">
                    <h3 className="font-semibold text-2xl text-foreground/90">
                      {props.projectName}
                    </h3>
                  </div>
                </div>
              )}

              {props.imageSource == '' && (
                <h3 className="font-semibold text-2xl text-foreground/90">
                  {props.projectName}
                </h3>
              )}
              <div className="flex justify-center mx-auto p-1" style={{textAlign: 'justify'}}>
                {props.projectDescription}
              </div>
              <div className="flex flex-rows gap-5">
                <div className="grid grid-cols-1 justify-start">
                  <div className="font-bold">Contacts:</div>
                  <div>{props.projectContact}</div>
                </div>
                <div className="grid grid-cols-1 justify-end">
                  <div className="font-bold">Status:</div>
                  <div>{props.status}</div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </a>
    </CardNextUi>
  );
}
