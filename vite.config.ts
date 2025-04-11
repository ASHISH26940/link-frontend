import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "vite-tsconfig-paths"
import {config} from "dotenv";
// No ESM shenanigans needed with .ts Vite config — TS handles CommonJS just fine
config();
export default defineConfig({
  plugins: [tailwindcss(), react(),path()],
  define:{
    'process.env':process.env
  }
})
