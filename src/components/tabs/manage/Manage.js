import React, { useContext } from 'react';
import { Container, IconButton, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import store from '../../../store/store';

import {AppContext} from '../../../App';

import CategoryTitle from './CategoryTitle';

export default function Manage() {

    const actions = useContext(AppContext);

    return (
        <Container maxWidth='lg'>
            {store.categories.map(category => {
                return <CategoryTitle title={category} key={category}/>
            })}

            {store.tasks.length === 0 ? <Typography variant='subtitle1'>You have no tasks</Typography> : store.tasks.map(task => {
                return <p key={task}>{task}</p>
            })}
            
            {/* Button to add a new task */}
            <IconButton onClick={() => {
                actions.setData({...actions.data, tasks: [...actions.data.tasks, 'New Task']});
            }}>
                <Add />
            </IconButton>
        </Container>
    )
}
