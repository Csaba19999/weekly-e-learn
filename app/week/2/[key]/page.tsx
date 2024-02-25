import HorizontalLinearStepper from "@/component/stepper/stepper";

const steps = [
  {
    label: "Step 1",
    element: <div>asdasd 1</div>,
  },
  {
    label: "Step 2",
    element: <div>asdasd 2</div>,
  },
  {
    label: "Step 3",
    element: <div>asdasd 3</div>,
  },
  {
    label: "Step 4",
    element: <div>asdasd 4</div>,
  },
  {
    label: "Step 5",
    element: <div>asdasd 5</div>,
  },
];

export default function WeekTwo() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-24">
      <h1 className="w-full text-start text-3xl text-neutral-800 font-bold">
        Week 2
      </h1>
      <section className="bg-white w-full">
        <HorizontalLinearStepper finish={<p></p>} steps={steps} />
      </section>
    </main>
  );
}
