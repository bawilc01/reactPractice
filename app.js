const title = <h1>First React Element</h1>;
const desc = <p>I just learn how to create a React node and render it to DOM</p>;

const header = React.createElement(
    'header',
     null,
     title, 
     desc
 );
ReactDOM.render(
    header, document.getElementById("root")
);