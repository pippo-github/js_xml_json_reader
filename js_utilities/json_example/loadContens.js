async function loadContents(){
    let jsonArrayData = await getJsonData("jsonRegistry");
    const jsx = await showJsonContent(jsonArrayData);
    document.getElementById("mainContainer").innerHTML = jsx;
}