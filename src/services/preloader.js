import React from 'react';
import styles from './preloader.module.scss';

const Preloader = () => {
    return (
        <div className={`${styles.ldscss} ${styles.ngscope}`}>
            <div className={styles.ldsdoublering}>
                <div></div>
                <div></div>
           </div>
        </div>
    )
}

export default Preloader; 