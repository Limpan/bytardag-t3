import path from 'path'
import { configDefaults, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    alias: {
      '@app': path.resolve(__dirname, './src'),
    },
    environment: 'jsdom',
    env: {
      NEXTAUTH_URL: 'https://localhost',
    },
    exclude: [...configDefaults.exclude, '**/.devcontainer/**', '*.stories.(t|j)sx?', 'e2e/**'],
    // setupFiles: ['./tests/setup.ts'],
    coverage: {
      all: true,
      include: ['src/**'],
      exclude: [
        ...configDefaults.coverage.exclude!,
        '.devcontainer/**',
        '.storybook/**',
        '__mocks__/**',
        '**/*{.,-}{stories,spec}.{js,cjs,mjs,ts,tsx,jsx}',
      ],
      provider: 'istanbul',
      reporter: ['text', 'html'],
    },
  },
});

