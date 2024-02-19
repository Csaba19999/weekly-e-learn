import React from "react";
import ReactPlayer from "react-player";

type IProps = Readonly<{
  src: string;
}>;

export default function VideoWatchStep(props: IProps) {
  return (
    <section style={{ margin: "12px" }}>
      <ReactPlayer
        url={props.src}
        width="100%"
        height="50vh"
        controls={true}
        playing={true}
      />
    </section>
  );
}
