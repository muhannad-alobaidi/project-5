/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

import css from './style.module.scss';

const Footer = ({
  className,
}) => {
  return (
    <footer className={css.footer}>
      <div className={css.links}>
        <a href="https://www.fazergroup.com/fi/vastuullisuus/" target='blanck'><b>Lue lisää vastuullisuustyöstämme</b></a>
      </div>
      <div className={css.logo}>
        <img src="/images/fazer_logo.png" alt="logo" />
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};
Footer.defaultProps = {
  className: null,
};

Footer.displayName = 'Footer';

export default Footer;
