import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: {
    file: './dist/react-maptalks.js',
    format: 'cjs',
  },
  external: ['react', 'maptalks', '@react-maptalks/core'],
  plugins: [
    nodeResolve({
      extensions: ['.tsx', '.ts', '.jsx', '.js']
    }),
    typescript({ tsconfig: './tsconfig.json' }),
    commonjs()
  ],
};
