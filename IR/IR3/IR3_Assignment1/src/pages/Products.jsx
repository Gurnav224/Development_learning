import Footer from "../components/Footer"
import Header from "../components/Header"
import {Link} from "react-router-dom"

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

const Products = () => {
  return (
    <>
      <Header/>
      <main className="container py-4">
        <h1 className="display-3">Product</h1>
        
            {
                products.map((product)=>(
                    <div key={product.id} className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={product.productImageUrl} alt="product image" className="img-fluid rounded-start w-100 h-100" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                    <h4>{product.name}</h4>
                                    <p>{product.description}</p>
                                    <p>{product.price}</p>
                                    <Link className="btn btn-primary" to={`/products/${product.id}`}>View Product</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                ))
            }
      </main>
      <Footer/>
    </>
  )
}

export default Products
