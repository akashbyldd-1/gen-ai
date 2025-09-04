import axios from "axios";

export async function GET(request: Request) {
  return Response.json({ message: "Hello from GET" });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const text = body.data;

    if (!text) {
      return Response.json({ message: "No text provided" }, { status: 400 });
    }

    const HF_API_KEY = process.env.HF_API_KEY;
    const url =
      "https://api-inference.huggingface.co/models/facebook/bart-large-cnn";

    const data = await axios.post(
      url,
      {
        inputs: text,
        // parameters: {
        //   max_length: 50,
        //   min_length: 30,
        // },
      },
      {
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const summary = data.data[0].summary_text || "";

    return Response.json({ summary }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  return Response.json({ message: "Hello from PUT" });
}

export async function DELETE(request: Request) {
  return Response.json({ message: "Hello from DELETE" });
}

export async function PATCH(request: Request) {
  return Response.json({ message: "Hello from PATCH" });
}
