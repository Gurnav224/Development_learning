import Footer from "../components/Footer"
import Header from "../components/Header"
import {Link} from 'react-router-dom'

const Blogs = () => {
  return (
    <>
  <Header/>
    <main className="container er py-4">
    <h1>Blogs</h1>
      <div>
        <div className="row">
        <div className="col-md-6 my-1">
        <div className="card">
                <div className="card-body">
                    <h2>Blog 1</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, praesentium!</p>
                    <Link className="btn-primary btn" to='/blogs/1'>Read More</Link>
                </div>
            </div>
        </div>
        <div className="col-md-6 my-1">
        <div className="card">
                <div className="card-body">
                    <h2>Blog 2</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, praesentium!</p>
                    <Link className="btn-primary btn" to='/blogs/2'>Read More</Link>
                </div>
            </div>
        </div>
           <div className="col-md-6 my-1">
           <div className="card">
                <div className="card-body">
                    <h2>Blog 3</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, praesentium!</p>
                    <Link className="btn-primary btn" to='/blogs/3'>Read More</Link>
                </div>
            </div>
           </div>
            
          
        </div>
      </div>
    </main>
    <Footer/>
    </>

  )
}

export default Blogs
