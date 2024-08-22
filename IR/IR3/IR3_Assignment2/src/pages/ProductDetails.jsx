import Footer from "../components/Footer"
import Header from "../components/Header"
import {useParams} from "react-router-dom"

const products = [
    {
      id: "1",
      name: "Product 1",
      description:
        "This is Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$99.99",
      availableColors: ["Red", "Blue", "Green"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: "2",
      name: "Product 2",
      description:
        "This is Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$129.99",
      availableColors: ["White", "Black"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: "3",
      name: "Product 3",
      description:
        "This is Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$79.99",
      availableColors: ["Yellow"],
      isReturnApplicable: false,
      productImageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: "4",
      name: "Product 4",
      description:
        "This is Description of Product 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$49.99",
      availableColors: ["Purple", "Yellow"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/300x200",
    },
  ];

const ProductDetails = () => {
    const {id} = useParams();

    const product = products.find((product)=> product.id == id)

  return (
    <>
    <Header/>
        <main className="container py-4">
         <h1 className="display-4">{product.name}</h1>
         <img src={product.productImageUrl} alt="product image"  className="py-3" />
         <p className="fs-5 fw-light py-2">Price: {product.price}</p>
         <p className="fs-5 fw-light ">Description: {product.description}</p>
         <p className="fs-5 fw-light ">Available Colors: {product.availableColors}</p>
         <p className="fs-5 fw-light ">Return Policy : {product.isReturnApplicable ? "Return Applicable within 7 days" : "No Return Policy"}</p>
        </main>
    <Footer/>
      
    </>
  )
}

export default ProductDetails
