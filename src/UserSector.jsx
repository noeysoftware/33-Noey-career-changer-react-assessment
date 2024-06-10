import React, { useState } from 'react';


const UserSector = ({ employees }) => {
    return (
        <div>
            <table className='bg-white border border-black'>
                <thead className='p-20 border border-black bg-slate-200'>
                    <tr>
                        <th className='px-12 py-2 border border-black'>Name</th>
                        <th className='px-12 py-2 border border-black'>LastName</th>
                        <th className='px-12 py-2 border border-black'>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(user => (
                        <tr className='text-center' key={user.id}>
                            <td className='border border-black'>{user.name}</td>
                            <td className='border border-black'>{user.lastname}</td>
                            <td className='border border-black'>{user.Position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserSector