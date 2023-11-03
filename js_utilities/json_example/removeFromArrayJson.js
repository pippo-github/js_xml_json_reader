async function removeFromJsonArray(id){

    const jsonArrayData = await getJsonData("jsonRegistry");
    const retArray = jsonArrayData.filter((element, idx, curArray) => element.id !== id )

    localStorage.removeItem("jsonRegistry");
    localStorage.setItem("jsonRegistry", JSON.stringify(retArray))

    removeSelectItem(id);
    makeControlPannel("delete", "exec delete", true, true);

    const jsx = showJsonContent(retArray);
    mainContainer.innerHTML = jsx.toString().replace(/,/gim, " ");
}
