
async function getUserSelection(event){
    const selectedOp = event.target.value;
    if(selectedOp.includes("show")){
        makeControlPannel("show", "exec show", false, true);
        document.querySelector("button").classList.add("btn_show");
    }

    if(selectedOp.includes("delete")){
        makeControlPannel("delete", "exec delete", false, true);
        loadContents();
        // document.querySelector("button").classList.remove("btn_insert");
        document.querySelector("button").classList.readdmove("btn_delete");
    }

    if(selectedOp.includes("update")){
        makeControlPannel("update", "exec update", false, false);
        loadContents();
    }

    if(selectedOp.includes("insert")){
        makeControlPannel("update", "exec insert", false, true);
        modOptionsVal();
        loadContents();
        // document.querySelector("button").classList.remove("btn_delete");
        document.querySelector("button").classList.add("btn_insert");

    }
}