
import React from 'react';
import Friday from './Friday/Friday';
import Saturday from "./Saturday/Saturday";
import Sunday from "./Sunday/Sunday";
import Danny from './Danny/Danny'

export default function PageContent({ currentPage }) {

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'Danny') {
            return <Danny />
        }
        if (currentPage === 'Friday') {
            return <Friday />;
        }
        if (currentPage === 'Saturday') {
            return <Saturday />;
        }
        if (currentPage === 'Sunday') {
            return <Sunday />;
        }
        return <Danny />;
    };



    return (
        <div>
            {/* We are passing the currentPage from state and the function to update it */}
            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage()}
        </div>
    );
}
