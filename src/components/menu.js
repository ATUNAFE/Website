import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';

import HeaderLink from "./header_link"

function Menu() {
    const matches = useMediaQuery('(min-width:890px)');

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };
    
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
    
        setOpen(false);
    };

    const prevOpen = React.useRef(open);

    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    if(matches){
        return <Grid container item xs 
                    direction="row"
                    justify='space-around'
                    alignItems="center"
                >
                    <HeaderLink link="/aboutus" context="Sobre Nós"/>
                    <HeaderLink link="/events" context="Eventos"/>
                    <HeaderLink link="/music" context="Música"/>
                </Grid>
    }
    return <Grid container item xs 
                direction="row"
                justify='flex-end'
                alignItems="center"
            >
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    style={{marginRight:'1rem'}}
                >
                    <MenuIcon />
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal >
                {({ TransitionProps }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ backgroundColor:'var(--light)', marginTop:'1.8rem' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow">
                                    <MenuItem onClick={handleClose}>
                                        <HeaderLink link="/aboutus" context="Sobre Nós"/>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <HeaderLink link="/events" context="Eventos"/>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <HeaderLink link="/music" context="Música"/>
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
                </Popper>
            </Grid>
}

export default Menu;