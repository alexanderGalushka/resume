import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";

async function handleRequest(_req) {
  // Respond with HTML

  const html = await Deno.readFile("./index.html");

  return new Response(html, {
    status: 200,
    headers: {
      "content-type": "text/html",
    },
  });
  
}

await listenAndServe(":8080", handleRequest);
