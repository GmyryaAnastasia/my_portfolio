import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
            <h2>Anastasia</h2>

                <div className={style.logo}>
                    <img className={style.icon} src="" alt="" />
                    <img className={style.icon} src="" alt=""/>
                    <img className={style.icon} src="" alt=""/>
                </div>

                <div>
                    <span className={style.footer}>© 2023 All Rights Reserved.</span>
                </div>
            </div>



        </div>
    );
};
