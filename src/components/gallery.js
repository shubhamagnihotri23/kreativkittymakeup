import React, { useEffect, useState } from 'react';
import LazyImage from '../utils/Lazyimages';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { toAbsoluteUrl } from '../utils/utlis';
import './gallery.css'

const img = [
    `/media/images/img_5.jpg`,
    `/media/images/img_6.jpg`,
    `/media/images/img_2.jpg`,
    `/media/images/img_11.jpeg`,
    `/media/images/img_14.jpeg`,
    `/media/images/img_12.jpeg`,
    `/media/images/img_13.jpeg`,
    `/media/images/img_15.jpeg`,
    `/media/images/img_16.jpeg`,
    `/media/images/img_8.jpg`,
    `/media/images/img_10.jpg`,
    `/media/images/img_17.jpeg`,
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