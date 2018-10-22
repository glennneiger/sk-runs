import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './all.sass';
import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
