function makeDinElements(cur_box, title, author, imgSrc, price, isbn){
    
    const childDiv     = document.createElement("div");
    childDiv.className = 'childDiv';
    const elTitle      = document.createElement("h1");
    elTitle.innerText  = title
    
    const desc       = document.createElement("div");
    desc.className   = "allBlks";
    desc.style.animationDelay = `${cur_box * 1550}` + "ms"; 
    const aut        = document.createElement("div");
    aut.innerHTML    = "Author: " + author

    const divImg        = document.createElement("div");
    divImg.className    = "imgBox";
    divImg.style.width  = "120px";
    divImg.style.height = "120px";

    const img           = document.createElement("img");
    img.src             = imgSrc
    img.style.width     = "100%";
    img.style.height    = "100%";
    // img.style.objectFit = "cover";
    divImg.append(img)

    const divPrice  = document.createElement("div");
    const elPrice     = document.createElement("div");
    elPrice.innerText = "Price: " + price
    divPrice.append(elPrice)

    const isbnDiv     = document.createElement("div");
    const isbnVal     = document.createElement("div");
    isbnVal.innerText = "isbn: " + isbn
    isbnVal.className = "isbn";
    isbnDiv.append(isbnVal)

    return {childDiv, elTitle, desc, aut, divImg, divPrice, isbnDiv};
}