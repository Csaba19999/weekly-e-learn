import VideoWatchStep from "@/component/stepper/VideoWatchStep/VideoWatchStep";
import HorizontalLinearStepper from "@/component/stepper/stepper";
import Image from "next/image";

export default function WeekOne() {
  return (
    <main className="w-full max-w-screen-xl flex min-h-screen flex-col items-center gap-6 p-6 mx-auto">
      <h2 className="w-full text-start text-3xl text-neutral-800 font-bold">
        Week 3
      </h2>
      <HorizontalLinearStepper finish={finish} steps={steps} />
    </main>
  );
}

const finish = (
  <div>
    <p className="w-full text-xl text-neutral-800 font-semibold px-2 mx-2 py-10">
      Fantastic work this week too! You've dedicated time to your mental health
      and that really needs to be celebrated. We are incredibly proud of your
      commitment! This brings you to the end of your 3 week relaxation
      programme!
      <br />
      <p>
        We hope you found the videos useful. If you'd like, feel free to share
        your experiences with us. Whether it's what you enjoyed or how you plan
        to apply what you learned to your everyday life, we'd love to hear from
        you! You can write about this week or the whole programme!
      </p>
      <br />
      <a
        className="text-blue-500 font-normal underline"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfpWIP4Rjf8YGibGOU4AI3sXT-T-Qa6O9rc4AbQPlmywiQRpg/viewform?usp=sf_link"
      >
        I share my experience
      </a>
    </p>
  </div>
);

const steps = [
  {
    label: null,
    element: (
      <div>
        <p>
          Welcome to the third and final week of the relaxation programme! We
          hope you found the previous week's material useful! This week we have
          a total of 4 modules for you, similar in length to previous weeks.
          Several of the topics may be familiar from week 1 and week 2, as we
          have again prepared audio material to help you fall asleep,
          progressive muscle relaxation, but in addition to these we have
          brought you <b>Imaginal exposure</b> exercise,{" "}
          <b>The Power of Self-Confidence</b>
          and <b>Inner coach</b> as new additions! We hope you will enjoy these
          exercises too, they have many positive effects on you!
        </p>
        <br />
        <p>Let's get started!</p>
      </div>
    ),
  },
  {
    label: "Relaxation self coach: VII. module",
    element: <VideoWatchStep src="https://youtu.be/7PDZU3b_DjY" />,
  },
  {
    label: `Well done on completing the module! Your dedication and effort are truly commendable. Keep up the fantastic work, and may this accomplishment inspire you to reach even greater heights on your journey ahead!`,
    element: null,
  },
  {
    label: "Relaxation self coach: VIII. module",
    element: <VideoWatchStep src="https://youtu.be/u9M6XywHZH4" />,
  },
  {
    label: `Hats off to you for wrapping up this module! Your commitment to personal growth shines bright. Take a moment to celebrate your achievement and know that you're one step closer to your goals. Keep up the fantastic work!`,
    element: null,
  },
  {
    label: "Relaxation self coach: IX. module",
    element: <VideoWatchStep src="https://youtu.be/2koNcceU7Tw" />,
  },
  {
    label: `Kudos on completing this module! Your dedication to self-improvement is truly inspiring. Take a moment to pat yourself on the back for your hard work and progress. You're doing amazing things!`,
    element: null,
  },
  {
    label: "Relaxation self coach: X. module",
    element: <VideoWatchStep src="https://youtu.be/TymwqxfoROY" />,
  },
];
