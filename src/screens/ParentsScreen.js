import React, { useState, useEffect } from "react";
import "./parentsScreen.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Box,
} from "@material-ui/core";
import { axiosInstance } from "../config/axiosInstance";
import Spinner from "../components/common/Spinner";
import { Link } from "react-router-dom";
import {
  Delete,
  Edit,
  EditRounded,
  RemoveRedEye,
  RemoveRedEyeOutlined,
  SearchOutlined,
} from "@material-ui/icons";
import Search from "@mui/icons-material/Search";
import CustomSearch from "../components/common/CustomSearch";

const ParentsScreen = () => {
  const [loading, setLoading] = useState(false);

  const [parentList, setParentList] = useState([]);

  useEffect(() => {
    fetchParents();
  }, []);

  const fetchParents = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/parents/gt-all");
      setParentList(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching parent list:", error);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className=" parents row">
          <Box className="row-data col-12  search-container my-3">
            <Typography variant="h4" className="tx-dark text-center">
              Parents
            </Typography>
            <CustomSearch />
          </Box>
          <div className="row">
            <table component={Paper} className="table" aria-label="Parent List">
              <thead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Phone</TableCell>

                  <TableCell>Actions</TableCell>
                </TableRow>
              </thead>
              <TableBody>
                {parentList.map((parent) => (
                  <TableRow key={parent.parent_id} className="parent">
                    <TableCell>{parent.parent_id}</TableCell>
                    <TableCell>{parent.name}</TableCell>
                    <TableCell>{parent.phone}</TableCell>

                    <TableCell className="actions">
                      <Link to={`/parent/${parent.parent_id}`}>
                        <IconButton>
                          <RemoveRedEye className="action-btn details" />
                        </IconButton>
                      </Link>
                      {/* <IconButton>
                        <EditRounded className="action-btn edit" />
                      </IconButton>
                      <IconButton>
                        <Delete className="action-btn delete" />
                      </IconButton> */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </table>
            <div className="col-6">
              With this school management dashboard, you can: ‣ Track student
              attendance and grades in real time ‣ Create and manage user
              accounts ‣ Generate reports for better decision-making ‣ Automate
              tasks to save time ‣ Get insights into your school's
              performanceWith this school management dashboard, you can: ‣ Track
              student attendance and grades in real time ‣ Create and manage
              user accounts ‣ Generate reports for better decision-making ‣
              Automate tasks to save time ‣ Get insights into your school's
              performance
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ParentsScreen;

// import React, { useState, useEffect } from "react";
// import "./parentsScreen.css";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
//   IconButton,
//   Box,
// } from "@material-ui/core";
// import { axiosInstance } from "../config/axiosInstance";
// import Spinner from "../components/common/Spinner";
// import { Link } from "react-router-dom";
// import {
//   Delete,
//   Edit,
//   EditRounded,
//   RemoveRedEye,
//   RemoveRedEyeOutlined,
//   SearchOutlined,
// } from "@material-ui/icons";
// import Search from "@mui/icons-material/Search";
// import CustomSearch from "../components/common/CustomSearch";

// const ParentsScreen = () => {
//   const [loading, setLoading] = useState(false);

//   const [parentList, setParentList] = useState([]);

//   useEffect(() => {
//     fetchParents();
//   }, []);

//   const fetchParents = async () => {
//     setLoading(true);
//     try {
//       const response = await axiosInstance.get("/parents/gt-all");
//       setParentList(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching parent list:", error);
//     }
//   };

//   return (
//     <>
//       {loading ? (
//         <Spinner />
//       ) : (
//         <div className=" parents">
//           <Box className="row-data col-12  search-container my-3">
//             <Typography variant="h4" className="tx-dark text-center">
//               Parents
//             </Typography>
//             <CustomSearch />
//           </Box>
//           <TableContainer component={Paper} className="">
//             <Table className="table" aria-label="Parent List">
//               <TableHead>
//                 <TableRow>
//                   <TableCell>No</TableCell>
//                   <TableCell>Name</TableCell>
//                   <TableCell>Email</TableCell>
//                   <TableCell>Phone</TableCell>
//                   <TableCell>Address</TableCell>
//                   <TableCell>Gender</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {parentList.map((parent) => (
//                   <TableRow key={parent.parent_id} className="parent">
//                     <TableCell>{parent.parent_id}</TableCell>
//                     <TableCell>{parent.name}</TableCell>
//                     <TableCell>{parent.email}</TableCell>
//                     <TableCell>{parent.phone}</TableCell>
//                     <TableCell>{parent.address}</TableCell>
//                     <TableCell>{parent.gender}</TableCell>
//                     <TableCell className="actions">
//                       <Link to={`/parent/${parent.parent_id}`}>
//                         <IconButton>
//                           <RemoveRedEyeOutlined className="action-btn details" />
//                         </IconButton>
//                       </Link>
//                       <IconButton>
//                         <EditRounded className="action-btn edit" />
//                       </IconButton>
//                       <IconButton>
//                         <Delete className="action-btn delete" />
//                       </IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       )}
//     </>
//   );
// };

// export default ParentsScreen;
