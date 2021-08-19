import { 
  configuration, 
  DefaultMarkdownCustomComponents
} from '@codedoc/core';
import { codingBlog } from '@codedoc/coding-blog-plugin';

import { theme } from './theme';
import { Utterances } from './components/utterances';
import { SeeTypo$ } from './components/SeeTypo';
import { googleAnalytics } from './components/GoogleAnalytics/plugin';



export const config = /*#__PURE__*/configuration({
  theme,
  src: {
    base: 'src/markdown'
  },
  dest: {
    html: 'dist',
    assets: '.', // TODO: want 'src/assets' but blocked by https://github.com/CONNECT-platform/coding-blog/issues/18
    bundle: 'bundle',
    styles: 'styles',
  },
  page: {
    title: {
      base: ''
    },
    favicon: 'src/assets/favicon.ico',
    meta: {
      keywords: ['tech','lessons','markdown','lord','LG'],
    },
  },
  plugins: [
    codingBlog({
      assets: [ 'src/assets' ],
      feed: {
        url: 'https://coderlg.coding.blog',
        title: 'LG',
        exclude: [
          'archive.md',
          'about.md'  //,
          // '2020-07-29_everything.md'
        ]
      }
    }),
    googleAnalytics("")
  ],
  markdown: {
    customComponents: {
      ...DefaultMarkdownCustomComponents,
      Utterances,
      SeeTypo$
    }
  },
  // misc: {
  //  github: {
  //    user: 'im-coder-lg',          // --> name of the user on GitHub owning the repo
  //    repo: 'coder-lg-blog-codedoc',         // --> name of the repo on GitHub
  //   },
  // // ...
  // },
  // //...
  });
