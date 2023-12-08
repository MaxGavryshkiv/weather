// import React, { useState } from "react";
// import styles from "./CustomInput.module.css";

// export const CustomInput = ({ onChange, currentPlace }) => {
//   const [query, setQuery] = useState(currentPlace);

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);

//     if (onChange) {
//       onChange();
//     }
//   };
//   return (
//     <>
//       <input
//         className={styles.custom_input}
//         type="text"
//         autoComplete="off"
//         //   placeholder="Search"
//         value={query}
//         onBlur={() => {
//           setQuery(currentPlace);
//         }}
//         onChange={handleInputChange}
//       />
//       <button className={styles.custom_input_bttn}>S</button>
//     </>
//   );
// };
