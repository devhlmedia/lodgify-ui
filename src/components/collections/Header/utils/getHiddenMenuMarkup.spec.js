import React from 'react';
import { mount } from 'enzyme';

import { navigationItems } from '../mock-data/navigationItems';

import { getHiddenMenuMarkup } from './getHiddenMenuMarkup';

const logoSizes = 'someLogoSizes';
const logoSrc = 'someLogoSrc';
const logoSrcSet = 'someLogoSrcSet';
const logoText = 'someLogoText';
const primaryCTA = {
  onClick: Function,
  text: 'some Elisabeth',
};

const getMarkupAsRenderedComponent = extraProps =>
  mount(
    <div>
      {getHiddenMenuMarkup({
        dateRangePickerLocaleCode: 'ko',
        activeNavigationItemIndex: 0,
        logoSizes,
        logoSrc,
        logoSrcSet,
        logoText,
        navigationItems,
        primaryCTA,
        ...extraProps,
      })}
    </div>
  ).children();

describe('getHiddenMenuMarkup', () => {
  it('should render the right structure', () => {
    const actual = getMarkupAsRenderedComponent();

    expect(actual).toMatchSnapshot();
  });
});
