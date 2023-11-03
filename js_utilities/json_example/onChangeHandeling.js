async function handleOnChange(event){
    const jsonArrayData = await getJsonData("jsonRegistry");

    const id_el = parseInt(document.getElementById("sel_id").value);
    const {name, value} = event.target;

    const updateArray = jsonArrayData.map((el, idx) =>{
        return (el.id == id_el) ? jsonArrayData[idx] = {...el, [name]:value} : el;
    })

    localStorage.removeItem("jsonRegistry");
    localStorage.setItem("jsonRegistry", JSON.stringify(updateArray))

    const jsx = showJsonContent(jsonArrayData);
    document.getElementById("mainContainer").innerHTML = jsx;
}