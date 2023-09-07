import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts'
  },
  shims: true,
  sourcemap: false,
  publicDir: 'public',
  dts: true,
  splitting: false,
  clean: true,
  minify: true,
  format: ['esm', 'cjs']
});
