import React from 'react';
import style from './Project.module.css'

const Project = (props) => {
    return (
        <div className={style.projectBlock}>
            <div className={style.icon}>
                <img src={props.href}/>
                <a href="">View</a>
            </div>
            <div>
                <h2>{props.title}</h2>
                <div>
                    <span>{props.description}</span>
                </div>
            </div>


        </div>
    );
};

export default Project;