
const items = [

    { id: 1, item: "Item 1", status: "In Sale" },
  
    { id: 2, item: "Item 2", status: "New Release" },
  
    { id: 3, item: "Item 3", status: "New Release" },
  
    { id: 4, item: "Item 4", status: "In Sale" },
  
    { id: 5, item: "Item 5", status: "In Sale" }
  
  ]

  const itemsList = document.querySelector('#item__list');
  const filterRadioBtn = document.getElementsByName('items');


  function renderItems(filterItems){

    console.log(filterItems)

    const filteredItems = filterItems==='all-items' ? items : items.filter((item)=>item.status===filterItems);
    
  let displayItemHtml =  filteredItems.map((item)=> `<li>
  <h2><strong>ID: </strong> ${item.id}</h2>
  <p><strong>Item: </strong> ${item.item}</p>
  <strong>Status: </strong> ${item.status} 
 </li>`)

 itemsList.innerHTML = displayItemHtml.join(' ')
  }

  renderItems('all-items')


  filterRadioBtn.forEach((filterBtn)=>{
    filterBtn.addEventListener('change',function(){
        renderItems(this.value)
    })
  })