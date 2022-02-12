import React from 'react';

const TableComponent = ({columns, data}) => {
    return (
        <>
        <table>
            <tr>
                {columns?.map((column, index) => <th key={index}>{column}</th>)}
            </tr>

            {data.users.length>0 && data?.users?.map((user, index) => (
             <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
                <td>{user.country}</td>
             </tr>))}
        </table>
        </>
    )
}

export default TableComponent;