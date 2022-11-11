import React from "react";
import styled from 'styled-components';
import NavTabs from './NavTabs';
import { HeaderWrapper } from "./../../styled/styled";

export default function Header({ currentPage, setCurrentPage }) {
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <>
            <HeaderWrapper>
                <div>
                    <h2>Danny's Celebration of Life</h2>
                </div>
                <div>
                    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                </div>
            </HeaderWrapper>

        </>
    )
}
