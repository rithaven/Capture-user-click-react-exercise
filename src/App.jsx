
import './index.css';


function App() {

  const handleClick = () => {
    alert('Clicked!');
  };

  return (
    <div className='p-10  flex flex-col items-center justify-center w-full h-screen'>
          <button className='items-center border p-2 bg-gray-200 font-bold border-black'  onClick={handleClick}>Click me!</button>

    </div>
  );
}

export default App;
