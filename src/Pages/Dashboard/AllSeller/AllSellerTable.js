import React from 'react';

const AllSellerTable = ({ pro }) => {
    const { name, email, verified } = pro;

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{verified ? "yes" : "No"}</td>
        </tr>
    );
};

export default AllSellerTable;