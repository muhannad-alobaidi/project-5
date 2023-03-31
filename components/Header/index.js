import React from 'react';
import PropTypes from 'prop-types';

import css from './style.module.scss';

const Header = ({
  className,
}) => {
  return (
    <header className={css.header}>
      Header!
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};
Header.defaultProps = {
  className: null,
};

Header.displayName = 'Header';

export default Header;
