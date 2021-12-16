import React from 'react'

const PagePricing = () => {
    return (
      <div>
        <div>
          <header
            id="header"
            className="navbar navbar-expand-lg navbar-light navbar-right bg-white"
          >
            <div className="container">
              <nav className="js-mega-menu navbar-nav-wrap">
                {/* Default Logo */}
                <a
                  className="navbar-brand"
                  href="index-2.html"
                  aria-label="Space"
                >
                  <img
                    className="navbar-brand-logo"
                    src="assets/svg/logos/logo.svg"
                    alt="Image Description"
                  />
                </a>
                {/* End Default Logo */}
                {/* Toggler */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-default">
                    <i className="bi-list" />
                  </span>
                  <span className="navbar-toggler-toggled">
                    <i className="bi-x" />
                  </span>
                </button>
                {/* End Toggler */}
                {/* Collapse */}
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    {/* Landings */}
                    <li
                      className="hs-has-mega-menu nav-item"
                      data-hs-mega-menu-item-options='{
              "desktop": {
                "maxWidth": "30rem"
              }
            }'
                    >
                      <a
                        id="landingsMegaMenu"
                        className="hs-mega-menu-invoker nav-link dropdown-toggle "
                        aria-current="page"
                        href="#"
                        role="button"
                        aria-expanded="false"
                      >
                        Landings
                      </a>
                      {/* Mega Menu */}
                      <div
                        className="hs-mega-menu hs-position-right-fix dropdown-menu"
                        aria-labelledby="landingsMegaMenu"
                        style={{minWidth: "30rem"}}
                      >
                        {/* Main Content */}
                        <div className="navbar-dropdown-menu-inner">
                          <div className="row">
                            <div className="col-sm mb-3 mb-sm-0">
                              <span className="dropdown-header">Classic</span>
                              <a className="dropdown-item " href="index-2.html">
                                Corporate
                              </a>
                              <a
                                className="dropdown-item "
                                href="landing-agency.html"
                              >
                                Agency
                              </a>
                              <a
                                className="dropdown-item "
                                href="landing-consulting.html"
                              >
                                Consulting
                              </a>
                              <a
                                className="dropdown-item "
                                href="landing-services.html"
                              >
                                Services
                              </a>
                              <a
                                className="dropdown-item "
                                href="landing-business.html"
                              >
                                Business
                              </a>
                            </div>
                            <div className="col-sm">
                              <span className="dropdown-header">Services</span>
                              <a
                                className="dropdown-item "
                                href="landing-services-growth.html"
                              >
                                Growth
                              </a>
                              <a
                                className="dropdown-item "
                                href="landing-services-saas.html"
                              >
                                SaaS
                              </a>
                              <a
                                className="dropdown-item "
                                href="landing-services-wallet.html"
                              >
                                Wallet
                              </a>
                              <a
                                className="dropdown-item "
                                href="landing-services-api.html"
                              >
                                API
                              </a>
                            </div>
                          </div>
                          {/* End Row */}
                        </div>
                        {/* End Main Content */}
                      </div>
                      {/* End Mega Menu */}
                    </li>
                    {/* End Landings */}
                    {/* Pages */}
                    <li className="hs-has-mega-menu nav-item">
                      <a
                        id="pagesMegaMenu"
                        className="hs-mega-menu-invoker nav-link dropdown-toggle active"
                        href="#"
                        role="button"
                        aria-expanded="false"
                      >
                        Pages
                      </a>
                      {/* Mega Menu */}
                      <div
                        className="hs-mega-menu hs-position-right dropdown-menu w-100"
                        aria-labelledby="pagesMegaMenu"
                        style={{minWidth: "42rem"}}
                      >
                        {/* Main Content */}
                        <div className="navbar-dropdown-menu-inner">
                          <div className="row">
                            <div className="col-sm-6 col-md-3">
                              <span className="dropdown-header">Company</span>
                              <a
                                className="dropdown-item "
                                href="page-about.html"
                              >
                                About
                              </a>
                              <a
                                className="dropdown-item "
                                href="page-services.html"
                              >
                                Services
                              </a>
                              <a
                                className="dropdown-item "
                                href="page-customer-stories.html"
                              >
                                Customer Stories
                              </a>
                              <a
                                className="dropdown-item "
                                href="page-customer-story.html"
                              >
                                Customer Story
                              </a>
                              <a
                                className="dropdown-item "
                                href="page-help-center.html"
                              >
                                Help Center
                              </a>
                              <a
                                className="dropdown-item "
                                href="page-help-center-categories.html"
                              >
                                Help Center: Categories
                              </a>
                              <a
                                className="dropdown-item "
                                href="page-help-center-article.html"
                              >
                                Help Center: Article
                              </a>
                            </div>
                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0">
                              <span className="dropdown-header invisible">
                                Company
                              </span>
                              <a
                                className="dropdown-item "
                                href="page-careers.html"
                              >
                                Careers
                              </a>
                              <a
                                className="dropdown-item "
                                href="page-careers-overview.html"
                              >
                                Careers: Overview
                              </a>
                              <a
                                className="dropdown-item "
                                href="page-hire-us.html"
                              >
                                Hire Us
                              </a>
                              <a
                                className="dropdown-item "
                                href="page-contacts.html"
                              >
                                Contacts
                              </a>
                              <a
                                className="dropdown-item "
                                href="page-login.html"
                              >
                                Log In
                              </a>
                              <a
                                className="dropdown-item "
                                href="page-signup.html"
                              >
                                Sign Up
                              </a>
                              <a
                                className="dropdown-item "
                                href="page-reset-password.html"
                              >
                                Forgot Password
                              </a>
                            </div>
                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0">
                              <span className="dropdown-header">Portfolio</span>
                              <a
                                className="dropdown-item "
                                href="portfolio-modern.html"
                              >
                                Modern
                              </a>
                              <a
                                className="dropdown-item "
                                href="portfolio-classic.html"
                              >
                                Classic
                              </a>
                              <a
                                className="dropdown-item "
                                href="portfolio-case-study.html"
                              >
                                Case Study
                              </a>
                            </div>
                            <div className="col-sm-6 col-md-3">
                              <span className="dropdown-header">
                                Specialty pages
                              </span>
                              <a
                                className="dropdown-item active"
                                href="page-pricing.html"
                              >
                                Pricing
                              </a>
                              <a
                                className="dropdown-item "
                                href="page-coming-soon.html"
                              >
                                Coming Soon
                              </a>
                              <a
                                className="dropdown-item "
                                href="page-error-404.html"
                              >
                                Error 404
                              </a>
                              <a
                                className="dropdown-item "
                                href="page-terms.html"
                              >
                                Terms &amp; Conditions
                              </a>
                              <a
                                className="dropdown-item "
                                href="page-privacy.html"
                              >
                                Privacy &amp; Policy
                              </a>
                            </div>
                          </div>
                          {/* End Row */}
                        </div>
                        {/* End Main Content */}
                      </div>
                      {/* End Mega Menu */}
                    </li>
                    {/* End Pages */}
                    {/* Blog */}
                    <li className="hs-has-sub-menu nav-item">
                      <a
                        id="blogMegaMenu"
                        className="hs-mega-menu-invoker nav-link dropdown-toggle "
                        href="#"
                        role="button"
                        aria-expanded="false"
                      >
                        Blog
                      </a>
                      {/* Mega Menu */}
                      <div
                        className="hs-sub-menu dropdown-menu"
                        aria-labelledby="blogMegaMenu"
                        style={{minWidth: "12rem"}}
                      >
                        <a className="dropdown-item " href="blog-classic.html">
                          Classic
                        </a>
                        <a className="dropdown-item " href="blog-article.html">
                          Article
                        </a>
                        <a
                          className="dropdown-item "
                          href="blog-author-profile.html"
                        >
                          Author Profile
                        </a>
                      </div>
                      {/* End Mega Menu */}
                    </li>
                    {/* End Blog */}
                    {/* Docs */}
                    <li
                      className="hs-has-mega-menu nav-item"
                      data-hs-mega-menu-item-options='{
              "desktop": {
                "maxWidth": "20rem"
              }
            }'
                    >
                      <a
                        id="docsMegaMenu"
                        className="hs-mega-menu-invoker nav-link dropdown-toggle "
                        href="#"
                        role="button"
                        aria-expanded="false"
                      >
                        Docs
                      </a>
                      {/* Mega Menu */}
                      <div
                        className="hs-mega-menu hs-position-right dropdown-menu"
                        aria-labelledby="docsMegaMenu"
                        style={{minWidth: "20rem"}}
                      >
                        {/* Link */}
                        <a
                          className="navbar-dropdown-menu-media-link"
                          href="documentation/index.html"
                        >
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <span className="svg-icon svg-icon-sm text-primary">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    opacity="0.3"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.85714 1H11.7364C12.0911 1 12.4343 1.12568 12.7051 1.35474L17.4687 5.38394C17.8057 5.66895 18 6.08788 18 6.5292V19.0833C18 20.8739 17.9796 21 16.1429 21H4.85714C3.02045 21 3 20.8739 3 19.0833V2.91667C3 1.12612 3.02045 1 4.85714 1ZM7 13C7 12.4477 7.44772 12 8 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H8C7.44772 14 7 13.5523 7 13ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H11C11.5523 18 12 17.5523 12 17C12 16.4477 11.5523 16 11 16H8Z"
                                    fill="#035A4B"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.85714 3H14.7364C15.0911 3 15.4343 3.12568 15.7051 3.35474L20.4687 7.38394C20.8057 7.66895 21 8.08788 21 8.5292V21.0833C21 22.8739 20.9796 23 19.1429 23H6.85714C5.02045 23 5 22.8739 5 21.0833V4.91667C5 3.12612 5.02045 3 6.85714 3ZM7 13C7 12.4477 7.44772 12 8 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H8C7.44772 14 7 13.5523 7 13ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H11C11.5523 18 12 17.5523 12 17C12 16.4477 11.5523 16 11 16H8Z"
                                    fill="#035A4B"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <span className="navbar-dropdown-menu-media-title">
                                Documentation{" "}
                                <span className="badge bg-primary rounded-pill ms-1">
                                  v2.0
                                </span>
                              </span>
                              <p className="navbar-dropdown-menu-media-desc">
                                Development guides for building projects with
                                Space
                              </p>
                            </div>
                          </div>
                        </a>
                        {/* End Link */}
                        <div className="dropdown-divider" />
                        {/* Link */}
                        <a
                          className="navbar-dropdown-menu-media-link"
                          href="snippets/index.html"
                        >
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <span className="svg-icon svg-icon-sm text-primary">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    opacity="0.3"
                                    d="M21 2H13C12.4 2 12 2.4 12 3V13C12 13.6 12.4 14 13 14H21C21.6 14 22 13.6 22 13V3C22 2.4 21.6 2 21 2ZM15.7 8L14 10.1V5.80005L15.7 8ZM15.1 4H18.9L17 6.40002L15.1 4ZM17 9.59998L18.9 12H15.1L17 9.59998ZM18.3 8L20 5.90002V10.2L18.3 8ZM9 2H3C2.4 2 2 2.4 2 3V21C2 21.6 2.4 22 3 22H9C9.6 22 10 21.6 10 21V3C10 2.4 9.6 2 9 2ZM4.89999 12L4 14.8V9.09998L4.89999 12ZM4.39999 4H7.60001L6 8.80005L4.39999 4ZM6 15.2L7.60001 20H4.39999L6 15.2ZM7.10001 12L8 9.19995V14.9L7.10001 12Z"
                                    fill="#035A4B"
                                  />
                                  <path
                                    d="M21 18H13C12.4 18 12 17.6 12 17C12 16.4 12.4 16 13 16H21C21.6 16 22 16.4 22 17C22 17.6 21.6 18 21 18ZM19 21C19 20.4 18.6 20 18 20H13C12.4 20 12 20.4 12 21C12 21.6 12.4 22 13 22H18C18.6 22 19 21.6 19 21Z"
                                    fill="#035A4B"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <span className="navbar-dropdown-menu-media-title">
                                Snippets
                              </span>
                              <p className="navbar-dropdown-menu-media-desc">
                                Move quickly with copy-to-clipboard feature
                              </p>
                            </div>
                          </div>
                        </a>
                        {/* End Link */}
                      </div>
                      {/* End Mega Menu */}
                    </li>
                    {/* End Docs */}
                    <li className="nav-divider" />
                    {/* Log in */}
                    <li className="nav-item">
                      <a
                        className="js-animation-link btn btn-ghost-secondary btn-no-focus me-2 me-lg-0"
                        href="javascript:;"
                        role="button"
                        data-bs-toggle="modal"
                        data-bs-target="#signupModal"
                        data-hs-show-animation-options='{
                     "targetSelector": "#signupModalFormLogin",
                     "groupName": "idForm"
                   }'
                      >
                        Log in
                      </a>
                      <a
                        className="js-animation-link d-lg-none btn btn-primary"
                        href="javascript:;"
                        role="button"
                        data-bs-toggle="modal"
                        data-bs-target="#signupModal"
                        data-hs-show-animation-options='{
                     "targetSelector": "#signupModalFormSignup",
                     "groupName": "idForm"
                   }'
                      >
                        <i className="bi-person-circle me-1" /> Sign up
                      </a>
                    </li>
                    {/* End Log in */}
                    {/* Sign up */}
                    <li className="nav-item">
                      <a
                        className="js-animation-link d-none d-lg-inline-block btn btn-primary"
                        href="javascript:;"
                        role="button"
                        data-bs-toggle="modal"
                        data-bs-target="#signupModal"
                        data-hs-show-animation-options='{
                     "targetSelector": "#signupModalFormSignup",
                     "groupName": "idForm"
                   }'
                      >
                        <i className="bi-person-circle me-1" /> Sign up
                      </a>
                    </li>
                    {/* End Sign up */}
                  </ul>
                </div>
                {/* End Collapse */}
              </nav>
            </div>
          </header>
          {/* ========== END HEADER ========== */}
          {/* ========== MAIN CONTENT ========== */}
          <main id="content" role="main">
            {/* Hero */}
            <div className="bg-soft-primary-light overflow-hidden">
              <div className="container content-space-1 content-space-md-2">
                {/* Heading */}
                <div className="w-lg-50 text-center mx-lg-auto mb-10">
                  <h1 className="display-4 text-primary">
                    Find the right plan for your{" "}
                    <span className="text-warning">team</span>
                  </h1>
                  <p className="lead text-body">
                    Pay as you go service, cancel anytime.
                  </p>
                </div>
                {/* End Heading */}
                {/* Form Switch */}
                <div className="d-flex justify-content-center mb-5">
                  <div className="form-check form-switch form-switch-between">
                    <label className="form-check-label">Monthly</label>
                    <input
                      className="js-toggle-switch form-check-input"
                      type="checkbox"
                      data-hs-toggle-switch-options='{
                 "targetSelector": "#pricingCount1, #pricingCount2, #pricingCount3"
               }'
                    />
                    <label className="form-check-label form-switch-promotion">
                      Annually
                      <span className="form-switch-promotion-container">
                        <span className="form-switch-promotion-body">
                          <svg
                            className="form-switch-promotion-arrow"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 99.3 57"
                            width={48}
                          >
                            <path
                              fill="none"
                              stroke="#bdc5d1"
                              strokeWidth={4}
                              strokeLinecap="round"
                              strokeMiterlimit={10}
                              d="M2,39.5l7.7,14.8c0.4,0.7,1.3,0.9,2,0.4L27.9,42"
                            />
                            <path
                              fill="none"
                              stroke="#bdc5d1"
                              strokeWidth={4}
                              strokeLinecap="round"
                              strokeMiterlimit={10}
                              d="M11,54.3c0,0,10.3-65.2,86.3-50"
                            />
                          </svg>
                          <span className="form-switch-promotion-text">
                            <span className="badge bg-warning text-dark rounded-pill ms-1">
                              Save 10%
                            </span>
                          </span>
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
                {/* End Form Switch */}
                {/* Card Group */}
                <div className="w-lg-85 position-relative mx-lg-auto mb-7">
                  <div className="row card-group-md-row card-group-md-3">
                    <div className="col-md mb-3 mb-md-0">
                      {/* Card */}
                      <div className="card card-lg">
                        <div className="card-header text-center">
                          <div className="mb-2">
                            <span className="fs-5 align-top text-dark fw-bold">
                              $
                            </span>
                            <span
                              id="pricingCount1"
                              className="fs-2 text-dark fw-bold"
                              data-hs-toggle-switch-item-options='{
                         "min": 29,
                         "max": 19
                       }'
                            >
                              19
                            </span>
                            <span>/mo</span>
                          </div>
                          <h5 className="card-title">Professional</h5>
                          <p className="card-text">
                            All the basics for starting a new business
                          </p>
                        </div>
                        <div className="card-body d-flex justify-content-center h-100 py-0">
                          {/* List Checked */}
                          <ul className="list-checked list-checked-primary">
                            <li className="list-checked-item">1 user</li>
                            <li className="list-checked-item">
                              Space plan features
                            </li>
                            <li className="list-checked-item">1 app</li>
                          </ul>
                          {/* End List Checked */}
                        </div>
                        <div className="card-footer text-center">
                          <div className="d-grid mb-2">
                            <button
                              type="button"
                              className="btn btn-ghost-primary"
                            >
                              Try free for 30 days
                            </button>
                          </div>
                          <p className="card-text text-muted small">
                            No card required
                          </p>
                        </div>
                      </div>
                      {/* End Card */}
                    </div>
                    {/* End Col */}
                    <div className="col-md mb-3 mb-md-0">
                      {/* Card */}
                      <div className="card card-lg">
                        <div className="card-header text-center">
                          <div className="mb-2">
                            <span className="fs-5 align-top text-dark fw-bold">
                              $
                            </span>
                            <span
                              id="pricingCount2"
                              className="fs-2 text-dark fw-bold"
                              data-hs-toggle-switch-item-options='{
                         "min": 49,
                         "max": 39
                       }'
                            >
                              39
                            </span>
                            <span>/mo</span>
                          </div>
                          <h5 className="card-title">Team</h5>
                          <p className="card-text">
                            Everything you need for a growing business
                          </p>
                        </div>
                        <div className="card-body d-flex justify-content-center h-100 py-0">
                          {/* List Checked */}
                          <ul className="list-checked list-checked-primary">
                            <li className="list-checked-item">3 users</li>
                            <li className="list-checked-item">
                              Space plan features
                            </li>
                            <li className="list-checked-item">3 apps</li>
                            <li className="list-checked-item">
                              Product support
                            </li>
                          </ul>
                          {/* End List Checked */}
                        </div>
                        <div className="card-footer text-center">
                          <div className="d-grid mb-2">
                            <button type="button" className="btn btn-primary">
                              Try free for 30 days
                            </button>
                          </div>
                          <p className="card-text text-muted small">
                            No card required
                          </p>
                        </div>
                      </div>
                      {/* End Card */}
                    </div>
                    {/* End Col */}
                    <div className="col-md mb-3 mb-md-0">
                      {/* Card */}
                      <div className="card card-lg">
                        <div className="card-header text-center">
                          <div className="mb-2">
                            <span className="fs-5 align-top text-dark fw-bold">
                              $
                            </span>
                            <span
                              id="pricingCount3"
                              className="fs-2 text-dark fw-bold"
                              data-hs-toggle-switch-item-options='{
                         "min": 69,
                         "max": 59
                       }'
                            >
                              59
                            </span>
                            <span>/mo</span>
                          </div>
                          <h5 className="card-title">Enterprise</h5>
                          <p className="card-text">
                            Advanced features for scaling your business
                          </p>
                        </div>
                        <div className="card-body d-flex justify-content-center h-100 py-0">
                          {/* List Checked */}
                          <ul className="list-checked list-checked-primary">
                            <li className="list-checked-item">
                              Unlimited users
                            </li>
                            <li className="list-checked-item">
                              Space plan features
                            </li>
                            <li className="list-checked-item">
                              Unlimited apps
                            </li>
                            <li className="list-checked-item">
                              Product support
                            </li>
                          </ul>
                          {/* End List Checked */}
                        </div>
                        <div className="card-footer text-center">
                          <div className="d-grid mb-2">
                            <button
                              type="button"
                              className="btn btn-ghost-primary"
                            >
                              Try free for 30 days
                            </button>
                          </div>
                          <p className="card-text text-muted small">
                            No card required
                          </p>
                        </div>
                      </div>
                      {/* End Card */}
                    </div>
                    {/* End Col */}
                    <div className="col-12">
                      {/* Card */}
                      <div className="card card-lg card-divider">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-sm mb-3 mb-sm-0">
                              <h5 className="card-title">Customized</h5>
                              <p className="card-text">
                                Design a custom package for your business
                              </p>
                            </div>
                            {/* End Col */}
                            <div className="col-sm-auto">
                              <a className="btn btn-white" href="#">
                                Contact sales{" "}
                                <i className="bi-chevron-right small ms-2" />
                              </a>
                            </div>
                            {/* End Col */}
                          </div>
                          {/* End Row */}
                        </div>
                      </div>
                      {/* End Card */}
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                  {/* Background Shapes */}
                  <div
                    className="position-absolute zi-n1"
                    style={{top: "-6rem", left: "-6rem"}}
                  >
                    <img
                      src="assets/svg/components/shape-1.svg"
                      alt="SVG"
                      width={500}
                      style={{width: "12rem"}}
                    />
                  </div>
                  <div
                    className="position-absolute zi-n1"
                    style={{bottom: "-6rem", right: "-7rem"}}
                  >
                    <img
                      src="assets/svg/components/shape-7.svg"
                      alt="SVG"
                      width={250}
                    />
                  </div>
                  {/* End Background Shapes */}
                </div>
                {/* End Card Group */}
                {/* Info */}
                <div className="text-center">
                  <p className="mb-0">Want to see more?</p>
                  <a className="link" href="#fullListOfFeatures">
                    See all features and compare plans{" "}
                    <i className="bi-chevron-right small ms-1" />
                  </a>
                </div>
                {/* End Info */}
              </div>
            </div>
            {/* End Hero */}
            {/* Pricing Table */}
            <div
              id="fullListOfFeatures"
              className="container content-space-1 content-space-md-3"
            >
              {/* Heading */}
              <div className="w-lg-65 text-center mx-lg-auto mb-7">
                <h3>Compare plans</h3>
              </div>
              {/* End Heading */}
              {/* Table */}
              <div className="table-responsive-sm">
                <table className="table table-lg table-striped table-borderless">
                  <thead>
                    <tr className="table-align-middle">
                      <th scope="col" />
                      <th scope="col" className="table-text-center h5">
                        Basic
                      </th>
                      <th scope="col" className="table-text-center h5">
                        Premium
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="h6 fw-bold">
                        Financial data
                      </th>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <th scope="row">Open/High/Low/Close</th>
                      <td className="table-text-center">
                        <i className="bi-check-circle text-primary" />
                      </td>
                      <td className="table-text-center">
                        <i className="bi-check-circle text-primary" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Price-volume difference indicator</th>
                      <td className="table-text-center">
                        <i className="bi-dash text-body" />
                      </td>
                      <td className="table-text-center">
                        <i className="bi-check-circle text-primary" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="h6 fw-bold">
                        On-chain data
                      </th>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <th scope="row">Network growth</th>
                      <td className="table-text-center">
                        <i className="bi-dash text-body" />
                      </td>
                      <td className="table-text-center">
                        <i className="bi-check-circle text-primary" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Average token age consumed</th>
                      <td className="table-text-center">
                        <i className="bi-check-circle text-primary" />
                      </td>
                      <td className="table-text-center">
                        <i className="bi-check-circle text-primary" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Exchange flow</th>
                      <td className="table-text-center">
                        <i className="bi-dash text-body" />
                      </td>
                      <td className="table-text-center">
                        <i className="bi-check-circle text-primary" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Total ERC20 exchange funds flow</th>
                      <td className="table-text-center">
                        <i className="bi-dash text-body" />
                      </td>
                      <td className="table-text-center">
                        <i className="bi-check-circle text-primary" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Transaction volume</th>
                      <td className="table-text-center">
                        <i className="bi-check-circle text-primary" />
                      </td>
                      <td className="table-text-center">
                        <i className="bi-check-circle text-primary" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Total circulation (beta)</th>
                      <td className="table-text-center">
                        <i className="bi-dash text-body" />
                      </td>
                      <td className="table-text-center">
                        <i className="bi-check-circle text-primary" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Velocity of tokens (beta)</th>
                      <td className="table-text-center">
                        <i className="bi-check-circle text-primary" />
                      </td>
                      <td className="table-text-center">
                        <i className="bi-check-circle text-primary" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">ETH gas used</th>
                      <td className="table-text-center">
                        <i className="bi-dash text-body" />
                      </td>
                      <td className="table-text-center">
                        <i className="bi-check-circle text-primary" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="h6 fw-bold">
                        Social data
                      </th>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <th scope="row">Dev activity</th>
                      <td className="table-text-center">
                        <i className="bi-dash text-body" />
                      </td>
                      <td className="table-text-center">
                        <i className="bi-check-circle text-primary" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Topic search</th>
                      <td className="table-text-center">
                        <i className="bi-check-circle text-primary" />
                      </td>
                      <td className="table-text-center">
                        <i className="bi-check-circle text-primary" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Relative social dominance</th>
                      <td className="table-text-center">
                        <i className="bi-dash text-body" />
                      </td>
                      <td className="table-text-center">
                        <i className="bi-check-circle text-primary" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Total social volume</th>
                      <td className="table-text-center">
                        <i className="bi-dash text-body" />
                      </td>
                      <td className="table-text-center">
                        <i className="bi-check-circle text-primary" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* End Table */}
            </div>
            {/* End Pricing Table */}
            {/* Clients */}
            <div className="container content-space-b-1 content-space-b-md-3">
              <div className="w-lg-65 text-center mx-lg-auto">
                {/* Heading */}
                <div className="mb-4">
                  <h5>Thousands of world’s leading companies trust Space</h5>
                </div>
                {/* End Heading */}
                <div className="row">
                  <div className="col text-center py-3">
                    <img
                      className="avatar avatar-lg avatar-4x3"
                      src="assets/svg/brands/capsule-primary.svg"
                      alt="Logo"
                    />
                  </div>
                  {/* End Col */}
                  <div className="col text-center py-3">
                    <img
                      className="avatar avatar-lg avatar-4x3"
                      src="assets/svg/brands/fitbit-primary.svg"
                      alt="Logo"
                    />
                  </div>
                  {/* End Col */}
                  <div className="col text-center py-3">
                    <img
                      className="avatar avatar-lg avatar-4x3"
                      src="assets/svg/brands/forbes-primary.svg"
                      alt="Logo"
                    />
                  </div>
                  {/* End Col */}
                  <div className="col text-center py-3">
                    <img
                      className="avatar avatar-lg avatar-4x3"
                      src="assets/svg/brands/mailchimp-primary.svg"
                      alt="Logo"
                    />
                  </div>
                  {/* End Col */}
                  <div className="col text-center py-3">
                    <img
                      className="avatar avatar-lg avatar-4x3"
                      src="assets/svg/brands/layar-primary.svg"
                      alt="Logo"
                    />
                  </div>
                  {/* End Col */}
                </div>
                {/* End Row */}
              </div>
            </div>
            {/* End Clients */}
            {/* Testimonials */}
            <div className="bg-soft-warning">
              <div className="container content-space-1 content-space-md-3">
                <div className="text-center">
                  <img
                    className="mb-5"
                    src="assets/img/illustrations/review.png"
                    alt="Illustration"
                    style={{width: "12.5rem"}}
                  />
                </div>
                {/* Blockquote */}
                <figure className="w-md-75 text-center mx-md-auto">
                  <blockquote className="blockquote">
                    “ I just wanted to say that I'm very happy with my purchase
                    of Space so far. The documentation is outstanding - clear
                    and detailed. ”
                  </blockquote>
                  <figcaption className="blockquote-footer text-center  mb-7">
                    Philip
                    <span className="blockquote-footer-source">
                      Product Manager | Mailchimp
                    </span>
                  </figcaption>
                  <img
                    className="avatar avatar-xxl avatar-4x3"
                    src="assets/svg/brands/mailchimp-primary.svg"
                    alt="Logo"
                  />
                </figure>
                {/* End Blockquote */}
              </div>
            </div>
            {/* End Testimonials */}
            {/* FAQ */}
            <div className="container content-space-1 content-space-md-3">
              {/* Heading */}
              <div className="w-lg-65 text-center mx-lg-auto mb-7">
                <h3>Frequently Asked Questions</h3>
              </div>
              {/* End Heading */}
              {/* Accordion */}
              <div className="w-lg-85 mx-lg-auto mb-7">
                <div className="accordion accordion-flush" id="accordionFAQ">
                  {/* Accordion Item */}
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingOne">
                      <a
                        className="accordion-button"
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What methods of payments are supported?
                      </a>
                    </div>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionFAQ"
                    >
                      <div className="accordion-body">
                        You can purchase the themes on Bootstrap Themes via any
                        major credit/debit card (via Stripe) or with your Paypal
                        account. We don't support cryptocurrencies or invoicing
                        at this time.
                      </div>
                    </div>
                  </div>
                  {/* End Accordion Item */}
                  {/* Accordion Item */}
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingTwo">
                      <a
                        className="accordion-button collapsed"
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Can I cancel at anytime?
                      </a>
                    </div>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionFAQ"
                    >
                      <div className="accordion-body">
                        If you'd like a refund please reach out to us at{" "}
                        <a href="#">themes@getbootstrap.com</a>. If you need
                        technical help with the theme before a refund please
                        reach out to the seller first and they can get in touch
                        with us if they're unable to resolve the issue.
                      </div>
                    </div>
                  </div>
                  {/* End Accordion Item */}
                  {/* Accordion Item */}
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingThree">
                      <a
                        className="accordion-button collapsed"
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How do I get a receipt for my purchase?
                      </a>
                    </div>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionFAQ"
                    >
                      <div className="accordion-body">
                        You'll receive an email from Bootstrap themes once your
                        purchase is complete.
                      </div>
                    </div>
                  </div>
                  {/* End Accordion Item */}
                  {/* Accordion Item */}
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingFour">
                      <a
                        className="accordion-button collapsed"
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Which license do I need?
                      </a>
                    </div>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionFAQ"
                    >
                      <div className="accordion-body">
                        There are three license types - <a href="#">Standard</a>
                        , <a href="#">Multisite</a>, and{" "}
                        <a href="#">Extended</a>. We've provided the table below
                        for a quick look at the difference between the them, as
                        well as a few examples of ways each license could be
                        used. If you'd like more of the nitty-gritty details you
                        can find them below and always feel free to reach out
                        with any questions you have at{" "}
                        <a href="#">themes@getbootstrap.com</a>.
                      </div>
                    </div>
                  </div>
                  {/* End Accordion Item */}
                  {/* Accordion Item */}
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingFive">
                      <a
                        className="accordion-button collapsed"
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        How do I get access to a theme I purchased?
                      </a>
                    </div>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionFAQ"
                    >
                      <div className="accordion-body">
                        If you lose the link for a theme you purchased, don't
                        panic! We've got you covered. You can login to your
                        account, tap your avatar in the upper right corner, and
                        tap Purchases. If you didn't create a login or can't
                        remember the information, you can use our handy
                        Redownload page, just remember to use the same email you
                        originally made your purchases with.
                      </div>
                    </div>
                  </div>
                  {/* End Accordion Item */}
                  {/* Accordion Item */}
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingSix">
                      <a
                        className="accordion-button collapsed"
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Upgrade License Type
                      </a>
                    </div>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionFAQ"
                    >
                      <div className="accordion-body">
                        There may be times when you need to upgrade your license
                        from the original type you purchased and we have a
                        solution that ensures you can apply your original
                        purchase cost to the new license purchase.
                      </div>
                    </div>
                  </div>
                  {/* End Accordion Item */}
                </div>
              </div>
              {/* End Accordion */}
              {/* Info */}
              <div className="text-center">
                <p className="mb-0">Still have questions?</p>
                <a className="link" href="page-contacts.html">
                  Contact our friendly support team{" "}
                  <i className="bi-chevron-right small ms-1" />
                </a>
              </div>
              {/* End Info */}
            </div>
            {/* End FAQ */}
          </main>
          {/* ========== END MAIN CONTENT ========== */}
          {/* ========== FOOTER ========== */}
          <footer className="bg-primary-dark border-top border-white-10">
            <div className="container">
              <div className="row content-space-1">
                <div className="col-lg-3 mb-7 mb-lg-0">
                  {/* Logo */}
                  <div className="mb-5">
                    <a
                      className="navbar-brand"
                      href="index-2.html"
                      aria-label="Space"
                    >
                      <img
                        className="navbar-brand-logo"
                        src="assets/svg/logos/logo-white.svg"
                        alt="Image Description"
                      />
                    </a>
                  </div>
                  {/* End Logo */}
                  <span className="d-block">
                    <label
                      htmlFor="selectLanguage"
                      className="form-label text-white"
                    >
                      Choose language
                    </label>
                  </span>
                  {/* Button Group */}
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-soft-light btn-sm dropdown-toggle"
                      id="selectLanguage"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="d-flex align-items-center">
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="assets/vendor/flag-icon-css/flags/1x1/us.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>English (US)</span>
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item d-flex align-items-center active"
                        href="#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="assets/vendor/flag-icon-css/flags/1x1/us.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>English (US)</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="assets/vendor/flag-icon-css/flags/1x1/gb.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>English (UK)</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="assets/vendor/flag-icon-css/flags/1x1/de.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>Deutsch</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="assets/vendor/flag-icon-css/flags/1x1/dk.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>Dansk</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="assets/vendor/flag-icon-css/flags/1x1/es.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>Español</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="assets/vendor/flag-icon-css/flags/1x1/nl.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>Nederlands</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="assets/vendor/flag-icon-css/flags/1x1/it.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>Italiano</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="assets/vendor/flag-icon-css/flags/1x1/cn.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>中文 (繁體)</span>
                      </a>
                    </div>
                  </div>
                  {/* End Button Group */}
                </div>
                {/* End Col */}
                <div className="col-sm mb-7 mb-sm-0">
                  <span className="text-cap text-primary-light">Resources</span>
                  {/* List */}
                  <ul className="list-unstyled list-py-1 mb-0">
                    <li>
                      <a className="link-sm link-light" href="#">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="link-sm link-light" href="#">
                        Guidance
                      </a>
                    </li>
                    <li>
                      <a className="link-sm link-light" href="#">
                        Customer Stories
                      </a>
                    </li>
                    <li>
                      <a className="link-sm link-light" href="#">
                        Support <i className="bi-box-arrow-up-right ms-1" />
                      </a>
                    </li>
                    <li>
                      <a className="link-sm link-light" href="#">
                        API
                      </a>
                    </li>
                    <li>
                      <a className="link-sm link-light" href="#">
                        Packages
                      </a>
                    </li>
                  </ul>
                  {/* End List */}
                </div>
                {/* End Col */}
                <div className="col-sm mb-7 mb-sm-0">
                  <span className="text-cap text-primary-light">Company</span>
                  {/* List */}
                  <ul className="list-unstyled list-py-1 mb-0">
                    <li>
                      <a className="link-sm link-light" href="#">
                        Belonging <i className="bi-box-arrow-up-right ms-1" />
                      </a>
                    </li>
                    <li>
                      <a className="link-sm link-light" href="#">
                        Company
                      </a>
                    </li>
                    <li>
                      <a className="link-sm link-light" href="#">
                        Careers{" "}
                        <span className="badge bg-warning text-dark rounded-pill ms-2">
                          We're hiring
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="link-sm link-light" href="#">
                        Contacts
                      </a>
                    </li>
                    <li>
                      <a className="link-sm link-light" href="#">
                        Security
                      </a>
                    </li>
                  </ul>
                  {/* End List */}
                </div>
                {/* End Col */}
                <div className="col-sm">
                  <span className="text-cap text-primary-light">Platform</span>
                  {/* List */}
                  <ul className="list-unstyled list-py-1 mb-0">
                    <li>
                      <a className="link-sm link-light" href="#">
                        Web
                      </a>
                    </li>
                    <li>
                      <a className="link-sm link-light" href="#">
                        Mobile
                      </a>
                    </li>
                    <li>
                      <a className="link-sm link-light" href="#">
                        iOS
                      </a>
                    </li>
                    <li>
                      <a className="link-sm link-light" href="#">
                        Android
                      </a>
                    </li>
                    <li>
                      <a className="link-sm link-light" href="#">
                        Figma Importing
                      </a>
                    </li>
                  </ul>
                  {/* End List */}
                </div>
                {/* End Col */}
                <div className="col-sm">
                  <span className="text-cap text-primary-light">Legal</span>
                  {/* List */}
                  <ul className="list-unstyled list-py-1 mb-5">
                    <li>
                      <a className="link-sm link-light" href="#">
                        Terms of use
                      </a>
                    </li>
                    <li>
                      <a className="link-sm link-light" href="#">
                        Privacy policy{" "}
                        <i className="bi-box-arrow-up-right ms-1" />
                      </a>
                    </li>
                  </ul>
                  {/* End List */}
                  <span className="text-cap text-primary-light">Docs</span>
                  {/* List */}
                  <ul className="list-unstyled list-py-1 mb-0">
                    <li>
                      <a className="link-sm link-light" href="#">
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a className="link-sm link-light" href="#">
                        Snippets
                      </a>
                    </li>
                  </ul>
                  {/* End List */}
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
              <div className="border-top border-white-10" />
              <div className="row align-items-md-end py-5">
                <div className="col-md mb-3 mb-md-0">
                  <p className="text-white mb-0">
                    © Space. 2021 Htmlstream. All rights reserved.
                  </p>
                </div>
                <div className="col-md d-md-flex justify-content-md-end">
                  {/* Socials */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a
                        className="btn btn-icon btn-sm btn-soft-light rounded-circle"
                        href="#"
                      >
                        <i className="bi-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn btn-icon btn-sm btn-soft-light rounded-circle"
                        href="#"
                      >
                        <i className="bi-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn btn-icon btn-sm btn-soft-light rounded-circle"
                        href="#"
                      >
                        <i className="bi-github" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn btn-icon btn-sm btn-soft-light rounded-circle"
                        href="#"
                      >
                        <i className="bi-slack" />
                      </a>
                    </li>
                  </ul>
                  {/* End Socials */}
                </div>
              </div>
            </div>
          </footer>
          {/* ========== END FOOTER ========== */}
          {/* ========== SECONDARY CONTENTS ========== */}
          {/* Sign Up */}
          <div
            className="modal fade"
            id="signupModal"
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                {/* Header */}
                <div className="modal-close">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                {/* End Header */}
                {/* Body */}
                <div className="modal-body p-sm-5">
                  {/* Log in */}
                  <div
                    id="signupModalFormLogin"
                    style={{display: "none", opacity: 0}}
                  >
                    {/* Heading */}
                    <div className="text-center mb-7">
                      <h4>Log in</h4>
                      <p>
                        Don't have an account yet?
                        <a
                          className="js-animation-link"
                          href="javascript:;"
                          role="button"
                          data-hs-show-animation-options='{
                     "targetSelector": "#signupModalFormSignup",
                     "groupName": "idForm"
                   }'
                        >
                          Sign up here
                        </a>
                      </p>
                    </div>
                    {/* End Heading */}
                    <div className="d-grid gap-2">
                      <a className="btn btn-white btn-lg" href="#">
                        <span className="d-flex justify-content-center align-items-center">
                          <img
                            className="avatar avatar-xss me-2"
                            src="assets/svg/brands/google-icon.svg"
                            alt="Image Description"
                          />
                          Log in with Google
                        </span>
                      </a>
                      <a
                        className="js-animation-link btn btn-primary btn-lg"
                        href="#"
                        data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormLoginWithEmail",
                   "groupName": "idForm"
                 }'
                      >
                        Log in with Email
                      </a>
                    </div>
                  </div>
                  {/* End Log in */}
                  {/* Log in with Modal */}
                  <div
                    id="signupModalFormLoginWithEmail"
                    style={{display: "none", opacity: 0}}
                  >
                    {/* Heading */}
                    <div className="text-center mb-7">
                      <h4>Log in</h4>
                      <p>
                        Don't have an account yet?
                        <a
                          className="js-animation-link"
                          href="javascript:;"
                          role="button"
                          data-hs-show-animation-options='{
                     "targetSelector": "#signupModalFormSignup",
                     "groupName": "idForm"
                   }'
                        >
                          Sign up here
                        </a>
                      </p>
                    </div>
                    {/* End Heading */}
                    <form className="js-validate needs-validation" noValidate>
                      {/* Form */}
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="signupModalFormLoginEmail"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          name="email"
                          id="signupModalFormLoginEmail"
                          placeholder="email@site.com"
                          aria-label="email@site.com"
                          required
                        />
                        <span className="invalid-feedback">
                          Please enter a valid email address.
                        </span>
                      </div>
                      {/* End Form */}
                      {/* Form */}
                      <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <label
                            className="form-label"
                            htmlFor="signupModalFormLoginPassword"
                          >
                            Password
                          </label>
                          <a
                            className="js-animation-link form-label-link"
                            href="javascript:;"
                            data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormResetPassword",
                   "groupName": "idForm"
                 }'
                          >
                            Forgot Password?
                          </a>
                        </div>
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          name="password"
                          id="signupModalFormLoginPassword"
                          placeholder="8+ characters required"
                          aria-label="8+ characters required"
                          required
                          minLength={8}
                        />
                        <span className="invalid-feedback">
                          Please enter a valid password.
                        </span>
                      </div>
                      {/* End Form */}
                      <div className="d-grid mb-3">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Log in
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* End Log in with Modal */}
                  {/* Sign up */}
                  <div id="signupModalFormSignup">
                    {/* Heading */}
                    <div className="text-center mb-7">
                      <h4>Sign up</h4>
                      <p>
                        Already have an account?
                        <a
                          className="js-animation-link"
                          href="javascript:;"
                          role="button"
                          data-hs-show-animation-options='{
                     "targetSelector": "#signupModalFormLogin",
                     "groupName": "idForm"
                   }'
                        >
                          Log in here
                        </a>
                      </p>
                    </div>
                    {/* End Heading */}
                    <div className="d-grid gap-3">
                      <a className="btn btn-white btn-lg" href="#">
                        <span className="d-flex justify-content-center align-items-center">
                          <img
                            className="avatar avatar-xss me-2"
                            src="assets/svg/brands/google-icon.svg"
                            alt="Image Description"
                          />
                          Sign up with Google
                        </span>
                      </a>
                      <a
                        className="js-animation-link btn btn-primary btn-lg"
                        href="#"
                        data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormSignupWithEmail",
                   "groupName": "idForm"
                 }'
                      >
                        Sign up with Email
                      </a>
                      <div className="text-center">
                        <p className="small mb-0">
                          By continuing you agree to our{" "}
                          <a href="page-terms.html">Terms and Conditions</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Sign up */}
                  {/* Sign up with Modal */}
                  <div
                    id="signupModalFormSignupWithEmail"
                    style={{display: "none", opacity: 0}}
                  >
                    {/* Heading */}
                    <div className="text-center mb-7">
                      <h4>Sign up</h4>
                      <p>
                        Already have an account?
                        <a
                          className="js-animation-link"
                          href="javascript:;"
                          role="button"
                          data-hs-show-animation-options='{
                     "targetSelector": "#signupModalFormLogin",
                     "groupName": "idForm"
                   }'
                        >
                          Log in here
                        </a>
                      </p>
                    </div>
                    {/* End Heading */}
                    <form className="js-validate need-validate" noValidate>
                      {/* Form */}
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="signupModalFormSignupEmail"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          name="email"
                          id="signupModalFormSignupEmail"
                          placeholder="email@site.com"
                          aria-label="email@site.com"
                          required
                        />
                        <span className="invalid-feedback">
                          Please enter a valid email address.
                        </span>
                      </div>
                      {/* End Form */}
                      {/* Form */}
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="signupModalFormSignupPassword"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          name="password"
                          id="signupModalFormSignupPassword"
                          placeholder="8+ characters required"
                          aria-label="8+ characters required"
                          required
                        />
                        <span className="invalid-feedback">
                          Your password is invalid. Please try again.
                        </span>
                      </div>
                      {/* End Form */}
                      {/* Form */}
                      <div className="mb-3" data-hs-validation-validate-class>
                        <label
                          className="form-label"
                          htmlFor="signupModalFormSignupConfirmPassword"
                        >
                          Confirm password
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          name="confirmPassword"
                          id="signupModalFormSignupConfirmPassword"
                          placeholder="8+ characters required"
                          aria-label="8+ characters required"
                          required
                          data-hs-validation-equal-field="#signupModalFormSignupPassword"
                        />
                        <span className="invalid-feedback">
                          Password does not match the confirm password.
                        </span>
                      </div>
                      {/* End Form */}
                      <div className="d-grid mb-3">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Sign up
                        </button>
                      </div>
                      <div className="text-center">
                        <p className="small mb-0">
                          By continuing you agree to our{" "}
                          <a href="#">Terms and Conditions</a>
                        </p>
                      </div>
                    </form>
                  </div>
                  {/* End Sign up with Modal */}
                  {/* Reset Password */}
                  <div
                    id="signupModalFormResetPassword"
                    style={{display: "none", opacity: 0}}
                  >
                    {/* Heading */}
                    <div className="text-center mb-7">
                      <h4>Forgot password?</h4>
                      <p>
                        Enter the email address you used when you joined and
                        we'll send you instructions to reset your password.
                      </p>
                    </div>
                    {/* En dHeading */}
                    <form className="js-validate need-validate" noValidate>
                      <div className="mb-3">
                        {/* Form */}
                        <div className="d-flex justify-content-between align-items-center">
                          <label
                            className="form-label"
                            htmlFor="signupModalFormResetPasswordEmail"
                            tabIndex={0}
                          >
                            Your email
                          </label>
                          <a
                            className="js-animation-link form-label-link"
                            href="javascript:;"
                            data-hs-show-animation-options='{
                     "targetSelector": "#signupModalFormLogin",
                     "groupName": "idForm"
                   }'
                          >
                            <i className="bi-chevron-left small me-1" /> Back to
                            Log in
                          </a>
                        </div>
                        {/* End Form */}
                        {/* Form */}
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            name="email"
                            id="signupModalFormResetPasswordEmail"
                            tabIndex={1}
                            placeholder="Enter your email address"
                            aria-label="Enter your email address"
                            required
                          />
                          <span className="invalid-feedback">
                            Please enter a valid email address.
                          </span>
                        </div>
                        {/* End Form */}
                        <div className="d-grid">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* End Reset Password */}
                </div>
                {/* End Body */}
                {/* Footer */}
                <div className="modal-footer d-block text-center py-sm-5">
                  <small className="text-cap mb-4">
                    Trusted by the world's best teams
                  </small>
                  <div className="w-85 mx-auto">
                    <div className="row justify-content-between">
                      <div className="col">
                        <img
                          className="img-fluid"
                          src="assets/svg/brands/gitlab-gray.svg"
                          alt="Logo"
                        />
                      </div>
                      {/* End Col */}
                      <div className="col">
                        <img
                          className="img-fluid"
                          src="assets/svg/brands/fitbit-gray.svg"
                          alt="Logo"
                        />
                      </div>
                      {/* End Col */}
                      <div className="col">
                        <img
                          className="img-fluid"
                          src="assets/svg/brands/flow-xo-gray.svg"
                          alt="Logo"
                        />
                      </div>
                      {/* End Col */}
                      <div className="col">
                        <img
                          className="img-fluid"
                          src="assets/svg/brands/layar-gray.svg"
                          alt="Logo"
                        />
                      </div>
                      {/* End Col */}
                    </div>
                  </div>
                  {/* End Row */}
                </div>
                {/* End Footer */}
              </div>
            </div>
          </div>
          {/* Go To */}
          <a
            className="js-go-to go-to position-fixed"
            href="javascript:;"
            style={{visibility: "hidden"}}
            data-hs-go-to-options='{
   "offsetTop": 700,
   "position": {
     "init": {
       "right": "2rem"
     },
     "show": {
       "bottom": "2rem"
     },
     "hide": {
       "bottom": "-2rem"
     }
   }
 }'
          >
            <i className="bi-chevron-up" />
          </a>
          {/* ========== END SECONDARY CONTENTS ========== */}
          {/* JS Implementing Plugins */}
          {/* JS Space */}
          {/* JS Plugins Init. */}
        </div>
      </div>
    );
}

export default PagePricing
