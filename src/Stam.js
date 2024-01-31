import { useRef, useState } from "react";

const Stam = () => {
    let x = useRef(0);
    //ישמור על הערך בין הרינדורים שגם אם יהיה שינוי בסטייט הוא לא יתאפס
    //אבל כאשר משנים אותו הוא לא גורם לרינדור מחדש של הקומפוננטה

    let [y, setY] = useState(0);


    return (<>
        <input type="button" value="הגדל את איקס" onClick={() => {
           x.current++;
        }} />
        <input type="button" value="הגדל את y" onClick={() => {
            setY(y + 1);
        }} />
    </>);
}

export default Stam;