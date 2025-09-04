export async function POST(req: Request) {
  try {
    const body = await req.json();
    const text = "Explain gita chapter 4";

    console.log(body);

    return Response.json({ message: "Hello from POST chatbot" });
  } catch (error) {
    console.log(error);
    return;
  }
}
