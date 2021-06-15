import * as React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import "../../css/main.css"

import figure from './Image/figure.jpg'


const Home = () => {
  const head = () => (
    <Helmet>
      <title>{`ZohaibX`}</title>
      {/* // this is how we will make our title dynamic */}
      <meta property='og:title' content='ZohaibX'></meta>
      {/* // this title is for SEO -- to identify this page title  */}
      {/* // we normally have to add 4 required meta tags and we can add more optional meta tags for SEO */}
      {/* //? https://ogp.me/ */}
    </Helmet>
  );

  return (
    <div>
      {head()}

      <figure className="story__shape">
            <img
              src=''
              alt="Person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>

      <h1 id="h1">Whats up -- 2</h1>
    </div>
  );
};

export default {
  component: Home, // this styling is for Routes file specially
};
