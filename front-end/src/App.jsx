import Login from './components/login/login.jsx';
import Page from './components/urlPage/page.jsx'
import { Route , Routes , BrowserRouter} from 'react-router-dom'
function App() {
 return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/page" element={<Page />} />
      </Routes>
   </BrowserRouter>
  );
  
}

export default App
