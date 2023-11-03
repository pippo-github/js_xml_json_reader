// false crea un pannello con tutti i controlli, delete e show hanno solo il 
// tasto per rimuovere/mostrare i contenuti del vettore vettore

async function makeControlPannel(opType, btn_label, getDafaultJsonData = false, showBtn = false){
    deleteAllControls("form_id");

    createControllsElement("controlPannel", "form", "form_id", "form_cls", "", "", "");
    createControllsElement("form_id", "select", "sel_id", "sel_cls", "", "", "");

    if(!opType.includes("show") && !opType.includes("delete")){
        createControllsElement("form_id", "input", "txt_id1", "text_cls", "name",  "", "type name here");
        createControllsElement("form_id", "input", "txt_id2", "text_cls", "surname", "", "type surname here");
        createControllsElement("form_id", "input", "txt_id3", "text_cls", "email", "", "type email here");
        createControllsElement("form_id", "input", "txt_id4", "text_cls", "telephone", "", "type telephone here");
        createControllsElement("form_id", "input", "txt_id5", "text_cls", "dayBirth", "", "type birthday here");
    }

    if(showBtn){
        createControllsElement("form_id", "button", "btn_id", "btn_cls", "", btn_label, "");
    }
        createSelectOptions("sel_id");

     const btn_class = btn_label.replace(/exec /, "btn_")    
     document.querySelector("button").classList.add(btn_class)

    if(getDafaultJsonData){
        const jsonArrayData = await getJsonData("jsonRegistry");
    
        const jsx = showJsonContent(jsonArrayData);
        mainContainer.innerHTML = jsx;
    }
}
