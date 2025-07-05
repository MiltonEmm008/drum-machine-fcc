import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isProduction = command === 'build';
  const base = isProduction ? "/drum-machine-fcc/" : "/";
  
  return {
    plugins: [react()],
    base,
  };
});