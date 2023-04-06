import classNames from 'classnames';
import { forwardRef, useState } from 'react';

import images from '~/assets/img';
import styles from './Image.module.scss';

console.log(images.noImage);

function Image({ className, src, alt, ...props }, ref) {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(images.noImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
