import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
export default function ActionSection({ onclick }: { onclick: () => void }) {
  return (
    <section className="py-4 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-6">Need more wisdom?</h2>
      <Button
        size="lg"
        onClick={onclick}
        className="bg-[#F6B17A] hover:bg-[#e79d64] text-[#2D3250]"
      >
        Generate Quotes
      </Button>
    </section>
  );
}
