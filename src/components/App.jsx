import PhotoSearcher from './Photosearcher/PhotoSearcher';
import LoginScreen from './Auth/LoginScreen';
import {
  BrowserRouter,
  Route,
  Link,
  // NavLink,
  Routes
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
 
          <Link to="/">Login</Link >
          <Link exact="true" to="photo">PhotoSearch</Link>
       
      </nav>
      <Routes>
        <Route element={<LoginScreen />} path="/">
        <Route element={<PhotoSearcher  />} path="photodetail" />
        </Route> 
        <Route element={<PhotoSearcher  />} path="photo" />


      </Routes>
     {/* <PhotoSearcher /> */}
</BrowserRouter>
  );
};

export default App;
