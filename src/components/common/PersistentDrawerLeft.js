import "./appbar.css";
import "./drawer.css";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Typography, IconButton, Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import BusinessIcon from "@material-ui/icons/Business";
import {
  BookSharp,
  CalendarToday,
  CastForEducation,
  ExitToAppSharp,
  People,
} from "@material-ui/icons";
import StudentList from "../StudentsList";
import { ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 300;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar className="appbar" position="fixed" open={open}>
        <Toolbar>
          <IconButton onClick={handleDrawerClose}>
            {!open && <MenuIcon />}
          </IconButton>
          <Typography variant="h4" noWrap component="div">
            ISA School
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={`drawer ${open ? "drawer-open" : "drawer-close"}`}>
        <ButtonGroup className="drawer">
          <IconButton className="drawer-btn" onClick={handleDrawerClose}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </ButtonGroup>
        <List className="row">
          <IconButton className="drawer-btn" color="inherit">
            Home
            <HomeIcon className="m-2" />
          </IconButton>
          <IconButton className="drawer-btn" color="inherit">
            <Link to="students/addmission" className="link">
              Students Addmission
              <AccountCircleIcon className="m-2" />
            </Link>
          </IconButton>
          <IconButton className="drawer-btn" color="inherit">
            Teachers
            <AccountCircleIcon className="m-2" />
          </IconButton>

          <IconButton className="drawer-btn" color="inherit">
            Employees
            <People className="m-2" />
          </IconButton>

          <IconButton className="drawer-btn" color="inherit">
            Finances
            <BusinessIcon className="m-2" />
          </IconButton>
          <IconButton className="drawer-btn" color="inherit">
            Library
            <BookSharp className="m-2" />
          </IconButton>

          <IconButton className="drawer-btn" color="inherit">
            Announcements
            <AnnouncementIcon className="m-2" />
          </IconButton>
          <IconButton className="drawer-btn" color="inherit">
            Announcements
            <AnnouncementIcon className="m-2" />
          </IconButton>
          <IconButton className="drawer-btn" color="inherit">
            Announcements
            <AnnouncementIcon className="m-2" />
          </IconButton>
          <IconButton className="drawer-btn" color="inherit">
            Announcements
            <AnnouncementIcon className="m-2" />
          </IconButton>

          <IconButton className="drawer-btn" color="inherit">
            Attendance
            <ExitToAppSharp className="m-2" />
          </IconButton>
          <IconButton className="drawer-btn" color="inherit">
            Materials/Learning
            <CastForEducation className="m-2" />
          </IconButton>

          <IconButton className="drawer-btn" color="inherit">
            Calendar
            <CalendarToday className="m-2" />
          </IconButton>
        </List>
      </div>
      <div>
        <DrawerHeader />
        <StudentList />
      </div>
    </Box>
  );
}
