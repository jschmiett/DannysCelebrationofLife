import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function NavTabs({ currentPage, handlePageChange }) {
    return (
        <>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        href="#danny"
                        onClick={() => handlePageChange('Danny')}
                        // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                        className={currentPage === 'Danny' ? 'nav-link active' : 'nav-link'}
                    >
                        Danny
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#friday"
                        onClick={() => handlePageChange('Friday')}
                        // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'Friday' ? 'nav-link active' : 'nav-link'}
                    >
                        Friday
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#saturday"
                        onClick={() => handlePageChange('Saturday')}
                        // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'Saturday' ? 'nav-link active' : 'nav-link'}
                    >
                        Saturday
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#sunday"
                        onClick={() => handlePageChange('Sunday')}
                        // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'Sunday' ? 'nav-link active' : 'nav-link'}
                    >
                        Sunday
                    </a>
                </li>

            </ul>
        </>
    );
}

