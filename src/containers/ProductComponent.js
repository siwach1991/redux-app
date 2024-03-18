import { useSelector } from "react-redux";


function ProductComponent(){
   
    const products = useSelector((state)=> state.allProduct.products);
    console.log(products);
   
    return(
        <div className="ui four column grid">  
       { products.map(element => {  
        const {title,image}=element;   
        return  <div className="column">
                  <div className="ui fluid card">
                      <div className="image">
                          <img src={image} alt='test' />
                      </div>
                  
                      <div className="content">
                          <div className="header">
                         {title}
                          </div>
                      </div>
                  </div>
              </div>
              
        })
    }
        </div> 
    
        
    )
}
export default ProductComponent;
