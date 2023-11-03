function getSubmittedData(event){
    event.preventDefault();
    const btn_label = document.querySelector("button").innerText;

    if(btn_label.includes("exec delete")){
        const id_value = +document.getElementById("sel_id").value;
        removeFromJsonArray(id_value);
    }
    
    if(btn_label.includes("exec show")){
        const id_value = +document.getElementById("sel_id").value;
        filterFromJsonArray(id_value);
    }

    if(btn_label.includes("exec insert")){
        insertJsonArray();
    }
}

