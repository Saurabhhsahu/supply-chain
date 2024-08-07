import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Inventory from './components/supplier/pages/inventory/Inventory'
import Store from "./components/supplier/pages/store/Store";
import Record from "./components/supplier/pages/record/Record";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function App() {
  return (
    // <Store/>
      <div>
        <header>
          <SignedOut>
            <div className="bg-black h-screen flex justify-center items-center ">
              <Box className="w-[300px] bg-gray-100">
                <div>
                <Button variant="contained" className="rounded-none w-[50%]">Contained</Button>
                <Button variant="contained" className="rounded-none w-[50%]">Contained</Button>
                </div>
                <div className="m-2 text-center">
                  
                    <SignInButton />
                  
                </div>
              </Box>
              </div>
          </SignedOut>
          <SignedIn>
            <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-500">
              <div className="logo">
                logo
              </div>

              <div className="flex gap-8">
                <NavLink to="/" className="hover:underline">
                  Home
                </NavLink>

                <NavLink to="/inventory" className="hover:underline">
                  Inventory
                </NavLink>

                <NavLink to="/store" className="hover:underline">
                  Store
                </NavLink>

                <NavLink to="/record" className="hover:underline">
                  Record
                </NavLink>
                <UserButton />
              </div>
            </div>
          </SignedIn>
        </header>
        <main>
          <Routes>
            <Route path="./" element={<App/>}/>
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/store" element={<Store />} />
            <Route path="/record" element={<Record />} />
          </Routes>
        </main>
      </div>
  );
} 