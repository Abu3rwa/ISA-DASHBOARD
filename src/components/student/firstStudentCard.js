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

function FirstStudentCard({ firstParent }) {
  const [paidAndRemainingTuition, setPaidAndRemainingTuition] = useState([]);

  useEffect(() => {
    fetchPaidAndRemainingTuition();
  }, []);

  const fetchPaidAndRemainingTuition = async () => {
    try {
      const response = await axiosInstance.get(
        "installments/gt-paid-remaining-tuition/" + 2
      );
      setPaidAndRemainingTuition(response.data);

      //   setLoading(false);
    } catch (error) {
      console.error("Error paid and remaining tuition:", error);
    }
  };

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
          Name: <span className="teal">{firstParent?.name}</span>
        </h6>
        <h6 className="tx-dark m-3" color="textSecondary">
          Email: <span className="teal">{firstParent?.email}</span>
        </h6>
        <h6 className="tx-dark m-3" color="textSecondary">
          Phone: <span className="teal">{firstParent?.phone}</span>
        </h6>
        <h6 className="tx-dark m-3" color="textSecondary">
          <span className="teal">{firstParent?.address}</span>
        </h6>
        <h6 className="tx-dark m-3" color="textSecondary">
          Gender: <span className="teal">{firstParent?.gender}</span>
        </h6>

        <Card className="m-2 p-2">
          <StudentProgressChart />
        </Card>
      </CardContent>
    </Card>
  );
}

export default FirstStudentCard;
