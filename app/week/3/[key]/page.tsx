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
    <div className="w-full text-lg text-neutral-800 px-2 mx-2 py-10">
      <p className="text-3xl font-semibold">
        Fantastic work this week too! You've dedicated time to your mental
        health and that really needs to be celebrated. Your perseverance and
        commitment to the programme is amazing! We hope that you have become a
        more balanced you! We are proud of you!
      </p>
      <br />
      <p>
        Remember, most importantly, you are your greatest coach. You have
        tremendous resources within you, and by connecting to yourself, you hold
        many of the answers that are necessary for you to get through life’s
        challenges.
      </p>
      <br />
      <p>This brings you to the end of your 3 week relaxation programme!</p>
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
    </div>
  </div>
);

const steps = [
  {
    label: `Welcome to the third and final week of the relaxation programme! We hope you found the previous week's material useful! `,
    element: (
      <div>
        <p>
          This week we have a total of 4 modules for you, similar in length to
          previous weeks.This week, we're gonna help you boost your confidence
          by tackling a fear you've been dealing with and tapping into your
          inner strengths. Our brains don’t know the difference between what we
          imagine and what truly is. Therefore, if we have any situation in our
          life that is causing us an excessive amount of fear or anxiety, we can
          start facing it by encountering it first within our minds. All those
          exercises you've been doing? They're gonna come in handy for
          overcoming that pesky fear. It's all about emotion regulation, and by
          now, you are becoming a master of it. It's time to shake things up and
          deal with what's been bugging you. Take a few moments to think about
          something that's been making you anxious lately. We'll guide you
          through facing it in the following modules. Ready to dive in? Let's do
          this!
        </p>
        <br />
        <p>Let's get started!</p>
      </div>
    ),
  },
  {
    label: "VII. Confronting Fears through Imaginal Exposure",
    element: <VideoWatchStep src="https://youtu.be/7PDZU3b_DjY" />,
  },
  {
    label: `Well done on completing the module! Your dedication and effort are truly commendable. Keep up the fantastic work, and may this accomplishment inspire you to reach even greater heights on your journey ahead!`,
    element: (
      <div>
        <p>
          <b>Using Imaginal Exposure</b>
          <br />
          Going through these situations with Imaginal Exposure by imagining
          them first will help ease your fear to a level where you'll be able to
          face them better in real life. And whenever you find yourself in the
          real-life situation itself, remember to use any of the techniques
          you've acquired for emotion regulation, such as progressive muscle
          relaxation, to get yourself back in balance.
        </p>
        <br />
        <p>
          <b>Relaxing Your Muscles</b>
          <br />
          When you find yourself in the above mentioned situations, you can
          easily feel more calm and in control by using the progressive muscle
          relaxation exercise. Just tense your muscles for a few seconds, and
          you will automatically start relaxing.
        </p>
        <br />
        <p className="font-semibold italic">
          Practice Imaginal Exposure and Progressive Muscle Relaxation exercises
          over the next two days and then continue with the next module.
        </p>
        <p>
          Now, let’s bring a situation to your mind that has been making you
          anxious lately. It can be something you've worked with previously, or
          you can choose to work on something else.
        </p>
      </div>
    ),
  },
  {
    label: "VIII. Visualizing Your Ideal Life",
    element: <VideoWatchStep src="https://youtu.be/u9M6XywHZH4" />,
  },
  {
    label: `Hats off to you for wrapping up this module! Your commitment to personal growth shines bright. Take a moment to celebrate your achievement and know that you're one step closer to your goals. Keep up the fantastic work!`,
    element: (
      <div>
        <p>
          <b>Visualizing Your Ideal Life</b>
          <br />
          What kind of life do you truly desire? What feelings and relationships
          do you want to cultivate? By connecting with your ideal self through
          reflection or exercises like The Power of Self-Confidence, you can
          strengthen your motivation to step out of your comfort zone and align
          your actions with your values and desires.
        </p>
        <br />
        <p>
          <b>Becoming Stronger Than Your Fears</b>
          <br />
          In managing anxiety and fears, the goal isn't necessarily to make them
          disappear entirely. Instead, it's about building your capacity to face
          them. You become stronger, capable of making decisions aligned with
          your values and desires, even in the presence of fear.
        </p>
        <br />
        Practice The Power of Self-Confidence exercise over the next two days
        and then continue with the next module.
      </div>
    ),
  },
  {
    label: "IX.  Battle All Your Fears",
    element: <VideoWatchStep src="https://youtu.be/2koNcceU7Tw" />,
  },
  {
    label: `Kudos on completing this module! Your dedication to self-improvement is truly inspiring. Take a moment to pat yourself on the back for your hard work and progress. You're doing amazing things!`,
    element: (
      <div>
        <p>
          By facing your fears first within, you can now handle them better in
          real life. Don’t forget: it’s not important to avoid fearing something
          just to feel stronger than that fear. Practice these exercises
          whenever you need, and we are looking forward to see you on our last
          module to find deep inner guidance.
        </p>
        <br />
        Practice Imaginal Exposure and Progressive Muscle Relaxation exercises
        over the next two days and then continue with the next module.
      </div>
    ),
  },
  {
    label: "X. Become Your Own Guru",
    element: <VideoWatchStep src="https://youtu.be/TymwqxfoROY" />,
  },
];
