import VideoWatchStep from "@/component/stepper/VideoWatchStep/VideoWatchStep";
import HorizontalLinearStepper from "@/component/stepper/stepper";

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
        {`In the first session of our relaxation and visualization program, we introduced various methods to induce relaxation. We emphasized the importance of patience and practice in mastering these skills, highlighting their potential benefits for psychological well-being, stress reduction, and overall life quality. Throughout the session, we guided you through different relaxation techniques, such as focusing on breathing, systematically relaxing muscles, and using a mantra to quiet the mind. We encouraged you to find a quiet and comfortable place where you could fully relax and explore these techniques. As you continue this journey, remember that consistent practice and patience are key to success.\n\nIn the second session, we delved deeper into the process of systematically relaxing major muscle groups. We encouraged you to find a quiet and comfortable place where you could fully relax and settle in. We guided you to take deep breaths to release any tension or stress and to bring your attention to each muscle group, starting from your feet and moving up to your head. As you focused on each area, we encouraged you to let go of any tension or stress with each exhale, feeling the muscles becoming more relaxed. We reminded you that you can return to this state anytime you need to feel more centered and at peace.\n\nIn the third session, we introduced the use of a mantra as a tool to aid in relaxation. We guided you to find a quiet and comfortable place where you could fully relax, close your eyes, and take deep breaths to release any tension or stress. We encouraged you to bring your attention to your breath, noticing the way it feels as it enters and leaves your body. We introduced the use of a word or phrase that resonates with you, repeating it silently with each inhale and exhale. As you continued to repeat your word or phrase, we encouraged you to allow yourself to sink deeper and deeper into a state of peaceful relaxation.\n\nIn the fourth session, we focused on a specific breathing exercise to help you calm yourself, shift your attention away from your surroundings, and quiet your mind. We guided you to find a comfortable position and start paying attention to your breath, observing the natural rhythm of your inhales and exhales. We encouraged you to focus on the gentle inhalation and exhalation of your breath, noticing how the inhale is different from the exhale. We guided you to breathe a little deeper, filling the lower part of your lungs, and observing how the air feels cooler when you inhale and warmer when you exhale. We encouraged you to focus on inhaling the air slowly and deeply, feeling it flow in and fill your entire lungs, and then exhale slowly. We encouraged you to keep focusing on your breathing and remain in this relaxed state for as long as you need it.\n\nAs you continue on this journey, take time to practice these techniques regularly, integrating them into your daily routine. Remember that the key to success lies in consistent practice and a willingness to be patient with yourself. Enjoy the journey of self-discovery and personal growth as you explore the depths of relaxation and inner peace.`}
      </p>
    ),
  },
  {
    label: "Relaxation self coach: I. module",
    element: (
      <VideoWatchStep src="https://www.youtube.com/watch?v=liKa5miYrbk" />
    ),
  },
  {
    label: `You did it! You completed the first module! We are thrilled to see your
    progress and dedication. Remember, every time you practice mindfulness,
    you are investing in your well-being. Keep up the great work!`,
    element: null,
  },
  {
    label: "Relaxation self coach: II. module",
    element: (
      <VideoWatchStep src="https://www.youtube.com/watch?v=liKa5miYrbk" />
    ),
  },
  {
    label: `Congratulations! You've successfully completed the second module of our program, and we're truly excited to witness your progress and commitment to your well-being. It's important to recognize that each time you engage in mindfulness practices, you're actively investing in your overall health and happiness. Keep up the excellent work!`,
    element: null,
  },
  {
    label: "Relaxation self coach: III. module",
    element: (
      <VideoWatchStep src="https://www.youtube.com/watch?v=liKa5miYrbk" />
    ),
  },
];
