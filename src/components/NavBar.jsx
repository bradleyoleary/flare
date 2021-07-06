import React from 'react';
import { makeStyles } from '@material-ui/styles';

import copy from '../copy';

const styles = makeStyles({
    container: {
        top: '0',
        width: '100%',
        display: 'flex',
        position: 'fixed',
        padding: '2.5rem',
        boxSizing: 'border-box',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
    },
    menuItems: {
        color: '#4A5053',
        fontSize: '1.125rem',
        lineHeight: '1.313rem',
        marginRight: '3.125rem',
        '&:last-child': {
            marginRight: '0',
        },
    },
    title: {
        color: '#4A5053',
        fontWeight: 'bold',
        fontSize: '1.125rem',
        lineHeight: '1.313rem',
    },
});

const NavBar = () => {
    const classNames = styles();

    return (
        <div className={classNames.container}>
            <div className={classNames.title}>{copy.title}</div>
            <div>
                <span className={classNames.menuItems}>
                    {copy.nav.discover}
                </span>
                <span className={classNames.menuItems}>
                    {copy.nav.mainMenu}
                </span>
                <span className={classNames.menuItems}>{copy.nav.account}</span>
            </div>
        </div>
    );
};

export default NavBar;
