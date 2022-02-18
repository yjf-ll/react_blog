import {PureComponent} from "react";

function container(Child) {
  return class extends PureComponent {
    render() {
      return (
        <div className={"content_heart"}>
          <Child />
        </div>
      )
    }
  }
}

export default container