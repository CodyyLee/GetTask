import React from 'react';
import { Typography } from '@material-ui/core';

export default function CategoryTitle(props) {
    return (
        <div>
            <Typography variant='h4'>{props.title}</Typography>
            <hr/>
        </div>
    )
}
