import React from 'react';
import Table from './components/table/Table';
import EmployeeTable from './components/table/EmployeeTable';
import AddSalaryTable from './components/table/AddSalaryTable';
import GlobalModal from './Arshan/modal/GlobalModal';
import SimpleComponent from './Arshan/modal/SimpleComponent';
import SimpleComponentTwo from './Arshan/modal/SimpleComponentTwo';
import DataTable from './Arshan/table/Table';
import Holiday from './GPT/Table/Holidays'
import Employees from './GPT/Table/Employees';
const App = () => {


  return (
    <div className="container mx-auto p-4">



      {/* GPT */}
      {/* <Holiday />
      <Employees /> */}





      {/* ARSHAN TABLE */}
      <DataTable />
      ARSHAN
      <SimpleComponent />
      <SimpleComponentTwo />
      <GlobalModal />


      {/* ARFAN */}
      {/* <GlobalModal />*/}
      {/* <EmployeeTable />
      <AddSalaryTable /> */}
    </div>
  );
};

export default App;
