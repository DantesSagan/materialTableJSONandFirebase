import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';

import { CatchingPokemon, KeyboardArrowDown } from '@mui/icons-material';
import React, { useState } from 'react';

export default function NavbarIndex() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position='static' sx={{ marginBottom: '150px' }}>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <CatchingPokemon />
        </IconButton>
        <Typography variant='h3' component='div' sx={{ flexGrow: 1 }}>
          TableAppWithFirebase
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button variant='contained' color='primary'>
            Features
          </Button>
          <Button variant='contained' color='secondary'>
            Features1
          </Button>
          <Button
            variant='contained'
            color='error'
            id='resources-button'
            onClick={handleClick}
            // in this case if boolen (open) is true so handle it with resources-menu if no set it to undefined
            aria-controls={open ? 'resources-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            endIcon={<KeyboardArrowDown />}
          >
            Resources
          </Button>
          <Button variant='contained' color='warning'>
            Features3
          </Button>
        </Stack>
        <Menu
          id='resources-menu'
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'resources-button',
          }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
