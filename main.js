import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";

function handleRequest() {
  // Respond with HTML

  const html = await Deno.readFile("./index.html");

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=UTF-8",
    },
  });
  
}

await listenAndServe(":8080", handleRequest);
