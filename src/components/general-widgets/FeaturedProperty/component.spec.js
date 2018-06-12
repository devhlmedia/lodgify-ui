import React from 'react';
import { shallow } from 'enzyme';
import { Card, Image, Rating } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Subheading } from 'typography/Subheading';
import { Heading } from 'typography/Heading';

import { Component as FeaturedProperty } from './component';
import { getPropertyDescription } from './utils/getPropertyDescription';

const props = {
  bedroomsNumber: 3,
  guestsNumber: 3,
  imageUrl: '🐱🐱',
  locationName: 'Catania',
  nightPrice: '$280',
  propertyName: 'The Cat House',
  propertyType: 'Bed and breakfast',
  propertyUrl: '/',
  ratingNumber: 4.8,
};

const getFeaturedProperty = () => shallow(<FeaturedProperty {...props} />);

describe('<FeaturedProperty />', () => {
  it('should render a single Semantic UI `Card` component', () => {
    const wrapper = getFeaturedProperty();
    expectComponentToBe(wrapper, Card);
  });

  describe('the `Card` component', () => {
    const getCard = () => getFeaturedProperty().find(Card);
    it('should have the right props', () => {
      const wrapper = getCard();
      expectComponentToHaveProps(wrapper, {
        href: props.propertyUrl,
      });
    });

    it('should render the right children', () => {
      const wrapper = getCard();
      expectComponentToHaveChildren(wrapper, Image, Card.Content);
    });
  });

  describe('the `Image` component', () => {
    it('should have the right props', () => {
      const wrapper = getFeaturedProperty().find(Image);
      expectComponentToHaveProps(wrapper, {
        alt: '',
        src: props.imageUrl,
      });
    });
  });

  describe('the `Card.Content` component', () => {
    it('should render the right children', () => {
      const wrapper = getFeaturedProperty().find(Card.Content);
      expectComponentToHaveChildren(
        wrapper,
        Card.Meta,
        Card.Header,
        Card.Description,
        Card.Description,
        Card.Description,
        Card.Description
      );
    });
  });

  describe('the `Card.Meta` component', () => {
    it('should have the right children', () => {
      const wrapper = getFeaturedProperty().find(Card.Meta);
      expectComponentToHaveChildren(wrapper, Subheading);
    });
  });

  describe('the `Subheading` component', () => {
    it('should have the right children', () => {
      const wrapper = getFeaturedProperty().find(Subheading);
      expectComponentToHaveChildren(wrapper, props.propertyType);
    });
  });

  describe('the `Card.Header` component', () => {
    it('should have the right `children`', () => {
      const wrapper = getFeaturedProperty().find(Card.Header);
      expectComponentToHaveChildren(wrapper, props.propertyName);
    });
  });

  describe('the first `Card.Description` component', () => {
    it('should have the right `children`', () => {
      const wrapper = getFeaturedProperty()
        .find(Card.Description)
        .at(0);
      expectComponentToHaveChildren(wrapper, props.locationName);
    });
  });

  describe('the second `Card.Description` component', () => {
    it('should have the right `children`', () => {
      const wrapper = getFeaturedProperty()
        .find(Card.Description)
        .at(1);
      expectComponentToHaveChildren(
        wrapper,
        getPropertyDescription(props.guestsNumber, props.bedroomsNumber)
      );
    });
  });

  describe('the third `Card.Description` component', () => {
    it('should have the right `children`', () => {
      const wrapper = getFeaturedProperty()
        .find(Card.Description)
        .at(2);
      expectComponentToHaveChildren(
        wrapper,
        props.ratingNumber.toString(),
        Rating
      );
    });
  });

  describe('the `Rating` component', () => {
    it('should have the right props', () => {
      const wrapper = getFeaturedProperty()
        .find(Card.Description)
        .find(Rating);
      expectComponentToHaveProps(wrapper, {
        disabled: true,
        maxRating: 5,
        rating: Math.round(props.ratingNumber),
        size: 'tiny',
      });
    });
  });

  describe('the fourth `Card.Description` component', () => {
    it('should have the right `children`', () => {
      const wrapper = getFeaturedProperty()
        .find(Card.Description)
        .at(3);
      expectComponentToHaveChildren(wrapper, 'from ', Heading, ' /night');
    });
  });

  describe('the `Heading` component', () => {
    it('should have the right children', () => {
      const wrapper = getFeaturedProperty().find(Heading);
      expectComponentToHaveChildren(wrapper, props.nightPrice);
    });
  });

  it('should have `displayName` `FeaturedProperty`', () => {
    expectComponentToHaveDisplayName(FeaturedProperty, 'FeaturedProperty');
  });
});
