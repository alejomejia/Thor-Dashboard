import React from 'react';
import PropTypes from 'prop-types';
import './styles/PageTitle.sass';

const PageTitle = ({title}) => {
  return (
    <div className="page-title">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1 className="heading">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

// Documentation
PageTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default PageTitle;