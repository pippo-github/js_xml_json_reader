async function modOptionsVal(){
    let jsonArrayData = await getJsonData("jsonRegistry");
    let maxVal = jsonArrayData.reduce((acc, el, idx, currArr) => (acc > el.id) ? acc : el.id, 0);
    const selOption = document.querySelector("#sel_id")
    const opts      = selOption.querySelectorAll("option")

    opts.forEach( opt => opt.remove());
    let newID = ++maxVal;

    const nOpts = new Option(newID, newID );
    selOption.add(nOpts)
}
