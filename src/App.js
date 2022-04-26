import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Component/Signup/Form';
import Home from './Component/Home/Home';
import Main from './Component/UseReducer/Main';
import Datafetch from './Component/Api/Datafetch';
import Post from './Component/Api/Post';
import Edit from './Component/Api/Edit';
import Homes from './Component/HOC/Homes';
import Abouts from './Component/HOC/Abouts';
import Navbar from './Component/Redux-Ui/Navbar/Navbar';
import EditPage from './Component/Redux-Ui/Products/EditPage';
import Multiedit from './Component/Redux-Ui/Products/Multiedit';
import Multiadd from './Component/Redux-Ui/Products/Multiadd';

const Multiproduct = React.lazy(() => import('./Component/Redux-Ui/Products/Multiproductss'));
const Login = React.lazy(() => import('./Component/Login/Login'));
const Details = React.lazy(() => import('./Component/Redux-Ui/Products/Details'));

const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/Api" element={<Datafetch />} />
            <Route path="/Post" element={<Post />} />
            <Route path="/Edit/:id" element={<Edit />} />
            <Route path="/Homes" element={<Homes />} />
            <Route path="/Abouts" element={<Abouts />} />
            <Route path="/Nav" element={<Navbar />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/EditPage/:id" element={<EditPage />} />
            <Route path="/multi" element={<Multiproduct />} />
            <Route path="/multiedit/:id" element={<Multiedit />} />
            <Route path="/multiadd" element={<Multiadd />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};
export default App;
