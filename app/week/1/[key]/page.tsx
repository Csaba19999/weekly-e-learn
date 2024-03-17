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
  <div>
    <p className="w-full text-xl text-neutral-800 font-semibold px-2 mx-2 py-10">
      Great progress this week! You have taken time for yourself and your mental
      health, be really proud of yourself, as proud as we are of you! We hope
      you found the videos useful. If you would like to, you can share with us
      your experience, what you liked about it or how you will be able to use it
      in your everyday life! We are always happy to see the lives of others
      improved! <br />
      <a
        className="text-blue-500 font-normal underline"
        href="https://docs.google.com/forms/d/1guoUR9B_d6vI3BHOfkWCg6xn0uxKAfrbR9oJg45ZXCQ/edit"
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
          src={"/No_image_available.svg.png"}
          width={300}
          height={200}
          alt="kép----------------------------------------------------------------------------------------------------------------------------------------------------kép"
          className="max-w-full mx-auto my-4"
        />
        {`

First, find a quiet and peaceful place... It could be a room in your home or a serene outdoor space... The important thing is that it feels soothing to you... You don't need to eliminate all sounds, but choose a place where you can be comfortable and feel safe. Once you've found your spot, get into a comfortable position... You may want to lie down on your back or find a comfortable chair to sit in... Whatever position you choose, make sure you feel relaxed and at ease. Now that you're comfortable, let's explore different relaxation techniques. There are various methods that you can use to induce relaxation. One common technique is to `}
        <b>focus on your breathing.</b>
        {` Let's try this now. You can start by taking a deep breath in through your nose (3 seconds) and exhaling slowly through your mouth (4 seconds). Pay attention to your breath, and let your body relax with each exhale... Another technique is to `}
        <b>focus on your body and relax your muscles systematically.</b>
        {` You may start with your feet and work your way up to your head. You can also try repeating a word or phrase that reminds you of a peaceful place or feeling. This technique is called a `}
        <b>mantra</b>
        {`, and it can help you quiet your mind and focus on relaxation. In addition to these, you will be introduced to a number of other techniques during the programme. 🌟

During our program, we will guide you through all of these techniques so that you can choose the one that resonates with you the most or combine them. Remember, this is your time to relax and unwind, so choose the method that feels most comfortable to you. I hope this session has provided you with a solid foundation for exploring the practice of relaxation and meditation. Remember, the `}
        <b>
          key to success is consistent practice and a willingness to be patient
          with yourself
        </b>
        {` as you develop these skills. 

Enjoy the journey of self-discovery and personal growth as you explore the depths of relaxation and inner peace! ⭐️`}
      </p>
    ),
  },
  {
    label: "Relaxation self coach: I. module",
    element: <VideoWatchStep src="https://youtu.be/UvfmeLGPi_M" />,
  },
  {
    label: `You did it! You completed the first module! We are thrilled to see your
    progress and dedication. Remember, every time you practice mindfulness,
    you are investing in your well-being. Keep up the great work!
    
    We recommend that you wait a day or two before starting the next module, but in the meantime you can practice the exercises from the previous module again. Listen to your own inner world and go at a pace that is comfortable for you, even if it's a few times a week or all the days of the week!`,
    element: null,
  },
  {
    label: "Relaxation self coach: II. module",
    element: <VideoWatchStep src="https://youtu.be/5KniEQ3gxM0" />,
  },
  {
    label: `Congratulations! You've successfully completed the second module of our program, and we're truly excited to witness your progress and commitment to your well-being. It's important to recognize that each time you engage in mindfulness practices, you're actively investing in your overall health and happiness. Keep up the excellent work!
    \n\nWe recommend that you wait a day or two before starting the next module, but in the meantime you can practice the exercises from the previous module again. Listen to your own inner world and go at a pace that is comfortable for you, even if it's a few times a week or all the days of the week!`,
    element: null,
  },
  {
    label: "Relaxation self coach: III. module",
    element: (
      <VideoWatchStep src="https://www.youtube.com/watch?v=JmQhQnLzvXk" />
    ),
  },
];
