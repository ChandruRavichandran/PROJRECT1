
import './App.css';
import Pages from './Components/Pages/Pages';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <>
  <Pages />
    </>
  );
}

export default App;
