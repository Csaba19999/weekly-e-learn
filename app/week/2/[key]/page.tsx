import VideoWatchStep from "@/component/stepper/VideoWatchStep/VideoWatchStep";
import HorizontalLinearStepper from "@/component/stepper/stepper";
import Image from "next/image";

export default function WeekOne() {
  return (
    <main className="w-full max-w-screen-xl flex min-h-screen flex-col items-center gap-6 p-6 mx-auto">
      <h2 className="w-full text-start text-3xl text-neutral-800 font-bold">
        Week 2
      </h2>
      <HorizontalLinearStepper finish={finish} steps={steps} />
    </main>
  );
}

const finish = (
  <div>
    <p className="w-full text-xl text-neutral-800 font-semibold px-2 mx-2 py-10">
      Great progress this week! You have taken time for yourself and your mental
      health, be really proud of yourself, as proud as we are of you! <br />
      We hope you found the videos useful. If you would like to, you can share
      with us your experience, what you liked about it or how you will be able
      to use it in your everyday life! We are always happy to see the lives of
      others improved!
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
    label:
      "Welcome to the second week of the relaxation programme! We hope that you found the previous week's materials useful and that you are feeling the change in your life, feeling a more balanced life is waiting for you!",
    element: (
      <div>
        <p>
          This week we will continue with the relaxation materials. You'll be
          introduced to techniques and audio cues such as{" "}
          <b>"Happy place", "Gratitude", "Safe place"</b> and you'll also hear
          audio to help you sleep!
        </p>
        <br />
        <p>
          We are happy to have you here! It's huge to do so much for yourself!
          Your perseverance is amazing!
        </p>
      </div>
    ),
  },
  {
    label: "Relaxation self coach: IV. module",
    element: <VideoWatchStep src="https://youtu.be/eHZUItwQpnY" />,
  },
  {
    label: `Congratulations! You've reached the end of the fourth module in our program, and we're genuinely thrilled to see your dedication and progress toward your well-being. Remember, every time you participate in mindfulness exercises, you're actively nurturing your health and joy. Keep up the fantastic effort!`,
    element: null,
  },
  {
    label: "Relaxation self coach: V. module",
    element: <VideoWatchStep src="https://youtu.be/NWpb_nrU6FI" />,
  },
  {
    label: `Congratulations on completing the Safe place and sleep relaxation module! You've taken important steps towards finding peace and restfulness. Keep up the great work on your journey to better sleep and inner calm!`,
    element: null,
  },
  {
    label: "Relaxation self coach: VI. module",
    element: <VideoWatchStep src="https://youtu.be/6P1tWP-FipQ" />,
  },
];
