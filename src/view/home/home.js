import "./home.css"
import {useEffect} from "react";

function Home() {
  useEffect(() => {
    console.log('home render');
    return () => {
      console.log('home dispose')
    }
  })
  return (
    <div className={"home"}>
      <div className={"content_heart"}>
        <div className={"home_title"}>
          <div>WELCOME TO</div>
          <div>SOUL' BLOG</div>
        </div>
      </div>
    </div>
  )
}

export default Home