import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Divider } from 'elements/Divider';
import { Heading } from 'typography/Heading';
import { Paragraph } from 'typography/Paragraph';
import { Icon } from 'elements/Icon';

import { getCheckInOrOutTimeLabel } from './utils/getCheckInOrOutTimeLabel';

/**
 * The standard widget for displaying the rules of a property.
 * @returns {Object}
 */
export const Component = ({ checkInTime, checkOutTime, rules }) => (
  <Grid stackable>
    <GridColumn width={12}>
      <Heading>House Rules</Heading>
    </GridColumn>
    <GridColumn computer={3} tablet={5}>
      <List items={rules.map(rule => <Paragraph>{rule}</Paragraph>)} />
    </GridColumn>
    <GridColumn computer={9} tablet={7}>
      <Icon
        label={getCheckInOrOutTimeLabel(checkInTime)}
        name="question mark"
      />
      <Divider />
      <Icon
        label={getCheckInOrOutTimeLabel(checkOutTime, true)}
        name="question mark"
      />
    </GridColumn>
  </Grid>
);

Component.displayName = 'Rules';

Component.propTypes = {
  /** The propery check-in time. */
  checkInTime: PropTypes.string.isRequired,
  /** The propery check-out time. */
  checkOutTime: PropTypes.string.isRequired,
  /** The collection of rules. */
  rules: PropTypes.arrayOf(PropTypes.string).isRequired,
};