import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.tittle}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS/TS'} description={'Native JS: classes, functions, working with arrays and objects, Promises, REST Api; TS: as type, generics, infer'}/>
                    <Skill title={'HTML/CSS'} description={'Responsive design, flex, links, headers, images and etc.'}/>
                    <Skill title={'React'} description={'Class and functional components, components\'s life-cycle methods, props, hooks, HOC'}/>
                    <Skill title={'Redux'} description={'FLUX-concepted data flow, reducer, dispatch, redux-thunk, redux-toolkit'}/>
                </div>
            </div>
        </div>
    );
};

