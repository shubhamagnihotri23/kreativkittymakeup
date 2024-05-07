import React from 'react';
import './service.css';
import serviceImg1 from '../media/service/service_1.webp';
import serviceImg2 from '../media/service/service_2.webp';
import serviceImg3 from '../media/service/service_3.webp';


export default function service({ handleEnquire }) {
    const service = [
        { title: ' Party Makeup', img: serviceImg1, discription: 'A light-weight makeup applied through an air gun machine that produces a thin, even layer of makeup.' },
        { title: 'Trial Make Up', img: serviceImg2, discription: 'We offer trial make up sessions for your special event through which you can try our services.' },
        { title: 'Wedding Makeup', img: serviceImg3, discription: 'Our Regular Makeup package fits your needs for your special day, and makes you look beautiful.' },
        { title: ' HD Make Up', img: serviceImg1, discription: 'All our packages are customizable as per your plan and needs and also offers various discounts.' },
    ]
    return (
        <div className="edit-content  contentBlock881841223 firstContent jd-services" >
            <div
                className="template-main-container  services  "
                style={{
                    color: "rgb(51, 51, 51)",
                    borderColor: "rgb(66, 66, 66)",
                    borderStyle: "none",
                    borderWidth: 0,
                    borderRadius: 0
                }} >
                <div
                    className="custom-template bootstrap-iso clearfix global-block-padding "
                    style={{ backgroundColor: "rgba(255, 255, 255,0.5)", }}
                >
                    <div className="container-fluid">
                        <div className="text-center h1">
                            <div
                                className="main-header editable-content align-center font-size-36 semi-bold editable-content"
                                style={{
                                    color: "rgb(216, 119, 140)",
                                    fontFamily: '"Proza Libre"',
                                    lineHeight: "1.4",
                                    borderColor: "rgb(254, 163, 142)",
                                    borderStyle: "none",
                                    borderWidth: 0,
                                    borderRadius: 0,
                                    letterSpacing: "0.25px",
                                    backgroundColor: "rgba(0, 0, 0, 0)"
                                }}
                            >
                                Services
                            </div>
                        </div>

                        <div class="row">
                            {service.map((serv, i) => (
                                <div class="col-sm" className="col-sm services-block-container marginB20" >
                                    <div className="services-column">
                                        <div className="marginT10 clearfix">
                                            <div className="editable-image-holder  editable-image-holder services-image dynamic-block-image">
                                                <a
                                                    href="javascript:void(0)"
                                                    className=" link-content"
                                                >
                                                    <img
                                                        src={serv.img}
                                                        alt={serv.img}
                                                        className="services-image-tag img-loaded img_border_radious"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="marginT10 clearfix">
                                            <div
                                                className=" align-center font-size-20 not-editable para-1 editable-content serviceTitleCss"
                                            >
                                                {serv.title}
                                            </div>
                                        </div>
                                        <div className="clearfix services-desc">
                                            <div className="content para-2 editable-content-holder  ">
                                                <a
                                                    href="javascript:void(0)"
                                                    className=" link-content"
                                                >
                                                    <div
                                                        className=" align-center font-size-16 not-editable para-2 editable-content"
                                                        style={{
                                                            color: "rgb(58, 58, 58)",
                                                            fontFamily: '"Open Sans"',
                                                            lineHeight: "1.5",
                                                            borderColor: "rgb(58, 58, 58)",
                                                            borderStyle: "none",
                                                            borderWidth: 0,
                                                            borderRadius: 0,
                                                            letterSpacing: 0,
                                                            backgroundColor: "rgba(0, 0, 0, 0)"
                                                        }}
                                                        contentEditable="false"
                                                    >
                                                        {serv.discription}
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="editable-content-holder editable-button linked-sectionundefined  ">
                                                {/* <a
                                                    href="javascript:void(0)"
                                                    className=" link-content"
                                                > */}
                                                <div className="editable-content">
                                                    <button
                                                        className="btn button link-button block-btn btn-sm  hoverStyle54665"
                                                        style={{
                                                            fontFamily: '"Open Sans"',
                                                            lineHeight: "1.4",
                                                            borderColor: "rgb(216, 119, 140)",
                                                            borderStyle: "solid",
                                                            borderWidth: 1,
                                                            borderRadius: 30,
                                                            letterSpacing: 0,
                                                            backgroundColor: "rgb(216, 119, 140)"
                                                        }}
                                                        onClick={handleEnquire}
                                                    >
                                                        Enquire Now
                                                    </button>
                                                </div>
                                                {/* </a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
