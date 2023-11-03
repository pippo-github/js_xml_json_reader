function createControllsElement(boxContainer, tName, tID, tCls, tNameAttr, tValue, tPlaceholder){
    const cur_container = document.getElementById(boxContainer);
    const cur_element = document.createElement(tName);

    cur_element.id        = tID;
    cur_element.name      = tNameAttr;
    cur_element.className = tCls;
    if(tPlaceholder.length){
        cur_element.placeholder = tPlaceholder;
    }
    if(tValue.length){
        cur_element.innerText = tValue;
    }
    if(tName.includes("form")){
        cur_element.onsubmit = (event) => getSubmittedData(event);
    }

    cur_element.onchange = (event) => handleOnChange(event);    
    cur_container.appendChild(cur_element);
}

