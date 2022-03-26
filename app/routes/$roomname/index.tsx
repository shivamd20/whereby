import React from "react";
import {
  ChatIcon,
  CogIcon,
  MicrophoneIcon,
  UserCircleIcon,
  UsersIcon,
  VideoCameraIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import { json, useLoaderData } from "remix";

export const loader = async ({ params }: Record<any, any>) =>
  json({ roomname: params.roomname });

function Header({ roomname }: { roomname: string }) {
  return (
    <header className={" tw-flex tw-justify-between tw-align-middle"}>
      <div className={"tw-flex "}>
        <div
          className={"tw-p-2 tw-px-4 tw-font-mono tw-font-semibold tw-text-xl"}
        >
          ThereBy
        </div>

        <IconButton>
          <span className={"tw-px-3  tw-border-r"}>/{roomname} </span>
          <span className={"tw-px-3 "}>1/1</span>
        </IconButton>
      </div>

      <div className={"tw-flex tw-space-x-2"}>
        <IconButton>
          <CogIcon className={"tw-h-6"} />
        </IconButton>
        <IconButton>
          <UserCircleIcon className={"tw-h-6"} />
        </IconButton>
      </div>
    </header>
  );
}

export function ButtonWithBottomLabel({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div>
      {children}
      <div className={"tw-text-xs tw-text-center tw-py-1"}> {label} </div>
    </div>
  );
}

export default function () {
  const { roomname } = useLoaderData();

  return (
    <div
      className={
        "tw-w-full tw-h-full tw-p-2 bg-gray-600 tw-flex tw-flex-col  tw-h-screen "
      }
    >
      <Header roomname={roomname} />
      <div className={"tw-flex-grow"}>main</div>
      <footer
        className={
          "tw-flex mt-auto tw-px-4 tw-w-full tw-mx-auto  tw-justify-center tw-gap-2"
        }
      >
        <ButtonWithBottomLabel label={"Cam"}>
          <IconButton>
            <VideoCameraIcon className={"tw-h-6"} />
          </IconButton>
        </ButtonWithBottomLabel>

        <ButtonWithBottomLabel label={"Mic"}>
          <IconButton>
            <MicrophoneIcon className={"tw-h-6"} />
          </IconButton>
        </ButtonWithBottomLabel>

        <ButtonWithBottomLabel label={"Chat"}>
          <IconButton>
            <ChatIcon className={"tw-h-6"} />
          </IconButton>
        </ButtonWithBottomLabel>

        <ButtonWithBottomLabel label={"People"}>
          <IconButton>
            <UsersIcon className={"tw-h-6"} />
          </IconButton>
        </ButtonWithBottomLabel>

        <ButtonWithBottomLabel label={"Leave"}>
          <IconButton>
            <XCircleIcon className={"tw-h-6 tw-text-red-500"} />
          </IconButton>
        </ButtonWithBottomLabel>
      </footer>
    </div>
  );
}

function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className={
        "tw-bg-gray-800 tw-p-2 tw-rounded-md  tw-font-semibold tw-whitespace-nowrap tw-h-10 hover:tw-bg-gray-900"
      }
    >
      {children}
    </button>
  );
}
