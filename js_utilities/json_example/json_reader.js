async function getJsonDataFromFile(){

   const result   = await fetch("./db/contacts.json")
   const dataJson = await result.json()
//    console.log(dataJson)

   return await dataJson;

}


// getJsonDataFromFile();

