// Include the Main React Dependencies
	var React = __webpack_require__(/*! react */ 1);
	var ReactDOM = __webpack_require__(/*! react-dom */ 32);
	
	// Include the main Parent Component
	var Main = __webpack_require__(/*! ./components/children/Main.jsx */ 178);
	
	// This code here allows us to render our main component (in this case Main)
	// Note that the Id is "app" which matches that of the "index.html" file
	ReactDOM.render(React.createElement(Main, null), document.getElementById("app"));