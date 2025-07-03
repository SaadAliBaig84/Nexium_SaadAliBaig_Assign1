import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
export default function QuoteSection({
  quotes,
  activeTopic,
}: {
  quotes: { text: string; topic: string }[];
  activeTopic: string;
}) {
  const topicImages = [
    "motivation",
    "life",
    "perseverance",
    "tech",
    "inspiration",
    "learning",
  ];

  return (
    <motion.section className="py-4 px-4 text-center" layout>
      <AnimatePresence mode="wait">
        {activeTopic && (
          <motion.h2
            key={activeTopic}
            layout
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold mb-3 text-[#F6B17A]"
          >
            Quotes on {activeTopic}
          </motion.h2>
        )}
      </AnimatePresence>

      {/* Preload background images */}
      {topicImages.map((topic) => (
        <Image
          key={topic}
          src={`/${topic}.jpg`}
          alt=""
          width={1}
          height={1}
          className="hidden"
          aria-hidden="true"
        />
      ))}

      <motion.div
        key={activeTopic}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          className="bg-[#2D3250] p-2 text-[#F6B17A] text-center"
          style={{
            backgroundImage: `url('/${activeTopic}.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <motion.div className="space-y-4 max-w-2xl mx-auto" layout>
            <AnimatePresence mode="wait">
              {quotes.length === 0 ? (
                <motion.div
                  key="no-quotes"
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <Card className="border-dashed border-2 border-[#7077A1] bg-[#424769] text-[#F6B17A]">
                    <CardContent className="p-8 italic">
                      No quotes yet. Please select a topic and generate quotes.
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                quotes.map((q, index) => (
                  <motion.div
                    key={q.text}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Card className="bg-[#424769] border border-[#7077A1] shadow-md rounded-2xl text-[#F6B17A] opacity-90">
                      <CardContent className="p-6">
                        <p className="text-xl italic leading-relaxed">
                          “{q.text}”
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </motion.div>
        </Card>
      </motion.div>
    </motion.section>
  );
}
