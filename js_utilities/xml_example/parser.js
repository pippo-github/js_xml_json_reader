
fetch("./db/books.xml")
    .then( response => response.text())
    .then( data => {

        const parser = new DOMParser()
        const xmlData = parser.parseFromString(data, "text/xml");

        const elements = xmlData.querySelectorAll("book");
        const mainDiv = document.getElementById("xmlResult");

        let cur_box = 0;
        for(const element of elements){
            const title   = element.querySelector("title").textContent.replace(/\n\s+/,'')
            const author   = element.querySelector("author").textContent.replace(/\n\s+/,'')
            const price   = element.querySelector("price").textContent.replace(/\n\s+/,'')
            const bookImg = element.querySelector("bookImg").textContent.replace(/\n\s+/,'')
            const isbn     = element.querySelector("ISBN").textContent.replace(/\n\s+/,'')

            const retObj = makeDinElements(cur_box, title, author, bookImg, price, isbn);
            appendToMainDiv( mainDiv, retObj );
            cur_box++;
        }

    });