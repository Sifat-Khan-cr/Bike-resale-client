import React from 'react';

const AllProductsTable = ({ pro }) => {
    const { productName, sellerName, sellerEmail, postDate } = pro;
    return (
        <tr>
            <td>{productName}</td>
            <td>{sellerName}</td>
            <td>{postDate}</td>
        </tr>
    );
};

export default AllProductsTable;