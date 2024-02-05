import { Card, CardContent, Typography, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";

import { axiosInstance } from "../../config/axiosInstance";
import Delete from "@material-ui/icons/Delete";
import Details from "@material-ui/icons/Details";
import EditRounded from "@material-ui/icons/EditRounded";
import More from "@material-ui/icons/More";
import Payment from "@material-ui/icons/Payment";
import { Link } from "react-router-dom";
import StudentProgressChart from "./AcademicProgress";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import {
  downgradeStudent,
  upgradeStudent,
} from "../../redux/api_Calls/studentsServices";
import { useTranslation } from "react-i18next";

function FirstStudentCard({ firstStudent }) {
  const { t } = useTranslation();
  return (
    <Card className=" right">
      <CardContent>
        <div className="actions row-data">
          <Button
            size="small"
            variant="outlined"
            color="primary"
            endIcon={<More className="me-2" />}
          >
            {t("more")}
          </Button>
          <Button
            size="small"
            variant="contained"
            color="primary"
            endIcon={<EditRounded className="me-2" />}
          >
            {t("edit")}{" "}
          </Button>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            endIcon={<Delete className="me-2" />}
          >
            {t("delete")}
          </Button>
        </div>
        <h4 className="teal m-3">{t("studentDetails")}</h4>
        <h6 className="tx-dark m-3" color="textSecondary">
          {t("englishName")} :
          <span className="blue">{firstStudent?.english_name}</span>
        </h6>
        <h6 className="tx-dark m-3" color="textSecondary">
          {t("arabicName")} :
          <span className="blue">{firstStudent?.arabic_name}</span>
        </h6>
        <h6 className="tx-dark m-3" color="textSecondary">
          {t("grade")} : <span className="blue">{firstStudent?.grade}</span>
        </h6>
        <h6 className="tx-dark m-3" color="textSecondary">
          {t("phone")} : <span className="blue">{firstStudent?.phone}</span>
        </h6>
        <h6 className="tx-dark m-3" color="textSecondary">
          {t("address")}:<span className="blue">{firstStudent?.address}</span>
        </h6>
        <h6 className="tx-dark m-3" color="textSecondary">
          {t("gender")} : <span className="blue">{firstStudent?.gender}</span>
        </h6>

        <div className="actions row-data">
          <Button
            size="small"
            variant="contained"
            color="primary"
            endIcon={<ArrowUpward className="me-2" />}
          >
            {t("upgrade")}{" "}
          </Button>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            endIcon={<ArrowDownward className="me-2" />}
          >
            {t("downgrade")}
          </Button>
        </div>
        {/* <StudentProgressChart /> */}
      </CardContent>
    </Card>
  );
}

export default FirstStudentCard;
