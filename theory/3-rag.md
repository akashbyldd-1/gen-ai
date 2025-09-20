##  RAG
What is RAG?
Why and when to use it?
How does it work?

# What is RAG

Retrieval - takes user query and search to db(knowledge base) and Retrieve the most relevant chunk
Augmented - The LLM will generate with this retrieval data set not memory
Generated - LLM generates the response


# Why and when to use it?

LLM Limitation:-

- Hallucination - generates false and misleading information
- Insufficient or stale data - Only trained data they can return 
- Overloaded Context Window -


we can solve these problem by using RAG

It consume data(we will set) create chunks and embeddings and save in vector db

RAG combines embedding model and generative model(LLM) both

# Frameworks:-
Amazon Bed rock (fully managed service)
Sematic kernel Microsoft
llamindex
Langchain


# How does it work or workflow

1. Prepare the Data set - example file, doc, pdf or JSON
2. Create embedding of the data set (use open ai embedding model, or huggingface)
3. Store embedding in DB (vector database- PineCone, chroma db) as they Vector DB allow semantic similarity search which is curcial for RAG 
4. Get Query from user
5. Pre process(edit user query if any imrovement scope is there) 
6. Turn it into vector embedding using same model
7. Retrive relevant content from Vector DB (using semantic(context based search rather than exact keyword) searching)
8. Feed this(Retrieval content) to LLM
9. Get back response from llm send to the user

# Hands on - AI Chatbot

