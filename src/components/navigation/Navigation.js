import React, { useState } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import store from '../../store/store';

export default function Navigation() {

    const changeHandler = (e, i) => {
        store.tab = i;
    }

    return (
        <AppBar position='static'>
            <Tabs value={store.tab} onChange={changeHandler}>
                <Tab label='Get Task'/>
                <Tab label='Settings'/>
            </Tabs>
        </AppBar>
    )
}
