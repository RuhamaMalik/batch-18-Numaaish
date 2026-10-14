import React from 'react'
import ProductCard from './ProductCard'

const Home = () => {
  return (
  <>
  <h1>Home Page .... </h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illo, distinctio molestiae dolorum repellendus suscipit, sapiente laboriosam odio vero dolor ducimus consequatur cumque. Atque reiciendis maiores suscipit veritatis aliquid praesentium corrupti, quidem porro quo! Suscipit deleniti consequatur voluptatem quasi nulla, veniam laudantium blanditiis consequuntur, natus ipsa aspernatur doloremque atque corrupti!</p>

<section className='flex flex-wrap gap-5 bg-[#67c988]  '  >
  <ProductCard />
  <ProductCard />
  <ProductCard />
  <ProductCard />
  <ProductCard />
  <ProductCard />
</section>



  </>
  )
}

export default Home