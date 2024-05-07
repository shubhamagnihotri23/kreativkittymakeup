import React, { useEffect, useState } from 'react';
import LazyImage from '../utils/Lazyimages';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { toAbsoluteUrl } from '../utils/utlis';
import img_1 from '../media/gallery/img_5.jpg';
import img_2 from '../media/gallery/img_6.jpg';
import img_3 from '../media/gallery/img_2.jpg';
import img_4 from '../media/gallery/img_11.jpeg';
import img_5 from '../media/gallery/img_14.jpeg';
import img_6 from '../media/gallery/img_12.jpeg';
import img_7 from '../media/gallery/img_13.jpeg';
import img_8 from '../media/gallery/img_15.jpeg';
import img_9 from '../media/gallery/img_16.jpeg';
import img_10 from '../media/gallery/img_8.jpg';
import img_11 from '../media/gallery/img_10.jpg';
import img_12 from '../media/gallery/img_17.jpeg';

import './gallery.css'

const img = [
    img_1,
    img_2,
    img_3,
    img_4,
    img_5,
    img_6,
    img_7,
    img_8,
    img_9,
    img_10,
    img_11,
    img_12,
]

const Gallery = () => {
    const [showImg, setShowImg] = useState(false);


    const delayedAction = () => {
        setShowImg(true);
    };

    useEffect(() => {
        const timeoutId = setTimeout(delayedAction, 5000);
        return () => clearTimeout(timeoutId);
    }, []);


    const className = "w-100 shadow-1-strong rounded"
    return (
        <div className="container mt-4 mb-4">

            <div className="row">
                <div className="mt-3 titleCssClass mb-3" >
                    Gallery
                </div>
                {showImg ?
                    img.map((img_url, i) => (
                        <div className="col-lg-4 col-md-12 ">
                            <LazyImage src={toAbsoluteUrl(img_url)} alt={''} className={className} />
                            {/* <LazyImage src={toAbsoluteUrl(img_url)} alt={''} className={className} /> */}
                        </div>
                    )) :
                    <div className="col-lg-4 col-md-12 ">
                        <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                            <Skeleton variant="rectangular" width={350} height={118} /> &nbsp;
                            <Skeleton variant="rectangular" width={350} height={118} /> &nbsp;
                            <Skeleton variant="rectangular" width={350} height={118} /> &nbsp;
                        </Box>
                    </div>

                }
            </div>
        </div>
    )
}
export default Gallery;