"use client";

import VideoWatchStep from "@/component/stepper/VideoWatchStep/VideoWatchStep";
import HorizontalLinearStepper from "@/component/stepper/stepper";

const steps = [
  {
    label: "Out For Love | Hazbin Hotel | Extended Remix",
    element: <VideoWatchStep src="https://youtu.be/aaZKamGYIe4?list=RDaaZKamGYIe4" />,
  },
  {
    label: "Respectless | Hazbin Hotel | Extended Remix",
    element: <VideoWatchStep src="https://www.youtube.com/watch?v=3Xaj0758GoQ" />,
  },
  {
    label: "Ready For This Sing-Along | Hazbin Hotel | Prime Video",
    element: <VideoWatchStep src="https://www.youtube.com/watch?v=y1yNk8VeqqI" />,
  },
  {
    label: "The Show Must Go On | Hazbin Hotel | Prime Video",
    element: <VideoWatchStep src="https://www.youtube.com/watch?v=75IMChOtf9s" />,
  },
  {
    label: "2 MINUTES NOTICE -(OFFICIAL VIDEO) // HELLUVA BOSS",
    element: <VideoWatchStep src="https://www.youtube.com/watch?v=s9HyDRpJrsw" />,
  },
];

export default function WeekOne() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-24">
      <h1 className="w-full text-start text-3xl text-neutral-800 font-bold">
        Week 1
      </h1>
      <section className="w-full">
        <HorizontalLinearStepper steps={steps} />
      </section>
    </main>
  );
}
