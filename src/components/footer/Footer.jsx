import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className='text-white py-4 ng black'>
        <div className='container'>
          <nav className=''>
            <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justify-content-center'>
            </Link>
            <ul className='col-12 col-md-3 list-unstyled'>
              <li className='font-weight-bold md-2'>Creado por Isaac</li>
              <li className='text-center'>https://github.com/AisaacVM/evamar</li>
            </ul>
            <ul className='col-12 col-md-3 list-unstyled'>
              <li className='font-weight-bold md-2'>Creado por Gustavo</li>
              <li className='text-center'>https://github.com/GustavoAR08/evamar</li>
            </ul>
            <ul>
              <li className='font-weight-bold md-2'>Creado por Julian</li>
              <li className='text-center'>https://github.com/fernandez2006/front2</li>
            </ul>
          </nav>
        </div>

      </footer>

  </div>
  )
}

export default Footer