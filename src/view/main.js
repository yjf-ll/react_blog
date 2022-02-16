import {Outlet} from 'react-router-dom'
import Navigator from "./common/navigator/navigator";

function Main() {
  return (
    <div>
      <Navigator/>
      <Outlet/>
    </div>
  )
}

export default Main