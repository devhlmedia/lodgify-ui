import React from 'react';
import { shallow } from 'enzyme';
import { Responsive, Modal as SemanticModal } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Heading } from 'typography/Heading';
import { Link } from 'elements/Link';
import { Modal } from 'elements/Modal';

import { twoAmenities, sixAmenities } from './mock-data/amenities';
import { ComponentWithResponsive as Amenities } from './component';

const getAmenities = (props = {}) =>
  shallow(
    <Amenities amenities={props.amenities || twoAmenities} isUserOnMobile />
  );
const getWrappedAmenities = (props = {}) => {
  const Child = getAmenities().prop('as');
  return shallow(
    <Child amenities={props.amenities || twoAmenities} isUserOnMobile />
  );
};

describe('<Amenities />', () => {
  it('should be wrapped in a Semantic UI `Responsive` component', () => {
    const wrapper = getAmenities();
    expectComponentToBe(wrapper, Responsive);
  });

  describe('the wrapped `Amenities` component', () => {
    it('should be a Lodgify UI `Grid`', () => {
      const wrapper = getWrappedAmenities();
      expectComponentToBe(wrapper, Grid);
    });
  });

  describe('the `Grid` component', () => {
    it('should render the right children', () => {
      const wrapper = getWrappedAmenities();
      expectComponentToHaveChildren(
        wrapper,
        GridColumn,
        ...getArrayOfLengthOfItem(2, GridRow)
      );
    });
  });

  describe('the first `GridColumn` component', () => {
    const getFirstGridColumn = () =>
      getWrappedAmenities()
        .find(GridColumn)
        .first();

    it('should have the right right props', () => {
      const wrapper = getFirstGridColumn();
      expectComponentToHaveProps(wrapper, { width: 12 });
    });

    it('should render the right children', () => {
      const wrapper = getFirstGridColumn();
      expectComponentToHaveChildren(wrapper, Heading);
    });
  });

  describe('the `Heading` component', () => {
    it('should render the right children', () => {
      const wrapper = getWrappedAmenities().find(Heading);
      expectComponentToHaveChildren(wrapper, 'Property Amenities');
    });
  });

  describe('if `hasExtraItems` returns true', () => {
    const getAmenitiesWithSixCategories = () =>
      getWrappedAmenities({ amenities: sixAmenities });
    describe('the `Grid` component', () => {
      it('should render the right children', () => {
        const wrapper = getAmenitiesWithSixCategories();
        expectComponentToHaveChildren(
          wrapper,
          GridColumn,
          ...getArrayOfLengthOfItem(3, GridRow),
          GridColumn
        );
      });
    });

    describe('the last child `GridColumn` of `Grid`', () => {
      const getLastGridColumn = () =>
        getAmenitiesWithSixCategories()
          .find(GridColumn)
          .at(7);

      it('should have the right props', () => {
        const wrapper = getLastGridColumn();
        expectComponentToHaveProps(wrapper, { width: 12 });
      });

      it('should render the right children', () => {
        const wrapper = getLastGridColumn();
        expectComponentToHaveChildren(wrapper, Modal);
      });
    });

    describe('the `Modal`', () => {
      const getModal = () => getAmenitiesWithSixCategories().find(Modal);
      it('should have the right props', () => {
        const wrapper = getModal();
        expectComponentToHaveProps(wrapper, {
          trigger: <Link>View more</Link>,
        });
      });

      it('should have the right children', () => {
        const wrapper = getModal();
        expectComponentToHaveChildren(wrapper, SemanticModal.Content);
      });
    });

    describe('the `SemanticModal.Content`', () => {
      it('should have the right children', () => {
        const wrapper = getAmenitiesWithSixCategories().find(
          SemanticModal.Content
        );
        expectComponentToHaveChildren(wrapper, Grid);
      });
    });

    describe('the `Grid` child of `SemanticModal.Content`', () => {
      const getSecondGrid = () =>
        getAmenitiesWithSixCategories()
          .find(Grid)
          .at(1);
      it('should have the right props', () => {
        const wrapper = getSecondGrid();
        expectComponentToHaveProps(wrapper, { padded: true, stackable: true });
      });

      it('should render the right children', () => {
        const wrapper = getSecondGrid();
        expectComponentToHaveChildren(
          wrapper,
          ...getArrayOfLengthOfItem(5, GridRow)
        );
      });
    });
  });

  it('should have `displayName` `Amenities`', () => {
    const component = getAmenities().prop('as');
    expectComponentToHaveDisplayName(component, 'Amenities');
  });
});
