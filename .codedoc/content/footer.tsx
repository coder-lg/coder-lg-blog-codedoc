import { CodedocConfig, CodedocTheme } from '@codedoc/core';
import { Footer as _Footer } from '@codedoc/core/components';
import { themedStyle, ThemedComponentThis } from '@connectv/jss-theme';


const style = themedStyle<CodedocTheme>(() => ({
  imgLink: {
    position: 'relative',
    width: 24,
    height: 24,
    margin: '0 12px',
    opacity: .25,
    transition: 'opacity .1s !important',
    '&:hover': { opacity: 1, },

    '& img': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      transition: 'opacity .3s',

      '&.light': {
        'body.dark &': {
          opacity: 0,
        },
    
        '@media (prefers-color-scheme: dark)': {
          'body:not(.dark-mode-animate) &': {
            opacity: 0
          }
        },
      },

      '&.dark': {
        opacity: 0,
        'body.dark &': {
          opacity: 1,
        },
    
        '@media (prefers-color-scheme: dark)': {
          'body:not(.dark-mode-animate) &': {
            opacity: 1
          }
        },
      },
    }
  }
}));


export function Footer(this: ThemedComponentThis, config: CodedocConfig, renderer: any) {
  const classes = this.theme.classes(style);
  return <_Footer>
    <a href="https://github.com/im-coder-lg" target="_blank" class={classes.imgLink}>
      <img src="/assets/img/svg/GitHub-Light.svg" class="dark"/>
      <img src="/assets/img/svg/GitHub-Dark.svg" class="light"/>
    </a>
    <a href="https://coderlg.coding.blog/_feed.rss" target="_blank" class={classes.imgLink}>
      <img src="/assets/img/svg/rss-dark.svg" class="light"/>
      <img src="/assets/img/svg/rss-light.svg" class="dark"/>
      {/* <img src="img/svg/icons8-rss-96.svg"/> */}
    </a>
    <a href="https://matrix.to/#/@coder-lg:matrix.org" target="_blank" class={classes.imgLink}>
      <img src="/assets/img/svg/matrix-social.svg"/>
    </a>
    <a href="https://gitter.im/coder-lg/community" target="_blank" class={classes.imgLink}>
      <img src="/assets/img/svg/gitter-social.svg"/>
    </a>
  </_Footer>;
}