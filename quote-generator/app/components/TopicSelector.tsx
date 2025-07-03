"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  topic: z.string().min(1, {
    message: "Please enter or select a topic",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const availableTopics = [
  "motivation",
  "life",
  "tech",
  "learning",
  "inspiration",
  "perseverance",
];

export function TopicForm({ onSubmit }: { onSubmit: (topic: string) => void }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
    },
  });

  const handleSubmit = (data: FormValues) => {
    onSubmit(data.topic.trim().toLowerCase());
    form.reset();
  };

  return (
    <Card className="bg-[#2D3250] text-[#F6B17A] border-[#7077A1] shadow-lg max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-center">
          Find Quotes by Topic
        </CardTitle>
        <p className="text-sm mt-2 text-[#F6B17A] text-center">
          Please select a topic from the options below or enter one manually.
          Only the following topics are currently supported:
        </p>
      </CardHeader>

      <CardContent>
        {/* Available topics as buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {availableTopics.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => form.setValue("topic", t)}
              className="bg-[#424769] text-[#F6B17A] px-3 py-1 rounded-md text-sm hover:bg-[#7077A1] transition"
            >
              {t}
            </button>
          ))}
        </div>

        {/* Form input */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#F6B17A]">
                    Or type the topic here:
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. motivation"
                      {...field}
                      className="bg-[#424769] text-[#F6B17A] border-[#7077A1]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="bg-[#F6B17A] text-[#2D3250] hover:bg-[#e79d64] w-full font-semibold"
            >
              Generate Quotes
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
