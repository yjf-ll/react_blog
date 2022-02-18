import './navigator.css'
import {Link} from 'react-router-dom'

function Navigator() {
  return (
    <div className={"navigator"}>
      <div className={"navigator_author"}>
        author
      </div>
      <div className={"navigator_links"}>
        <Link className={"navigator_links_item"} to="/home">home</Link>
        <Link className={"navigator_links_item"} to="/notes">notes</Link>
        <Link className={"navigator_links_item"} to="/project">project</Link>
        <Link className={"navigator_links_item"} to="/about">about</Link>
      </div>
    </div>
  )
}

export default Navigator