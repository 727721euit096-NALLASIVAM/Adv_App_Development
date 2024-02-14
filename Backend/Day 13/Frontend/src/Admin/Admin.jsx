import { useState } from 'react'
// import Header from './Header'
import Sidebar from './Sidebar'
import Adhome from './AdHome'
import '..//admin/Admin.css'
import AdHome from './AdHome'


function  Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='admin-body'>
    <div className='admin-grid-container'>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <AdHome />
      </div>
      </div>
  )
}

export default Admin;