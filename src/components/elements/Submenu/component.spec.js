import React from 'react';
import { shallow } from 'enzyme';

import { Component as Submenu } from './component';

const children = 'Click me';
const items = [{ text: 'someText', href: 'someHref' }];

describe('<Submenu />', () => {
  it('should render a single Semantic UI `Dropdown` component', () => {
    const submenu = shallow(<Submenu items={items}>{children}</Submenu>);
    const actual = submenu.find('Dropdown');
    expect(actual).toHaveLength(1);
  });

  describe('the `Dropdown` component', () => {
    it('should get the right props by default', () => {
      const submenu = shallow(<Submenu items={items}>{children}</Submenu>);
      const actual = submenu.find('Dropdown').props();
      expect(actual).toEqual(
        expect.objectContaining({
          item: false,
          simple: false,
          className: '',
          options: items,
          pointing: 'top',
          trigger: children,
        })
      );
    });

    it('should get `props.className` `underlined` if required', () => {
      const submenu = shallow(
        <Submenu isTriggerUnderlined items={items}>
          {children}
        </Submenu>
      );
      const actual = submenu.find('Dropdown').prop('className');
      expect(actual).toBe('underlined');
    });

    it('should get `props.item` `true` if required', () => {
      const submenu = shallow(
        <Submenu isMenuItem items={items}>
          {children}
        </Submenu>
      );
      const actual = submenu.find('Dropdown').prop('item');
      expect(actual).toBe(true);
    });

    it('should get `props.simple` `true` if required', () => {
      const submenu = shallow(
        <Submenu isTriggeredOnHover items={items}>
          {children}
        </Submenu>
      );
      const actual = submenu.find('Dropdown').prop('simple');
      expect(actual).toBe(true);
    });
  });

  it('should have displayName `Submenu`', () => {
    const actual = Submenu.displayName;
    expect(actual).toBe('Submenu');
  });
});