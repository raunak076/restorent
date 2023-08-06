import React from 'react'
import "./Mhome.css"

const Mycart = ({menudata}) => {
  return (
    <> 
    <section className='main-card--cointainer'>
     {menudata.map((cr)=>{
        return(
            <>
             <div className="card-container" key={cr.id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{cr.id}</span>
                    <span className="card-author subtle"> {cr.category}</span>
                    <h2 className="card-title"> {cr.name} </h2>
                    <span className="card-description subtle">
                      {cr.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={cr.image} alt="images" className="card-media" />

                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      
      </section>
    </>
  )
}

export default Mycart
