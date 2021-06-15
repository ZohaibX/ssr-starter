import * as React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import "../../css/main.css"
import {Container , Col , Row , Image} from 'react-bootstrap'

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
    <div >
      {head()}

      <Container className="home">
        <Row>
          <Col xs={6} md={4}>
            <Image className="home-img" src={`https://project-1-bucket.s3.amazonaws.com/figure.jpg`} roundedCircle />
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default {
  component: Home, // this styling is for Routes file specially
};
