// prende i dati di default, dal file contacts.json, solo
// se il contenuto di localstorage e 0 o é null

async function startupData(){
    const jsonArrData = await getJsonData("jsonRegistry");
    loadContents();
    localStorage.setItem("jsonRegistry", JSON.stringify(jsonArrData))
}