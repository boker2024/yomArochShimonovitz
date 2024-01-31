import { useMemo, useState } from "react";
import ListItem from "./ListItem";

const List = () => {
    let [arr, setArr] = useState([
        { id: 1, name: "pencil" },
        { id: 2, name: "pen" },
        { id: 3, name: "pencil case" }
    ])
    let filtered// = useMemo(() => { return arr.filter(item => item.name.includes(search)); }, [search]);
    const addToArr = () => {
        // setArr([...arr, { id: arr[arr.length - 1].id + 1, name: "ddd" }])
        setArr(arr.map((item, index) => { if (index == 2) return { id: 8, name: "color" }; return item; }))
    }
    console.log("list is rendering")
    return (<>
        <input type="button" onClick={addToArr} />

        <ul>
            {filtered.map(item => <li key={item.id}><ListItem one={item} /></li>)}
        </ul></>

    );
}

export default List;