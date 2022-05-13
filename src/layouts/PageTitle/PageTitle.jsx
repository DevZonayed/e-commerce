import React from "react";
import { Link } from "react-router-dom";

const PageTitle = (props) => {
  return (
    <section
      className="page-title-area"
      data-background="assets/img/bg/page-title-bg.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-title-wrapper text-center">
              <h1 className="page-title mb-10">
                {props.title ? props.title : "Page Title"}
              </h1>
              <div className="breadcrumb-menu">
                <nav
                  aria-label="Breadcrumbs"
                  className="breadcrumb-trail breadcrumbs"
                >
                  <ul className="trail-items">
                    <li className="trail-item trail-begin">
                      <Link to={props.mainPageLink ? props.mainPageLink : "/"}>
                        <span>{props.mainPage ? props.mainPage : "Home"}</span>
                      </Link>
                    </li>
                    <li className="trail-item trail-end">
                      <span>
                        {props.itemTitle ? props.itemTitle : "This Product"}
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
