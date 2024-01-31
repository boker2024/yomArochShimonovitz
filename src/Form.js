import { useRef } from "react";

const Form = () => {
    let nameInput = useRef(null);
    let passwordInput = useRef(null);
    const save = (e) => {
        e.preventDefault();
        let user = {
            name: nameInput.current.value,
            password: passwordInput.current.value
        };
        nameInput.current.value = "";
        nameInput.current.focus();
        nameInput.current.style.backgroundColor = "red";
        alert(JSON.stringify(user))


    }
    return (<form onSubmit={save}>

        <input type="text" ref={nameInput} />
        <input type="text" ref={passwordInput} />
        <input type="submit" />
    </form>);
}

export default Form;