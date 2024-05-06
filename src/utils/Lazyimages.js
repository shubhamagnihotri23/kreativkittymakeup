import React, { useEffect, useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LazyImage = ({ src, alt, className }) => {
    return (
        <LazyLoadImage
            alt={src}
            className={className}
            height={'auto'}
            effect="blur"
            src={src}
            style={{ width: '100%', height: 'auto', display: 'block', marginBottom: '20px' }}
            width={'100%'} />
    );
};

export default LazyImage;
