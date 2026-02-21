import { useState, useEffect, useRef} from "react";

import "./HomeGrid.css";
const HomeGrid = () => {
  const [data, setData] = useState<any[]>([]);
  const productsRef = useRef<any>(null);

  useEffect(() => {
    try {
      fetch("https://dummyjson.com/carts")
      .then((response) => response.json())
      .then((data) => setData(data.carts));
      
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (productsRef.current) {
    //   productsRef &&
    //     productsRef.current?.scrollIntoView({ behavior: "smooth"});
    window.scrollTo({top : productsRef.current.getBoundingClientRect().top +
    window.pageYOffset +
    700, behavior : "smooth"})
    }
  }, []);

  // pagination
  const itemsPerPage = 1;
  const [currentPage , setCurrentPage] = useState(1)
  const start = (currentPage - 1) * itemsPerPage
  const end = start + itemsPerPage

  const currentPageItem = data.slice(start,end)
  const totalPages = Math.ceil(data.length / itemsPerPage);


  return (
    <div className="product">
      <h1 className="productTitle">Products : </h1>
      <div className="products-grid" ref={productsRef}>
        {currentPageItem &&
          currentPageItem?.map((cart) =>
            cart.products?.map((product: any) => {
              return (
                <div key={product.id}>
                  <div className="product-card">
                    <label htmlFor="" className="product-title">
                      {product.title}{" "}
                    </label>

                    <img
                      className="product-image"
                      src={product.thumbnail}
                      alt="productImage"
                    />
                    <h3>Price : {product.price}</h3>
                    <h3>Discount Percentage : {product.discountPercentage}%</h3>
                    <h3>Quantity : {product.quantity}</h3>
                  </div>
                </div>
              );
            }),
          )}
  
      </div>
      <center>
        <button className="move-btn" disabled={currentPage === 1}  onClick={()=> setCurrentPage((prev)=> prev+1)}>Prev</button> &nbsp;
        <button className="move-btn"  disabled={currentPage == totalPages} onClick={()=> setCurrentPage((prev)=> prev - 1)}>Next</button>
      </center>
    </div>
  );
};

export default HomeGrid;
