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
import { ArrowDownward, ArrowUpward, Update } from "@material-ui/icons";
import {
  downgradeStudent,
  upgradeStudent,
} from "../../redux/api_Calls/studentsServices";

function FirstStudentCard({ firstStudent }) {
  return (
    <Card className=" right">
      <CardContent>
        <div className="actions row-data">
          <Button
            size="small"
            variant="outlined"
            color="primary"
            endIcon={<More />}
          >
            More
          </Button>
          <Button
            size="small"
            variant="contained"
            color="primary"
            endIcon={<EditRounded />}
          >
            Edit{" "}
          </Button>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            endIcon={<Delete />}
          >
            Delete
          </Button>
        </div>
        <h4 className="teal m-3">Student Details</h4>
        <h6 className="tx-dark m-3" color="textSecondary">
          English Name:{" "}
          <span className="teal">{firstStudent?.english_name}</span>
        </h6>
        <h6 className="tx-dark m-3" color="textSecondary">
          Arabic Name: <span className="teal">{firstStudent?.arabic_name}</span>
        </h6>
        <h6 className="tx-dark m-3" color="textSecondary">
          Grade: <span className="teal">{firstStudent?.grade}</span>
        </h6>
        <h6 className="tx-dark m-3" color="textSecondary">
          Phone: <span className="teal">{firstStudent?.phone}</span>
        </h6>
        <h6 className="tx-dark m-3" color="textSecondary">
          <span className="teal">{firstStudent?.address}</span>
        </h6>
        <h6 className="tx-dark m-3" color="textSecondary">
          Gender: <span className="teal">{firstStudent?.gender}</span>
        </h6>

        <Card className="m-2 p-2">
          <StudentProgressChart />
        </Card>
      </CardContent>
    </Card>
  );
}

export default FirstStudentCard;
