import {Link} from "react-router-dom";

function Unknown() {
  return (
    <div>
      <h2>404</h2>
      <div>未知的错误</div>
      <Link to="/home">回到首页</Link>
    </div>
  )
}

export default Unknown