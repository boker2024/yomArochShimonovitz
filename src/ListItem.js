import React from "react";

const ListItem =React.memo( ({one}) => {
    console.log("item is Rendering",one)
    return ( <div>{one.name}</div> );
})
 
export default ListItem;