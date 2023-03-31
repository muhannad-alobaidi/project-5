import React from 'react';
import PropTypes from 'prop-types';

import css from './style.module.scss';
import AjaxForm from '../../AjaxForm';


const fields = [{
  name: 'Yritys',
  type: 'text',
}, {
  name: 'Nimi',
  type: 'text',
  re: '\S+',
}, {
  name: 'Viesti',
  type: 'textarea',
}];

const Form = ({
  className,
}) => {

  const handleSubmitError = e => {};
  const handleSubmitSuccess = e => {};

  return (
    <div className={css.form}>
      <div className={css.inner}>
        <AjaxForm
          endpoint="https://test-wordpress/wp-admin/admin-ajax.php"
          fields={fields}
          onSubmitError={handleSubmitError}
          onSubmitSuccess={handleSubmitSuccess}
        />
      </div>
    </div>
  );
};

Form.propTypes = {
  className: PropTypes.string,
};
Form.defaultProps = {
  className: null,
};

Form.displayName = 'Form';

export default Form;
