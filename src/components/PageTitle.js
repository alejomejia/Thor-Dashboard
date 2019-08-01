import React from 'react';
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

export default PageTitle;