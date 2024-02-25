"use client";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

type IProps = Readonly<{
  src: string;
}>;

export default function VideoWatchStep(props: IProps) {
  return (
    <ReactPlayer
      url={props.src}
      width="100%"
      height="50vh"
      controls={true}
      playing={true}
    />
  );
}
