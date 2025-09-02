import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAIAPI = () => {
  const useAISummarizer = useMutation({
    mutationFn: async (text: string) => {
      const response = await axios.post("/api/ai-summarize", { data: text });
      return response.data;
    },
    onSuccess: () => {},
    onError: () => {},
  });
  // return useQuery({
  //   queryKey: ["ai-summarizer"],
  //   queryFn: async () => {
  //     const response = await axios.get("/api/about");
  //     return response.data;
  //   },
  //   enabled: true,
  //   refetchOnWindowFocus: false,
  // });

  return { useAISummarizer };
};

export default useAIAPI;
