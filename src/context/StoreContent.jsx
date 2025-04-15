import React, { createContext, useEffect, useState } from 'react'
import { food_list } from '../assets/assets'


 export const StoreContent= createContext(null)

const StoreContentProvider = (props) => {

     
      const [item, setitem] = useState({})

      const addtocart =(itemId)=>{
          
           if(!item[itemId]){
                setitem((prev)=>({...prev , [itemId]:1}))
           }else{
                
            setitem((prev)=>({...prev , [itemId]:prev[itemId]+1}))
           }
      }

      const removefromcart =(itemId)=>{
          
        setitem((prev)=>({...prev , [itemId]:prev[itemId]-1}))

      }

      const total= ()=>{
         
          let totalproduct = 0 
          
          for(const items in item ){

             if(item[items]>0){
                   
                let iteminfo = food_list.find((product)=>product._id === items);
                totalproduct+=iteminfo.price * item[items]
             }
          }
          return totalproduct;
      }
 
      const ContextValue= {
          
            food_list,
            item,
            addtocart,
            removefromcart,
            setitem,
            total
      }
      

  return (
    
    <>
    
        <StoreContent.Provider value={ContextValue}>
            {props.children}
        </StoreContent.Provider>

    </>
  )
}

export default StoreContentProvider