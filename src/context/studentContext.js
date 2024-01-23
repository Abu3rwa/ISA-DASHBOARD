import React, { createContext, useState } from "react";

// Create the StudentContext
const StudentContext = createContext();

// Create a StudentProvider component
const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState({
    homework: "",
    admissionDate: "",
    timestamp: "",
    admissionId: "",
    address: "",
    age: "",
    arabicName: "",
    attendance: "",
    email: "",
    englishName: "",
    exams: [],
    gender: "",
    grade: "",
    guardian: "",
    id: "",
    uid: "",
  });

  const updateStudent = (studentData) => {
    setStudent({ ...student, ...studentData });
  };

  return (
    <StudentContext.Provider value={{ student, updateStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export { StudentContext, StudentProvider };
