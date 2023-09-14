import React from 'react';

const Header = ({handleMode}) => {
    return(
        <div className='header'>
            <h1>Notes</h1>
            <button onClick={()=> 
                handleMode((previousDarkMode) => !previousDarkMode
            )} className='Save'>Toggle Mode</button>
        </div>
    )
}

export default Header;