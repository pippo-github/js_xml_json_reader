async function getJsonData(keyName){
    const lStorageContent = JSON.parse(localStorage.getItem(keyName));
    if( lStorageContent === null || lStorageContent.length === 0 ){
        const jsonArrayDataFromFile = await getJsonDataFromFile();
        return jsonArrayDataFromFile;
    }
    else
    return lStorageContent;
}
