import React from "react";
import './product.css';
 
import productLine from '../../assets/line-y.svg'
import kueTart from '../../assets/product-kue-tart.jfif'
import chiffonCake from '../../assets/product-chiffon-cake.jpg'
import lapisLegit from '../../assets/product-lapis-legit-cut.jpg'
import marmerCake from '../../assets/product-marmer-cake.jfif'
import cupCake from '../../assets/product-cup-cake.jpeg'
import spikuCake from '../../assets/product-spiku-almond.jfif'
import kueKering from '../../assets/product-kue-kering.jfif'
import snackBox from '../../assets/product-snack-box.jpg'
import horizontalLine from '../../assets/product-horizontal-line.png'

const ProductBox = ({image, desc}) => {
  return (
    <div className="product-function-container">
      <img className="product-function-image" src={image} />
      <p className="product-function-description" >{desc}</p>
    </div>
  )
}

const Product = () => {
  return (
    <div className="product-container" id="product">
        <div className="product-top">
          <p className="product-title">Produk Best Seller Kami</p>
          <img className="product-horizontal-line" src={horizontalLine} />
          <img className="product-line" src={productLine} />
          <p className="product-description">Mulai dari kue ulang tahun sesuai permintaan anda, kue chiffon yang empuk, 
            sampai kue kering berbagai macam, Bear Brownies menyediakan itu semua.</p>
        </div>
        <div className="product-bottom">
          <div className="product-bottom-first-row">
            <div className="product-box">
              <ProductBox image={kueTart} desc={"Kue Tart"} />
              <ProductBox image={cupCake} desc={"Cup Cake"} />
            </div>
            <div className="product-box">
              <ProductBox image={kueKering} desc={"Kue Kering"} />
              <ProductBox image={marmerCake} desc={"Marmer Cake"} />
            </div>
            
          </div>
          <div className="product-bottom-second-row">
            <div className="product-box">
              <ProductBox image={chiffonCake} desc={"Chiffon Cake"} />
              <ProductBox image={spikuCake} desc={"Spiku"} />
            </div>
            <div className="product-box">
              <ProductBox image={lapisLegit} desc={"Lapis Legit"} />
              <ProductBox image={snackBox} desc={"Snack Box"} />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Product;