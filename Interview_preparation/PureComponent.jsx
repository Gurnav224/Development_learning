

// A pure component in react

// renders the same output given the same props and state
// implments the shallow comparisons of props and state to avoid uneccessary re - renders

// functional component



const Greeting = React.memo(function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
});


// class component 

class Greeting2 extends React.PureComponent {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
