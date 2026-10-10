import { defineConfig } from 'vite';
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist', emptyOutDir: true, assetsDir: '', assetsInlineLimit: 0,
    rolldownOptions: {
      input: 'source.html',
      output: {
        entryFileNames: 'bundle.js',
        chunkFileNames: 'chunk-[name]-[hash].js',
        assetFileNames: '[name]-[hash][extname]',
        strictExecutionOrder: true,
        codeSplitting: { groups: [{
          name: 'vendor', test: /node_modules/, maxSize: 180000,
          includeDependenciesRecursively: false
        }] }
      }
    }
  }
});
