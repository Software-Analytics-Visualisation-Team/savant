import React from 'react';
import { Card as CardNextUi, CardBody } from '@nextui-org/react';
import Image from 'next/image';

interface ToolProps {
  imageSource: string;
  toolName: string;
  toolDescription: string;
  toolContact: string;
  funding: string;
  status: string;
  href: string;
}

export default function ToolCard(props: ToolProps) {
  const [liked, setLiked] = React.useState(false);

  return (
    <CardNextUi
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[640px] min-w-[340px] hover:bg-red-100"
      shadow="sm"
    >
      <a href={props.href}>
        <CardBody>
          <div className="flex flex-col items-center justify-center p-4">
            {/* Image section */}
            {props.imageSource && (
              <div className="w-full mb-4">
                <Image
                  alt={`Image for the tool: ${props.toolName}`}  // More descriptive alt text
                  className="object-cover w-full h-[300px] rounded-md"
                  height={300}
                  src={props.imageSource}
                  width={600}
                />
              </div>
            )}

            {/* Tool name */}
            <div className="mb-2 w-full">
              <h3 className="font-semibold text-2xl text-foreground/90">
                {props.toolName}
              </h3>
            </div>

            {/* Tool description */}
            <div className="flex justify-center mx-auto p-1 text-justify mb-4">
              {props.toolDescription}
            </div>

            {/* Contact and status */}
            <div className="w-full grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1 justify-start">
                <div className="font-bold">Contacts:</div>
                <div>{props.toolContact}</div>
              </div>
              {/* <div className="grid grid-cols-1 justify-end">
                <div className="font-bold">Status:</div>
                <div>{props.status}</div>
              </div> */}
            </div>
          </div>
        </CardBody>
      </a>
    </CardNextUi>
  );
}
