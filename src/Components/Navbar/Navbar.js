import React from 'react';
import Menu from "../MenuApi";

const Navbar = ({filterItemProp, menuListProp}) => {
    return (
        <>
            <nav className="navbar">
                <h1>My Restaurant App</h1>
                <div className="btn-group">
                    {menuListProp.map((item)=>{
                        return(
                            <button className="btn-group__item" onClick={()=>filterItemProp(item)}>{item}</button>
                        )
                        }
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;