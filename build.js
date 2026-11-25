// Vercel build: writes public env vars into config.js for the static page.
const fs = require('fs');
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_PUBLISHABLE_KEY;
if (!url || !key) { console.error('SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY are required'); process.exit(1); }
fs.mkdirSync('dist', { recursive: true });
fs.copyFileSync('index.html', 'dist/index.html');
fs.writeFileSync('dist/config.js', `window.APP_CONFIG=${JSON.stringify({ SUPABASE_URL: url, SUPABASE_PUBLISHABLE_KEY: key })};\n`);
