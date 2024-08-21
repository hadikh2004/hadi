
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { Box, Container, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from "react";



const options = [
    'AR',
    'EN',

];


const Header1 = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box sx={{
            bgcolor: "gray",
            borderBottomRightRadius:7,
            borderBottomLeftRadius:7,
        }}>
           
            <Stack direction={"row"} alignItems={"center"}>
                <Typography
                    sx={{
                        mr: 2,
                        p: "3px 10px",
                        borderRadius: "12px",
                        fontWeight: "bold",
                        bgcolor: "#D23F57",
                        fontSize: "10px",
                        color: "#fff",
                    }}
                    variant="body2"
                >

                    HOT
                </Typography>

                <Typography
                    sx={{
                        fontSize: "12px",
                        fontWeight: "300",
                        color: "#fff",
                    }}
                    variant="body2"
                >
                    Free Express shipping
                </Typography>

                <Box flexGrow={1} />




                <div>
                    {theme.palette.mode === "light" ? (
                        <IconButton
                            onClick={() => {
                                localStorage.setItem(
                                    "mode",
                                    theme.palette.mode === "dark" ? "light" : "dark"
                                );
                                colorMode.toggleColorMode();
                            }}
                            color="inherit"
                        >
                            <LightModeOutlined fontSize="small" />
                        </IconButton>
                    ) : (
                        <IconButton
                            onClick={() => {
                                localStorage.setItem(
                                    "mode",
                                    theme.palette.mode === "dark" ? "light" : "dark"
                                );
                                colorMode.toggleColorMode();
                            }}
                            color="inherit"
                        >
                            <DarkModeOutlined fontSize="small" />
                        </IconButton>
                    )}
                </div>



                <List
                    component="nav"
                    aria-label="Device settings"
                    sx={{ bgcolor: '' }}
                >
                    <ListItemButton
                        id="lock-button"
                        aria-haspopup="listbox"
                        aria-controls="lock-menu"
                        aria-label="when device is locked"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClickListItem}
                        sx={{"&:hover":{cursor:"pointer"} }}
                    >
                        <ListItemText
                            sx={{ ".MuiTypography-root": { fontSize: "10px" ,color:"white"} }}
                            secondary={options[selectedIndex]}
                        />
                    </ListItemButton>
                </List>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'lock-button',
                        role: 'listbox',
                    }}
                >
                    {options.map((option, index) => (
                        <MenuItem
                            sx={{ fontSize: "10px" }}
                            key={option}
                           
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>




                <TwitterIcon
                    sx={{
                        fontSize: "16px",
                        color: "#fff"
                    }} />
                <FacebookIcon
                    sx={{
                        fontSize: "16px",
                        mx: 1,
                        color: "#fff"
                    }} />
                <InstagramIcon
                    sx={{
                        fontSize: "16px",
                        color: "#fff"
                    }} />

            </Stack>
           
        </Box>
    )
}

export default Header1

