import React from 'react';

const AllProductsTable = ({ pro }) => {
    const { productName, sellerName, sellerEmail, postDate, advertized, booked } = pro;
    return (
        <tr>
            <td>{productName}</td>
            <td>{sellerName}</td>
            <td>{advertized ? "Yes" : "No"}</td>
            <td>{booked ? "Yes" : "No"}</td>
            <td>{postDate}</td>
        </tr>
    );
};

export default AllProductsTable;