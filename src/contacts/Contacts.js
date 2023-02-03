import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>

            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2>GET IN TOUCH</h2>
                <div className={style.contacts}>
                    <input className={style.input} placeholder={'Name'} type={'text'}/>
                    <input className={style.input} placeholder={'Email'} type={'email'}/>
                    <textarea className={style.textarea} placeholder={'Your message'}/>
                    <button className={style.button}>Send</button>

                </div>


            </div>

        </div>
    );
};

