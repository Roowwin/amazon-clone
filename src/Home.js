import React from 'react'
import "./Home.css"
import Product from './Product.js'

function Home() {
  return (
    <div 
     className='home'>
      <div
       className='home_container'>
        <img
        className='home_image'
        src="https://m.media-amazon.com/images/I/51Zp6EYqfwL._SR3000,600_.jpg"
        alt=''
        />
      

      <div 
      className='home_row'>
        <Product 
        title = "The name of the book"
        price = {30.99}
        image = "https://knowledgequest.aasl.org/wp-content/uploads/2015/01/books.png"
        rating = {3}
        
        />
        <Product 
        title = "The name of the Second book"
        price = {30.99}
        image = "https://knowledgequest.aasl.org/wp-content/uploads/2015/01/books.png"
        rating = {2}/>
      </div>

      <div
      className='home_row'>
        <Product />
        <Product />
        <Product />
      </div>

      <div 
      className='home_row'>
        <Product />
      </div>

      </div>

    </div>
  )
}

export default Home
