import React from 'react';
import { Card, CardHeader, CardBody, Avatar } from '@nextui-org/react';

interface UserProps {
  name: string;
  position: string;
  quote: string;
  image: string;
  personalPage: string;
}

export default function App(props: UserProps) {
  return (
    <Card className="max-w-[340px] min-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="sm"
            className="w-20 h-20"
            src={props.image}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <a href={props.personalPage}>
              <h4 className="text-xl font-semibold leading-none text-default-600 hover:text-red-600">
                {props.name}
              </h4>
            </a>
            <h5 className="text-base tracking-tight text-default-400">
              {props.position}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-base text-default-500">
        <p>{props.quote}</p>
        <span className="pt-2"></span>
      </CardBody>
    </Card>
  );
}
