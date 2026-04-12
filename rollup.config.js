import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import livereload from 'rollup-plugin-livereload'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/test.js',
  output: {
    file: `public/components.js`,
    format: 'iife',
    name: 'components',
  },
  plugins: [
    svelte({
      emitCss: false,
      compilerOptions: {
        dev: !production,
      },
    }),
    resolve({ browser: true }),
    commonjs(),
    !production && livereload('public'),
  ],
}
