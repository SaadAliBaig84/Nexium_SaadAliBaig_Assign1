import { Quote } from "lucide-react";
export default function HeaderSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-4 ">
      <Quote></Quote>
      <h1 className="text-5xl font-bold">Random Quote Generator</h1>
    </section>
  );
}
