import { css, prop } from '@blaze-elements/common';
import { Component, h } from 'skatejs';
import styles from './Nav.scss';

export type NavContentProps = Props;

export type Props = {
  inline?: boolean;
};
export default class NavContent extends Component<NavContentProps> {

  @prop( {
    type: Boolean,
    attribute: {
      source: true
    }
  } ) inline: boolean;

  renderCallback() {
    const { inline } = this;
    const className = css(
      'c-nav__content u-window-box--none',
      {
        'inline-li': inline
      } );

    return [
      <style>{styles}</style>,
      <li className={className}>
        <slot />
      </li>
    ];
  }
}
