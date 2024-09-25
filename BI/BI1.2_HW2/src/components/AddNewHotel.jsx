import { useState } from "react"

const AddNewHotel = () => {
    const [formData , setFormData] = useState({
        name:"",
        category:"",
        location:"",
        rating:"",
        website:"",
        phoneNumber:"",
        checkInTime:"",
        checkOutTime:"",
        amenities:"",
        priceRange:"",
        reservationsNeeded:false,
        isParkingAvailable:false, 
        isWifiAvailable:false,
        isPoolAvailable:false,
        isSpaAvailable:false,
        isRestaurantAvailable:false,
        photos:""
    })


    const handleChange = (event) => {
        const {name, value , checked} = event.target;

        const inputValue = event.target.type === "checkbox" ? checked : value;


        setFormData({...formData , [name]:inputValue })
    }

    console.log(formData)


    const handleSubmit = async (event) => {
         event.preventDefault()
        try {
            const response = await fetch('https://hotel-backend-mu.vercel.app/hotels',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData)
            });

            

            if(!response.ok) {
                throw "Network error"
            }

            const data = await response.json();


            console.log('new hotel added successfully', data)

        } catch (error) {
            console.error('error to add new hotel, ',error)
        }
    }

  return (
    <div>
      <h1>Add New Hotel</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name: </label>
            <input 
            type="text" 
            name="name"  
            id="name"
                value={formData.name}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="category">Category: </label>
            <select 
            name="category"
             id="category"
             value={formData.category}
             onChange={handleChange}
             >
                <option defaultValue={""}>Choose a Category</option>
                <option value="Budget">Budget</option>
                <option value="Mid-Range">Mid-Range</option>
                <option value="Luxury">Luxury</option>
                <option value="Boutique">Boutique</option>
                <option value="Resort">Resort</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div>
            <label htmlFor="location">Location: </label>
            <input 
            type="text" 
            name="location"  
            id="location"
                value={formData.location}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="rating">Rating: </label>
            <input 
            type="text" 
            name="rating" 
            id="rating"
            value={formData.rating}
            onChange={handleChange}
             />
        </div>
        <div>
            <label htmlFor="website">website: </label>
            <input 
            type="text" 
            name="website" 
            id="website" 
                value={formData.website}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="phoneNumber">phoneNumber: </label>
            <input 
            type="text" 
            name="phoneNumber"
             id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
             />
        </div>
        <div>
            <label htmlFor="checkInTime">CheckInTime: </label>
            <input 
            type="text" 
            name="checkInTime"
             id="checkInTime"
                value={formData.checkInTime}
                onChange={handleChange}
             />
        </div>
        <div>
            <label htmlFor="checkOutTime">Check Out Time: </label>
            <input 
            type="text" 
            name="checkOutTime"
              id="checkOutTime"
                value={formData.checkOutTime}
                onChange={handleChange}
              />
        </div>
        <div>
            <label htmlFor="amenities">Amenities: </label>
            <input 
            type="text" 
            name="amenities"
              id="amenities"
                value={formData.amenities}
                onChange={handleChange}
              />
        </div>
        <div>
            <label htmlFor="priceRange">Price Range: </label>
            <select 
            name="priceRange" 
            id="priceRange"
            value={formData.priceRange}
            onChange={handleChange}
            >
                <option defaultValue={""}>select a price range</option>
                <option value="$$ (11-30)">$$ (11-30)</option>
                <option value="$$$ (31-60)">$$$ (31-60)</option>
                <option value="$$$$ (61+)">$$$$ (61+)</option>
                <option value="other">other</option>
            </select>
        </div>
        <div>
            <label htmlFor="reservationsNeeded">
            <input 
            type="checkbox" 
            name="reservationsNeeded"
             id="reservationsNeeded"
             checked={formData.reservationsNeeded}
             onChange={handleChange}
              />
            
            reservationsNeeded</label>
        </div>
        <div>
            <label htmlFor="isParkingAvailable">
                <input 
                type="checkbox" 
                name="isParkingAvailable" 
                id="isParkingAvailable"
                checked={formData.isParkingAvailable}
                onChange={handleChange}
                 /> isParkingAvailable
            </label>
        </div>
        <div>
            <label htmlFor="isWifiAvailable">
                <input 
                type="checkbox" 
                name="isWifiAvailable" 
                id="isWifiAvailable" 
                    checked={formData.isWifiAvailable}
                    onChange={handleChange}
                /> isWifiAvailable
            </label>
        </div>
        <div>
            <label htmlFor="isPoolAvailable">
                <input 
                type="checkbox" 
                name="isPoolAvailable" 
                id="isPoolAvailable"
                checked={formData.isPoolAvailable}
                onChange={handleChange}
                 />isPoolAvailable
            </label>
        </div>
        <div>
            <label htmlFor="isSpaAvailable">
            <input 
            type="checkbox" 
            name="isSpaAvailable" 
            id="isSpaAvailable" 
        
                checked={formData.isSpaAvailable}
                onChange={handleChange}
            />isSpaAvailable
            </label>
        </div>
        <div>
            <label htmlFor="isRestaurantAvailable">
                <input 
                type="checkbox" 
                name="isRestaurantAvailable" 
                id="isRestaurantAvailable" 
                    checked={formData.isRestaurantAvailable}
                    onChange={handleChange}
                /> isRestaurantAvailable
            </label>
        </div>
        <div>
            <label htmlFor="photos">Photos: </label>
            <input 
            type="text" 
            name="photos"  
            id="photos"
                value={formData.photos}
                onChange={handleChange}
            />
        </div>
        <button type="submit">Add new Hotel</button>
      </form>
    </div>
  )
}

export default AddNewHotel
