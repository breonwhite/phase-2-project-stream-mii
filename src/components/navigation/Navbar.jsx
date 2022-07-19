import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import { yellow } from '@mui/material/colors';




const Navbar = ({ shows }) => {
    const count = shows.length
  
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Stream Mii
          </Typography>
          <Stack direction="row" spacing={2}>
          <Button color="inherit" component={ Link } to="/shows/new" startIcon={<AddToQueueIcon />}>Add Shows</Button>
          <Button 
            color="inherit"
            component={ Link } to="/shows" 
            startIcon={
                <Badge badgeContent={count} color="error">
                    <LiveTvIcon />
                </Badge>
            }>Your Shows
          </Button>
          <Button 
            color="inherit"
            variant="outlined" 
            component={ Link } to="/" 
            startIcon={<HomeIcon />}>
                Home
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
    // <div>
    //     <ul>
    //         <li><Link to="/shows/new">ADD SHOWS</Link></li>
    //         <li><Link to="/shows">YOUR SHOWS</Link></li>
    //         <li><Link to="/">HOME</Link></li>
    //     </ul>
    // </div>
  )
}

export default Navbar