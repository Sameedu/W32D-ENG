defaultDisplay()



async function fetchBooks(){
    const data = await fetch("https://anapioficeandfire.com/api/books")
    const listing = await data.json()
    
    listing.forEach(book => {
        displayBooks(book)
    });
}                


function displayBooks(books){

    const{name, isbn, numberOfPages, authors, publisher, released, characters} = books;
    let characterlist = []
    for (let i=0; i<7; i++){
        characterlist = characterlist + " " + characters[i] 
    }
    const pageelemnt1 = document.querySelector("table");
    pageelemnt1.innerHTML += `
    <tr>
        <td class="inner"> <span>Name:</span> ${name}<br>
            <span>ISBN:</span> ${isbn} <br>
            <span>Number Of Pages:</span> ${numberOfPages}<br>
            <span>Authors:</span> ${authors} <br>
            <span>Publisher:</span> ${publisher} <br>
            <span>Released:</span> ${released} <br>
            <span>Characters:</span> ${characterlist} <br>
        </td>
     </tr>`

}

function defaultDisplay(){
    const pageelemnt = document.createElement("div");
    pageelemnt.setAttribute("class","outercover");

    pageelemnt.innerHTML = `
    <table>
            <th> Fire And Ice Books Listing <br> 
            <br> 
            <form>
            <input name="search" id="search" type="text" size="25" maxlength="25">
            <input name="search_button" type="button" value="Search" onClick="searchBooks()">            
            </form> </th>
    </table>`

        document.body.append(pageelemnt)
        fetchBooks()
        fetchBooks()
        fetchBooks()
        fetchBooks()
        fetchBooks()

}

function searchBooks(){

    var text = document.getElementById("search").value;
    console.log(text)
    var search = new RegExp("(\\b" + text + "\\b)", "gim");
    var e = document.getElementsByTagName("td").innerHTML;
//   console.log(e)
    var enew = e.replace(/(<span>|<\/span>)/igm, "");
    document.getElementById("paragraph").innerHTML = enew;
    var newe = enew.replace(search, "<span>$1</span>");
    document.getElementsByTagName("tr").innerHTML = newe;
}




