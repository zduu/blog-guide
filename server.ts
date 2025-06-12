// Deno 服务器文件
import { serve } from "https://deno.land/std@0.208.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.208.0/http/file_server.ts";

const PORT = 8000;

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  
  // 处理根路径
  if (url.pathname === "/") {
    try {
      const html = await Deno.readTextFile("./index.html");
      return new Response(html, {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "no-cache",
        },
      });
    } catch (error) {
      console.error("Error reading index.html:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  }
  
  // 处理静态文件
  try {
    return await serveDir(req, {
      fsRoot: ".",
      urlRoot: "",
      showDirListing: false,
      enableCors: true,
    });
  } catch (error) {
    console.error("Error serving static file:", error);
    return new Response("Not Found", { status: 404 });
  }
}

console.log(`🚀 服务器启动成功！`);
console.log(`📱 本地访问: http://localhost:${PORT}`);
console.log(`🌐 网络访问: http://0.0.0.0:${PORT}`);
console.log(`⏹️  停止服务器: Ctrl+C`);

await serve(handler, { 
  port: PORT,
  onListen: ({ port, hostname }) => {
    console.log(`✅ 服务器正在监听 ${hostname}:${port}`);
  }
});
