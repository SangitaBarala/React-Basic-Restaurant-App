import React, {useState} from 'react';
import './Style.css'
import Menu from "./MenuApi";
import Navbar from "./Navbar/Navbar";
import MenuCard from "./MenuCard";
import Footer from "./Footer";

const uniqueItem = [...new Set(Menu.map ((item)=>{
    return item.category
})), "All"
]
console.log(uniqueItem)
const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu)
    const [menuList, setMenuList] = useState(uniqueItem)

    const filterItem = (category) => {
        if(category === "All"){
          setMenuData(Menu)
            return
        }
        const filteredMenu = Menu.filter((item)=>{
            return item.category === category
        })
        setMenuData(filteredMenu)
    }

    return (
        <>
            <Navbar filterItemProp={filterItem} menuListProp={menuList}/>
            <MenuCard menuDataProp={menuData}/>
            <Footer/>
        </>
    );
};

export default Restaurant;