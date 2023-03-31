import PropTypes from 'prop-types';
import css from './style.module.scss';


const ImageWithParagraph = ({
  children,
  paragraph1,
  paragraph2,
  paragraph3,
  heading,
  image,
  bgColor,
  bgImage,
  direction,
  quot,
  quotee,
  classNameImage,
}) => {
  return (
    <section className={css.imageWithParagraph} style={!!bgColor ? { background: bgColor } : null }>
      <div className={css.inner} style={!!direction ? { direction: direction } : null } >
        <div className={css.text} style={!!bgImage ? { backgroundImage: `url(${bgImage})` } : null } >
          {!!heading && <h2>{heading}</h2>}
          {!!paragraph1 && <p>{paragraph1}</p>}
          {!!paragraph2 && <p>{paragraph2}</p>}
          {!!paragraph3 && <p>{paragraph3}</p>}
          {!!quot && <p className={css.quot}>{quot}</p>}
          {!!quotee && <p className={css.quotee}>{quotee}</p>}
        </div>
        <div className={`${css.image} ${classNameImage}`} >
           <img src={image} alt="" />
            </div>
        {children}
      </div>
    </section>
  );
};

ImageWithParagraph.propTypes = {
  children: PropTypes.any,
  paragraph1: PropTypes.string,
  paragraph2: PropTypes.string,
  paragraph3: PropTypes.string,
  heading: PropTypes.string,
  image: PropTypes.string,
  bgImage: PropTypes.string,
  bgColor: PropTypes.string,
  quot: PropTypes.string,
  quotee: PropTypes.string,
  direction: PropTypes.string,
  classNameImage: PropTypes.string,
};

ImageWithParagraph.defaultProps = {
  children: null,
  paragraph1: null,
  paragraph2: null,
  paragraph3: null,
  heading: null,
  image: null,
  bgImage: null,
  bgColor: null,
  direction: null,
  quot: null,
  quotee: null,
  classNameImage: null,
};

export default ImageWithParagraph;
