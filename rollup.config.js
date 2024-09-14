import { terser } from 'rollup-plugin-terser';
const name = '$WingAsyncRetry';

export default {
  input: 'temp/index.js',
  output: [
    {
      file: 'dist/wing-timer.js',
      format: 'umd',
      name,
    },
    {
      file: 'dist/wing-timer.es.js',
      format: 'es',
    },
    {
      file: 'dist/wing-timer.amd.js',
      format: 'amd',
    },
    {
      file: 'dist/wing-timer.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/wing-timer.iife.js',
      format: 'iife',
      name,
    },
  ],
  plugins: [terser()],
};
