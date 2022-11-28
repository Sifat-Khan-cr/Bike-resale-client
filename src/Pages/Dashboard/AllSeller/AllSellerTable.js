import React from 'react';

const AllSellerTable = ({ pro, buyer }) => {
    const { name, email, verified } = pro;

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            {
                buyer ? <></> : <td>{verified ? "yes" : "No"}</td>
            }
        </tr>
    );
};

export default AllSellerTable;