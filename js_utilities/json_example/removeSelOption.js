function removeSelectItem(id){
    const selTag = document.getElementById("sel_id");
    const options = selTag.querySelectorAll("option");
        for(let i = 0 ; i < options.length ; i++){
            if(options[i].innerText == id){
                options[i].remove();
            }
        }
        return options.length;
    }
    