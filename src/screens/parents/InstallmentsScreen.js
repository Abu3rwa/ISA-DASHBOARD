import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowBack, Delete, Edit, Print } from "@material-ui/icons";
import {
  Button,
  Paper,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import "./installmentsScreen.css";
import Spinner from "../../components/common/Spinner";
import { axiosInstance } from "../../config/axiosInstance";
import { useTranslation } from "react-i18next";

const InstallmentsScreen = () => {
  const [searching, setSearching] = useState(false);
  const [firstParent, setFirstParent] = useState(null);
  const { t } = useTranslation();

  const [searchValue, setSearchValue] = useState(0);
  const location = useLocation();
  const parentId = location.pathname.split("/").pop();
  const [installments, setInstallments] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    fetchParents();
  }, []);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    if (searchValue.length > 0) {
      setSearching(true);
    } else {
      setSearching(false);
    }
  };
  const fetchParents = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/installments/all");
      setInstallments(response.data);
      console.log(response.data);
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
        <div className="installments-container pt-5 row mx-3">
          <div className="row-data my-4 row">
            {" "}
            <h1 className="col-2 teal">{t("installments")}</h1>
            <div className="col-7 totals-container">
              <div className="totals col-11">
                <div id="search">
                  <input
                    onChange={handleSearch}
                    placeholder="search by name or ID..."
                    type="search"
                  />
                </div>
              </div>
            </div>
            <Button
              className="col-2 "
              variant="outlined"
              color="secondary"
              startIcon={<ArrowBack className="me-2" />}
              // component={Link}
              to="/"
            >
              {t("home")}
            </Button>
          </div>

          <table
            component={Paper}
            className="table col-12 col-md-8"
            aria-label="Parent List"
          >
            <thead className="table-header">
              <TableRow>
                <TableCell>{t("installment")}</TableCell>
                <TableCell>{t("parentName")}</TableCell>
                <TableCell>{t("amount")}</TableCell>
                <TableCell>{t("discount")}</TableCell>
                <TableCell>{t("date")}</TableCell>

                <TableCell>{t("actions")}</TableCell>
              </TableRow>
            </thead>
            <TableBody>
              {installments?.map((installment) => (
                <TableRow key={installment.parent_id} className="parent">
                  <TableCell>{installment.installment}</TableCell>
                  <TableCell>{installment.parent_name}</TableCell>
                  <TableCell>{installment.installment_amount}</TableCell>
                  <TableCell>{installment.discount}</TableCell>
                  <TableCell>{installment.date}</TableCell>

                  <p className="  row-data actions">
                    <Button
                      // size="small"
                      variant="contained"
                      color="secondary"
                      startIcon={<Delete className="me-2" />}
                      // component={Link}
                      to="#"
                    >
                      {t("delete")}{" "}
                    </Button>
                    <Button
                      // size="small"
                      variant="outlined"
                      color="primary"
                      startIcon={<Print className="me-2" />}
                    >
                      {t("print")}{" "}
                    </Button>
                    <Link>
                      <Button
                        // size="small"
                        variant="contained"
                        color="primary"
                        startIcon={<Edit className="me-2" />}
                        // component={Link}
                        to="#"
                      >
                        {t("edit")}{" "}
                      </Button>
                    </Link>{" "}
                  </p>
                </TableRow>
              ))}
            </TableBody>
          </table>
        </div>
      )}
    </>
  );
};

export default InstallmentsScreen;
