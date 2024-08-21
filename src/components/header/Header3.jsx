import { Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Typography, useMediaQuery } from "@mui/material"
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import WindowIcon from '@mui/icons-material/Window';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from "@emotion/react";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import { Close, ExpandMore } from "@mui/icons-material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Links from "./Links";



const Header3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme()
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  }
  return (
    <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 5 }}>
      <Box>
        <Button

          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          // @ts-ignore
          sx={{ width: 222, bgcolor: theme.palette.myColor.main, color: theme.palette.text.primary }}
        >
          <WindowIcon />

          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1
            }}>
            Categories

          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          // @ts-ignore
          sx={{ ".MuiPaper-root": { width: 220, bgcolor: theme.palette.myColor.main } }}
        >

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>

          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <  LaptopChromebookIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>

          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>

          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>

          </MenuItem>


        </Menu>
      </Box>

      {useMediaQuery('(min-width:1200px)') && (
        <Stack gap={4} direction={"row"} alignItems={"center"}>
          <Links title={"Home"} />
          <Links title={"Mega Menue"} />
          <Links title={"Full Sceen Menue"} />
          <Links title={"Pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>

      )}



      {useMediaQuery('(max-width:1000px)') && (<IconButton onClick={toggleDrawer("top", true)}>
        <MenuIcon />
      </IconButton>)}




      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{ ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": { height: "100%" } }}
      >



        <Box sx={{ width: "444", mx: "auto", mt: 6, position: "relative", pt: 10 }}>
          <IconButton sx={{ ":hover": { rotate: "180deg", transition: "0.3s", color: "red" }, position: "absolute", top: 0, right: 10 }} onClick={toggleDrawer("top", false)}>
            <Close />
          </IconButton>


          {[
            { mainLink: "Home", subLinks: ["Link1", "Link2", "Link3"] },
            { mainLink: "Mega menu", subLinks: ["Link1", "Link2", "Link3"] },
            { mainLink: "Full screen menu", subLinks: ["Link1", "Link2", "Link3"] },
            { mainLink: "Pages", subLinks: ["Link1", "Link2", "Link3"] },
            { mainLink: "User account", subLinks: ["Link1", "Link2", "Link3"] },
            { mainLink: "Venfer account", subLinks: ["Link1", "Link2", "Link3"] }
          ].map((item) => {
            return (
              <Accordion key={item.mainLink} elevation={0} sx={{ bgcolor: "initial" }}>


                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ width: "500px" }}
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>



                <List sx={{ py: 0, my: 0 }}>
                  {item.subLinks.map((link) => {

                    return (
                      <ListItem key={link} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    )
                  })}

                </List>

              </Accordion>
            )
          })}

        </Box >
      </Drawer>


    </Container>
  )
}

export default Header3
