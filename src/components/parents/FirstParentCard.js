import { Card, CardContent, Typography, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";

import { axiosInstance } from "../../config/axiosInstance";
import Delete from "@material-ui/icons/Delete";
import Details from "@material-ui/icons/Details";
import EditRounded from "@material-ui/icons/EditRounded";
import More from "@material-ui/icons/More";
import Payment from "@material-ui/icons/Payment";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function FirstParentCard({ firstParent }) {
  const [paidAndRemainingTuition, setPaidAndRemainingTuition] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetchPaidAndRemainingTuition();
  }, [firstParent]);

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
        <h4 className="blue m-3">Parent Details</h4>
        <h6 className="tx-dark m-3" color="textSecondary">
          {t("name")} <span className="blue">{firstParent?.name}</span>
        </h6>
        <h6 className="tx-dark m-3" color="textSecondary">
          {t("email")} <span className="blue">{firstParent?.email}</span>
        </h6>
        <h6 className="tx-dark m-3" color="textSecondary">
          {t("phone")}: <span className="blue">{firstParent?.phone}</span>
        </h6>
        <h6 className="tx-dark m-3" color="textSecondary">
          {t("address")}: <span className="blue">{firstParent?.address}</span>
        </h6>
        <h6 className="tx-dark m-3" color="textSecondary">
          {t("gender")}: <span className="blue">{firstParent?.gender}</span>
        </h6>

        <div className="  p-2">
          <h4 className="blue m-3">Tuitions</h4>

          <h6 className="tx-dark m-3" color="textSecondary">
            Remaining Tuition:{" "}
            <span className="blue">
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
              <Button
                endIcon={<Details className="me-2" />}
                variant="contained"
                color="primary"
              >
                {t("details")}
              </Button>
            </Link>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              endIcon={<Payment className="me-2" />}
            >
              {t("pay")}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default FirstParentCard;
