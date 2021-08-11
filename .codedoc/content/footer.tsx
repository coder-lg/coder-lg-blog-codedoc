import { CodedocConfig } from '@codedoc/core';
import { Footer as _Footer, Icon } from '@codedoc/core/components';


export function Footer(config: CodedocConfig, renderer: any) {
  return <_Footer>
    <a href="https://github.com/im-coder-lg" target="_blank">GitHub</a>
    <hr/>
    <a href="https://coderlg.coding.blog/_feed.rss" target="_blank"><Icon>rss_feed</Icon>RSS</a>
  </_Footer>;
}
