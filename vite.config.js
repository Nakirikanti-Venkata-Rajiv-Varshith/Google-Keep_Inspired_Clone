import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE :-
// FOR GIT Pages use [npm run build -- --mode production] -- so uses Google-keep.. domain
// For Docker use [RUN npm run build] -- so it uses "/"

export default defineConfig(({ mode }) => ({
  base: mode === "production"
    ? "/Google-Keep_Inspired_Clone/"
    : "/",
  plugins: [react()],
}))

