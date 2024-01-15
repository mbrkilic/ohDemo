import React from 'react'

function Card() {
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>
  
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a href="aire" className="group">
          <div className=" bg-gray-200">
            <img src=" https://flone.jamstacktemplates.dev/assets/img/product/electronics/3.jpg" alt="aire" className="h-full w-full object-cover object-center hover:scale-110 group-hover:opacity-75 hover:blur-sm" />
          </div>
        </a>
        <a href="productDetail.html" className="group">
          <div className="bg-gray-200">
            <img src="https://flone.jamstacktemplates.dev/assets/img/product/electronics/6.jpg" alt="mic" className="h-full w-full object-cover object-center hover:scale-110 group-hover:opacity-75 hover:blur-sm" />
          </div>
        </a>
        <a href="productDetail.html" className="group">
          <div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-gray-200">
            <img src="https://flone.jamstacktemplates.dev/assets/img/product/electronics/2.jpg" alt="speaker" className="h-full w-full object-cover object-center hover:scale-110 group-hover:opacity-75 hover:blur-sm" />
          </div>
        </a>
        <a href="productDetail.html" className="group">
          <div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-gray-200">
            <img src="https://flone.jamstacktemplates.dev/assets/img/product/electronics/5.jpg" alt="mini speaker" className="h-full w-full object-cover object-center hover:scale-110 group-hover:opacity-75  hover:blur-sm" />
          </div>
        
        </a>
      </div>
  
   
    </div>
  </div>
  
  )
}

export default Card