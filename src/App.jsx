import './App.css'

import { Navbar, Hero, Find, Driver, Luxury, Footer  } from './components'

function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Find />
            <Driver />
            <Luxury />
            <Footer />
        </div>
    )
}

export default App