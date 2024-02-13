"use client";

import React from "react";
import ReactPlayer from "react-player";

type IProps = Readonly<{
  src: string;
}>;

export default function VideoWatchStep(props: IProps) {
  return <ReactPlayer url={props.src} controls width="100%" height="100%" />;
}
