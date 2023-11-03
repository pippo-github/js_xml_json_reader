function appendToMainDiv( mainDiv, { childDiv, elTitle, desc, aut, divImg, divPrice, isbnDiv} ){
    childDiv.append(elTitle);
    desc.append(childDiv);
    desc.append(aut);
    desc.append(divImg);
    desc.append(divPrice);
    desc.append(isbnDiv);

    mainDiv.append(desc);
}