import React from 'react';
import PropTypes from 'prop-types';

import {
  EMAIL,
  FIRST_NAME,
  LAST_NAME,
  OWNER_SIGNUP,
  SIGN_UP,
} from 'utils/default-strings';
import { Form } from 'collections/Form';
import { TextInput } from 'inputs/TextInput';

import {
  EMAIL_MAX_LENGTH,
  FIRST_NAME_MAX_LENGTH,
  LAST_NAME_MAX_LENGTH,
} from './constants';

/**
 * The standard widget for owner sign up.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  emailInputLabel,
  errorMessage,
  firstNameInputLabel,
  headingText,
  lastNameInputLabel,
  onSubmit,
  submitButtonText,
  successMessage,
  validation,
}) => (
  <Form
    errorMessage={errorMessage}
    headingText={headingText}
    onSubmit={onSubmit}
    submitButtonText={submitButtonText}
    successMessage={successMessage}
    validation={validation}
  >
    <TextInput
      autoComplete="given-name"
      label={firstNameInputLabel}
      maxCharacters={EMAIL_MAX_LENGTH}
      name="firstName"
    />
    <TextInput
      autoComplete="family-name"
      label={lastNameInputLabel}
      maxCharacters={LAST_NAME_MAX_LENGTH}
      name="lastName"
    />
    <TextInput
      autoComplete="email"
      label={emailInputLabel}
      maxCharacters={FIRST_NAME_MAX_LENGTH}
      name="email"
    />
  </Form>
);

Component.displayName = 'OwnerSignUp';

Component.defaultProps = {
  emailInputLabel: EMAIL,
  errorMessage: '',
  firstNameInputLabel: FIRST_NAME,
  headingText: OWNER_SIGNUP,
  lastNameInputLabel: LAST_NAME,
  onSubmit: Function.prototype,
  submitButtonText: SIGN_UP,
  successMessage: '',
  validation: {},
};

Component.propTypes = {
  /** The label for the email input. */
  emailInputLabel: PropTypes.string,
  /** The message to display when the form has an error. */
  errorMessage: PropTypes.string,
  /** The label for the first name input. */
  firstNameInputLabel: PropTypes.string,
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /** The label for the last name input */
  lastNameInputLabel: PropTypes.string,
  /** The function to call when the form is submitted
   *  @param {Object} values - The values of the inputs in the form.
   */
  onSubmit: PropTypes.func,
  /** The text to display on the submit button. */
  submitButtonText: PropTypes.string,
  /** The message to display when the form is successful. */
  successMessage: PropTypes.string,
  /** Settings for validating inputs. Each value should match [the shape documented in `Form`](https://lodgify.github.io/lodgify-ui/#/Collections/Form) */
  validation: PropTypes.shape({
    email: PropTypes.object,
    firstName: PropTypes.object,
    lastName: PropTypes.object,
  }),
};
