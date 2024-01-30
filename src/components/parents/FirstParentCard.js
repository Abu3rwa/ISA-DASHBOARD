import { Card, CardContent, Typography, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";

import { axiosInstance } from "../../config/axiosInstance";
import Delete from "@material-ui/icons/Delete";
import Details from "@material-ui/icons/Details";
import EditRounded from "@material-ui/icons/EditRounded";
import More from "@material-ui/icons/More";
import Payment from "@material-ui/icons/Payment";
import { Link } from "react-router-dom";

function FirstParentCard({ firstParent }) {
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
        <h4 className="teal m-3">Parent Details</h4>
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
          Address: <span className="teal">{firstParent?.address}</span>
        </h6>
        <h6 className="tx-dark m-3" color="textSecondary">
          Gender: <span className="teal">{firstParent?.gender}</span>
        </h6>

        <Card className="m-2 p-2">
          <h4 className="teal m-3">Tuitions</h4>

          <h6 className="tx-dark m-3" color="textSecondary">
            Remaining Tuition:{" "}
            <span className="teal">
              {paidAndRemainingTuition?.remaining_tuition}
            </span>
          </h6>
          <h6 className="tx-dark m-3" color="textSecondary">
            Paid Tuition:{" "}
            <span className="red">
              {paidAndRemainingTuition?.total_paid_tuition}
            </span>
          </h6>
          <div className="actions row-data">
            <Link to={`/installments/${firstParent?.parent_id}`}>
              <Button endIcon={<Details />} variant="contained" color="primary">
                Details
              </Button>
            </Link>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              endIcon={<Payment />}
            >
              Pay
            </Button>
          </div>
        </Card>
      </CardContent>
    </Card>
  );
}

export default FirstParentCard;
