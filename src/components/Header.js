import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => {
    return (
        <AppBar position="static" >
          <Toolbar style ={{backgroundColor : "black" , color: "white"}}>
            <Typography variant="h4" style ={{fontFamily: "fantasy",fontWeight:300}}>Search & Find</Typography>
            <Typography variant="h6" style={{margin: "10px 0px 0px 10px", fontFamily: "cursive"}}> Countries</Typography>
          </Toolbar>
        </AppBar>
        
    );
};

export default Header;