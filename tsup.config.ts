import { defineConfig } from "tsup";
import { pathAliasPlugin } from './scripts/esbuild/path-alias-plugin';

export default defineConfig([
  // Bundle each component in the `src/components` directory as an ES module
  {
    clean: true,
    sourcemap: true,
    entry: ['src/components/**/!(index).ts?(x)'],
    format: ['esm'],
    dts: true,
    external: ['react', 'react-dom'],
    outDir: 'dist/components',
    splitting: true,
    treeshake: true,
    esbuildOptions(options) {
      options.outbase = "./src/components";
      options.jsx = 'automatic';
    }
  },
  // Bundle main export file
  {
    clean: true,
    sourcemap: true,
    entry: ['src/index.ts'],
    bundle: false,
    format: ['esm'],
    dts: true,
    outDir: 'dist',
    esbuildPlugins: [
      pathAliasPlugin({
        '@/components': './components',
      }),
    ],
    esbuildOptions(options) {
      options.outbase = "./src";
    }
  }
]);
