import React, {useState } from 'react';
import { useContext } from 'react';
import UserSector from './UserSector';
import AdminSector from './AdminSector';
import { EmployeesContext,EmployeesProvider } from './employees';

const Home = () => {
    const {employees, setEmployees} = useContext(EmployeesContext);
    const [sector, setSector] = useState("");

    const chooseSector = (sector) => {
        setSector(sector);
    };
    const addUser = (name, lastname, position) => {
        setEmployees([...employees, { id: employees.length + 1, name, lastname, Position: position }]);
    };

    const deleteUser = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id));
    };

    return (
        <div className='flex flex-col items-center gap-4 p-4 bg-slate-400 h-screen'>
            <PageHeader text={sector} />
            <div className='grid grid-cols-2 gap-10'>
                <button className='bg-white p-3 hover:bg-slate-200 shadow-md rounded-md' onClick={() => chooseSector("User Sector")}>User Home Sector</button>
                <button className='bg-white p-3 hover:bg-slate-200 shadow-md rounded-md' onClick={() => chooseSector("Admin Sector")}>Admin Home Sector</button>
            </div>
            {sector === 'User Sector' && <UserSector employees={employees} />}
            {sector === 'Admin Sector' && <AdminSector employees={employees} addUser={addUser} deleteUser={deleteUser} />}
        </div>
    );
};

const PageHeader = ({ text }) => {
    return (
        <div>
            <h1 className='font-bold text-4xl'>Generation Thailand</h1>
            <h1 className='font-bold text-4xl'>React - {text ? text : "Assessment"}</h1>
        </div>
    )
}


export default Home;