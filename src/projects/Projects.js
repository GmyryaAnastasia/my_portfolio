import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <h2>My portfolio</h2>
                <div className={style.projects}>
                    <Project title={'ToDoList'} description={'TS, Redux, RestAPI, Thunk,Material UI, Unit Tests'}/>
                    <Project title={'Socialnetwork'} description={'STS, Redux, RestAPI, Thunk,ANT Design, Unit Tests'}/>
                    <Project title={'Socialnetwork'} description={'STS, Redux, RestAPI, Thunk,ANT Design, Unit Tests'}/>
                    <Project title={'Socialnetwork'} description={'STS, Redux, RestAPI, Thunk,ANT Design, Unit Tests'}/>
                    <Project title={'Socialnetwork'} description={'STS, Redux, RestAPI, Thunk,ANT Design, Unit Tests'}/>

                </div>

            </div>
        </div>
    );
};

