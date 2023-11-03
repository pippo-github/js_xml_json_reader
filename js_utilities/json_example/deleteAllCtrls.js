function deleteAllControls(mainBox){
    const allEls = document.querySelector( "#" + mainBox);
    if(allEls){
        allEls.remove()
    }
}
