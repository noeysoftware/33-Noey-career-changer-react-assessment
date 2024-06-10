import React, { createContext, useState } from 'react';

const EmployeesContext = createContext();

const EmployeesProvider = ({ children }) => {
    const [employees, setEmployees] = useState([
        { id: 1, name: 'Majestic', lastname: 'Calico', Position: 'Calico Cat' },
        { id: 2, name: 'Sleepy', lastname: 'Meow', Position: 'Orange Cat' },
    ]);

    return (
        <EmployeesContext.Provider value={{ employees, setEmployees }}>
            {children}
        </EmployeesContext.Provider>
    );
};

export {EmployeesContext,EmployeesProvider}