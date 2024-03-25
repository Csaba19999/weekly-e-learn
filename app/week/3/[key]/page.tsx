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
    <div className="w-full text-xl text-neutral-800 font-semibold px-2 mx-2 py-10">
      <p className="text-3xl">
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
    label: "",
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
    element: (
      <div>
        <p>
          <b>Using Imaginal Exposure</b>
          <br />
          Our brain doesn’t know the difference between what we imagine and what
          truly is. Therefore, if we have any situation in our life that is
          causing us an excessive amount of fear or anxiety, we can start facing
          it by encountering it first within our mind. Create a list of things
          or situations that make you stressed, but you could have a more
          fulfilling life facing them. For example, are you afraid to go to that
          class for the first time? Speaking in front of people freaks you out?
          You would love to travel to new places, but are scared to take the
          plane?
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
        Practice Imaginal Exposure and Progressive Muscle Relaxation exercises
        over the next two days and then continue with the next module.
      </div>
    ),
  },
  {
    label: "Relaxation self coach: VIII. module",
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
    label: "Relaxation self coach: IX. module",
    element: <VideoWatchStep src="https://youtu.be/2koNcceU7Tw" />,
  },
  {
    label: `Kudos on completing this module! Your dedication to self-improvement is truly inspiring. Take a moment to pat yourself on the back for your hard work and progress. You're doing amazing things!`,
    element: (
      <div>
        <p>
          <b>Using Imaginal Exposure </b>
          <br />
          Our brain lacks the ability to discern between imagined scenarios and
          actual experiences. Hence, when faced with situations inducing
          excessive fear or anxiety, we can initiate confrontation by first
          encountering them within our imagination. Compile a list of
          stress-inducing circumstances or scenarios that, if addressed, could
          lead to a more fulfilling life. For instance, are you anxious about
          attending a new class? Does the thought of public speaking trigger
          distress? Perhaps you harbor a desire to explore new destinations but
          fear boarding a plane.
        </p>
        <br />
        <p>
          <b>Relaxing Your Muscles </b>
          <br />
          Amidst the aforementioned situations, you can cultivate a sense of
          calm and control by employing the progressive muscle relaxation
          exercise. Simply tense your muscles for a brief duration, and
          relaxation will naturally ensue.
        </p>
        <br />
        Practice Imaginal Exposure and Progressive Muscle Relaxation exercises
        over the next two days and then continue with the next module.
      </div>
    ),
  },
  {
    label: "Relaxation self coach: X. module",
    element: <VideoWatchStep src="https://youtu.be/TymwqxfoROY" />,
  },
];
