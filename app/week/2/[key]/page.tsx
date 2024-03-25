import VideoWatchStep from "@/component/stepper/VideoWatchStep/VideoWatchStep";
import HorizontalLinearStepper from "@/component/stepper/stepper";

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
    <div className="w-full text-lg text-neutral-800 px-2 mx-2 py-10">
      <p className="text-3xl font-semibold">
        Great progress this week! You have taken time for yourself and your
        mental health, be really proud of yourself, as proud as we are of you!{" "}
      </p>
      <br />
      <p>
        <b>Find What You Are Ashamed Of and Love it To Death</b>
        <br />
        All of us are deeply imperfect, and yet we spend so much time hiding our
        faults and weaknesses. Putting on a mask of perfection is exhausting and
        prevents us from connecting deeply. Facing our „dark sides”, our
        mistakes, and all that we are not proud of might be hard at first, but
        this is the way to deep self-love. Real self-love is not: „I love myself
        if”; it is: „I love myself, even if”.
      </p>
      <br />
      <p>
        <b>Opening Up About Hidden Aspects</b>
        <br />
        Sharing what we've kept hidden can be liberating. By being authentic, we
        not only accept ourselves but also give others the chance to love us for
        who we truly are. Perfection may seem safe, but it's not relatable—it's
        our imperfections that make us human and connect us to others.
      </p>
      <br />
      You can practice this imagination exercise until next week's session. We
      hope you found the videos useful. If you would like to, you can share with
      us your experience, what you liked about it or how you will be able to use
      it in your everyday life! We are always happy to see the lives of others
      improved!
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
    label:
      "Welcome to the second week of the relaxation programme! We hope that you found the previous week's materials useful and that you are feeling the change in your life, feeling a more balanced life is waiting for you!",
    element: (
      <span>
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
      </span>
    ),
  },
  {
    label: "Relaxation self coach: IV. module",
    element: <VideoWatchStep src="https://youtu.be/eHZUItwQpnY" />,
  },
  {
    label: `Congratulations! You've reached the end of the fourth module in our program, and we're genuinely thrilled to see your dedication and progress toward your well-being. Remember, every time you participate in mindfulness exercises, you're actively nurturing your health and joy. Keep up the fantastic effort!`,
    element: (
      <div>
        <p>
          <b>When to Practice the Happy Place Exercise?</b>
          <br />
          Whenever you're in distress or need comfort, your inner happy place is
          always within reach. It's a tool you can use to calm down, distract
          yourself from stressful situations (like flying or distressing
          memories), or recharge and boost positive emotions when feeling down
          or hopeless.
        </p>
        <br />
        <p>
          <b>Rewiring Your Brain for Gratitude</b>
          <br />
          The more you make gratitude a habit, the more you'll naturally start
          noticing abundance in your life. Our brain focuses on what we train it
          to, and anxiety tends to make us focus on what's lacking or going
          wrong. But by recognizing even small things to be grateful for—like
          being able to take deep breaths or having food and shelter—we can
          rewire our brain for happiness.
        </p>
        <br />
        Practice Happy Place and Gratitude for the next two days, then continue
        with the next module.
      </div>
    ),
  },
  {
    label: "Relaxation self coach: V. module",
    element: <VideoWatchStep src="https://youtu.be/NWpb_nrU6FI" />,
  },
  {
    label: `Congratulations on completing the Safe place and sleep relaxation module! You've taken important steps towards finding peace and restfulness. Keep up the great work on your journey to better sleep and inner calm!`,
    element: (
      <div>
        <p>
          <b>When to Use the Safe Place Exercise?</b>
          <br />
          No matter what you're going through, there's always a place within you
          where you can feel safe. Remind yourself of this during moments of
          feeling unsafe, on edge, or anxious. Notice when you're out of
          balance, like during daily interactions, and if frustration overwhelms
          you, turn to your safe place before reacting. Practicing the happy
          place and safe place exercises several times is essential for facing
          fears, which you will do later in this course.
        </p>
        <br />
        <p>
          <b>Learning to See the World Differently</b>
          <br />
          Our perception of the world is influenced by our mood and focus. When
          we're sad or lonely, everything can seem dark, but by practicing
          positivity—like recalling happy memories, embracing gratitude, or
          connecting with others—we can see a world filled with possibilities
          for joy, even in challenging times.
        </p>
        <br />
        Practice the Safe Space exercise over the next two days and then
        continue with the next module.
      </div>
    ),
  },
  {
    label: "Relaxation self coach: VI. module",
    element: <VideoWatchStep src="https://youtu.be/6P1tWP-FipQ" />,
  },
];
