import Footer from "../components/Footer"
import Header from "../components/Header"

const Specifications = () => {
    const iPhone15Specifications = {
        displaySize: "6.10-inch",
        displayType: "touchscreen",
        resolution: "1179 x 2556 pixels",
        pixelDensity: "460 ppi",
        processorModel: "Apple A16 Bionic",
        processorCores: "hexa-core",
        ram: "8GB",
        storageOptions: ["128GB", "256GB", "512GB"],
        rearCamera: "48MP primary (f/1.6) + 12MP (f/2.4)",
        frontCamera: "12MP (f/1.9)",
        operatingSystem: "iOS 17",
        battery: "Not specified",
        wirelessCharging: "Yes",
        dimensions: "147.60 x 71.60 x 7.80mm",
        weight: "171.00 grams",
        colors: ["Black", "Blue", "Green", "Pink", "Yellow"],
        ipRating: "IP68 (dust and water protection)",
        connectivity: ["Wi-Fi", "GPS", "Bluetooth", "NFC", "USB Type-C", "3G", "4G", "5G"],
        simSlots: "Dual Nano-SIM",
        sensors: ["Accelerometer", "Ambient Light Sensor", "Barometer", "Gyroscope", "Proximity Sensor", "Compass/Magnetometer"]
      };

      const specifications = Object.keys(iPhone15Specifications );

      
  return (
    <>
    <Header/>

        <main className="container">
     <h1 className="py-2 display-1">Specifications</h1> 

            <ul className="list-group my-3">
                {
                    specifications.map((specification , index)=>(
                        <li className="list-group-item" key={index}>
                            <strong>{specification}</strong> : {typeof iPhone15Specifications[specification] === "object" ? iPhone15Specifications[specification].join(" , ") : iPhone15Specifications[specification]}
                        </li>
                    ))
                }
            </ul>
            <p>Price In India (as of 30th October 2023) Rs 79,900</p>
        </main> 
         <Footer/>
    </>
  )
}

export default Specifications
