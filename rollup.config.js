import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';

const name = 'wing-timer';
const input = `src/index.ts`;

export default [
  {
    input,
    output: [{ file: `dist/index.d.ts`, format: 'es' }],
    plugins: [dts()],
  },
  {
    input,
    output: [{ file: `dist/index.es.js`, format: 'es' }],
    plugins: [terser(), typescript()],
  },
  {
    input,
    output: [{ file: `dist/index.cjs.js`, format: 'cjs' }],
    plugins: [terser(), typescript()],
  },
  {
    input,
    output: [{ file: `dist/index.umd.js`, format: 'umd', name: name.replaceAll(/-|\./g, '_') }],
    plugins: [terser(), typescript()],
  },
];
