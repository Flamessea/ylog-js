import resolve from 'rollup-plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
export default {
    input: './src/index.ts',
    output: [
        {
            format: 'cjs',
            file: 'dist/ylog-js.cjs.js',
            name: 'ylog-js' // 打包后的默认导出文件名称
        },
        {
            format: 'esm',
            file: 'dist/ylog-js.esm.js',
            name: 'ylog-js'
        },
        {
            format: 'umd',
            file: 'dist/ylog-js.umd.js',
            name: 'ylog-js',
            minifyInternalExports: true
        }
    ],
    plugins: [typescript({ tsconfig: './tsconfig.json' }), resolve()]
}