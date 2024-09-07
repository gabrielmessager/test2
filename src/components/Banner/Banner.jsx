import { Link } from "react-router-dom";

export const Banner = ({
  imageSrc,
  description,
  title,
  ctaTitle,
  showImageFirst,
}) => {
  return (
    <section id="banner-2">
      <div className="container">
        <div className="row">
          <div className={`banner ${showImageFirst && "banner-2"}`}>
            <div className="banner__text">
              <h2 className="banner__text__title">{title}</h2>
              <p className="banner__text__paragraph">{description}</p>
              <Link to="/products" className="banner__text__btn">
                {ctaTitle}
              </Link>
            </div>
            <img src={imageSrc} alt="" className="banner__img" />
          </div>
        </div>
      </div>
    </section>
  );
};
