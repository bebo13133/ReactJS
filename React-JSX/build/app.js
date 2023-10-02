var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);
// const headerElement = React.createElement('h1',{}, 'Hello world')

var headerElement = React.createElement(
    "div",
    null,
    React.createElement(
        "header",
        { className: "header-container" },
        React.createElement(
            "h1",
            { className: "heading" },
            "Hello from React!"
        ),
        React.createElement(
            "h2",
            null,
            "Slogan here"
        ),
        React.createElement(
            "p",
            null,
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis consequuntur architecto dolorum sit quidem tenetur doloremque aspernatur reprehenderit ratione sed!"
        )
    ),
    React.createElement(
        "button",
        null,
        "Click"
    ),
    React.createElement(
        "button",
        { className: "btn btn-login" },
        "Login"
    )
);
root.render(headerElement);