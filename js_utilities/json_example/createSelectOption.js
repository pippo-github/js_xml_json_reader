async function createSelectOptions(selectID){
    const jsonData = await getJsonData("jsonRegistry")
    const selEl = document.getElementById(selectID);

    for(let i = 0 ; i < jsonData.length ; i++){
        const option = document.createElement("option")
        option.text  = jsonData[i].id;
        option.value = jsonData[i].id;
        selEl.add(option)
    }
    
    selEl.append(selectID);
}
