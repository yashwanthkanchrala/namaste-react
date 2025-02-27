/*const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "hello world from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)*/

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"i am an h1 tag"),
        React.createElement("h2",{},"i am an h2 tag"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"i am an h1 tag"),
        React.createElement("h2",{},"i am an h2 tag"),
    ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)