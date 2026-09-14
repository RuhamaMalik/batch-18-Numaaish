
// const Card = (props) => {
//     console.log(props);
    
//   return (
//     <>
//       <h1>{props?.product?.title || 'Product Title'}</h1>
//       <li>{props?.product?.price || '00'} Rs</li>
//       <li>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
//         delectus!
//       </li>
//       <hr />
//     </>
//   );
// };

// export default Card;




// const Card = ({product,isActive}) => {
   
    
//   return (
//     <>
//       <h1>{ product?.title || 'Product Title'}</h1>
//       <li>{ product?.price || '00'} Rs</li>
//       <li>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
//         delectus!
//       </li>
//       <hr />
//     </>
//   );
// };


const Card = (product) => {
   console.log(product);
   
    
  return (
    <>
      <h1 className='container'  >{ product?.title || 'Product Title'}</h1>
      <li>{product.price || '00'} Rs</li>
      <li>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
        delectus!
      </li>
      <hr />
    </>
  );
};




export default Card;
