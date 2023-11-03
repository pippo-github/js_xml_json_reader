function showJsonContent(arrayInput){
    const retArray = arrayInput.map((element, idx, curArray) =>{

        return `<div class="contactBlk">
                    <div class="ID_box"> 
                        <span>ID: </span>${element.id} 
                    </div> 
                    <div class="name"> 
                        <span>Name: </span>${element.name} 
                    </div> 
                    <div class="surname"> 
                        <span>surname: </span>${element.surname} 
                    </div> 
                    <div class="email"> 
                        <span>Email: </span>${element.email} 
                    </div> 
                    <div class="telephone"> 
                        <span>Telephone: </span>${element.telephone} 
                    </div> 
                    <div class="bornDay"> 
                        <span>Birthday: </span>${element["dayBirth"]} 
                    </div> 
                </div>`})
return retArray.toString().replace(/,/gim, "");
}
