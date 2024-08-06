import './App.css'
import IPAdressFinder from './components/IPAdressFinder'
import LanguageTranslator from './components/LanguageTranslator'
import Login from './components/Login'
import MovieSearchEngine from './components/MovieSearchEngine'
import QRCodeGenerator from './components/QRCodeGenerator'
import ProtectedRoute from './components/ProtectedRoute'
import Navigation from './components/Navigaction'
import Home from './components/Home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './components/Authentication'


function App() {

  return (
    <AuthProvider>
      <Router> 
        <Navigation />
        <Routes> 
        {/* Se isLoggedIn=false, em vez de ir pro Home vai pro Login. Se =true, vai pro Home */}
          <Route path='/login' element={<Login />} /> 
          <Route path='/' element={<ProtectedRoute isLoggedIn={false}><Home /></ProtectedRoute>} />
          <Route path='/translator' element={<ProtectedRoute isLoggedIn={false}><LanguageTranslator /></ProtectedRoute>} /> 
          <Route path='/movies' element={<ProtectedRoute isLoggedIn={false}><MovieSearchEngine/></ProtectedRoute>} /> 
          <Route path='/QRCode' element={<ProtectedRoute isLoggedIn={false}><QRCodeGenerator /></ProtectedRoute>} /> 
          <Route path='/IPAdress' element={<ProtectedRoute isLoggedIn={false}><IPAdressFinder /></ProtectedRoute>} /> 
          
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
