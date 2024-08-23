import { useState } from "react"



const ImageSelector = ()=>{
  const images = ['https://images.pexels.com/photos/20608901/pexels-photo-20608901/free-photo-of-road-in-village-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/18804161/pexels-photo-18804161/free-photo-of-houses-in-village.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/20594340/pexels-photo-20594340/free-photo-of-road-in-village-in-countryside-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ]

  const [src,setSrc] = useState('https://images.pexels.com/photos/10651174/pexels-photo-10651174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

  return(
    <>
      <img src={src} alt="images" height={300} width={300}/>
      <br />

      {
        images.map((imageSrc,index)=>(
          <img
          onClick={()=>setSrc(imageSrc)}
           key={index} src={imageSrc} alt="image" style={{border:'1px solid black',width:150,objectFit:'cover',height:150}} />
        ))
      }
    </>
  )
}

const AddItem = ()=>{
  const [listItem, setListItem] = useState([])

  const handleItem = () =>{

    setListItem((prevItem) => [...prevItem, `Item ${prevItem.length + 1}`])
  }

  return(
    <>
      <button onClick={handleItem}>Add Item</button>
      <ul>
        {listItem.map((list,index)=>(
          <li key={index}>{list}</li>
        ))}
      </ul>
    </>
  )
}

const RandomBgColor = ()  =>{
  const colors = ['lightgreen','lightyellow','lightpink','lightseagreen' ,'lightpink'];
  const [ colorIndex , setColorIndex] = useState(0);

  const randomColor = () =>{
    setColorIndex(Math.floor(Math.random() * colors.length))
  }

  return(
    <div style={{backgroundColor:colors[colorIndex],padding:20}}>
      <p>Background Color is {colors[colorIndex]}</p>
      <button onClick={randomColor}>change color</button>
    </div>
  )
}


const Loding = ()=>{
  const [loading, setLoading] = useState(false);

  return(
    <>
    <p>{loading?   'loading....' : 'content to be loaded'}</p>
      <button onClick={()=>setLoading((prev)=>!prev)}>Toggle loading</button>
    </>
  )
}

const ListItem = () => {
  const lists = ['Item 1', 'Item 2' , 'Item 3'];
  const [selectedList, setSelectedList] = useState('')

  return(
    <>
      <ul>
        {lists.map((list , index)=>(
          <li
          onClick={()=>setSelectedList(list)}
           key={index}>
              {list}
          </li>
        ))}
      </ul>
      {selectedList && <p>selected Item {selectedList}</p>}
    </>
  )
}

function App() {

  return (
    <>  
  <ImageSelector/>
  <hr />
  <AddItem/>
  <hr />
  <RandomBgColor/>
  <hr />
  <Loding/>
  <hr />
  <ListItem/>
    </>
  )
}

export default App
