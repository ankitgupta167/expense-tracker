
import React from "react";
import { ExpenseProvider } from "../context/ExpenseContext";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../components/Dashboard";

const Index1 = () => {
  return (
    <>
     <ExpenseProvider>
       <DashboardLayout>
         <Dashboard />
       </DashboardLayout>
     </ExpenseProvider>
    {/* <Dashboard/> */}
    {/* <ExpenseProvider/> */}
    {/* <DashboardLayout/> */}
    </>
  );
};

export default Index1;