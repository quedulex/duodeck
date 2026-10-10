import { readdir, stat, copyFile } from 'node:fs/promises';

// Keep every executable asset fully readable by the marketplace's static scan.
for (const name of await readdir('dist')) {
  if (name.endsWith('.js') && (await stat('dist/' + name)).size > 512 * 1024) {
    throw new Error('Editor asset exceeds the marketplace scan limit: ' + name);
  }
}
await copyFile('dist/source.html', 'dist/index.html');
console.log('Editor assets fit the 512 KiB static scan limit.');
