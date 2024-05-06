import React, { useState, Suspense } from 'react';
// const Gallery = React.lazy(() => import('./components/gallery.js'));
// import Video from './components/video';
import Gallery from './components/gallery';
import About from './components/about';
import Service from './components/service';
import Menu from './components/menu';
import PopupEnquire from './components/poup';
import './App.css';
const Video = React.lazy(() => import('./components/videos/video'));

function App() {
  const [open, setOpen] = useState(false);

  const handlePopup = () => {
    setOpen(!open);
  }

  const now = new Date();
  const currentYear = now.getFullYear();


  return (
    <div className="coverImageHeader">
      <div className="react-slider-holder" id="react-slider-holder" />
      <div
        className=" qVvA_success _2ypN_toast-container   undefined "
        style={{ bottom: "-72px" }}>
        <div className="OLtM_toast-msg-container" />
        <div className="_3MXO_ripple JPxw_close-icon _3ebv_has-close cxpu_btn-animate-hover">
          <i className="icon-HDRcross" />
          <div className="n2_N_rippleContainer" />
        </div>
      </div>
      <div className="mobile-loader" id="filterLoader" style={{ display: "none" }}>
        <div className="svg-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
            <circle cx="12px" cy="12px" r="9px" className="circle" />
          </svg>
        </div>
      </div>
      <div className="outer-parent coverImageHeader all-sections header-sticky sticky" id="staticHeader" >
        <div className="header-block template-main-container coverImageHeader bannerImgStyle" style={{ backgroundImage: "url(https://image1.jdomni.in/banner/14102022/B8/3C/F3/AF39F47B8FF17141C5735E7F61_1665722328163.png?output-format=webp)", backgroundSize: "cover" }} >
          <Menu />
          <div className="bootstrap-iso header-custom-template cssCustom mr-3">
            <div className="text-end ">
              <div className="editable-text editable-content-holder  ">
                <div className="font-size-32 bold align-end editable-content mb-0">
                  Makeup Artists
                </div>
              </div>
              {/* <div className="editable-text editable-content-holder  "> */}
              <div className="para-1 regular text-end font-size-28 align-center editable-content mb-0" >
                That Bring You Perfection
                {/* </div> */}
              </div>
              <div className="editable-button-container alignment-container paddingLR0 three-btns ">
                <div className="editable-content-holder editable-button align-center  ">
                  <div className="editable-content text-end mt-2">
                    <div className="btn button btn button btn-rounded btn-md "
                      onClick={(e) => handlePopup(!open)}>
                      Enquire Now
                    </div>
                  </div>
                </div>
                <div className="header-buttons-container" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="background-container" style={{ minHeight: "calc(-772px + 100vh)" }}  >
        <div className="theme-bg-color test-commit-class">
          <div className="home-page">
            <div className="clearfix ">

              <Service handleEnquire={handlePopup} />
              <About />
              <Gallery />
              <Suspense fallback={<div>Loading...</div>}>
                <Video />
              </Suspense>
              {/* <div
                id="contentBlock881841228"
                className="edit-content feature-product contentBlock881841228"
                data-block-id={521896259}
              >
                <div className="feature-product-loader">
                  <div className="loader">
                    <svg
                      className="circle-loader"
                      width={100}
                      height={100}
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={50} cy={50} r={16} />
                    </svg>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </div>
      <div className="footer-container footer-wrapper">
        <section className="footer-basics shop-footer footer-background footer-doctors doctors  ">

          <div className="clearfix sections bootstrap-iso">
            {/* <div className="col-md-12 paddingLR0 padding15 copyright-applinks-section"> */}
            <div className="col-md-6 col-xs-12 paddingLR0 text-right copyright-text">
              <div className="footer-company-name col-sm-12 paddingLR0 margin0 padding0 font-bold text-center text-color">
                {/* <div className="text-color copyright-container editable-content-holder  "> */}
                {/* <div className="editable-content mb-4"> */}
                © Copyrights {currentYear}.Makeup.All Rights Reserved.
                {/* </div> */}
                {/* </div> */}
              </div>
            </div>
            {/* </div> */}
          </div>

        </section>

      </div>

      <PopupEnquire isOpen={open} onClose={handlePopup} />
    </div>
  );
}

export default App;
