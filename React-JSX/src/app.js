const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
// const headerElement = React.createElement('h1',{}, 'Hello world')

const headerElement = (
    <div>
        <header className="header-container">
            <h1 className="heading">Hello from React!</h1>
            <h2>Slogan here</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis consequuntur architecto dolorum sit quidem tenetur doloremque aspernatur reprehenderit ratione sed!</p>
        </header>

        <button>Click</button>
        <button className="btn btn-login">Login</button>
    </div>
);
root.render(headerElement);
