// Configuração básica do servidor HTTP e dos arquivos estáticos.
const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;
const clientDir = path.join(__dirname, "..", "client");

// Tipos MIME usados para servir os arquivos corretamente.
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

// Cria o servidor e define como as rotas serão tratadas.
const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  let pathname = requestUrl.pathname;

  // Mapeia as rotas principais para os arquivos corretos.
  if (pathname === "/") {
    pathname = "/cadastro.html";
  } else if (pathname === "/login") {
    pathname = "/login.html";
  } else if (pathname === "/cadastro") {
    pathname = "/cadastro.html";
  } else if (pathname === "/home") {
    pathname = "/home.html";
  } else if (pathname === "/perfil") {
    pathname = "/perfil.html";
  }

  // Garante um caminho seguro antes de localizar o arquivo.
  const safePath = path.normalize(pathname).replace(/^((\.\.[/\\])+)/, "");
  const filePath = path.join(clientDir, safePath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";

  // Lê o arquivo solicitado e envia a resposta correta.
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Arquivo não encontrado.");
      } else {
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Erro interno do servidor.");
      }
      return;
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  });
});

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
