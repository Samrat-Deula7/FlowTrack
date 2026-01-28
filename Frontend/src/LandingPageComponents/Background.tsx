import Clock from "../assets/Click.png"
import List from "../assets/list.png"
import Bar from "../assets/Bar.png"

function Background(){
    return (
      <>
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[radial-gradient(circle_at_center,#ffff,#08CB00,#00140a)]">
          <img
            src={Clock}
            alt="clock"
            className="absolute top-90 right-250 w-60 "
          />
          <img
            src={List}
            alt="list"
            className="absolute top-75 right-180 top-0 right-0 w-60 "
          />
          <img
            src={Bar}
            alt="bar"
            className="absolute top-130 right-220 top-0 right-0 w-60 "
          />
        </div>
      </>
    );
}

export default Background;