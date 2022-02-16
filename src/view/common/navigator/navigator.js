import {Link} from 'react-router-dom'

function Navigator() {
  return (
    <div>
      <Link to="/home">home</Link>
      <Link to="/notes">notes</Link>
      <Link to="/project">project</Link>
      <Link to="/about">about</Link>
    </div>
  )
}

export default Navigator