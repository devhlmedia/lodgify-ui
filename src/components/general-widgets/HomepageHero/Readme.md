```jsx
const logoSrc = require('./mock-data/livingstoneLogo.png');
const { backgroundImageUrl, navigationItems, guestsOptions, locationOptions } = require('./mock-data/mock-data');

<HomepageHero
  backgroundImageUrl={backgroundImageUrl}
  headerLogoSrc={logoSrc}
  headerLogoText="Livingstone Cottage"
  headerNavigationItems={navigationItems}
  headerPrimaryCTA={{ href: '/book', text: 'Book now'}}
  headingText="Super Interesting Heading"
  searchBarGuestsOptions={guestsOptions}
  searchBarLocationOptions={locationOptions}
/>
```