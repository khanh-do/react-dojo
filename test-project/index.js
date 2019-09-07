// const helloReact = React.createElement("h1", {style: {color: "red"}, className: "header"}, "Hello React");

// const divReact = React.createElement("div", null,
//     React.createElement("h1", null, "This is an h1 in a React element"),
//     React.createElement("p", null, "This is a p in a React element")
//     );

const myButton = React.createElement('button', null, 'Click Me');
const helloDojo = React.createElement("div", null, 
    React.createElement("h1", null, "Hello Dojo!"),
    React.createElement("p", null, "Things I need to do:"),
    React.createElement("ul", null, 
        React.createElement("li", null, "Learn React"),
        React.createElement("li", null, "Climb Mt. Everest"),
        React.createElement("li", null, "Run a marathon"),
        React.createElement("li", null, "Feed the dogs")
        )
    );

// ReactDOM.render(helloReact, document.getElementById("root"));
// ReactDOM.render(divReact, document.getElementById("root"));
ReactDOM.render(myButton, document.getElementById("root"));
ReactDOM.render(helloDojo, document.getElementById("helloDojo"));