import React from "react"
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Blog from "./components/Blog/Blog"
import DinnerIdeas from "./components/DinnerIdeas/DinnerIdeas"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ScrollToTop from "./helpers/ScrollToTop"

export default function App() {
  
  return (
    <Router>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dinner-ideas" element={<DinnerIdeas />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </Router>
  )
}