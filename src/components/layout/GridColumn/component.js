import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

/**
 * GridColumn is the Lodgify UI interface for the
 * Semantic UI Grid.Column.
 *
 * @returns {Object}
 */
export const Component = ({ verticalAlignContent, ...props }) => (
  <Grid.Column {...props} verticalAlign={verticalAlignContent} />
);

Component.displayName = 'GridColumn';

Component.defaultProps = {
  verticalAlignContent: 'top',
};

Component.propTypes = {
  /** Vertically align the content of the column to the bottom, middle or top. */
  verticalAlignContent: PropTypes.oneOf(['bottom', 'middle', 'top']),
};