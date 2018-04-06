import React from 'react';
import PropTypes from 'prop-types';

import { getUniqueKey } from 'lib/get-unique-key';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { ResponsiveImage } from 'widgets/ResponsiveImage';
import { Link } from 'elements/Link';

/**
 * The standard widget for displaying pictures of a property.
 * @returns {Object}
 */
export const Component = ({ pictures, width }) => (
  <GridColumn width={width}>
    <Heading size="tiny">Property pictures</Heading>
    <Grid>
      {pictures.map(({ imageUrl, label }, i) => (
        <GridColumn key={getUniqueKey(label, i)} width={4}>
          <ResponsiveImage imageUrl={imageUrl} label={label} />
        </GridColumn>
      ))}
      <GridColumn width={12}>
        <Link>Explore all pictures</Link>
      </GridColumn>
    </Grid>
  </GridColumn>
);

Component.displayName = 'PropertyPictures';

Component.defaultProps = {
  width: 12,
};

Component.propTypes = {
  /** The pictures to display as responsive images. */
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      /** URL pointing to the image to display. */
      imageUrl: PropTypes.string.isRequired,
      /** A visible label for the image. */
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** The number of columns the widget occupies. */
  width: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};
