import React from 'react';
import { shallow } from 'enzyme';
import { Modal as SemanticModal } from 'semantic-ui-react';
import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
import { VIEW_MORE } from 'utils/default-strings';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { Link } from 'elements/Link';
import { Modal } from 'elements/Modal';

import { twoAmenities, sixAmenities } from '../mock-data/amenities';

import { getAmenityMarkup } from './getAmenityMarkup';

const amenities = twoAmenities;
const hasExtraItemsInModal = true;
const headingText = '';
const isStacked = true;
const modalTriggerText = VIEW_MORE;

const getAmenities = (props = {}) =>
  shallow(
    <div>
      {getAmenityMarkup(
        props.amenities || amenities,
        hasExtraItemsInModal,
        props.headingText || headingText,
        isStacked,
        props.modalTriggerText || modalTriggerText
      )}
    </div>
  ).first();

describe('getAmenityMarkup', () => {
  describe('the `Grid` component', () => {
    it('should render the right children', () => {
      const wrapper = getAmenities().find(Grid);

      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(2, GridColumn)
      );
    });
  });

  describe('the first `GridColumn` component', () => {
    const getFirstGridColumn = () =>
      getAmenities({
        headingText: 'Hello world',
      })
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
      const wrapper = getAmenities({
        headingText: 'Property Amenities',
      }).find(Heading);

      expectComponentToHaveChildren(wrapper, 'Property Amenities');
    });
  });

  describe('if `hasExtraItems` returns true', () => {
    const getAmenitiesWithSixCategories = () =>
      getAmenities({ amenities: sixAmenities });

    describe('the `Grid` component', () => {
      it('should render the right children', () => {
        const wrapper = getAmenitiesWithSixCategories()
          .find(Grid)
          .at(0);

        expectComponentToHaveChildren(
          wrapper,
          ...getArrayOfLengthOfItem(4, GridColumn)
        );
      });
    });

    describe('the last child `GridColumn` of `Grid`', () => {
      const getLastGridColumn = () =>
        getAmenitiesWithSixCategories()
          .find(GridColumn)
          .at(3);

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
          trigger: <Link>{VIEW_MORE}</Link>,
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
          ...getArrayOfLengthOfItem(5, GridColumn)
        );
      });
    });
  });
});