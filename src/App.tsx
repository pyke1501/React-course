import Component from "./pages/fundamental/Component"
import ConditionalRendering from "./pages/fundamental/ConditionalRendering"
import HandleEvent from "./pages/fundamental/HandleEvent"
import JSX from "./pages/fundamental/JSX"
import ListKey from "./pages/fundamental/ListKey"
import Props from "./pages/fundamental/Props"
import State from "./pages/fundamental/State"
import HaiBoxColor from "./sampleApp/hai/HaiColorBox"
import PropDrillingLiftingStateUp from './pages/fundamental/PropDrillingLiftingStateUp'
import Form from "./pages/fundamental/Form"
import StateHook from "./pages/fundamental/StateHook";
import EffectHook from "./pages/fundamental/EffectHook";
import HoangGenerateBox from "./sampleApp/hoang/HoangGenerateBox"
import Context from "./pages/fundamental/Context"
import RefHook from "./pages/fundamental/RefHook"
import PerformanceHook from "./pages/fundamental/PerformanceHook"
import TrafficLight from "./sampleApp/hoang/HoangTrafficLight";
import HoangJobBoard from "./sampleApp/hoang/jobBoard/hoangJobBoard"
import { Link, NavLink, Route, Routes, useLocation } from "react-router"
import React from "react"
import Profile from "./pages/fundamental/Profile"
import AccountBank from "./components/profile/AccountBank"
import Transaction from "./components/profile/Transaction"
import Membership from "./components/profile/Membership"
import User from "./pages/fundamental/User"
import UserDetail from "./pages/fundamental/UserDetail"
import AuthRoute from "./routes/AuthRoute"
import GuestRoute from "./routes/GuestRoute"
import Bookkeeper from "./sampleApp/hoang/bookkeeper/Bookkeeper"
import Home from "./sampleApp/hoang/bookkeeper/Home"
import Layout from "./sampleApp/hoang/bookkeeper/Layout"
import Contact from "./sampleApp/hoang/bookkeeper/Contact"
import InvoicePage from "./sampleApp/hoang/bookkeeper/InvoicePage"
import InvoiceDetail from "./sampleApp/hoang/bookkeeper/InvoiceDetail"

function App() {
  const location = useLocation();

  React.useEffect(() => {
    // GA
    console.log('location: ', location)
  }, [location])


  return (
    <>
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link 
                  to="/jsx"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                >
                  JSX
                </Link>
              </li>
              <li>
                <Link 
                  to="/props"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                >
                  Props
                </Link>
              </li>
              <li>
                <NavLink 
                  to="/state"
                  replace
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                >
                  State
                </NavLink>
              </li>
              <li>
                <Link 
                  to="/component"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                >
                  Component
                </Link>
              </li>
              <li>
                <Link 
                  to="/profile"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link 
                  to="/user"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                >
                  User
                </Link>
              </li>
              <li>
                <Link 
                  to="/login"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link 
                  to="/bookeeper"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                >
                  Bookeeper
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <Routes>
      <Route path="/jsx" element={<JSX />} />
      <Route path="/props" element={<Props />} />
      <Route path="/state" element={<State />} />
      <Route path="/component" element={<Component />} />
      {/* <Route path="/profile" element={<Profile />} />
      <Route path="/profile/account-bank" element={<AccountBank />} />
      <Route path="/profile/account-transaction" element={<Transaction />} />
      <Route path="/profile/account-member" element={<Membership />} /> */}

      <Route path="/profile" element={<AuthRoute><Profile /></AuthRoute>}>
        <Route index element={<AccountBank />} />
        <Route path="account-bank" element={<AccountBank />} />
        <Route path="account-transaction" element={<Transaction />} />
        <Route path="account-member" element={<Membership />} />
      </Route>
       <Route path="/login" element={<GuestRoute><div>login page</div></GuestRoute>} />

      <Route path="/user" element={<AuthRoute><User /></AuthRoute>} />
      <Route path="/bookeeper">
        <Route index element={<Layout><Home /></Layout>} />
        <Route path="contact" element={<Layout><Contact /></Layout>} />
        <Route path="invoice" element={<Layout><InvoicePage /></Layout>}>
          <Route index element={<div>please select invoice</div>} />
          <Route path=":invoiceId" element={<InvoiceDetail />} />
        </Route>
        <Route path="member/:memberId" element={<Layout>this member</Layout>} />

      </Route>
      <Route path="/user/:id" element={<UserDetail />} />
    </Routes>

    <br /><br />
    <hr />


      <br /><br /><br />
      
      <br />
      <HandleEvent />

      <br />
      <ConditionalRendering />

      <br />
      <ListKey />

      <br />
      <HaiBoxColor />

      <br />
      <PropDrillingLiftingStateUp />

        <div style={{justifyContent: "center"}}>
          <HoangGenerateBox />
        </div>
      <br />
      <Form />

      <br />
      <StateHook />

      <br />
      <EffectHook />

      <br />
      <Context />
      <br />

      <RefHook />

      <br />
      <PerformanceHook />
      <br />
      <br />
      <HoangJobBoard/>

      <br />
      <TrafficLight />

      <br /><br /><br />
      <br /><br /><br />
    </>
  )
}

export default App;


/*
nested path
/bookeeper -> bookeeper
/bookeeper/contact -> contact
/bookeeper/invoice -> invoice
/bookeeper/invoice/:id -> invoice detail

sibling path
/bookeeper -> bookeeper
/contact -> contact
/invoice -> invoice
/invoice/:id -> invoice detail
*/