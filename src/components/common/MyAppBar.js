import * as React from "react";
import Button from "@mui/material/Button";

import "./appbar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import logo from "../../assets/images/school-logo.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

export default function MyAppBar({ handleChangeLanuage }) {
  const token = useSelector((state) => state.user.token);
  const { t } = useTranslation();

  return (
    <div sx={{ flexGrow: 1 }} className="appbar">
      <AppBar elevation={0} position="static row">
        <Toolbar className="appbar col-12">
          <div className="col-5 row-data">
            <LanguageSelector handleChangeLanuage={handleChangeLanuage} />
            <h3 className="text-white mx-2">
              <Link to="/">
                <img className="logo mx-2" src={logo} />
              </Link>
              {t("appTitle")}
            </h3>
          </div>
          <div className="col-5 row-data">
            <h5 className="text-white mx-5">Mrs. Nooria : {"ceo"} </h5>
            <Button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
              variant="outlined"
              color="primary"
              endIcon={<ExitToAppIcon className="m-1" />}
            >
              {t("logout")}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
