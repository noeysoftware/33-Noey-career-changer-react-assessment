import React, { useState } from 'react';

const AdminSector = ({ employees, addUser, deleteUser }) => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [position, setPosition] = useState('');

    const handleAddUser = () => {
        if (name && lastname && position) {
            addUser(name, lastname, position);
            setName('');
            setLastname('');
            setPosition('');
        }
    };

    return (
        <div className='flex flex-col gap-4'>
            <h1 className='font-bold'>Create Users Here</h1>
            <div className='flex gap-4'>
            <input
                className='px-2'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name" 
            />
            <input
                className='px-2'
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Last Name"
            />
            <input
                className='px-2'
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="Position"
            />
            <button className='px-4 bg-white hover:bg-slate-300'onClick={handleAddUser}>Add User</button>
            </div>
            <AdminTable employees={employees} deleteUser={deleteUser} />
        </div>
    );
};

const AdminTable = ({ employees, deleteUser }) => {
    
    return (
            <table className='bg-white border border-black'>
                <thead className='p-20 border border-black bg-slate-200'>
                    <tr>
                        <th  className='px-12 py-2 border border-black'>Name</th>
                        <th  className='px-12 py-2 border border-black'>Last Name</th>
                        <th  className='px-12 py-2 border border-black'>Position</th>
                        <th  className='px-12 py-2 border border-black'>Actions</th>
                    </tr>
                </thead >
                <tbody className='text-center'>
                    {employees.map(user => (
                        <tr key={user.id}>
                            <td className='border border-black'>{user.name}</td>
                            <td className='border border-black'>{user.lastname}</td>
                            <td className='border border-black'>{user.Position}</td>
                            <td className='border border-black font-semibold text-red-500'>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    );
};

export default AdminSector;