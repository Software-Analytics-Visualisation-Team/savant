import React from "react";
import {Card, CardHeader, Avatar} from "@nextui-org/react";


interface UserProps {
    name: string;
    position: string;
    email: string;
    image: string;
    personalPage: string;
}

export default function App(props: UserProps) {
    return (
        <Card className="max-w-[340px] min-w-[340px] shadow-lg">
          <CardHeader className="justify-between bg-red-100">
            <div className="flex gap-5">
              <Avatar isBordered radius="sm" className="w-20 h-20" src={props.image} />
              <div className="flex flex-col gap-1 items-start justify-center">
                <a href={props.personalPage}>
                <h4 className="text-xl font-semibold leading-none text-default-1000 hover:text-red-600">{props.name}</h4>
                </a>
                <h5 className="text-base tracking-tight text-default-800">{props.position}</h5>
                <p className="text-default-800">{props.email}</p>
              </div>
            </div>
          </CardHeader>
        </Card>
      );
    }
    
