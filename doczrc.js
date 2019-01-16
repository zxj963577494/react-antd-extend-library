import { css } from 'docz-plugin-css';

export default {
  src: './mdx',
  dest: './docs',
  base: '/react-antd-extend-library',
  title: 'React Antd Extend Library',
  description: 'Enhanced Ant Design Components',
  codeSandbox: false,
  hashRouter: true,
  plugins: [
    css(),
    css({
      preprocessor: 'less',
      loaderOpts: {
        javascriptEnabled: true,
      },
    }),
    css({
      preprocessor: 'sass',
    }),
  ],
  modifyBabelRc: (babelrc) => {
    babelrc.plugins.unshift([
      'import',
      { libraryName: 'antd', libraryDirectory: 'es', style: 'css' },
    ]);
    return babelrc;
  },
  htmlContext: {
    favicon: '/react-antd-extend-library/public/favicon.ico',
  },
  sourcemaps: false,
  menu: ['示例'],
};
