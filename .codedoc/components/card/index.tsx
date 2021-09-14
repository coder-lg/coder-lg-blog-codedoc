import { ThemedComponentThis } from '@connectv/jss-theme';  // @see [CONNECTIVE JSS Theme](https://github.com/CONNECT-platform/connective-jss-theme)
import { RendererLike } from '@connectv/html';              // @see [CONNECTIVE HTML](https://github.com/CONNECT-platform/connective-html)
import { CodedocTheme } from '@codedoc/core';               // --> Type helper for theme object

import { CardStyle } from './style';                        // @see tab:style.ts


export interface CardOptions {                              // --> a nice interface for possible props
  raise: string;                                            // --> which is the raise level of our cards. Note that all props MUST be of type `string`
}


export function Card(
  this: ThemedComponentThis,                                // --> keep typescript strict typing happy
  options: CardOptions,                                     // --> the component props (attributes)
  renderer: RendererLike<any, any>,                         // --> our beloved renderer
  content: any,                                             // --> the content of the component
) {
  const classes = this.theme.classes(CardStyle);            // --> fetch the theme-based classes
  let raise = 'raised-0';
  if (options && options.raise === '1') raise = 'raised-1'; // --> determine the proper raise level based on given attributes
  if (options && options.raise === '2') raise = 'raised-2';

  return <div class={`${classes.card} ${raise}`}>
    {content}
  </div>;
}