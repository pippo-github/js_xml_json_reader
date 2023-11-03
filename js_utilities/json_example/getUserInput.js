function getUserInput(txt_id){
    const {name, value} = document.getElementById(txt_id)
    // console.log("name/value: ", name, value)
    return {[name]: value}
}
