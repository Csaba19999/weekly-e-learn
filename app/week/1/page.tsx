import HorizontalLinearStepper from "@/component/stepper/stepper";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-24">
      <h1 className="w-full text-start text-3xl text-neutral-800 font-bold">
        Week 1
      </h1>
      <HorizontalLinearStepper />
    </main>
  );
}
