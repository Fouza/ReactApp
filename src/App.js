import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Layout from './layout/Layout'
import Area from './pages/Area/Area';
import IpAdress from './pages/IpAdress/IpAdress';
import './scss/shared.scss'

export default function App() {

  const [initial_counter, setInitialCounter] = useState(100)
  const phrase = 'Initial Phrase'
  // /admin/users/employees
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/area" element={<Area />} />
          <Route path="/ip_address" element={<IpAdress />} />
        </Route>

        {/* Create LayoutAdmin, ProductsPage, Employees */}
        {/* <Route path='/admin' element={<LayoutAdmin />} >
          <Route index element={<ProductsPage />} />
          <Route path="employees" element={<Employees />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}



// return (
//   <div className="App">
//     <ShowHideComp init_count={initial_counter} />
//     {/* <Counter init_count={initial_counter} phrase={phrase} /> */}
//     <MyComponent />
//     <Inpt />
//   </div>
// );