import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowBack, Delete, Edit, Print } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import "./installments.css";
import Spinner from "../../components/common/Spinner";
import { axiosInstance } from "../../config/axiosInstance";

const InstallmentsScreen = () => {
  const location = useLocation();
  const parentId = location.pathname.split("/").pop();
  const [installments, setInstallments] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    fetchParents();
  }, []);
  console.log(parentId);
  const fetchParents = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        "/installments/gt-all/" + parentId
      );
      setInstallments(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching parent list:", error);
    }
  };
  const lastInstallment = installments.pop();
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="installments pt-5 row">
          <div className="row-data my-4 row">
            <Button
              className="col-2 "
              variant="outlined"
              color="secondary"
              startIcon={<ArrowBack />}
              component={Link}
              to="/"
            >
              back to homepage
            </Button>
            <div className="col-7 totals-container">
              <h2 className="col-12 text-center tx-dark">Totals</h2>
              <div className="totals col-11">
                <p> Tuition: {lastInstallment.total_tuition}</p>
                <p> Paid : {lastInstallment.total_paid_tuition}</p>

                <p> Discount: {lastInstallment.total_discount}</p>
                <p>Remaining: {lastInstallment.remaining_tuition}</p>
              </div>
            </div>
            <h1 className="col-2 teal">Installment</h1>
          </div>

          <div className="installments-list col-11 row">
            {installments.map((installment) => (
              <div className="col-4" key={installment.id}>
                <div className="installment-card " key={installment.id}>
                  <p>
                    <span>Date:</span>
                    <span>{installment.date}</span>
                  </p>
                  <p>
                    <span>Installment Amount:</span>
                    <span className="number">
                      {" "}
                      {installment.installment_amount}
                    </span>
                  </p>
                  <p>
                    <span>Remaining Tuition:</span>
                    <span className="number">
                      {" "}
                      {installment.remaining_tuition}
                    </span>
                  </p>
                  <p>
                    <span>Paid Amount:</span>
                    <span className="number"> {installment.paid_amount}</span>
                  </p>
                  <p>
                    <span> Discount:</span>
                    <span className="number">{installment.discount}%</span>
                  </p>
                  <p className="actions">
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      startIcon={<Delete />}
                      component={Link}
                      to="#"
                    >
                      Delete
                    </Button>

                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      startIcon={<Print />}
                    >
                      Print
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      startIcon={<Edit />}
                      component={Link}
                      to="#"
                    >
                      Edit
                    </Button>
                  </p>
                  {/* <p>Total Discount: {installment.total_discount}%</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default InstallmentsScreen;
