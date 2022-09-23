import React from "react";
import NavTabs from './NavTabs';

export default function Header({ currentPage, setCurrentPage }) {
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <>
            <div>
                <h2>Danny's Celebration of Life</h2>
            </div>
            <div>
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
        </>
    )
}
