import ReactDom from 'react-dom';
// import React from 'react';

// import FileToFile from './FileToFile';                                               //shortcut is to exclude the .js extension
import HelloProps from './HelloProps';

// const helloReact = React.createElement("h1", null, "Hello React");               //React example
// const helloJSX = <h1>Hello JSX</h1>;                                             //As written in JSX
// const helloJSX = (                                                                  //A div written in JSX
//     <div className="jumbotron">
//         <h1>Hello JSX with a div</h1>
//         <p>React is a JavaScript library for building user interfaces</p>
//     </div>
// );
// const HelloReact = function() {                                                            // ES5 syntax for component
//     return (
//         <div className="jumbotron">
//             <h1>Hello React</h1>
//             <p>This is a React component in ES5</p>
//         </div>
//     );
// }
// const App = () => {                                                            // ES6 syntax for component
//     return (
//         <div>
//             <h1>Hello Dojo</h1>
//             <p>This is a React component using ES6!</p>
//         </div>
//     );
// }
const props = {
    title: "Props",
    description: "Use props to make components flexible"
}
// ReactDom.render(helloReact, document.getElementById("root"));                    //React example
// ReactDom.render(helloJSX, document.getElementById("root"));                         //Render the JSX element
// ReactDom.render(HelloReact(), document.getElementById("root"));
// ReactDom.render(<App />, document.getElementById("root"));                          //JSX equivalent to: ReactDom.render(App(), document.getElementById("root"));
// ReactDom.render(<FileToFile />, document.getElementById("root"));
ReactDom.render(HelloProps(props), document.getElementById("root"));    //equivalent to: ReactDom.render(<HelloProps title="Props" description="Use props to make componets flexible" />, document.getElementById("root"));