import './app.css';

function App() {
    const name ='Bol4EP';
    return (
        <>
        <h1>Hello {name} :)</h1>
        {name && <h1>Hello!</h1>}
        {
            ['♥', '★'].map(item => (
            <h1>{item}</h1>
            ))}

        </>
    );
}

export default App;
