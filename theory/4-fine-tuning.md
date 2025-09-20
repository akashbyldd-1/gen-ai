## Fine Tuning

What is fine tuning?
Why and when to use it?
How does it work?

# Fine tuning ?
 - Adapting a pre trained model(GPT, llama) for a specific domain or task
 - Instead training a model from scract we pick a general purpose model and make it as per our use case
  ex- ChatGpt fine tuned on indian Law - becomes llb specialist or advocate
 
 # Why do we need fine tuning ?
 - Domain adoption  
 - Task specialization
 - Reduce hallucination - train on the real data which u will query
 - Model respond on desired style and custom behavior


 # How to fine tune a model - work flow

4️⃣ How to Fine-Tune a Model

1. Prepare Dataset

Collect domain-specific data (text, Q&A pairs, documents).

Clean and structure the data.

Convert to proper format (JSONL, CSV, or whatever the model requires).

2. Choose Model

Large pre-trained model (GPT, LLaMA, Falcon, etc.)

Consider parameter-efficient fine-tuning (LoRA, PEFT) if resources are limited.

3. Fine-Tuning Process

Train the model on your dataset using supervised learning.

Adjust hyperparameters: learning rate, batch size, number of epochs.

Validate on a held-out dataset to check performance.

4. Evaluate & Test

Test on unseen data.

Measure accuracy, relevance, and hallucination rate.

5. Deploy & Integrate

Replace or complement the base LLM in your pipeline or application.

Monitor performance and retrain periodically if needed.
