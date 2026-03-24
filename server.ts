import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Mock API Routes
  app.get("/api/products", (req, res) => {
    // This will be populated with real mock data later
    res.json([
      { id: 1, name: "Lacnor Full Cream Milk", category: "Milk", price: 12.50 },
      { id: 2, name: "Lacnor Orange Juice", category: "Juices", price: 8.00 },
    ]);
  });

  app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      res.json({ token: "mock-jwt-token", user: { email, name: "John Doe" } });
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
