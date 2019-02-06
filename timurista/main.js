// import { h, render, Component } from "preact";

const { h, render, Component } = preact;

class Clock extends Component {
  constructor() {
    super();
    // set initial time:
    this.state.time = Date.now();
  }

  componentDidMount() {
    // update time every second
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }

  componentWillUnmount() {
    // stop when not renderable
    clearInterval(this.timer);
  }

  render(props, state) {
    let time = new Date(state.time).toLocaleTimeString();
    return <div className="pa2 br3 bw1 bg-lightest-blue">{time}</div>;
  }
}

// render an instance of Clock into <body>:
render(<Clock />, document.body);
