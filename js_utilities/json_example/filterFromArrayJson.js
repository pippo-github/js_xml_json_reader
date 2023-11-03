async function filterFromJsonArray(id){
    const jsonArrayData = await getJsonData("jsonRegistry");
    const retArray = jsonArrayData.filter((element, idx, curArray) => element.id === id)

    localStorage.removeItem("jsonRegistry");
    localStorage.setItem("jsonRegistry", JSON.stringify(jsonArrayData))

    makeControlPannel("show", "exec show", false, true);

    const jsx = showJsonContent(retArray);
    document.getElementById("mainContainer").innerHTML = jsx;

    // loadContents();
}