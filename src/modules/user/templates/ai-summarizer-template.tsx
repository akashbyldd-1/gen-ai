"use client";
import { Textarea } from "@/components/ui/textarea";
import DotBackground from "../components/dot-bg";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useAIAPI from "../hooks/useAI";

interface IFormInput {
  text: string;
  summarizedText: string;
}

const schema = z.object({
  text: z.string().min(1, { message: "Min 150 words is required" }),
  summarizedText: z.string(),
});

const AISummarizerTemplate = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(schema),
  });

  const { useAISummarizer } = useAIAPI();
  const { isPending } = useAISummarizer;

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    const { text } = data;

    toast("Summarizing...", {
      description: "This may take a few seconds",
      duration: 3000,
      position: "top-right",
    });
    useAISummarizer.mutate(text, {
      onSuccess: (data) => {
        setValue("summarizedText", data.summary);
      },
      onError: (error) => {
        toast("Error summarizing text", {
          description: error.message,
          duration: 3000,
          position: "top-right",
        });
      },
    });
  };

  return (
    <>
      {/* <DotBackground /> */}
      <h1 className="text-3xl font-bold text-gray-800 mt-2 mb-6">
        AI Text Summarizer
      </h1>
      <div className="grid grid-cols-3 gap-6">
        <form
          className="col-span-2 flex flex-col space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Textarea
            className="min-h-[70vh] p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Paste your text here"
            {...register("text")}
          />
          {errors.text && <p className="text-red-500">{errors.text.message}</p>}
          <div className="flex justify-end">
            <Button variant="outline" disabled={isPending}>
              {isPending ? "Please wait..." : "Summarize Text"}
            </Button>
          </div>
        </form>

        <div className="col-span-1">
          <Textarea
            className="min-h-[70vh] p-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-800"
            placeholder="Your summarized text will appear here..."
            {...register("summarizedText")}
          />
        </div>
      </div>
    </>
  );
};

export default AISummarizerTemplate;
