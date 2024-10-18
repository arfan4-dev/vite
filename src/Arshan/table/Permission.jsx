import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { openModal } from '../../../redux/features/modal/modal.slice';

import DataTable from '../../../components/DataTable/DataTable';

const Permissions = () => {
    // const dispatch = useDispatch();
    // const permissions = useSelector(state => state?.permission?.permissions?.permissions) || [];
    const totalPages = useSelector(state => state?.permission?.permissions?.pages) || 0;

    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [totalItems, setTotalItems] = useState(0);
    const [sortColumn, setSortColumn] = useState(null);
    const [sortOrder, setSortOrder] = useState('');



    const handleItemsPerPageChange = (value) => {
        setItemsPerPage(value);
        setCurrentPage(1); // Reset to the first page
    };

    const handleSort = (columnKey, order) => {
        setSortColumn(columnKey);
        setSortOrder(order);
    };

    const handleFilter = (newFilter) => {
        setFilter(newFilter);
        setCurrentPage(1); // Reset to the first page
    };

    const columns = [
        { key: 'module', label: 'Module' },
        { key: 'actions', label: 'Actions' },
        { key: 'status', label: 'Status' },
        { key: 'createdAt', label: 'Created At' },
    ];
    const data = [{ module: "dummyLabel", action: 'dummyAction', status: "Action", createdAt: "30-12-2024" }]
    // Handle the create permission button click
    const HaandleCreateRole = () => {
        dispatch(openModal({
            componentName: 'CreatePermission',
            componentProps: {
                // Additional props you might want to pass
            },
        }));
    };
    return (
        <>

            <div className="flex items-center float-right">

                <button onClick={HaandleCreateRole} className="px-3 py-2 lg:px-4 bg-primary text-white text-sm font-semibold rounded hover:bg-primary-light">
                    Create New
                </button>
            </div>
            <div className="container mx-auto p-4">
                <DataTable
                    tableTitle="Permissions Details"
                    columns={columns}
                    data={data}
                    onEdit={handleEdit}
                    onDelete={handleDeleteClick}
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    onItemsPerPageChange={handleItemsPerPageChange}
                    setSearchQuery={setSearchQuery}
                    searchQuery={searchQuery}
                    onFilter={handleFilter}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    onSort={handleSort}
                    totalPages={totalPages}
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                />
            </div>
        </>
    );
};

export default Permissions;