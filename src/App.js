import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <Header />
      </header>
      <main className='flex-grow'>
        <Main />
      </main>
      <footer className='bg-blue-800 text-white p-4'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
