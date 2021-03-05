import React, { useState } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';

//tabs
import Settings from '../tabs/settings/Settings';
import Tasks from '../tabs/tasks/Tasks';
import Manage from '../tabs/manage/Manage';

export default function Navigation() {

    const [curr, setCurr] = useState(0);

    const changeHandler = (e, i) => {
        setCurr(i);
    }

    return (
        <>
            <AppBar position='static'>
                <Tabs value={curr} onChange={changeHandler}>
                    <Tab label='Get Task'/>
                    <Tab label='Manage Tasks'/>
                    <Tab label='Settings'/>
                </Tabs>
            </AppBar>

            <div hidden={curr !== 0}>
                <Tasks />
            </div>

            <div hidden={curr !== 1}>
                <Manage />
            </div>

            <div hidden={curr !== 2}>
                <Settings />
            </div>
        </>
    )
}
