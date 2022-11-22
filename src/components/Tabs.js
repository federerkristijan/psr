// import { useState, useRef, useContext } from "react";
// import { TabsContext } from "./TabsContext";

// const Tabs = (props) => {
//   const tabRef = useRef();
//   // 1st output/base, 2nd input
//   const [tabStatus, setTabStatus] = useState(false);
//   const { showTab, setShowTab } = useContext(TabsContext);

//   // const tabValue = (props) => {
//   //   if (showTab !== "LP") {
//   //     setTabStatus(true);
//   //     tabRef.current.focus();
//   //   }
//   // }

//   return (
//     <div
//     className="Tabs-wrapper"
//     ref={tabRef}
//     style={{ display: "flex", flexDirection: "column" }}
//   >
//     <div
//       className="Tab-list"
//       style={{
//         display: "inherit",
//         gap: "1rem",
//         listStyle: "none",
//       }}
//     >
//       <button
//         className="Tab"
//         onClick={tabRef.current.value === }
//         style={{
//           padding: "3px",
//         }}
//         key={0}
//       >
//         LP
//       </button>
//       <button
//         className="Tab"

//         // onClick={tabRef.current.value === 'digital' ? tabRef.current.focus() :  }
//         style={{
//           padding: "3px",
//         }}
//         key={1}
//       >
//         digital
//       </button>
//     </div>
//     <div className="Tab-panel" style={{ border: "1px solid black" }}>
//       LP
//     </div>
//     <div className="Tab-panel" style={{ border: "1px solid black" }}>
//       List of songs
//     </div>
//   </div>
//   )
// };

// export default Tabs;
