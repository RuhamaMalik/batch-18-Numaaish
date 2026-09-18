// import styles from './About.module.css';

// const About = () => {

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.head}>About Us</h1>
//       <p className="head-para">
//         hamari mazeed tareef. Lorem ipsum dolor sit amet, consectetur
//         adipisicing.
//       </p>
//     </div>
//   );
// };

// export default About;

const About = () => {
  let headStyle = { color: "red", backgroundColor: "black" };

  return (
    <div>
      <h1 style={headStyle}>About Us</h1>
      <p className="border border-3 border-danger"  >
        hamari mazeed tareef. Lorem ipsum dolor sit amet, consectetur
        adipisicing.
      </p>
    </div>
  );
};

export default About;
