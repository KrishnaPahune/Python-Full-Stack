export default function App() {
    const isGoingOut = false
   
    return (
        <main>
            <h1 className="title">Are you going to study tonight?</h1>
            <button className="value">{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}
