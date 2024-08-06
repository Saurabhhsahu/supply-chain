import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Inventory from './components/supplier/pages/inventory/Inventory'
import Store from "./components/supplier/pages/store/Store";
import Record from "./components/supplier/pages/record/Record";

export default function App() {
  return (
    <Inventory/>
    // <Router>
    //   <div>
    //     <header>
    //       <SignedOut>
    //         <SignInButton />
    //       </SignedOut>
    //       <SignedIn>
    //         <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-500">
    //           <div className="logo">
    //             logo
    //           </div>

    //           <div className="flex gap-8">
    //             <NavLink to="/inventory">
    //               Inventory
    //             </NavLink>

    //             <NavLink to="/store">
    //               Store
    //             </NavLink>

    //             <NavLink to="/record">
    //               Record
    //             </NavLink>
    //             <UserButton />
    //           </div>
    //         </div>
    //       </SignedIn>
    //     </header>
    //     <main>
    //       <Routes>
    //         <Route path="/inventory" element={<Inventory />} />
    //         <Route path="/store" element={<Store />} />
    //         <Route path="/record" element={<Record />} />
    //       </Routes>
    //     </main>
    //   </div>
    // </Router>
  );
}