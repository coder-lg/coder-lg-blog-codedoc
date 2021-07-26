import { CodedocConfig } from '@codedoc/core';
import { Footer as _Footer } from '@codedoc/core/components';


export function Footer(config: CodedocConfig, renderer: any) {
  return <_Footer/>;
}

export function Footer(this: ThemedComponentThis, config: CodedocConfig, renderer: any) {
  const classes = this.theme.classes(style);
  return <_Footer>
    <a href="https://github.com/coder-lg" target="_blank" class={classes.imgLink}>
      <img src="/img/social/github-light.svg" class="light"/>
      <img src="/img/social/github-dark.svg" class="dark"/>
    </a>
  </_Footer>;
}
