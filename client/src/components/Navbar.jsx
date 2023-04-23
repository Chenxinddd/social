import React from 'react';
import { LightModeOutlined, 
    DarkModeOutlined, 
    Menu as MenuIcon, 
    Search, 
    SettingsOutlined, 
    ArrowDropDownOutlined 
} from '@mui/icons-material';
import FlexBetween from './FlexBetween';
import { useDispatch } from 'react-redux';
import {setMode} from "state";
import { AppBar, useTheme, Toolbar, IconButton, InputBase } from '@mui/material';

const Navbar = ({user, isSidebarOpen,
    setisSidebarOpen,}) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [anchorEl, setanchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick= (event) => setanchorEl(event.currentTarget);
  const handleClose = () => setanchorEl(null);

  return (
    <AppBar
    sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
    }}>
    
    <Toolbar sx ={{justifyContent: "space-between"}}>
        <FlexBetween>
            <IconButton onClick={() => setisSidebarOpen(isSidebarOpen)} >
                <MenuIcon />
            </IconButton>
            <FlexBetween
            backgroundColor = {theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
            >
                <InputBase placeholder="Search..." />
                <IconButton>
                    <Search />
                </IconButton>
            </FlexBetween>
        </FlexBetween>

        <FlexBetween gap="1.5rem">
            <IconButton onClick={() => dispatch(setMode())}>
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlined sx={{ fontSize: "25px"}} />
                ) : (
                    <LightModeOutlined sx={{ fontSize: "25px"}} />
                )}
            </IconButton>
            <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>

          <FlexBetween>
            <Button onClick={handleClick} sx={{display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            textTransform: "none",
            gap: "1rem",}}>

            </Button>
          </FlexBetween>
        </FlexBetween>
    </Toolbar>

    </AppBar>
    
  )
}

export default Navbar;