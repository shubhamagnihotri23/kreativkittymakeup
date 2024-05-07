import React from 'react';
import { toAbsoluteUrl } from '../../utils/utlis';
import MapVideos from './mapVideos';
import Video1 from './videosSrc/video_1.mp4';
import Video2 from './videosSrc/video_2.mp4';
import Video3 from './videosSrc/video_3.mp4';
import Video4 from './videosSrc/video_4.mp4';
import Video5 from './videosSrc/video_5.mp4';


export default function video() {

    const videos = [
       Video1,
       Video2,
       Video3,
       Video4,
       Video5
    ]
    return (
        <div className="container min-vh-100">
            <div className="align-center editable-content-holder mt-4 ">
                <div
                    className="main-header align-center font-size-36 semi-bold editable-content mt-3"
                    style={{
                        color: "rgb(216, 119, 140)",
                        // minHeight: "auto",
                        fontFamily: '"Proza Libre"',
                        // lineHeight: "1.4",
                        borderColor: "rgb(254, 163, 142)",
                        borderStyle: "none",
                        borderWidth: 0,
                        borderRadius: 0,
                        letterSpacing: "0.25px",
                        backgroundColor: "rgba(0, 0, 0, 0)"
                    }}
                >
                    Videos
                </div>
            </div>
            <div class="row">
                {videos.map((x, index) => (
                    <div className="col-lg-4 col-md-12 " key={index}>
                        {/* <video className='mb-3' autoPlay loop playsinline width="100%" >
                            <source
                                src={toAbsoluteUrl(x)}
                                type="video/mp4"
                            />
                        </video> */}
                         <MapVideos key={index} src={toAbsoluteUrl(x)} />
                    </div>
                ))}
            </div>
        </div>
    )
}
