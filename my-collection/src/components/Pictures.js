import React from 'react'
import "./style.css"
import Menu from "./MenuApi.js";
import MenuCard from "./MenuCard"; //this is a component

//usetstate hooks holds the data- it will return the array of 2 elements
//here we don't want one product but many so we run a loop 
//and data would be fetched from MenuApi.js


const Pictures = () => {
    const [menuData, setmenuData] = React.useState(Menu); //this is hooks. hooks comes on top as a state variable, not in return
    //console.log(menuData);

    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        })
        setmenuData(updatedList)
    }

    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                <button className="btn-group__item" onClick={() =>filterItem("nb")}>Natural Beauty</button>
        <button className="btn-group__item" onClick={() =>filterItem("boats")}>Scenic Boats</button>
        <button className="btn-group__item" onClick={() =>filterItem("love")}>Love at first sight</button>
        {/* <button className="btn-group__item" onClick={() =>filterItem("dinner")}>Dinner</button> */}
        {/* <button className="btn-group__item" onClick={() =>setmenuData("Menu")}>All</button>  */}
                   
                </div>
            </nav>



            <MenuCard menuData={menuData} />
        </>

    )
}

export default Pictures
