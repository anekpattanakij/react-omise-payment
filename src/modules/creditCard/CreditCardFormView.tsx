import * as React from 'react';
import { render } from 'react-dom';
import { Form, Field } from 'react-final-form';

const mustBeNumber = (value: any) =>
  isNaN(value) ? 'Must be a number' : undefined;
const minValue = (min: any) => (value: any) =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
const composeValidators = (...validators: Array<any>) => (value: any) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export default (props: any) => {
  const {
    createCreditCardToken,
    invalid,
    handleSubmit,
    reset,
    submitting,
    pristine,
    values,
  } = props;
  const submitCreateTokenUser = (values: any): void => {
    createCreditCardToken();
  };
  const required = (value: any) =>
    value ? undefined :'Required';
  return (
    <div>
      <Form
        onSubmit={submitCreateTokenUser}
        render={({
          invalid,
          handleSubmit,
          reset,
          submitting,
          pristine,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Name</label>
                  <input {...input} type="text" placeholder="Name" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="cardNumber" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>cardNumber</label>
                  <input {...input} type="text" placeholder="cardNumber" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="security_code" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Security Code</label>
                  <input {...input} type="text" placeholder="Security Code" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="expiration_month" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Expire Month</label>
                  <input {...input} type="text" placeholder="Expire Month" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="expiration_year" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Expire Year</label>
                  <input {...input} type="text" placeholder="Expire Year" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <div className="buttons">
              <button type="submit" disabled={invalid || submitting}>
                Submit
              </button>
              <button
                type="button"
                onClick={reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};
