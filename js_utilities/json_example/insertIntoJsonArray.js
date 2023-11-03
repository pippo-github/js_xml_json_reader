async function insertJsonArray(){
    let jsonArrayData = await getJsonData("jsonRegistry");
    const newID = parseInt(document.getElementById("sel_id").value);
    
    jsonArrayData = [...jsonArrayData, {    'id': newID,
                                            ...getUserInput("txt_id1"), 
                                            ...getUserInput("txt_id2"), 
                                            ...getUserInput("txt_id3"), 
                                            ...getUserInput("txt_id4"), 
                                            ...getUserInput("txt_id5")} 
    ]

    localStorage.removeItem("jsonRegistry");
    localStorage.setItem("jsonRegistry", JSON.stringify(jsonArrayData))

    makeControlPannel("update", "exec insert", false, true);
    modOptionsVal();

    const jsx = showJsonContent(jsonArrayData);
    document.getElementById("mainContainer").innerHTML = jsx;
}
