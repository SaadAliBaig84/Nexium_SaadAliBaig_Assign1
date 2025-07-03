"use client";
import HeaderSection from "@/components/HeaderSection";
import QuoteSection from "@/components/QuoteSection";
import ActionSection from "@/components/ActionSection";
import { useState } from "react";
import { TopicForm } from "./components/TopicSelector";
import { quotes } from "./data/quotes";
import { motion } from "framer-motion";

export default function HomePage() {
  const [selectedTopic, setSelectedTopic] = useState("");

  const filteredQuotes = quotes
    .filter((q) => q.topic == selectedTopic)
    .slice(0, 3);

  return (
    <main className="px-4 py-4 w-full min-h-screen mx-auto  bg-animated-gradient text-[#F6B17A]">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="items-center justify-center text-cente text-[#F6B17A]"
      >
        <HeaderSection />
        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          <div className="w-full lg:w-1/4 space-y-6">
            <TopicForm onSubmit={setSelectedTopic} />
          </div>
          <div className="w-full lg:w-3/4">
            <QuoteSection quotes={filteredQuotes} activeTopic={selectedTopic} />
          </div>
        </div>
      </motion.section>
    </main>
  );
}
