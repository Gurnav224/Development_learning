import Footer from "../components/Footer"
import Header from "../components/Header"

const Features = () => {
    const iPhone15Features = {
        "Stunning Display": "Enjoy a 6.10-inch touchscreen with a high resolution of 1179 x 2556 pixels and a pixel density of 460 ppi.",
        "Powerful Performance": "Equipped with a hexa-core Apple A16 Bionic processor and 8GB of RAM, the iPhone 15 ensures smooth and fast operation.",
        "Ample Storage": "Choose from three storage options - 128GB, 256GB, or 512GB - to store your apps, photos, and more.",
        "Dual Camera System": "Capture stunning photos with a 48-megapixel primary camera (f/1.6) and a 12-megapixel secondary camera (f/2.4) on the rear.",
        "Crystal-Clear Selfies": "Take clear and detailed selfies with the 12-megapixel front camera featuring an f/1.9 aperture.",
        "Advanced IOS 17": "Experience the latest features and enhancements with the iOS 17 operating system.",
        "All-Day Battery Life": "The iPhone 15 ensures long-lasting battery performance to keep you connected all day.",
        "Wireless Charging": "Enjoy the convenience of wireless charging to keep your device powered up without cables.",
        "Sleek Design": "With dimensions of 147.60 x 71.60 x 7.80mm and a weight of 171.00 grams, the iPhone 15 is both stylish and portable.",
        "Vibrant Colors": "Choose from a range of colors, including Black, Blue, Green, Pink, and Yellow, to match your style.",
        "IP68 Rating": "The iPhone 15 is rated IP68 for dust and water protection, ensuring durability in various conditions.",
        "5G Connectivity": "Stay connected with 5G support and enjoy high-speed data on your device.",
        "Dual-SIM Support": "Use two Nano-SIM cards for added flexibility in your mobile connectivity.",
        "Advanced Sensors": "The iPhone 15 is equipped with various sensors for an enhanced user experience."
      };

      const features = Object.keys(iPhone15Features)
  return (
    <>
     <Header/>
     <main className="container">
     <h1 className="py-2 display-1">Features</h1>
    <ul className="list-group my-3">
        {
            features.map((feature , index)=>(
                <li className="list-group-item" key={index}>
                    <strong>{feature}: </strong> {iPhone15Features[feature]}
                </li>
            ))
        }
    </ul>
     </main>
     <Footer/> 
    </>
  )
}

export default Features
