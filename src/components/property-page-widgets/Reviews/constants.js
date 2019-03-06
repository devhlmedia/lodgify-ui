const PLACEHOLDER_DATA = {
  ratingNumber: 0,
  reviewText: '',
  reviewTitle: '',
  reviewerCategory: '',
  reviewerLocation: '',
  reviewerName: '',
  reviewerStayDate: '',
};

const NUMBER_OF_PLACEHOLDERS = 3;

export const PLACEHOLDERS = Array(NUMBER_OF_PLACEHOLDERS).fill(
  PLACEHOLDER_DATA
);

export const COMMENT_MAX_LENGTH = 800;
export const EMAIL_MAX_LENGTH = 255;
export const LOCATION_MAX_LENGTH = 255;
export const NAME_MAX_LENGTH = 80;
export const TITLE_MAX_LENGTH = 30;
