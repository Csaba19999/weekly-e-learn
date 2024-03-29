import VideoWatchStep from "@/component/stepper/VideoWatchStep/VideoWatchStep";
import HorizontalLinearStepper from "@/component/stepper/stepper";
import Image from "next/image";

export default function WeekOne() {
  return (
    <main className="w-full max-w-screen-xl flex min-h-screen flex-col items-center gap-6 p-6 mx-auto">
      <h2 className="w-full text-start text-3xl text-neutral-800 font-bold">
        Week 1
      </h2>
      <HorizontalLinearStepper finish={finish} steps={steps} />
    </main>
  );
}

const finish = (
  <div className="w-full text-lg text-neutral-800 px-2 mx-2 py-10">
    <p className="text-3xl font-semibold">
      Great progress this week! You have taken time for yourself and your mental
      health, be really proud of yourself, as proud as we are of you!
    </p>
    <br />
    <p>
      <b>Welcoming Thoughts and Feelings</b>
      <br />
      Mindfulness teaches us that our wellbeing lies in not attaching ourselves
      to our thoughts and feelings. No matter what we're going through, we can
      simply observe it and let it pass, like clouds, waves, or leaves floating
      on a river. You're not defined by your current situation—everything, even
      the toughest moments, will pass.
    </p>
    <p>
      <br />
      <b>It's Okay Not to Be Okay Sometimes</b>
      <br />
      Emotion regulation and wellbeing aren't about being calm all the time.
      Stress can be a helpful tool, aiding us in facing challenging situations
      and protecting us from the lasting effects of stressors. When you feel
      like you can't change things, simply accepting that you don't have to
      change them can be freeing. Embrace the mantra: "I trust my body and its
      responses; I am secure within myself."
    </p>
    <br />
    <p className="font-semibold italic">
      You can also practise progressive muscle relaxation and embracing
      imperfection until next week's session.
    </p>
    <br />
    <p>
      We hope you found the videos useful. If you would like to, you can share
      with us your experience, what you liked about it or how you will be able
      to use it in your everyday life! We are always happy to see the lives of
      others improved! <br />
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
    label: "Introduction",
    element: (
      <p className="whitespace-pre-line">
        {`Welcome to the first session of our relaxation and visualization program. In this session, we will guide you through various methods to induce relaxation so that you can choose the one that resonates with you the most. It is our belief that anyone can acquire the skills of relaxation and meditation, given appropriate guidance and practice. These techniques can be of great benefit to individuals to seeking to improve their `}
        <b>
          psychological well-being, reduce stress and anxiety, and enhance their
          overall quality of life.
        </b>
        {` Indeed, more complex tasks such as visualization and self-suggestion can be highly effective when one is able to reach a state of peaceful relaxation. Through focused attention and the power of suggestion, individuals can learn to tap into the deeper resources of their own subconscious minds, unlocking their potential for personal growth and transformation. ✨

But it is important to remember that these skills require patience and practice, and that progress may come gradually over time. With the right mindset, however, anyone can learn to master the art of relaxation and meditation, unlocking the full potential of their own inner resources and achieving a greater sense of well-being and fulfillment in their lives. `}
        <b>
          Just by doing these short exercises day by day, you will be able to
          handle stress much better in your life, and feel more at ease.
        </b>
        <Image
          src={"/devider.svg"}
          width={300}
          height={200}
          alt="kép----------------------------------------------------------------------------------------------------------------------------------------------------kép"
          className="max-w-full mx-auto my-4"
        />
        {`

First, find a quiet and peaceful place... It could be a room in your home or a serene outdoor space... The important thing is that it feels soothing to you... You don't need to eliminate all sounds, but choose a place where you can be comfortable and feel safe. Once you've found your spot, get into a comfortable position... You may want to lie down on your back or find a comfortable chair to sit in... Whatever position you choose, make sure you feel relaxed and at ease. Now that you're comfortable, let's explore different relaxation techniques. There are various methods that you can use to induce relaxation.

During our program, we will guide you through all of these techniques so that you can choose the one that resonates with you the most or combine them. Remember, this is your time to relax and unwind, so choose the method that feels most comfortable to you. Remember, the `}
        <b>
          key to success is consistent practice and a willingness to be patient
          with yourself
        </b>
        {` as you develop these skills. 

Enjoy the journey of self-discovery and personal growth as you explore the depths of relaxation and inner peace! ⭐️`}
        <br />
        <br />
        <b>How to Get the Best Out of This Experience?</b>
        <br />
        If you want to maximize the benefits of our relaxation program, we
        recommend that you practice the exercises daily. You don’t need to spend
        a lot of time on them, but try to integrate them into your daily life as
        a habit. Remember, only a few minutes of your day can significantly
        enhance your long-term quality of life. Invest this time in yourself to
        reduce stress, embrace life more effortlessly, and improve how your body
        functions.
      </p>
    ),
  },
  {
    label: "I. Facing Anxiety with Progressive Muscle Relaxation",
    element: <VideoWatchStep src="https://youtu.be/UvfmeLGPi_M" />,
  },
  {
    label: `You did it! You completed the first module! We are thrilled to see your
    progress and dedication. Remember, every time you practice,
    you are investing in your well-being. Keep up the great work!`,
    element: (
      <span>
        <p>
          <b>When to Practice Progressive Muscle Relaxation?</b>
          <br />
          Progressive muscle relaxation is a favorite among many clients dealing
          with high anxiety. It's a lifesaver during stressful times like exams,
          interviews, air travel, or public speaking. Whenever stress hits,
          simply give your muscles a quick squeeze, and your body and mind will
          naturally start to unwind. Pro Tip: You don't have to complete the
          entire exercise to feel the benefits. Customize it to any
          situation—whether you're commuting, waiting in line, or facing an
          exam. Focus on just one or two muscle groups at a time, like your
          fists, belly, or legs, for a few seconds, then release and repeat.
          This way, you can regain your balance without anyone even noticing.
        </p>
        <br />
        <p>
          <b>When to Utilize This Tool?</b>
          <br />
          This exercise is beneficial in any scenario but especially handy
          during moments of anxiety. Signs that you may need it include racing
          thoughts, dwelling on past or future events, feeling overwhelmed,
          restless, or experiencing physical symptoms like muscle tension, a
          rapid heart rate, difficulty breathing, or insomnia.
        </p>
        <br />
        <p>
          <b>Heal Your Nervous System, Heal Your Life</b>
          <br />
          If you struggle with sleep, rest, chronic health issues, or constant
          worrying, your nervous system might be dysregulated, stuck in a
          sympathetic state. This means your body may sense danger even when
          there's none. By adopting new habits that release frustration and
          promote relaxation, you're helping your body and mind find balance
          again. Remember, consistency is key. Simple habits of slowing down and
          relaxing, even for a few minutes each day, can make a significant
          difference in healing your nervous system.
        </p>
        <br />
        <p className="font-semibold italic">
          Practice the progressive muscle relaxation exercise for the following
          two days, then continue to the next module.
        </p>
      </span>
    ),
  },
  {
    label: "II. Techniques for Emotional Regulation",
    element: <VideoWatchStep src="https://youtu.be/5KniEQ3gxM0" />,
  },
  {
    label: `Congratulations! You've successfully completed the second module of our program, and we're truly excited to witness your progress and commitment to your well-being. It's important to recognize that each time you engage in relaxational practices, you're actively investing in your overall health and happiness. Keep up the excellent work!`,
    element: (
      <div>
        <p>
          <b> What Works Best For You?</b>
          <br />
          Reflect on your experiences after each module. Which technique have
          you found most beneficial? Different techniques work for different
          individuals, and the context may also influence their efficacy.
          Therefore, keep trying them to find what suits you best and to enhance
          your emotional regulation toolbox.
        </p>
        <br />
        <p>
          <b>Mastering Your Emotions</b>
        </p>
        As you practice these exercises, you'll feel more in control of your
        feelings. No matter what life throws your way, having the skills to find
        your emotional balance will make everything feel more manageable.
        Building this solid foundation within yourself is crucial, ensuring that
        no matter what changes, you'll always have your own back. This will make
        you be able to keep going for the life you desire.
        <br />
        <p>
          <b> Crafting Your Emotion Toolbox</b>
          <br />
          Recalling these techniques in times of need can be a challenge. One
          trick is to create a list of the techniques you're learning in this
          program and keep it handy. Stick it on your phone, jot it down in your
          notes, or tuck it into your wallet. The next time tension strikes,
          you'll be armed with the tools you need to ease it.
        </p>
        <br />
        <p>
          <b> Noticing when you are tense</b>
          <br />
          Key to cultivating inner peace is recognizing when frustration and
          imbalance start to set in. Try this exercise: Rate your tension level
          from 0-5. If it hits 3 or above, try one of your emotion regulation
          tools. If one doesn't quite do the trick, don't worry—there's always
          another waiting in the wings. Emotions are like visitors, they come
          and go, if we let them. You do not need to bring the level of tension
          down to zero, just notice that you are able to have an effect on how
          you are feeling.
        </p>
        <br />
        <p className="font-semibold italic">
          Practice these relaxation exercises for the next two days and then
          continue with the next module.
        </p>
      </div>
    ),
  },
  {
    label: "III. Embracing Mindfulness and Acceptance",
    element: (
      <VideoWatchStep src="https://www.youtube.com/watch?v=JmQhQnLzvXk" />
    ),
  },
];
