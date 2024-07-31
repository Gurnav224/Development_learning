
const books = [
    {id:1,title:'Book 1',price:9.99,isFree:false},
    {id:2,title:'Book 2',price:0.00,isFree:true},
    {id:3,title:'Book 3',price:19.99,isFree:false},
    {id:4,title:'Book 4',price:0.00,isFree:true},
];


const isFreeCheckbox = document.querySelector('#isFreeCheck');
const bookList = document.querySelector('#booklist');


function renderBook(filterOnlyFree){

    const filterBooks = filterOnlyFree?books.filter((book)=>book.isFree):books
 
    const bookHtmlElement = filterBooks.map((book)=>`
    <div>
    <h2>Title: ${book.title}</h2>
    <p>Price: ${book.price}</p>
    <p>IsFree: ${book.isFree} </p>
    <hr>
    </div>
    `)
    bookList.innerHTML = bookHtmlElement.join(' ')
}


renderBook(false)


isFreeCheckbox.addEventListener('click',function(){
    renderBook(isFreeCheckbox.checked)
})