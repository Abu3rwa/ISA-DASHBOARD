import * as React from "react";
import Button from "@mui/material/Button";

import "./appbar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import logo from "../../assets/images/school-logo.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MyAppBar() {
  const token = useSelector((state) => state.user.token);
  const [authToken, setAuthToken] = React.useState(token);
  const anchorRef = React.useRef(null);
  const location = useLocation();
  const homePath = location.pathname.split("/").pop();
  console.log("homePath: ", homePath);
  // return focus to the button when we transitioned from !open -> open
  React.useEffect(() => {}, [authToken]);

  return (
    <div sx={{ flexGrow: 1 }} className="appbar">
      <AppBar elevation={0} position="static row">
        <Toolbar className="appbar col-8">
          <h3 className="text-white mx-2">
            <Link to="/">
              <img className="logo mx-5" src={logo} />
            </Link>
            ISA International School
          </h3>
          <div className="col-3 row-data">
            <h3 className="text-white mx-5">Admin</h3>
            <Button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
              variant="outlined"
              color="primary"
              endIcon={<ExitToAppIcon />}
            >
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
