import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import { getCardPlaceholderMarkup } from 'utils/get-card-placeholder-markup/';
import { getNightPriceMarkup } from 'utils/get-night-price-markup';
import { Rating } from 'elements/Rating';
import { ResponsiveImage } from 'media/ResponsiveImage';
import { Subheading } from 'typography/Subheading';

import { getPropertyDescription } from './utils/getPropertyDescription';

/**
 * The standard widget for featuring a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  bedroomsNumber,
  guestsNumber,
  imageAlternativeText,
  imageSizes,
  imageSrcSet,
  imageUrl,
  isShowingPlaceholder,
  locationName,
  nightPrice,
  placeholderImageUrl,
  propertyName,
  propertyType,
  propertyUrl,
  ratingNumber,
  propertyUrlTarget,
}) => (
  <Card className="has-featured" href={propertyUrl} target={propertyUrlTarget}>
    {isShowingPlaceholder ? (
      getCardPlaceholderMarkup()
    ) : (
      <Fragment>
        <ResponsiveImage
          alternativeText={imageAlternativeText}
          imageUrl={imageUrl}
          isFluid
          placeholderImageUrl={placeholderImageUrl}
          sizes={imageSizes}
          srcSet={imageSrcSet}
        />
        <Card.Content>
          <Card.Meta>
            <Subheading>{propertyType}</Subheading>
          </Card.Meta>
          <Card.Header>{propertyName}</Card.Header>
          <Card.Description>{locationName}</Card.Description>
          <Card.Description>
            {getPropertyDescription(guestsNumber, bedroomsNumber)}
          </Card.Description>
          <Card.Description>
            <Rating iconSize="tiny" ratingNumber={ratingNumber} />
          </Card.Description>
          <Card.Description>{getNightPriceMarkup(nightPrice)}</Card.Description>
        </Card.Content>
      </Fragment>
    )}
  </Card>
);

Component.displayName = 'FeaturedProperty';

Component.defaultProps = {
  bedroomsNumber: null,
  imageAlternativeText: undefined,
  imageSizes: undefined,
  imageSrcSet: undefined,
  isShowingPlaceholder: false,
  placeholderImageUrl: undefined,
  propertyUrlTarget: '_self',
};

Component.propTypes = {
  /** The number of available bedrooms at the property. */
  bedroomsNumber: PropTypes.number,
  /** The number of guests the property can accommodate. */
  guestsNumber: PropTypes.number.isRequired,
  /** The alternative text for the image to display. */
  imageAlternativeText: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of source sizes. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  imageSizes: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  imageSrcSet: PropTypes.string,
  /** URL pointing to the image to display. */
  imageUrl: PropTypes.string.isRequired,
  /** Is the component showing placeholders to reserve space for content which will appear. */
  isShowingPlaceholder: PropTypes.bool,
  /** The name of the location of the property. */
  locationName: PropTypes.string.isRequired,
  /** The price per night of the property, with currency symbol. */
  nightPrice: PropTypes.string.isRequired,
  /** URL pointing to the placeholder image to render. */
  placeholderImageUrl: PropTypes.string,
  /** The name of the property. */
  propertyName: PropTypes.string.isRequired,
  /** The name of the type of the property. */
  propertyType: PropTypes.string.isRequired,
  /** URL pointing to a page with details of the property. */
  propertyUrl: PropTypes.string.isRequired,
  /** Specifies where to display the linked featured property URL. See [MDN docs `<a />` for more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target). */
  propertyUrlTarget: PropTypes.string,
  /** The numeral rating for the property, out of 5 */
  ratingNumber: PropTypes.number.isRequired,
};
