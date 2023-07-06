import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
        <Link to={'/'}><button>home</button></Link>
        <Link to={'/about'}><button>about</button></Link>
        <Link to={'/signin'}><button>signin</button></Link>

    </div>
  )
}
