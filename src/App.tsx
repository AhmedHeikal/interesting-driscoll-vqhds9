import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ProductContainer/>

    // <div
    //   className="ProductListingPage"
    //   style={{
    //     width: 1920,
    //     height: 1825,
    //     position: "relative",
    //     background: "#F3F3F3",
    //   }}
    // >
    //   <div
    //     className="Frame242"
    //     style={{
    //       paddingLeft: 24,
    //       paddingRight: 24,
    //       paddingTop: 20,
    //       paddingBottom: 20,
    //       left: 1460,
    //       top: 395,
    //       position: "absolute",
    //       background: "white",
    //       borderRadius: 8,
    //       justifyContent: "flex-start",
    //       alignItems: "flex-start",
    //       gap: 10,
    //       display: "inline-flex",
    //     }}
    //   >
    //     <div className="Group251" style={{ width: 309, position: "relative" }}>
    //       <div
    //         className="SortByPriceLowToHigh"
    //         style={{
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           color: "#A3A3A3",
    //           fontSize: 20,
    //           fontFamily: "Inter",
    //           fontWeight: "500",
    //           wordWrap: "break-word",
    //         }}
    //       >
    //         Sort By Price: Low to High
    //       </div>
    //       <div
    //         className="MaterialSymbolsArrowDropDownRounded"
    //         style={{
    //           width: 24,
    //           height: 24,
    //           paddingLeft: 8,
    //           paddingRight: 9,
    //           left: 285,
    //           top: 0,
    //           position: "absolute",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           display: "inline-flex",
    //         }}
    //       >

    //         <div
    //           className="Vector"
    //           style={{ width: 7, height: 5, background: "black" }}
    //         ></div>
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     className="Footer"
    //     style={{
    //       width: 1920,
    //       height: 70,
    //       left: 3,
    //       top: 1755,
    //       position: "absolute",
    //       background: "#3D3D3D",
    //       borderTop: "1px #3D3D3D solid",
    //       flexDirection: "column",
    //       justifyContent: "flex-start",
    //       alignItems: "flex-start",
    //       display: "flex",
    //     }}
    //   >
    //     <div
    //       className="Rectangle21765"
    //       style={{
    //         width: 1920,
    //         height: 49,
    //         opacity: 0.2,
    //         background: "rgba(212, 203, 222, 0)",
    //         border: "1px solid",
    //       }}
    //     />
    //     <div className="Group237" style={{ position: "relative" }}>
    //       <div
    //         className="Text"
    //         style={{
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           color: "#B6B6B6",
    //           fontSize: 16,
    //           fontFamily: "Plus Jakarta Sans",
    //           fontWeight: "500",
    //           lineHeight: 20,
    //           wordWrap: "break-word",
    //         }}
    //       >
    //         T&Cs and Cancellation Policy | Privacy Policy
    //       </div>
    //       <div
    //         className="Text"
    //         style={{
    //           left: 1436,
    //           top: 0,
    //           position: "absolute",
    //           textAlign: "right",
    //           color: "#B6B6B6",
    //           fontSize: 16,
    //           fontFamily: "Plus Jakarta Sans",
    //           fontWeight: "500",
    //           lineHeight: 20,
    //           wordWrap: "break-word",
    //         }}
    //       >
    //         © 2023 Silkhaus | All Rights Reserved
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     className="Frame245"
    //     style={{
    //       paddingTop: 24,
    //       paddingBottom: 32,
    //       paddingLeft: 36,
    //       paddingRight: 36,
    //       left: 97,
    //       top: 148,
    //       position: "absolute",
    //       background: "#FAFBFC",
    //       boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    //       borderRadius: 8,
    //       backdropFilter: "blur(30px)",
    //       flexDirection: "column",
    //       justifyContent: "flex-start",
    //       alignItems: "flex-start",
    //       gap: 10,
    //       display: "inline-flex",
    //     }}
    //   >
    //     <div
    //       className="Group8"
    //       style={{ width: 1648, height: 97, position: "relative" }}
    //     >
    //       <div
    //         className="ButtonBase"
    //         style={{
    //           width: 212,
    //           height: 60,
    //           paddingLeft: 28,
    //           paddingRight: 28,
    //           paddingTop: 12,
    //           paddingBottom: 12,
    //           left: 1436,
    //           top: 37,
    //           position: "absolute",
    //           background: "#542686",
    //           boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //           borderRadius: 8,
    //           overflow: "hidden",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Text"
    //           style={{
    //             color: "#F3F3F3",
    //             fontSize: 20,
    //             fontFamily: "Plus Jakarta Sans",
    //             fontWeight: "700",
    //             letterSpacing: 0.1,
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           Search Products
    //         </div>
    //       </div>
    //       <div
    //         className="Frame8"
    //         style={{
    //           width: 1412,
    //           height: 95,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           justifyContent: "flex-start",
    //           alignItems: "flex-start",
    //           gap: 24,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Group6"
    //           style={{ width: 761, position: "relative" }}
    //         >
    //           <div
    //             className="ProductCategory"
    //             style={{
    //               width: 385.46,
    //               left: 0,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 18,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "600",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Product Category
    //           </div>
    //           <div
    //             className="Frame5"
    //             style={{
    //               width: 761,
    //               height: 60,
    //               padding: 20,
    //               left: 0,
    //               top: 35,
    //               position: "absolute",
    //               borderRadius: 8,
    //               border: "1px #E9E7E7 solid",
    //               flexDirection: "column",
    //               justifyContent: "center",
    //               alignItems: "flex-start",
    //               gap: 10,
    //               display: "inline-flex",
    //             }}
    //           >
    //             <div className="Group4" style={{ position: "relative" }}>
    //               <div
    //                 className="All"
    //                 style={{
    //                   width: 31.76,
    //                   left: 0,
    //                   top: 3,
    //                   position: "absolute",
    //                   color: "#3D3D3D",
    //                   fontSize: 16,
    //                   fontFamily: "Plus Jakarta Sans",
    //                   fontWeight: "400",
    //                   letterSpacing: 0.1,
    //                   wordWrap: "break-word",
    //                 }}
    //               >
    //                 All
    //               </div>
    //               <div
    //                 className="MaterialSymbolsArrowDropDownRounded"
    //                 style={{
    //                   width: 42.34,
    //                   height: 24,
    //                   paddingLeft: 14.11,
    //                   paddingRight: 15.88,
    //                   left: 698.66,
    //                   top: 0,
    //                   position: "absolute",
    //                   justifyContent: "center",
    //                   alignItems: "center",
    //                   display: "inline-flex",
    //                 }}
    //               >
    //                 <div
    //                   className="Vector"
    //                   style={{ width: 12.35, height: 5, background: "black" }}
    //                 ></div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     className="Group1000001576"
    //     style={{
    //       width: 303,
    //       height: 187,
    //       left: 594,
    //       top: 252,
    //       position: "absolute",
    //     }}
    //   >
    //     <div
    //       className="Rectangle21822"
    //       style={{
    //         width: 303,
    //         height: 187,
    //         left: 0,
    //         top: 0,
    //         position: "absolute",
    //         background: "white",
    //         boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.04)",
    //         borderRadius: 8,
    //       }}
    //     />
    //     <div
    //       className="Text"
    //       style={{
    //         width: 240.88,
    //         left: 36.36,
    //         top: 24,
    //         position: "absolute",
    //         color: "#3D3D3D",
    //         fontSize: 20,
    //         fontFamily: "Plus Jakarta Sans",
    //         fontWeight: "500",
    //         letterSpacing: 0.1,
    //         wordWrap: "break-word",
    //       }}
    //     >
    //       ALL
    //     </div>
    //     <div
    //       className="Text"
    //       style={{
    //         width: 133.32,
    //         left: 36.36,
    //         top: 81,
    //         position: "absolute",
    //         color: "#3D3D3D",
    //         fontSize: 20,
    //         fontFamily: "Plus Jakarta Sans",
    //         fontWeight: "500",
    //         letterSpacing: 0.1,
    //         wordWrap: "break-word",
    //       }}
    //     >
    //       Clothes
    //     </div>
    //     <div
    //       className="Text"
    //       style={{
    //         width: 190.89,
    //         left: 36.36,
    //         top: 138,
    //         position: "absolute",
    //         color: "#3D3D3D",
    //         fontSize: 20,
    //         fontFamily: "Plus Jakarta Sans",
    //         fontWeight: "500",
    //         letterSpacing: 0.1,
    //         wordWrap: "break-word",
    //       }}
    //     >
    //       XYZ
    //     </div>
    //     <div
    //       className="Line11"
    //       style={{
    //         width: 239.37,
    //         height: 0,
    //         left: 36.36,
    //         top: 65,
    //         position: "absolute",
    //         border: "1px #DEDEDE solid",
    //       }}
    //     ></div>
    //     <div
    //       className="Line12"
    //       style={{
    //         width: 239.37,
    //         height: 0,
    //         left: 36.36,
    //         top: 122,
    //         position: "absolute",
    //         border: "1px #DEDEDE solid",
    //       }}
    //     ></div>
    //   </div>
    //   <div
    //     className="Frame270"
    //     style={{
    //       width: 1741,
    //       height: 1254,
    //       left: 109,
    //       top: 480,
    //       position: "absolute",
    //       boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    //     }}
    //   >
    //     <div
    //       className="Group253"
    //       style={{
    //         width: 712,
    //         height: 266,
    //         left: 0,
    //         top: 0,
    //         position: "absolute",
    //       }}
    //     >
    //       <div
    //         className="Rectangle21785"
    //         style={{
    //           width: 712,
    //           height: 266,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           background: "white",
    //           boxShadow: "0px 4px 38px rgba(0, 0, 0, 0.06)",
    //           borderRadius: 12,
    //         }}
    //       />
    //       <img
    //         className="Rectangle21788"
    //         style={{
    //           width: 248,
    //           height: 266,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           borderTopLeftRadius: 12,
    //           borderTopRightRadius: 12,
    //         }}
    //         src="https://via.placeholder.com/248x266"
    //       />
    //       <div
    //         className="Product1"
    //         style={{
    //           width: 429,
    //           left: 272,
    //           top: 24,
    //           position: "absolute",
    //           color: "#3D3D3D",
    //           fontSize: 20,
    //           fontFamily: "Plus Jakarta Sans",
    //           fontWeight: "700",
    //           letterSpacing: 0.1,
    //           wordWrap: "break-word",
    //         }}
    //       >
    //         Product 1
    //       </div>
    //       <div
    //         className="Line2"
    //         style={{
    //           width: 416,
    //           height: 0,
    //           left: 272,
    //           top: 174,
    //           position: "absolute",
    //           border: "1px #B6B6B6 solid",
    //         }}
    //       ></div>
    //       <div
    //         className="Frame18"
    //         style={{
    //           width: 416,
    //           height: 61,
    //           left: 272,
    //           top: 94,
    //           position: "absolute",
    //           justifyContent: "flex-start",
    //           alignItems: "center",
    //           gap: 68,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Group14"
    //           style={{ width: 84, height: 60.75, position: "relative" }}
    //         >
    //           <div
    //             className="Group11"
    //             style={{
    //               width: 71,
    //               height: 20.25,
    //               left: 0,
    //               top: 40.5,
    //               position: "absolute",
    //             }}
    //           >
    //             <div
    //               className="VuesaxLinearHome"
    //               style={{
    //                 width: 20,
    //                 height: 20,
    //                 left: 0,
    //                 top: 0,
    //                 position: "absolute",
    //               }}
    //             />
    //             <div
    //               className="Clothes"
    //               style={{
    //                 left: 10,
    //                 top: 0.25,
    //                 position: "absolute",
    //                 color: "#7A7A7A",
    //                 fontSize: 16,
    //                 fontFamily: "Plus Jakarta Sans",
    //                 fontWeight: "500",
    //                 letterSpacing: 0.1,
    //                 wordWrap: "break-word",
    //               }}
    //             >
    //               Clothes
    //             </div>
    //           </div>
    //           <div
    //             className="Category"
    //             style={{
    //               left: 10,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Category
    //           </div>
    //         </div>
    //         <div
    //           className="Group16"
    //           style={{ width: 104, height: 61, position: "relative" }}
    //         >
    //           <div
    //             className="MenSTshirt"
    //             style={{
    //               width: 104,
    //               left: 0,
    //               top: 41,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Men’s Tshirt
    //           </div>
    //           <div
    //             className="Description"
    //             style={{
    //               width: 104,
    //               left: 0,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Description
    //           </div>
    //         </div>
    //         <div
    //           className="Group16"
    //           style={{ width: 85, height: 61, position: "relative" }}
    //         >
    //           <div
    //             style={{
    //               width: 85,
    //               left: 0,
    //               top: 41,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             777
    //           </div>
    //           <div
    //             className="Price"
    //             style={{
    //               width: 51,
    //               left: 0,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Price
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         className="ButtonBase"
    //         style={{
    //           width: 127,
    //           height: 48,
    //           paddingLeft: 24,
    //           paddingRight: 24,
    //           paddingTop: 12,
    //           paddingBottom: 12,
    //           left: 561,
    //           top: 194,
    //           position: "absolute",
    //           background: "#542686",
    //           boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //           borderRadius: 8,
    //           overflow: "hidden",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Text"
    //           style={{
    //             color: "#F3F3F3",
    //             fontSize: 14,
    //             fontFamily: "Plus Jakarta Sans",
    //             fontWeight: "600",
    //             letterSpacing: 0.1,
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           Add to Cart
    //         </div>
    //       </div>
    //       <div
    //         className="ButtonBase"
    //         style={{
    //           width: 127,
    //           height: 48,
    //           paddingLeft: 24,
    //           paddingRight: 24,
    //           paddingTop: 12,
    //           paddingBottom: 12,
    //           left: 561,
    //           top: 194,
    //           position: "absolute",
    //           background: "#542686",
    //           boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //           borderRadius: 8,
    //           overflow: "hidden",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Text"
    //           style={{
    //             color: "#F3F3F3",
    //             fontSize: 14,
    //             fontFamily: "Plus Jakarta Sans",
    //             fontWeight: "600",
    //             letterSpacing: 0.1,
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           Add to Cart
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className="Group1000001197"
    //       style={{
    //         width: 712,
    //         height: 266,
    //         left: -3,
    //         top: 293,
    //         position: "absolute",
    //       }}
    //     >
    //       <div
    //         className="Rectangle21785"
    //         style={{
    //           width: 712,
    //           height: 266,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           background: "white",
    //           boxShadow: "0px 4px 38px rgba(0, 0, 0, 0.06)",
    //           borderRadius: 12,
    //         }}
    //       />
    //       <img
    //         className="Rectangle21788"
    //         style={{
    //           width: 248,
    //           height: 266,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           borderTopLeftRadius: 12,
    //           borderTopRightRadius: 12,
    //         }}
    //         src="https://via.placeholder.com/248x266"
    //       />
    //       <div
    //         className="Product1"
    //         style={{
    //           width: 429,
    //           left: 272,
    //           top: 24,
    //           position: "absolute",
    //           color: "#3D3D3D",
    //           fontSize: 20,
    //           fontFamily: "Plus Jakarta Sans",
    //           fontWeight: "700",
    //           letterSpacing: 0.1,
    //           wordWrap: "break-word",
    //         }}
    //       >
    //         Product 1
    //       </div>
    //       <div
    //         className="Line2"
    //         style={{
    //           width: 416,
    //           height: 0,
    //           left: 272,
    //           top: 174,
    //           position: "absolute",
    //           border: "1px #B6B6B6 solid",
    //         }}
    //       ></div>
    //       <div
    //         className="Frame18"
    //         style={{
    //           width: 416,
    //           height: 61,
    //           left: 272,
    //           top: 94,
    //           position: "absolute",
    //           justifyContent: "flex-start",
    //           alignItems: "center",
    //           gap: 68,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Group14"
    //           style={{ width: 84, height: 60.75, position: "relative" }}
    //         >
    //           <div
    //             className="Group11"
    //             style={{
    //               width: 50,
    //               height: 20.25,
    //               left: 0,
    //               top: 40.5,
    //               position: "absolute",
    //             }}
    //           >
    //             <div
    //               className="VuesaxLinearHome"
    //               style={{
    //                 width: 20,
    //                 height: 20,
    //                 left: 0,
    //                 top: 0,
    //                 position: "absolute",
    //               }}
    //             />
    //             <div
    //               className="Xxxx"
    //               style={{
    //                 left: 10,
    //                 top: 0.25,
    //                 position: "absolute",
    //                 color: "#7A7A7A",
    //                 fontSize: 16,
    //                 fontFamily: "Plus Jakarta Sans",
    //                 fontWeight: "500",
    //                 letterSpacing: 0.1,
    //                 wordWrap: "break-word",
    //               }}
    //             >
    //               XXXX
    //             </div>
    //           </div>
    //           <div
    //             className="Category"
    //             style={{
    //               left: 10,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Category
    //           </div>
    //         </div>
    //         <div
    //           className="Group16"
    //           style={{ width: 104, height: 61, position: "relative" }}
    //         >
    //           <div
    //             className="Xxxxx"
    //             style={{
    //               width: 85,
    //               left: 0,
    //               top: 41,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             XXXXX
    //           </div>
    //           <div
    //             className="Description"
    //             style={{
    //               width: 104,
    //               left: 0,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Description
    //           </div>
    //         </div>
    //         <div
    //           className="Group16"
    //           style={{ width: 85, height: 61, position: "relative" }}
    //         >
    //           <div
    //             style={{
    //               width: 85,
    //               left: 0,
    //               top: 41,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             777
    //           </div>
    //           <div
    //             className="Price"
    //             style={{
    //               width: 51,
    //               left: 0,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Price
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         className="ButtonBase"
    //         style={{
    //           width: 127,
    //           height: 48,
    //           paddingLeft: 24,
    //           paddingRight: 24,
    //           paddingTop: 12,
    //           paddingBottom: 12,
    //           left: 561,
    //           top: 194,
    //           position: "absolute",
    //           background: "#542686",
    //           boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //           borderRadius: 8,
    //           overflow: "hidden",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Text"
    //           style={{
    //             color: "#F3F3F3",
    //             fontSize: 14,
    //             fontFamily: "Plus Jakarta Sans",
    //             fontWeight: "600",
    //             letterSpacing: 0.1,
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           Add to Cart
    //         </div>
    //       </div>
    //       <div
    //         className="ButtonBase"
    //         style={{
    //           width: 127,
    //           height: 48,
    //           paddingLeft: 24,
    //           paddingRight: 24,
    //           paddingTop: 12,
    //           paddingBottom: 12,
    //           left: 561,
    //           top: 194,
    //           position: "absolute",
    //           background: "#542686",
    //           boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //           borderRadius: 8,
    //           overflow: "hidden",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Text"
    //           style={{
    //             color: "#F3F3F3",
    //             fontSize: 14,
    //             fontFamily: "Plus Jakarta Sans",
    //             fontWeight: "600",
    //             letterSpacing: 0.1,
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           Add to Cart
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className="Group1000001198"
    //       style={{
    //         width: 712,
    //         height: 266,
    //         left: -3,
    //         top: 583,
    //         position: "absolute",
    //       }}
    //     >
    //       <div
    //         className="Rectangle21785"
    //         style={{
    //           width: 712,
    //           height: 266,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           background: "white",
    //           boxShadow: "0px 4px 38px rgba(0, 0, 0, 0.06)",
    //           borderRadius: 12,
    //         }}
    //       />
    //       <img
    //         className="Rectangle21788"
    //         style={{
    //           width: 248,
    //           height: 266,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           borderTopLeftRadius: 12,
    //           borderTopRightRadius: 12,
    //         }}
    //         src="https://via.placeholder.com/248x266"
    //       />
    //       <div
    //         className="Product1"
    //         style={{
    //           width: 429,
    //           left: 272,
    //           top: 24,
    //           position: "absolute",
    //           color: "#3D3D3D",
    //           fontSize: 20,
    //           fontFamily: "Plus Jakarta Sans",
    //           fontWeight: "700",
    //           letterSpacing: 0.1,
    //           wordWrap: "break-word",
    //         }}
    //       >
    //         Product 1
    //       </div>
    //       <div
    //         className="Line2"
    //         style={{
    //           width: 416,
    //           height: 0,
    //           left: 272,
    //           top: 174,
    //           position: "absolute",
    //           border: "1px #B6B6B6 solid",
    //         }}
    //       ></div>
    //       <div
    //         className="Frame18"
    //         style={{
    //           width: 416,
    //           height: 61,
    //           left: 272,
    //           top: 94,
    //           position: "absolute",
    //           justifyContent: "flex-start",
    //           alignItems: "center",
    //           gap: 68,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Group14"
    //           style={{ width: 84, height: 60.75, position: "relative" }}
    //         >
    //           <div
    //             className="Group11"
    //             style={{
    //               width: 62,
    //               height: 20.25,
    //               left: 0,
    //               top: 40.5,
    //               position: "absolute",
    //             }}
    //           >
    //             <div
    //               className="VuesaxLinearHome"
    //               style={{
    //                 width: 20,
    //                 height: 20,
    //                 left: 0,
    //                 top: 0,
    //                 position: "absolute",
    //               }}
    //             />
    //             <div
    //               className="Studio"
    //               style={{
    //                 left: 10,
    //                 top: 0.25,
    //                 position: "absolute",
    //                 color: "#7A7A7A",
    //                 fontSize: 16,
    //                 fontFamily: "Plus Jakarta Sans",
    //                 fontWeight: "500",
    //                 letterSpacing: 0.1,
    //                 wordWrap: "break-word",
    //               }}
    //             >
    //               Studio
    //             </div>
    //           </div>
    //           <div
    //             className="Category"
    //             style={{
    //               left: 10,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Category
    //           </div>
    //         </div>
    //         <div
    //           className="Group16"
    //           style={{ width: 104, height: 61, position: "relative" }}
    //         >
    //           <div
    //             className="SqFt"
    //             style={{
    //               width: 85,
    //               left: 0,
    //               top: 41,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             484 sq. ft.
    //           </div>
    //           <div
    //             className="Description"
    //             style={{
    //               width: 104,
    //               left: 0,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Description
    //           </div>
    //         </div>
    //         <div
    //           className="Group16"
    //           style={{ width: 85, height: 61, position: "relative" }}
    //         >
    //           <div
    //             style={{
    //               width: 85,
    //               left: 0,
    //               top: 41,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             777
    //           </div>
    //           <div
    //             className="Price"
    //             style={{
    //               width: 51,
    //               left: 0,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Price
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         className="ButtonBase"
    //         style={{
    //           width: 127,
    //           height: 48,
    //           paddingLeft: 24,
    //           paddingRight: 24,
    //           paddingTop: 12,
    //           paddingBottom: 12,
    //           left: 561,
    //           top: 194,
    //           position: "absolute",
    //           background: "#542686",
    //           boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //           borderRadius: 8,
    //           overflow: "hidden",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Text"
    //           style={{
    //             color: "#F3F3F3",
    //             fontSize: 14,
    //             fontFamily: "Plus Jakarta Sans",
    //             fontWeight: "600",
    //             letterSpacing: 0.1,
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           Add to Cart
    //         </div>
    //       </div>
    //       <div
    //         className="ButtonBase"
    //         style={{
    //           width: 127,
    //           height: 48,
    //           paddingLeft: 24,
    //           paddingRight: 24,
    //           paddingTop: 12,
    //           paddingBottom: 12,
    //           left: 561,
    //           top: 194,
    //           position: "absolute",
    //           background: "#542686",
    //           boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //           borderRadius: 8,
    //           overflow: "hidden",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Text"
    //           style={{
    //             color: "#F3F3F3",
    //             fontSize: 14,
    //             fontFamily: "Plus Jakarta Sans",
    //             fontWeight: "600",
    //             letterSpacing: 0.1,
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           Add to Cart
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className="Group1000001199"
    //       style={{
    //         width: 712,
    //         height: 266,
    //         left: -3,
    //         top: 583,
    //         position: "absolute",
    //       }}
    //     >
    //       <div
    //         className="Rectangle21785"
    //         style={{
    //           width: 712,
    //           height: 266,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           background: "white",
    //           boxShadow: "0px 4px 38px rgba(0, 0, 0, 0.06)",
    //           borderRadius: 12,
    //         }}
    //       />
    //       <img
    //         className="Rectangle21788"
    //         style={{
    //           width: 248,
    //           height: 266,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           borderTopLeftRadius: 12,
    //           borderTopRightRadius: 12,
    //         }}
    //         src="https://via.placeholder.com/248x266"
    //       />
    //       <div
    //         className="Product1"
    //         style={{
    //           width: 429,
    //           left: 272,
    //           top: 24,
    //           position: "absolute",
    //           color: "#3D3D3D",
    //           fontSize: 20,
    //           fontFamily: "Plus Jakarta Sans",
    //           fontWeight: "700",
    //           letterSpacing: 0.1,
    //           wordWrap: "break-word",
    //         }}
    //       >
    //         Product 1
    //       </div>
    //       <div
    //         className="Line2"
    //         style={{
    //           width: 416,
    //           height: 0,
    //           left: 272,
    //           top: 174,
    //           position: "absolute",
    //           border: "1px #B6B6B6 solid",
    //         }}
    //       ></div>
    //       <div
    //         className="Frame18"
    //         style={{
    //           width: 416,
    //           height: 61,
    //           left: 272,
    //           top: 94,
    //           position: "absolute",
    //           justifyContent: "flex-start",
    //           alignItems: "center",
    //           gap: 68,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Group14"
    //           style={{ width: 84, height: 60.75, position: "relative" }}
    //         >
    //           <div
    //             className="Group11"
    //             style={{
    //               width: 50,
    //               height: 20.25,
    //               left: 0,
    //               top: 40.5,
    //               position: "absolute",
    //             }}
    //           >
    //             <div
    //               className="VuesaxLinearHome"
    //               style={{
    //                 width: 20,
    //                 height: 20,
    //                 left: 0,
    //                 top: 0,
    //                 position: "absolute",
    //               }}
    //             />
    //             <div
    //               className="Xxxx"
    //               style={{
    //                 left: 10,
    //                 top: 0.25,
    //                 position: "absolute",
    //                 color: "#7A7A7A",
    //                 fontSize: 16,
    //                 fontFamily: "Plus Jakarta Sans",
    //                 fontWeight: "500",
    //                 letterSpacing: 0.1,
    //                 wordWrap: "break-word",
    //               }}
    //             >
    //               XXXX
    //             </div>
    //           </div>
    //           <div
    //             className="Category"
    //             style={{
    //               left: 10,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Category
    //           </div>
    //         </div>
    //         <div
    //           className="Group16"
    //           style={{ width: 104, height: 61, position: "relative" }}
    //         >
    //           <div
    //             className="Xxx"
    //             style={{
    //               width: 85,
    //               left: 0,
    //               top: 41,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             XXX
    //           </div>
    //           <div
    //             className="Description"
    //             style={{
    //               width: 104,
    //               left: 0,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Description
    //           </div>
    //         </div>
    //         <div
    //           className="Group16"
    //           style={{ width: 85, height: 61, position: "relative" }}
    //         >
    //           <div
    //             style={{
    //               width: 85,
    //               left: 0,
    //               top: 41,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             777
    //           </div>
    //           <div
    //             className="Price"
    //             style={{
    //               width: 51,
    //               left: 0,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Price
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         className="ButtonBase"
    //         style={{
    //           width: 127,
    //           height: 48,
    //           paddingLeft: 24,
    //           paddingRight: 24,
    //           paddingTop: 12,
    //           paddingBottom: 12,
    //           left: 561,
    //           top: 194,
    //           position: "absolute",
    //           background: "#542686",
    //           boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //           borderRadius: 8,
    //           overflow: "hidden",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Text"
    //           style={{
    //             color: "#F3F3F3",
    //             fontSize: 14,
    //             fontFamily: "Plus Jakarta Sans",
    //             fontWeight: "600",
    //             letterSpacing: 0.1,
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           Add to Cart
    //         </div>
    //       </div>
    //       <div
    //         className="ButtonBase"
    //         style={{
    //           width: 127,
    //           height: 48,
    //           paddingLeft: 24,
    //           paddingRight: 24,
    //           paddingTop: 12,
    //           paddingBottom: 12,
    //           left: 561,
    //           top: 194,
    //           position: "absolute",
    //           background: "#542686",
    //           boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //           borderRadius: 8,
    //           overflow: "hidden",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Text"
    //           style={{
    //             color: "#F3F3F3",
    //             fontSize: 14,
    //             fontFamily: "Plus Jakarta Sans",
    //             fontWeight: "600",
    //             letterSpacing: 0.1,
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           Add to Cart
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className="Group1000001200"
    //       style={{
    //         width: 712,
    //         height: 266,
    //         left: -3,
    //         top: 872,
    //         position: "absolute",
    //       }}
    //     >
    //       <div
    //         className="Rectangle21785"
    //         style={{
    //           width: 712,
    //           height: 266,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           background: "white",
    //           boxShadow: "0px 4px 38px rgba(0, 0, 0, 0.06)",
    //           borderRadius: 12,
    //         }}
    //       />
    //       <img
    //         className="Rectangle21788"
    //         style={{
    //           width: 248,
    //           height: 266,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           borderTopLeftRadius: 12,
    //           borderTopRightRadius: 12,
    //         }}
    //         src="https://via.placeholder.com/248x266"
    //       />
    //       <div
    //         className="Product1"
    //         style={{
    //           width: 429,
    //           left: 272,
    //           top: 24,
    //           position: "absolute",
    //           color: "#3D3D3D",
    //           fontSize: 20,
    //           fontFamily: "Plus Jakarta Sans",
    //           fontWeight: "700",
    //           letterSpacing: 0.1,
    //           wordWrap: "break-word",
    //         }}
    //       >
    //         Product 1
    //       </div>
    //       <div
    //         className="Line2"
    //         style={{
    //           width: 416,
    //           height: 0,
    //           left: 272,
    //           top: 174,
    //           position: "absolute",
    //           border: "1px #B6B6B6 solid",
    //         }}
    //       ></div>
    //       <div
    //         className="Frame18"
    //         style={{
    //           width: 416,
    //           height: 61,
    //           left: 272,
    //           top: 94,
    //           position: "absolute",
    //           justifyContent: "flex-start",
    //           alignItems: "center",
    //           gap: 68,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Group14"
    //           style={{ width: 84, height: 60.75, position: "relative" }}
    //         >
    //           <div
    //             className="Group11"
    //             style={{
    //               width: 40,
    //               height: 20.25,
    //               left: 0,
    //               top: 40.5,
    //               position: "absolute",
    //             }}
    //           >
    //             <div
    //               className="VuesaxLinearHome"
    //               style={{
    //                 width: 20,
    //                 height: 20,
    //                 left: 0,
    //                 top: 0,
    //                 position: "absolute",
    //               }}
    //             />
    //             <div
    //               className="Xxx"
    //               style={{
    //                 left: 10,
    //                 top: 0.25,
    //                 position: "absolute",
    //                 color: "#7A7A7A",
    //                 fontSize: 16,
    //                 fontFamily: "Plus Jakarta Sans",
    //                 fontWeight: "500",
    //                 letterSpacing: 0.1,
    //                 wordWrap: "break-word",
    //               }}
    //             >
    //               XXX
    //             </div>
    //           </div>
    //           <div
    //             className="Category"
    //             style={{
    //               left: 10,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Category
    //           </div>
    //         </div>
    //         <div
    //           className="Group16"
    //           style={{ width: 104, height: 61, position: "relative" }}
    //         >
    //           <div
    //             className="Xxx"
    //             style={{
    //               width: 85,
    //               left: 0,
    //               top: 41,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             XXX
    //           </div>
    //           <div
    //             className="Description"
    //             style={{
    //               width: 104,
    //               left: 0,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Description
    //           </div>
    //         </div>
    //         <div
    //           className="Group16"
    //           style={{ width: 85, height: 61, position: "relative" }}
    //         >
    //           <div
    //             style={{
    //               width: 85,
    //               left: 0,
    //               top: 41,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             777
    //           </div>
    //           <div
    //             className="Price"
    //             style={{
    //               width: 51,
    //               left: 0,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Price
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         className="ButtonBase"
    //         style={{
    //           width: 127,
    //           height: 48,
    //           paddingLeft: 24,
    //           paddingRight: 24,
    //           paddingTop: 12,
    //           paddingBottom: 12,
    //           left: 561,
    //           top: 194,
    //           position: "absolute",
    //           background: "#542686",
    //           boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //           borderRadius: 8,
    //           overflow: "hidden",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Text"
    //           style={{
    //             color: "#F3F3F3",
    //             fontSize: 14,
    //             fontFamily: "Plus Jakarta Sans",
    //             fontWeight: "600",
    //             letterSpacing: 0.1,
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           Add to Cart
    //         </div>
    //       </div>
    //       <div
    //         className="ButtonBase"
    //         style={{
    //           width: 127,
    //           height: 48,
    //           paddingLeft: 24,
    //           paddingRight: 24,
    //           paddingTop: 12,
    //           paddingBottom: 12,
    //           left: 561,
    //           top: 194,
    //           position: "absolute",
    //           background: "#542686",
    //           boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //           borderRadius: 8,
    //           overflow: "hidden",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Text"
    //           style={{
    //             color: "#F3F3F3",
    //             fontSize: 14,
    //             fontFamily: "Plus Jakarta Sans",
    //             fontWeight: "600",
    //             letterSpacing: 0.1,
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           Add to Cart
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className="Group1000001202"
    //       style={{
    //         width: 712,
    //         height: 266,
    //         left: 854,
    //         top: 295,
    //         position: "absolute",
    //       }}
    //     >
    //       <div
    //         className="Rectangle21785"
    //         style={{
    //           width: 712,
    //           height: 266,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           background: "white",
    //           boxShadow: "0px 4px 38px rgba(0, 0, 0, 0.06)",
    //           borderRadius: 12,
    //         }}
    //       />
    //       <img
    //         className="Rectangle21788"
    //         style={{
    //           width: 248,
    //           height: 266,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           borderTopLeftRadius: 12,
    //           borderTopRightRadius: 12,
    //         }}
    //         src="https://via.placeholder.com/248x266"
    //       />
    //       <div
    //         className="Product1"
    //         style={{
    //           width: 429,
    //           left: 272,
    //           top: 24,
    //           position: "absolute",
    //           color: "#3D3D3D",
    //           fontSize: 20,
    //           fontFamily: "Plus Jakarta Sans",
    //           fontWeight: "700",
    //           letterSpacing: 0.1,
    //           wordWrap: "break-word",
    //         }}
    //       >
    //         Product 1
    //       </div>
    //       <div
    //         className="Line2"
    //         style={{
    //           width: 416,
    //           height: 0,
    //           left: 272,
    //           top: 174,
    //           position: "absolute",
    //           border: "1px #B6B6B6 solid",
    //         }}
    //       ></div>
    //       <div
    //         className="Frame18"
    //         style={{
    //           width: 416,
    //           height: 61,
    //           left: 272,
    //           top: 94,
    //           position: "absolute",
    //           justifyContent: "flex-start",
    //           alignItems: "center",
    //           gap: 68,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Group14"
    //           style={{ width: 84, height: 60.75, position: "relative" }}
    //         >
    //           <div
    //             className="Group11"
    //             style={{
    //               width: 50,
    //               height: 20.25,
    //               left: 0,
    //               top: 40.5,
    //               position: "absolute",
    //             }}
    //           >
    //             <div
    //               className="VuesaxLinearHome"
    //               style={{
    //                 width: 20,
    //                 height: 20,
    //                 left: 0,
    //                 top: 0,
    //                 position: "absolute",
    //               }}
    //             />
    //             <div
    //               className="Xxxx"
    //               style={{
    //                 left: 10,
    //                 top: 0.25,
    //                 position: "absolute",
    //                 color: "#7A7A7A",
    //                 fontSize: 16,
    //                 fontFamily: "Plus Jakarta Sans",
    //                 fontWeight: "500",
    //                 letterSpacing: 0.1,
    //                 wordWrap: "break-word",
    //               }}
    //             >
    //               XXXX
    //             </div>
    //           </div>
    //           <div
    //             className="Category"
    //             style={{
    //               left: 10,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Category
    //           </div>
    //         </div>
    //         <div
    //           className="Group16"
    //           style={{ width: 104, height: 61, position: "relative" }}
    //         >
    //           <div
    //             className="Xxxx"
    //             style={{
    //               width: 85,
    //               left: 0,
    //               top: 41,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             XXXX
    //           </div>
    //           <div
    //             className="Description"
    //             style={{
    //               width: 104,
    //               left: 0,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Description
    //           </div>
    //         </div>
    //         <div
    //           className="Group16"
    //           style={{ width: 85, height: 61, position: "relative" }}
    //         >
    //           <div
    //             style={{
    //               width: 85,
    //               left: 0,
    //               top: 41,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             777
    //           </div>
    //           <div
    //             className="Price"
    //             style={{
    //               width: 51,
    //               left: 0,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Price
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         className="ButtonBase"
    //         style={{
    //           width: 127,
    //           height: 48,
    //           paddingLeft: 24,
    //           paddingRight: 24,
    //           paddingTop: 12,
    //           paddingBottom: 12,
    //           left: 561,
    //           top: 194,
    //           position: "absolute",
    //           background: "#542686",
    //           boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //           borderRadius: 8,
    //           overflow: "hidden",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Text"
    //           style={{
    //             color: "#F3F3F3",
    //             fontSize: 14,
    //             fontFamily: "Plus Jakarta Sans",
    //             fontWeight: "600",
    //             letterSpacing: 0.1,
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           Add to Cart
    //         </div>
    //       </div>
    //       <div
    //         className="ButtonBase"
    //         style={{
    //           width: 127,
    //           height: 48,
    //           paddingLeft: 24,
    //           paddingRight: 24,
    //           paddingTop: 12,
    //           paddingBottom: 12,
    //           left: 561,
    //           top: 194,
    //           position: "absolute",
    //           background: "#542686",
    //           boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //           borderRadius: 8,
    //           overflow: "hidden",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Text"
    //           style={{
    //             color: "#F3F3F3",
    //             fontSize: 14,
    //             fontFamily: "Plus Jakarta Sans",
    //             fontWeight: "600",
    //             letterSpacing: 0.1,
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           Add to Cart
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className="Group1000001203"
    //       style={{
    //         width: 712,
    //         height: 266,
    //         left: 854,
    //         top: 583,
    //         position: "absolute",
    //       }}
    //     >
    //       <div
    //         className="Rectangle21785"
    //         style={{
    //           width: 712,
    //           height: 266,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           background: "white",
    //           boxShadow: "0px 4px 38px rgba(0, 0, 0, 0.06)",
    //           borderRadius: 12,
    //         }}
    //       />
    //       <img
    //         className="Rectangle21788"
    //         style={{
    //           width: 248,
    //           height: 266,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           borderTopLeftRadius: 12,
    //           borderTopRightRadius: 12,
    //         }}
    //         src="https://via.placeholder.com/248x266"
    //       />
    //       <div
    //         className="Product1"
    //         style={{
    //           width: 429,
    //           left: 272,
    //           top: 24,
    //           position: "absolute",
    //           color: "#3D3D3D",
    //           fontSize: 20,
    //           fontFamily: "Plus Jakarta Sans",
    //           fontWeight: "700",
    //           letterSpacing: 0.1,
    //           wordWrap: "break-word",
    //         }}
    //       >
    //         Product 1
    //       </div>
    //       <div
    //         className="Line2"
    //         style={{
    //           width: 416,
    //           height: 0,
    //           left: 272,
    //           top: 174,
    //           position: "absolute",
    //           border: "1px #B6B6B6 solid",
    //         }}
    //       ></div>
    //       <div
    //         className="Frame18"
    //         style={{
    //           width: 416,
    //           height: 61,
    //           left: 272,
    //           top: 94,
    //           position: "absolute",
    //           justifyContent: "flex-start",
    //           alignItems: "center",
    //           gap: 68,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Group14"
    //           style={{ width: 84, height: 60.75, position: "relative" }}
    //         >
    //           <div
    //             className="Group11"
    //             style={{
    //               width: 50,
    //               height: 20.25,
    //               left: 0,
    //               top: 40.5,
    //               position: "absolute",
    //             }}
    //           >
    //             <div
    //               className="VuesaxLinearHome"
    //               style={{
    //                 width: 20,
    //                 height: 20,
    //                 left: 0,
    //                 top: 0,
    //                 position: "absolute",
    //               }}
    //             />
    //             <div
    //               className="Xxxx"
    //               style={{
    //                 left: 10,
    //                 top: 0.25,
    //                 position: "absolute",
    //                 color: "#7A7A7A",
    //                 fontSize: 16,
    //                 fontFamily: "Plus Jakarta Sans",
    //                 fontWeight: "500",
    //                 letterSpacing: 0.1,
    //                 wordWrap: "break-word",
    //               }}
    //             >
    //               XXXX
    //             </div>
    //           </div>
    //           <div
    //             className="Category"
    //             style={{
    //               left: 10,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Category
    //           </div>
    //         </div>
    //         <div
    //           className="Group16"
    //           style={{ width: 104, height: 61, position: "relative" }}
    //         >
    //           <div
    //             className="Xxx"
    //             style={{
    //               width: 85,
    //               left: 0,
    //               top: 41,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             XXX
    //           </div>
    //           <div
    //             className="Description"
    //             style={{
    //               width: 104,
    //               left: 0,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Description
    //           </div>
    //         </div>
    //         <div
    //           className="Group16"
    //           style={{ width: 85, height: 61, position: "relative" }}
    //         >
    //           <div
    //             style={{
    //               width: 85,
    //               left: 0,
    //               top: 41,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             777
    //           </div>
    //           <div
    //             className="Price"
    //             style={{
    //               width: 51,
    //               left: 0,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Price
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         className="ButtonBase"
    //         style={{
    //           width: 127,
    //           height: 48,
    //           paddingLeft: 24,
    //           paddingRight: 24,
    //           paddingTop: 12,
    //           paddingBottom: 12,
    //           left: 561,
    //           top: 194,
    //           position: "absolute",
    //           background: "#542686",
    //           boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //           borderRadius: 8,
    //           overflow: "hidden",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Text"
    //           style={{
    //             color: "#F3F3F3",
    //             fontSize: 14,
    //             fontFamily: "Plus Jakarta Sans",
    //             fontWeight: "600",
    //             letterSpacing: 0.1,
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           Add to Cart
    //         </div>
    //       </div>
    //       <div
    //         className="ButtonBase"
    //         style={{
    //           width: 127,
    //           height: 48,
    //           paddingLeft: 24,
    //           paddingRight: 24,
    //           paddingTop: 12,
    //           paddingBottom: 12,
    //           left: 561,
    //           top: 194,
    //           position: "absolute",
    //           background: "#542686",
    //           boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //           borderRadius: 8,
    //           overflow: "hidden",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Text"
    //           style={{
    //             color: "#F3F3F3",
    //             fontSize: 14,
    //             fontFamily: "Plus Jakarta Sans",
    //             fontWeight: "600",
    //             letterSpacing: 0.1,
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           Add to Cart
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className="Group1000001204"
    //       style={{
    //         width: 712,
    //         height: 266,
    //         left: 854,
    //         top: 872,
    //         position: "absolute",
    //       }}
    //     >
    //       <div
    //         className="Rectangle21785"
    //         style={{
    //           width: 712,
    //           height: 266,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           background: "white",
    //           boxShadow: "0px 4px 38px rgba(0, 0, 0, 0.06)",
    //           borderRadius: 12,
    //         }}
    //       />
    //       <img
    //         className="Rectangle21788"
    //         style={{
    //           width: 248,
    //           height: 266,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           borderTopLeftRadius: 12,
    //           borderTopRightRadius: 12,
    //         }}
    //         src="https://via.placeholder.com/248x266"
    //       />
    //       <div
    //         className="Product1"
    //         style={{
    //           width: 429,
    //           left: 272,
    //           top: 24,
    //           position: "absolute",
    //           color: "#3D3D3D",
    //           fontSize: 20,
    //           fontFamily: "Plus Jakarta Sans",
    //           fontWeight: "700",
    //           letterSpacing: 0.1,
    //           wordWrap: "break-word",
    //         }}
    //       >
    //         Product 1
    //       </div>
    //       <div
    //         className="Line2"
    //         style={{
    //           width: 416,
    //           height: 0,
    //           left: 272,
    //           top: 174,
    //           position: "absolute",
    //           border: "1px #B6B6B6 solid",
    //         }}
    //       ></div>
    //       <div
    //         className="Frame18"
    //         style={{
    //           width: 416,
    //           height: 61,
    //           left: 272,
    //           top: 94,
    //           position: "absolute",
    //           justifyContent: "flex-start",
    //           alignItems: "center",
    //           gap: 68,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Group14"
    //           style={{ width: 84, height: 60.75, position: "relative" }}
    //         >
    //           <div
    //             className="Group11"
    //             style={{
    //               width: 40,
    //               height: 20.25,
    //               left: 0,
    //               top: 40.5,
    //               position: "absolute",
    //             }}
    //           >
    //             <div
    //               className="VuesaxLinearHome"
    //               style={{
    //                 width: 20,
    //                 height: 20,
    //                 left: 0,
    //                 top: 0,
    //                 position: "absolute",
    //               }}
    //             />
    //             <div
    //               className="Xxx"
    //               style={{
    //                 left: 10,
    //                 top: 0.25,
    //                 position: "absolute",
    //                 color: "#7A7A7A",
    //                 fontSize: 16,
    //                 fontFamily: "Plus Jakarta Sans",
    //                 fontWeight: "500",
    //                 letterSpacing: 0.1,
    //                 wordWrap: "break-word",
    //               }}
    //             >
    //               XXX
    //             </div>
    //           </div>
    //           <div
    //             className="Category"
    //             style={{
    //               left: 10,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Category
    //           </div>
    //         </div>
    //         <div
    //           className="Group16"
    //           style={{ width: 104, height: 61, position: "relative" }}
    //         >
    //           <div
    //             className="Xxx"
    //             style={{
    //               width: 85,
    //               left: 0,
    //               top: 41,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             XXX
    //           </div>
    //           <div
    //             className="Description"
    //             style={{
    //               width: 104,
    //               left: 0,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Description
    //           </div>
    //         </div>
    //         <div
    //           className="Group16"
    //           style={{ width: 85, height: 61, position: "relative" }}
    //         >
    //           <div
    //             style={{
    //               width: 85,
    //               left: 0,
    //               top: 41,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             777
    //           </div>
    //           <div
    //             className="Price"
    //             style={{
    //               width: 51,
    //               left: 0,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Price
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         className="ButtonBase"
    //         style={{
    //           width: 127,
    //           height: 48,
    //           paddingLeft: 24,
    //           paddingRight: 24,
    //           paddingTop: 12,
    //           paddingBottom: 12,
    //           left: 561,
    //           top: 194,
    //           position: "absolute",
    //           background: "#542686",
    //           boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //           borderRadius: 8,
    //           overflow: "hidden",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Text"
    //           style={{
    //             color: "#F3F3F3",
    //             fontSize: 14,
    //             fontFamily: "Plus Jakarta Sans",
    //             fontWeight: "600",
    //             letterSpacing: 0.1,
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           Add to Cart
    //         </div>
    //       </div>
    //       <div
    //         className="ButtonBase"
    //         style={{
    //           width: 127,
    //           height: 48,
    //           paddingLeft: 24,
    //           paddingRight: 24,
    //           paddingTop: 12,
    //           paddingBottom: 12,
    //           left: 561,
    //           top: 194,
    //           position: "absolute",
    //           background: "#542686",
    //           boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //           borderRadius: 8,
    //           overflow: "hidden",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Text"
    //           style={{
    //             color: "#F3F3F3",
    //             fontSize: 14,
    //             fontFamily: "Plus Jakarta Sans",
    //             fontWeight: "600",
    //             letterSpacing: 0.1,
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           Add to Cart
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className="Group1000001201"
    //       style={{
    //         width: 712,
    //         height: 266,
    //         left: 854,
    //         top: 0,
    //         position: "absolute",
    //       }}
    //     >
    //       <div
    //         className="Rectangle21785"
    //         style={{
    //           width: 712,
    //           height: 266,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           background: "white",
    //           boxShadow: "0px 4px 38px rgba(0, 0, 0, 0.06)",
    //           borderRadius: 12,
    //         }}
    //       />
    //       <img
    //         className="Rectangle21788"
    //         style={{
    //           width: 248,
    //           height: 266,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           borderTopLeftRadius: 12,
    //           borderTopRightRadius: 12,
    //         }}
    //         src="https://via.placeholder.com/248x266"
    //       />
    //       <div
    //         className="Product1"
    //         style={{
    //           width: 429,
    //           left: 272,
    //           top: 24,
    //           position: "absolute",
    //           color: "#3D3D3D",
    //           fontSize: 20,
    //           fontFamily: "Plus Jakarta Sans",
    //           fontWeight: "700",
    //           letterSpacing: 0.1,
    //           wordWrap: "break-word",
    //         }}
    //       >
    //         Product 1
    //       </div>
    //       <div
    //         className="Line2"
    //         style={{
    //           width: 416,
    //           height: 0,
    //           left: 272,
    //           top: 174,
    //           position: "absolute",
    //           border: "1px #B6B6B6 solid",
    //         }}
    //       ></div>
    //       <div
    //         className="Frame18"
    //         style={{
    //           width: 416,
    //           height: 61,
    //           left: 272,
    //           top: 94,
    //           position: "absolute",
    //           justifyContent: "flex-start",
    //           alignItems: "center",
    //           gap: 68,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Group14"
    //           style={{ width: 84, height: 60.75, position: "relative" }}
    //         >
    //           <div
    //             className="Group11"
    //             style={{
    //               width: 50,
    //               height: 20.25,
    //               left: 0,
    //               top: 40.5,
    //               position: "absolute",
    //             }}
    //           >
    //             <div
    //               className="VuesaxLinearHome"
    //               style={{
    //                 width: 20,
    //                 height: 20,
    //                 left: 0,
    //                 top: 0,
    //                 position: "absolute",
    //               }}
    //             />
    //             <div
    //               className="Xxxx"
    //               style={{
    //                 left: 10,
    //                 top: 0.25,
    //                 position: "absolute",
    //                 color: "#7A7A7A",
    //                 fontSize: 16,
    //                 fontFamily: "Plus Jakarta Sans",
    //                 fontWeight: "500",
    //                 letterSpacing: 0.1,
    //                 wordWrap: "break-word",
    //               }}
    //             >
    //               XXXX
    //             </div>
    //           </div>
    //           <div
    //             className="Category"
    //             style={{
    //               left: 10,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Category
    //           </div>
    //         </div>
    //         <div
    //           className="Group16"
    //           style={{ width: 104, height: 61, position: "relative" }}
    //         >
    //           <div
    //             className="Xxxx"
    //             style={{
    //               width: 85,
    //               left: 0,
    //               top: 41,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             XXXX
    //           </div>
    //           <div
    //             className="Description"
    //             style={{
    //               width: 104,
    //               left: 0,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Description
    //           </div>
    //         </div>
    //         <div
    //           className="Group16"
    //           style={{ width: 85, height: 61, position: "relative" }}
    //         >
    //           <div
    //             style={{
    //               width: 85,
    //               left: 0,
    //               top: 41,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             777
    //           </div>
    //           <div
    //             className="Price"
    //             style={{
    //               width: 51,
    //               left: 0,
    //               top: 0,
    //               position: "absolute",
    //               color: "#7A7A7A",
    //               fontSize: 16,
    //               fontFamily: "Plus Jakarta Sans",
    //               fontWeight: "500",
    //               letterSpacing: 0.1,
    //               wordWrap: "break-word",
    //             }}
    //           >
    //             Price
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         className="ButtonBase"
    //         style={{
    //           width: 127,
    //           height: 48,
    //           paddingLeft: 24,
    //           paddingRight: 24,
    //           paddingTop: 12,
    //           paddingBottom: 12,
    //           left: 561,
    //           top: 194,
    //           position: "absolute",
    //           background: "#542686",
    //           boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //           borderRadius: 8,
    //           overflow: "hidden",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Text"
    //           style={{
    //             color: "#F3F3F3",
    //             fontSize: 14,
    //             fontFamily: "Plus Jakarta Sans",
    //             fontWeight: "600",
    //             letterSpacing: 0.1,
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           Add to Cart
    //         </div>
    //       </div>
    //       <div
    //         className="ButtonBase"
    //         style={{
    //           width: 127,
    //           height: 48,
    //           paddingLeft: 24,
    //           paddingRight: 24,
    //           paddingTop: 12,
    //           paddingBottom: 12,
    //           left: 561,
    //           top: 194,
    //           position: "absolute",
    //           background: "#542686",
    //           boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //           borderRadius: 8,
    //           overflow: "hidden",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Text"
    //           style={{
    //             color: "#F3F3F3",
    //             fontSize: 14,
    //             fontFamily: "Plus Jakarta Sans",
    //             fontWeight: "600",
    //             letterSpacing: 0.1,
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           Add to Cart
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className="Group1000001193"
    //       style={{
    //         width: 0,
    //         height: 1075,
    //         left: 1686,
    //         top: 2,
    //         position: "absolute",
    //       }}
    //     >
    //       <div
    //         className="Line11"
    //         style={{
    //           width: 1075,
    //           height: 0,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           transform: "rotate(89.95deg)",
    //           transformOrigin: "0 0",
    //           boxShadow: "0px 4px 17px rgba(0, 0, 0, 0.08)",
    //           border: "9px white solid",
    //         }}
    //       ></div>
    //       <div
    //         className="Line12"
    //         style={{
    //           width: 636.71,
    //           height: 0,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           transform: "rotate(89.95deg)",
    //           transformOrigin: "0 0",
    //           border: "9px #E6E6E6 solid",
    //         }}
    //       ></div>
    //     </div>
    //     <div
    //       className="Pagination"
    //       style={{
    //         width: 1720,
    //         paddingTop: 12,
    //         paddingBottom: 12,
    //         left: 0,
    //         top: 1179,
    //         position: "absolute",
    //         justifyContent: "space-between",
    //         alignItems: "center",
    //         display: "inline-flex",
    //       }}
    //     >
    //       <div
    //         className="ButtonBase"
    //         style={{
    //           padding: 16,
    //           background: "white",
    //           boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //           borderRadius: 8,
    //           overflow: "hidden",
    //           border: "1px #EAECF0 solid",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "flex",
    //         }}
    //       >
    //         <div
    //           className="ArrowLeft"
    //           style={{
    //             width: 20,
    //             height: 20,
    //             padding: 4.17,
    //             justifyContent: "center",
    //             alignItems: "center",
    //             display: "flex",
    //           }}
    //         >
    //           <div
    //             className="Icon"
    //             style={{
    //               width: 11.67,
    //               height: 11.67,
    //               border: "1.67px #3D3D3D solid",
    //             }}
    //           ></div>
    //         </div>
    //         <div
    //           className="Text"
    //           style={{
    //             color: "#3D3D3D",
    //             fontSize: 15,
    //             fontFamily: "Inter",
    //             fontWeight: "500",
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           Previous
    //         </div>
    //       </div>
    //       <div
    //         className="PaginationNumbers"
    //         style={{
    //           justifyContent: "flex-start",
    //           alignItems: "flex-start",
    //           gap: 2,
    //           display: "flex",
    //         }}
    //       >
    //         <div
    //           className="PaginationNumberBase"
    //           style={{
    //             width: 40,
    //             height: 40,
    //             background: "#EDE1FB",
    //             borderRadius: 8,
    //             overflow: "hidden",
    //             justifyContent: "center",
    //             alignItems: "center",
    //             display: "flex",
    //           }}
    //         >
    //           <div
    //             className="Content"
    //             style={{
    //               width: 40,
    //               alignSelf: "stretch",
    //               padding: 12,
    //               borderRadius: 8,
    //               justifyContent: "center",
    //               alignItems: "center",
    //               display: "inline-flex",
    //             }}
    //           >
    //             <div
    //               className="Number"
    //               style={{
    //                 color: "#542686",
    //                 fontSize: 15,
    //                 fontFamily: "Inter",
    //                 fontWeight: "500",
    //                 lineHeight: 20,
    //                 wordWrap: "break-word",
    //               }}
    //             >
    //               1
    //             </div>
    //           </div>
    //         </div>
    //         <div
    //           className="PaginationNumberBase"
    //           style={{
    //             width: 40,
    //             height: 40,
    //             borderRadius: 8,
    //             overflow: "hidden",
    //             justifyContent: "center",
    //             alignItems: "center",
    //             display: "flex",
    //           }}
    //         >
    //           <div
    //             className="Content"
    //             style={{
    //               width: 40,
    //               alignSelf: "stretch",
    //               padding: 12,
    //               borderRadius: 8,
    //               justifyContent: "center",
    //               alignItems: "center",
    //               display: "inline-flex",
    //             }}
    //           >
    //             <div
    //               className="Number"
    //               style={{
    //                 color: "#667085",
    //                 fontSize: 15,
    //                 fontFamily: "Inter",
    //                 fontWeight: "500",
    //                 lineHeight: 20,
    //                 wordWrap: "break-word",
    //               }}
    //             >
    //               2
    //             </div>
    //           </div>
    //         </div>
    //         <div
    //           className="PaginationNumberBase"
    //           style={{
    //             width: 40,
    //             height: 40,
    //             borderRadius: 8,
    //             overflow: "hidden",
    //             justifyContent: "center",
    //             alignItems: "center",
    //             display: "flex",
    //           }}
    //         >
    //           <div
    //             className="Content"
    //             style={{
    //               width: 40,
    //               alignSelf: "stretch",
    //               padding: 12,
    //               borderRadius: 8,
    //               justifyContent: "center",
    //               alignItems: "center",
    //               display: "inline-flex",
    //             }}
    //           >
    //             <div
    //               className="Number"
    //               style={{
    //                 color: "#667085",
    //                 fontSize: 15,
    //                 fontFamily: "Inter",
    //                 fontWeight: "500",
    //                 lineHeight: 20,
    //                 wordWrap: "break-word",
    //               }}
    //             >
    //               3
    //             </div>
    //           </div>
    //         </div>
    //         <div
    //           className="PaginationNumberBase"
    //           style={{
    //             width: 40,
    //             height: 40,
    //             borderRadius: 8,
    //             overflow: "hidden",
    //             justifyContent: "center",
    //             alignItems: "center",
    //             display: "flex",
    //           }}
    //         >
    //           <div
    //             className="Content"
    //             style={{
    //               width: 40,
    //               alignSelf: "stretch",
    //               padding: 12,
    //               borderRadius: 8,
    //               justifyContent: "center",
    //               alignItems: "center",
    //               display: "inline-flex",
    //             }}
    //           >
    //             <div
    //               className="Number"
    //               style={{
    //                 color: "#667085",
    //                 fontSize: 14,
    //                 fontFamily: "Inter",
    //                 fontWeight: "500",
    //                 lineHeight: 20,
    //                 wordWrap: "break-word",
    //               }}
    //             >
    //               ...
    //             </div>
    //           </div>
    //         </div>
    //         <div
    //           className="PaginationNumberBase"
    //           style={{
    //             width: 40,
    //             height: 40,
    //             borderRadius: 8,
    //             overflow: "hidden",
    //             justifyContent: "center",
    //             alignItems: "center",
    //             display: "flex",
    //           }}
    //         >
    //           <div
    //             className="Content"
    //             style={{
    //               width: 40,
    //               alignSelf: "stretch",
    //               padding: 12,
    //               borderRadius: 8,
    //               justifyContent: "center",
    //               alignItems: "center",
    //               display: "inline-flex",
    //             }}
    //           >
    //             <div
    //               className="Number"
    //               style={{
    //                 color: "#667085",
    //                 fontSize: 15,
    //                 fontFamily: "Inter",
    //                 fontWeight: "500",
    //                 lineHeight: 20,
    //                 wordWrap: "break-word",
    //               }}
    //             >
    //               8
    //             </div>
    //           </div>
    //         </div>
    //         <div
    //           className="PaginationNumberBase"
    //           style={{
    //             width: 40,
    //             height: 40,
    //             borderRadius: 8,
    //             overflow: "hidden",
    //             justifyContent: "center",
    //             alignItems: "center",
    //             display: "flex",
    //           }}
    //         >
    //           <div
    //             className="Content"
    //             style={{
    //               width: 40,
    //               alignSelf: "stretch",
    //               padding: 12,
    //               borderRadius: 8,
    //               justifyContent: "center",
    //               alignItems: "center",
    //               display: "inline-flex",
    //             }}
    //           >
    //             <div
    //               className="Number"
    //               style={{
    //                 color: "#667085",
    //                 fontSize: 15,
    //                 fontFamily: "Inter",
    //                 fontWeight: "500",
    //                 lineHeight: 20,
    //                 wordWrap: "break-word",
    //               }}
    //             >
    //               9
    //             </div>
    //           </div>
    //         </div>
    //         <div
    //           className="PaginationNumberBase"
    //           style={{
    //             width: 40,
    //             height: 40,
    //             borderRadius: 8,
    //             overflow: "hidden",
    //             justifyContent: "center",
    //             alignItems: "center",
    //             display: "flex",
    //           }}
    //         >
    //           <div
    //             className="Content"
    //             style={{
    //               width: 40,
    //               alignSelf: "stretch",
    //               padding: 12,
    //               borderRadius: 8,
    //               justifyContent: "center",
    //               alignItems: "center",
    //               display: "inline-flex",
    //             }}
    //           >
    //             <div
    //               className="Number"
    //               style={{
    //                 color: "#667085",
    //                 fontSize: 15,
    //                 fontFamily: "Inter",
    //                 fontWeight: "500",
    //                 lineHeight: 20,
    //                 wordWrap: "break-word",
    //               }}
    //             >
    //               10
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         className="ButtonBase"
    //         style={{
    //           height: 52,
    //           padding: 16,
    //           background: "white",
    //           boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //           borderRadius: 8,
    //           overflow: "hidden",
    //           border: "1px #EAECF0 solid",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "flex",
    //         }}
    //       >
    //         <div
    //           className="Text"
    //           style={{
    //             color: "#3D3D3D",
    //             fontSize: 15,
    //             fontFamily: "Inter",
    //             fontWeight: "500",
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           Next
    //         </div>
    //         <div
    //           className="ArrowRight"
    //           style={{
    //             width: 20,
    //             height: 20,
    //             padding: 4.17,
    //             justifyContent: "center",
    //             alignItems: "center",
    //             display: "flex",
    //           }}
    //         >
    //           <div
    //             className="Icon"
    //             style={{
    //               width: 11.67,
    //               height: 11.67,
    //               border: "1.67px #3D3D3D solid",
    //             }}
    //           ></div>
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className="Frame271"
    //       style={{
    //         width: 109.46,
    //         height: 3.69,
    //         left: 923,
    //         top: 538,
    //         position: "absolute",
    //         justifyContent: "flex-start",
    //         alignItems: "center",
    //         gap: 16,
    //         display: "inline-flex",
    //       }}
    //     >
    //       <div
    //         className="Ellipse2"
    //         style={{
    //           width: 16,
    //           height: 16,
    //           background: "#3D3D3D",
    //           borderRadius: 9999,
    //         }}
    //       />
    //       <div
    //         className="Ellipse3"
    //         style={{
    //           width: 12,
    //           height: 12,
    //           background: "#B6B6B6",
    //           borderRadius: 9999,
    //         }}
    //       />
    //       <div
    //         className="Ellipse4"
    //         style={{
    //           width: 12,
    //           height: 12,
    //           background: "#B6B6B6",
    //           borderRadius: 9999,
    //         }}
    //       />
    //       <div
    //         className="Ellipse5"
    //         style={{
    //           width: 12,
    //           height: 12,
    //           background: "#B6B6B6",
    //           borderRadius: 9999,
    //         }}
    //       />
    //     </div>
    //     <div
    //       className="Frame272"
    //       style={{
    //         width: 109.46,
    //         height: 3.69,
    //         left: 923,
    //         top: 825,
    //         position: "absolute",
    //         justifyContent: "flex-start",
    //         alignItems: "center",
    //         gap: 16,
    //         display: "inline-flex",
    //       }}
    //     >
    //       <div
    //         className="Ellipse2"
    //         style={{
    //           width: 16,
    //           height: 16,
    //           background: "#3D3D3D",
    //           borderRadius: 9999,
    //         }}
    //       />
    //       <div
    //         className="Ellipse3"
    //         style={{
    //           width: 12,
    //           height: 12,
    //           background: "#B6B6B6",
    //           borderRadius: 9999,
    //         }}
    //       />
    //       <div
    //         className="Ellipse4"
    //         style={{
    //           width: 12,
    //           height: 12,
    //           background: "#B6B6B6",
    //           borderRadius: 9999,
    //         }}
    //       />
    //       <div
    //         className="Ellipse5"
    //         style={{
    //           width: 12,
    //           height: 12,
    //           background: "#B6B6B6",
    //           borderRadius: 9999,
    //         }}
    //       />
    //     </div>
    //     <div
    //       className="Frame273"
    //       style={{
    //         width: 109.46,
    //         height: 3.69,
    //         left: 923,
    //         top: 1114,
    //         position: "absolute",
    //         justifyContent: "flex-start",
    //         alignItems: "center",
    //         gap: 16,
    //         display: "inline-flex",
    //       }}
    //     >
    //       <div
    //         className="Ellipse2"
    //         style={{
    //           width: 16,
    //           height: 16,
    //           background: "#3D3D3D",
    //           borderRadius: 9999,
    //         }}
    //       />
    //       <div
    //         className="Ellipse3"
    //         style={{
    //           width: 12,
    //           height: 12,
    //           background: "#B6B6B6",
    //           borderRadius: 9999,
    //         }}
    //       />
    //       <div
    //         className="Ellipse4"
    //         style={{
    //           width: 12,
    //           height: 12,
    //           background: "#B6B6B6",
    //           borderRadius: 9999,
    //         }}
    //       />
    //       <div
    //         className="Ellipse5"
    //         style={{
    //           width: 12,
    //           height: 12,
    //           background: "#B6B6B6",
    //           borderRadius: 9999,
    //         }}
    //       />
    //     </div>
    //     <div
    //       className="Frame274"
    //       style={{
    //         width: 109.46,
    //         height: 3.69,
    //         left: 66,
    //         top: 242,
    //         position: "absolute",
    //         justifyContent: "flex-start",
    //         alignItems: "center",
    //         gap: 16,
    //         display: "inline-flex",
    //       }}
    //     >
    //       <div
    //         className="Ellipse2"
    //         style={{
    //           width: 16,
    //           height: 16,
    //           background: "#3D3D3D",
    //           borderRadius: 9999,
    //         }}
    //       />
    //       <div
    //         className="Ellipse3"
    //         style={{
    //           width: 12,
    //           height: 12,
    //           background: "#B6B6B6",
    //           borderRadius: 9999,
    //         }}
    //       />
    //       <div
    //         className="Ellipse4"
    //         style={{
    //           width: 12,
    //           height: 12,
    //           background: "#B6B6B6",
    //           borderRadius: 9999,
    //         }}
    //       />
    //       <div
    //         className="Ellipse5"
    //         style={{
    //           width: 12,
    //           height: 12,
    //           background: "#B6B6B6",
    //           borderRadius: 9999,
    //         }}
    //       />
    //     </div>
    //     <div
    //       className="Frame275"
    //       style={{
    //         width: 109.46,
    //         height: 3.69,
    //         left: 69,
    //         top: 536,
    //         position: "absolute",
    //         justifyContent: "flex-start",
    //         alignItems: "center",
    //         gap: 16,
    //         display: "inline-flex",
    //       }}
    //     >
    //       <div
    //         className="Ellipse2"
    //         style={{
    //           width: 16,
    //           height: 16,
    //           background: "#3D3D3D",
    //           borderRadius: 9999,
    //         }}
    //       />
    //       <div
    //         className="Ellipse3"
    //         style={{
    //           width: 12,
    //           height: 12,
    //           background: "#B6B6B6",
    //           borderRadius: 9999,
    //         }}
    //       />
    //       <div
    //         className="Ellipse4"
    //         style={{
    //           width: 12,
    //           height: 12,
    //           background: "#B6B6B6",
    //           borderRadius: 9999,
    //         }}
    //       />
    //       <div
    //         className="Ellipse5"
    //         style={{
    //           width: 12,
    //           height: 12,
    //           background: "#B6B6B6",
    //           borderRadius: 9999,
    //         }}
    //       />
    //     </div>
    //     <div
    //       className="Frame276"
    //       style={{
    //         width: 109.46,
    //         height: 3.69,
    //         left: 74,
    //         top: 827,
    //         position: "absolute",
    //         justifyContent: "flex-start",
    //         alignItems: "center",
    //         gap: 16,
    //         display: "inline-flex",
    //       }}
    //     >
    //       <div
    //         className="Ellipse2"
    //         style={{
    //           width: 16,
    //           height: 16,
    //           background: "#3D3D3D",
    //           borderRadius: 9999,
    //         }}
    //       />
    //       <div
    //         className="Ellipse3"
    //         style={{
    //           width: 12,
    //           height: 12,
    //           background: "#B6B6B6",
    //           borderRadius: 9999,
    //         }}
    //       />
    //       <div
    //         className="Ellipse4"
    //         style={{
    //           width: 12,
    //           height: 12,
    //           background: "#B6B6B6",
    //           borderRadius: 9999,
    //         }}
    //       />
    //       <div
    //         className="Ellipse5"
    //         style={{
    //           width: 12,
    //           height: 12,
    //           background: "#B6B6B6",
    //           borderRadius: 9999,
    //         }}
    //       />
    //     </div>
    //     <div
    //       className="Frame277"
    //       style={{
    //         width: 109.46,
    //         height: 3.69,
    //         left: 74,
    //         top: 1116,
    //         position: "absolute",
    //         justifyContent: "flex-start",
    //         alignItems: "center",
    //         gap: 16,
    //         display: "inline-flex",
    //       }}
    //     >
    //       <div
    //         className="Ellipse2"
    //         style={{
    //           width: 16,
    //           height: 16,
    //           background: "#3D3D3D",
    //           borderRadius: 9999,
    //         }}
    //       />
    //       <div
    //         className="Ellipse3"
    //         style={{
    //           width: 12,
    //           height: 12,
    //           background: "#B6B6B6",
    //           borderRadius: 9999,
    //         }}
    //       />
    //       <div
    //         className="Ellipse4"
    //         style={{
    //           width: 12,
    //           height: 12,
    //           background: "#B6B6B6",
    //           borderRadius: 9999,
    //         }}
    //       />
    //       <div
    //         className="Ellipse5"
    //         style={{
    //           width: 12,
    //           height: 12,
    //           background: "#B6B6B6",
    //           borderRadius: 9999,
    //         }}
    //       />
    //     </div>
    //   </div>
    //   <div
    //     className="ProductSearch"
    //     style={{
    //       left: 109,
    //       top: 360,
    //       position: "absolute",
    //       textAlign: "center",
    //       color: "#542686",
    //       fontSize: 64,
    //       fontFamily: "Plus Jakarta Sans",
    //       fontWeight: "700",
    //       letterSpacing: 0.1,
    //       wordWrap: "break-word",
    //     }}
    //   >
    //     Product Search
    //   </div>
    //   <div
    //     className="Frame33"
    //     style={{
    //       width: 109.46,
    //       height: 3.69,
    //       left: 1032,
    //       top: 722,
    //       position: "absolute",
    //       justifyContent: "flex-start",
    //       alignItems: "center",
    //       gap: 16,
    //       display: "inline-flex",
    //     }}
    //   >
    //     <div
    //       className="Ellipse2"
    //       style={{
    //         width: 16,
    //         height: 16,
    //         background: "#3D3D3D",
    //         borderRadius: 9999,
    //       }}
    //     />
    //     <div
    //       className="Ellipse3"
    //       style={{
    //         width: 12,
    //         height: 12,
    //         background: "#B6B6B6",
    //         borderRadius: 9999,
    //       }}
    //     />
    //     <div
    //       className="Ellipse4"
    //       style={{
    //         width: 12,
    //         height: 12,
    //         background: "#B6B6B6",
    //         borderRadius: 9999,
    //       }}
    //     />
    //     <div
    //       className="Ellipse5"
    //       style={{
    //         width: 12,
    //         height: 12,
    //         background: "#B6B6B6",
    //         borderRadius: 9999,
    //       }}
    //     />
    //   </div>
    //   <div
    //     className="Group1000001575"
    //     style={{
    //       width: 1920,
    //       height: 95,
    //       left: 0,
    //       top: 0,
    //       position: "absolute",
    //     }}
    //   >
    //     <div
    //       className="Frame1"
    //       style={{
    //         width: 1920,
    //         height: 95,
    //         left: 0,
    //         top: 0,
    //         position: "absolute",
    //         flexDirection: "column",
    //         justifyContent: "flex-start",
    //         alignItems: "flex-start",
    //         gap: 10,
    //         display: "inline-flex",
    //       }}
    //     >
    //       <div
    //         className="Container"
    //         style={{
    //           width: 1920,
    //           height: 95,
    //           position: "relative",
    //           background: "white",
    //           borderBottom: "2px #F3F3F3 solid",
    //         }}
    //       >
    //         <div
    //           className="Navigation"
    //           style={{
    //             height: 29,
    //             left: 1344,
    //             top: 34,
    //             position: "absolute",
    //             justifyContent: "flex-start",
    //             alignItems: "center",
    //             gap: 12,
    //             display: "inline-flex",
    //           }}
    //         >
    //           <div
    //             className="Button"
    //             style={{
    //               width: 148,
    //               alignSelf: "stretch",
    //               borderRadius: 8,
    //               justifyContent: "center",
    //               alignItems: "center",
    //               display: "flex",
    //             }}
    //           >
    //             <div
    //               className="ButtonBase"
    //               style={{
    //                 width: 148,
    //                 alignSelf: "stretch",
    //                 paddingLeft: 16,
    //                 paddingRight: 16,
    //                 paddingTop: 8,
    //                 paddingBottom: 8,
    //                 boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //                 borderRadius: 8,
    //                 overflow: "hidden",
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //                 gap: 8,
    //                 display: "flex",
    //               }}
    //             >
    //               <div
    //                 className="Text"
    //                 style={{
    //                   color: "#3D3D3D",
    //                   fontSize: 20,
    //                   fontFamily: "Plus Jakarta Sans",
    //                   fontWeight: "500",
    //                   letterSpacing: 0.1,
    //                   wordWrap: "break-word",
    //                 }}
    //               >
    //                 Book A Stay
    //               </div>
    //             </div>
    //           </div>
    //           <div
    //             className="Line1"
    //             style={{
    //               width: 28,
    //               height: 0,
    //               transform: "rotate(90deg)",
    //               transformOrigin: "0 0",
    //               border: "1px black solid",
    //             }}
    //           ></div>
    //           <div
    //             className="Button"
    //             style={{
    //               width: 156,
    //               alignSelf: "stretch",
    //               borderRadius: 8,
    //               justifyContent: "center",
    //               alignItems: "center",
    //               display: "flex",
    //             }}
    //           >
    //             <div
    //               className="ButtonBase"
    //               style={{
    //                 width: 156,
    //                 alignSelf: "stretch",
    //                 paddingLeft: 16,
    //                 paddingRight: 16,
    //                 paddingTop: 8,
    //                 paddingBottom: 8,
    //                 boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //                 borderRadius: 8,
    //                 overflow: "hidden",
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //                 gap: 8,
    //                 display: "flex",
    //               }}
    //             >
    //               <div
    //                 className="Text"
    //                 style={{
    //                   color: "#3D3D3D",
    //                   fontSize: 20,
    //                   fontFamily: "Plus Jakarta Sans",
    //                   fontWeight: "500",
    //                   letterSpacing: 0.1,
    //                   wordWrap: "break-word",
    //                 }}
    //               >
    //                 My Bookings
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div
    //           className="Group2"
    //           style={{ width: 60, left: 1760, top: 33, position: "absolute" }}
    //         >
    //           <div
    //             className="Emoji"
    //             style={{
    //               width: 36,
    //               height: 26,
    //               left: 0,
    //               top: 0,
    //               position: "absolute",
    //             }}
    //           >
    //             <div
    //               className="Vector"
    //               style={{
    //                 width: 27,
    //                 height: 9,
    //                 left: 9,
    //                 top: 0,
    //                 position: "absolute",
    //                 background: "#068241",
    //               }}
    //             ></div>
    //             <div
    //               className="Vector"
    //               style={{
    //                 width: 27,
    //                 height: 8,
    //                 left: 9,
    //                 top: 9,
    //                 position: "absolute",
    //                 background: "white",
    //               }}
    //             ></div>
    //             <div
    //               className="Vector"
    //               style={{
    //                 width: 27,
    //                 height: 9,
    //                 left: 9,
    //                 top: 17,
    //                 position: "absolute",
    //                 background: "#141414",
    //               }}
    //             ></div>
    //             <div
    //               className="Vector"
    //               style={{
    //                 width: 9,
    //                 height: 26,
    //                 left: 0,
    //                 top: 0,
    //                 position: "absolute",
    //                 background: "#EC2028",
    //               }}
    //             ></div>
    //           </div>
    //           <div
    //             className="MaterialSymbolsArrowDropDownRounded"
    //             style={{
    //               width: 24,
    //               height: 24,
    //               paddingLeft: 8,
    //               paddingRight: 9,
    //               left: 36,
    //               top: 1,
    //               position: "absolute",
    //               justifyContent: "center",
    //               alignItems: "center",
    //               display: "inline-flex",
    //             }}
    //           >
    //             <div
    //               className="Vector"
    //               style={{ width: 7, height: 5, background: "black" }}
    //             ></div>
    //           </div>
    //         </div>
    //         <img
    //           className="Image45"
    //           style={{
    //             width: 157,
    //             height: 32,
    //             left: 100,
    //             top: 31,
    //             position: "absolute",
    //           }}
    //           src="https://via.placeholder.com/157x32"
    //         />
    //         <div
    //           className="Frame31990"
    //           style={{
    //             left: 1696,
    //             top: 27,
    //             position: "absolute",
    //             justifyContent: "flex-start",
    //             alignItems: "center",
    //             gap: 24,
    //             display: "inline-flex",
    //           }}
    //         >
    //           <img
    //             className="Ellipse30"
    //             style={{
    //               width: 40,
    //               height: 40,
    //               background: "linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)",
    //               borderRadius: 9999,
    //             }}
    //             src="https://via.placeholder.com/40x40"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className="Group1000001191"
    //       style={{
    //         width: 1920,
    //         height: 95,
    //         left: 0,
    //         top: 0,
    //         position: "absolute",
    //       }}
    //     >
    //       <div
    //         className="Frame1"
    //         style={{
    //           width: 1920,
    //           height: 95,
    //           left: 0,
    //           top: 0,
    //           position: "absolute",
    //           flexDirection: "column",
    //           justifyContent: "flex-start",
    //           alignItems: "flex-start",
    //           gap: 10,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Container"
    //           style={{
    //             width: 1920,
    //             height: 95,
    //             position: "relative",
    //             background: "white",
    //             borderBottom: "2px #F3F3F3 solid",
    //           }}
    //         >
    //           <div
    //             className="Navigation"
    //             style={{
    //               height: 29,
    //               left: 743,
    //               top: 32,
    //               position: "absolute",
    //               justifyContent: "flex-start",
    //               alignItems: "center",
    //               gap: 12,
    //               display: "inline-flex",
    //             }}
    //           >
    //             <div
    //               className="Button"
    //               style={{
    //                 width: 174,
    //                 alignSelf: "stretch",
    //                 borderRadius: 8,
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //                 display: "flex",
    //               }}
    //             >
    //               <div
    //                 className="ButtonBase"
    //                 style={{
    //                   width: 174,
    //                   alignSelf: "stretch",
    //                   paddingLeft: 16,
    //                   paddingRight: 16,
    //                   paddingTop: 8,
    //                   paddingBottom: 8,
    //                   boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //                   borderRadius: 8,
    //                   overflow: "hidden",
    //                   justifyContent: "center",
    //                   alignItems: "center",
    //                   gap: 8,
    //                   display: "flex",
    //                 }}
    //               >
    //                 <div
    //                   className="Text"
    //                   style={{
    //                     color: "#3D3D3D",
    //                     fontSize: 20,
    //                     fontFamily: "Plus Jakarta Sans",
    //                     fontWeight: "500",
    //                     letterSpacing: 0.1,
    //                     wordWrap: "break-word",
    //                   }}
    //                 >
    //                   Our Properties
    //                 </div>
    //               </div>
    //             </div>
    //             <div
    //               className="Button"
    //               style={{
    //                 width: 203,
    //                 alignSelf: "stretch",
    //                 borderRadius: 8,
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //                 display: "flex",
    //               }}
    //             >
    //               <div
    //                 className="ButtonBase"
    //                 style={{
    //                   width: 203,
    //                   alignSelf: "stretch",
    //                   paddingLeft: 16,
    //                   paddingRight: 16,
    //                   paddingTop: 8,
    //                   paddingBottom: 8,
    //                   boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //                   borderRadius: 8,
    //                   overflow: "hidden",
    //                   justifyContent: "center",
    //                   alignItems: "center",
    //                   gap: 8,
    //                   display: "flex",
    //                 }}
    //               >
    //                 <div
    //                   className="Text"
    //                   style={{
    //                     color: "#3D3D3D",
    //                     fontSize: 20,
    //                     fontFamily: "Plus Jakarta Sans",
    //                     fontWeight: "500",
    //                     letterSpacing: 0.1,
    //                     wordWrap: "break-word",
    //                   }}
    //                 >
    //                   Properties Owner
    //                 </div>
    //               </div>
    //             </div>
    //             <div
    //               className="Button"
    //               style={{
    //                 width: 228,
    //                 alignSelf: "stretch",
    //                 borderRadius: 8,
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //                 display: "flex",
    //               }}
    //             >
    //               <div
    //                 className="ButtonBase"
    //                 style={{
    //                   width: 228,
    //                   alignSelf: "stretch",
    //                   paddingLeft: 16,
    //                   paddingRight: 16,
    //                   paddingTop: 8,
    //                   paddingBottom: 8,
    //                   boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //                   borderRadius: 8,
    //                   overflow: "hidden",
    //                   justifyContent: "center",
    //                   alignItems: "center",
    //                   gap: 8,
    //                   display: "flex",
    //                 }}
    //               >
    //                 <div
    //                   className="Text"
    //                   style={{
    //                     color: "#3D3D3D",
    //                     fontSize: 20,
    //                     fontFamily: "Plus Jakarta Sans",
    //                     fontWeight: "500",
    //                     letterSpacing: 0.1,
    //                     wordWrap: "break-word",
    //                   }}
    //                 >
    //                   Corporate & Groups
    //                 </div>
    //               </div>
    //             </div>
    //             <div
    //               className="Button"
    //               style={{
    //                 width: 192,
    //                 alignSelf: "stretch",
    //                 borderRadius: 8,
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //                 display: "flex",
    //               }}
    //             >
    //               <div
    //                 className="ButtonBase"
    //                 style={{
    //                   width: 192,
    //                   alignSelf: "stretch",
    //                   paddingLeft: 16,
    //                   paddingRight: 16,
    //                   paddingTop: 8,
    //                   paddingBottom: 8,
    //                   boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //                   borderRadius: 8,
    //                   overflow: "hidden",
    //                   justifyContent: "center",
    //                   alignItems: "center",
    //                   gap: 8,
    //                   display: "flex",
    //                 }}
    //               >
    //                 <div
    //                   className="Text"
    //                   style={{
    //                     color: "#542686",
    //                     fontSize: 20,
    //                     fontFamily: "Plus Jakarta Sans",
    //                     fontWeight: "600",
    //                     letterSpacing: 0.1,
    //                     wordWrap: "break-word",
    //                   }}
    //                 >
    //                   Corporate Login
    //                 </div>
    //               </div>
    //             </div>
    //             <div
    //               className="Button"
    //               style={{
    //                 width: 136,
    //                 alignSelf: "stretch",
    //                 borderRadius: 8,
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //                 display: "flex",
    //               }}
    //             >
    //               <div
    //                 className="ButtonBase"
    //                 style={{
    //                   width: 136,
    //                   alignSelf: "stretch",
    //                   paddingLeft: 16,
    //                   paddingRight: 16,
    //                   paddingTop: 8,
    //                   paddingBottom: 8,
    //                   boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    //                   borderRadius: 8,
    //                   overflow: "hidden",
    //                   justifyContent: "center",
    //                   alignItems: "center",
    //                   gap: 6,
    //                   display: "flex",
    //                 }}
    //               >
    //                 <div
    //                   className="Text"
    //                   style={{
    //                     color: "#3D3D3D",
    //                     fontSize: 20,
    //                     fontFamily: "Plus Jakarta Sans",
    //                     fontWeight: "500",
    //                     letterSpacing: 0.1,
    //                     wordWrap: "break-word",
    //                   }}
    //                 >
    //                   Explore
    //                 </div>
    //                 <div
    //                   className="MaterialSymbolsArrowDropDownRounded"
    //                   style={{
    //                     width: 24,
    //                     height: 24,
    //                     paddingLeft: 8,
    //                     paddingRight: 9,
    //                     justifyContent: "center",
    //                     alignItems: "center",
    //                     display: "flex",
    //                   }}
    //                 >
    //                   <div
    //                     className="Vector"
    //                     style={{ width: 7, height: 5, background: "black" }}
    //                   ></div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div
    //               className="Line1"
    //               style={{
    //                 width: 28,
    //                 height: 0,
    //                 transform: "rotate(90deg)",
    //                 transformOrigin: "0 0",
    //                 border: "1px black solid",
    //               }}
    //             ></div>
    //           </div>
    //           <div
    //             className="Group2"
    //             style={{ width: 60, left: 1760, top: 33, position: "absolute" }}
    //           >
    //             <div
    //               className="Emoji"
    //               style={{
    //                 width: 36,
    //                 height: 26,
    //                 left: 0,
    //                 top: 0,
    //                 position: "absolute",
    //               }}
    //             >
    //               <div
    //                 className="Vector"
    //                 style={{
    //                   width: 27,
    //                   height: 9,
    //                   left: 9,
    //                   top: 0,
    //                   position: "absolute",
    //                   background: "#068241",
    //                 }}
    //               ></div>
    //               <div
    //                 className="Vector"
    //                 style={{
    //                   width: 27,
    //                   height: 8,
    //                   left: 9,
    //                   top: 9,
    //                   position: "absolute",
    //                   background: "white",
    //                 }}
    //               ></div>
    //               <div
    //                 className="Vector"
    //                 style={{
    //                   width: 27,
    //                   height: 9,
    //                   left: 9,
    //                   top: 17,
    //                   position: "absolute",
    //                   background: "black",
    //                 }}
    //               ></div>
    //               <div
    //                 className="Vector"
    //                 style={{
    //                   width: 9,
    //                   height: 26,
    //                   left: 0,
    //                   top: 0,
    //                   position: "absolute",
    //                   background: "#EC2028",
    //                 }}
    //               ></div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
