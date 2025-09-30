import { defineConfig} from "vite";
import dotenv from "dotenv";
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
