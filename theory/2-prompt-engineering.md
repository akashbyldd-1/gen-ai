## Resources: 
- Open AI article - Best practices for prompt engineering with the open ai api - [https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api]
- Prompt engineering guide - [https://www.promptingguide.ai/] 

# What is Prompt engineering ?

Techniques to imrove or get better response from LLM thats it.
In other words llm language

LLM Limitation-
Output is not fixed
Diff llm gives diff output 


# Types of prompting
1.  Zero Shot prompting
  Query direct without any example
  ex- Translate "Hello" to French.

2. Few Shot Prompting
  - We dont query directly while Give examples before asking.
  - Give a brief examples to train the llm in prompt itself

3. Chain of thought prompting (this techniques give reasoning power to llm)
  - Example + give reasoning power both 
 
4. Role prompting or persona prompting
  - Assign a persona or role to guide behavior.
  - You are a senior JavaScript developer. Explain closures to a beginner with code examples.


# Few others tip for prompting

- use markdown formatting
- Put instruction at the beginning
- Be explicit and as descriptive as possible about answer or response 
   - JSON format or something else
- Assign role and define constrain
-    

# General Prompt template
  Role/Persona: [Specify who the AI should act as]
  Task/Instruction: [Clearly describe what you want the AI to do]
  Input/Context: [Provide necessary context or data the AI should consider]
  Constraints: [Word limit, format, tone, style, or special rules]
  Examples (Optional): [Give 1–3 examples of expected output]
  Output Format: [JSON, bullet points, table, plain text, etc.]
  Additional Notes (Optional): [Any special instructions or clarifications]

  Role/Persona: You are a senior JavaScript developer.
  Task/Instruction: Provide a code snippet to solve the following problem.
  Input/Context: Reverse a string without using built-in functions.
  Constraints: Explain each step in comments.
  Output Format: JavaScript code
  Additional Notes: Keep code simple and readable.
