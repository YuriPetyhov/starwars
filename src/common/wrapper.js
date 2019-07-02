import React from "react";
import styles from './wrapper.module.scss';

const Row = ({left, right}) => {
    return (
        <div className={styles.wrap}>
            {left}
            {right}
        </div>
    )
}

export default Row