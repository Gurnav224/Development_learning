const Heading = () => {
  return <h1>React Playground</h1>;
};

const Greetings = () => {
  const name = "Alice Smith";

  return <h1>Hello, {name}!</h1>;
};

const ExternalLink = () => {
  const url = "https://reactjsexample.com/";
  return (
    <div>
      <a href={url} target="_blank">
        Visit React Examples
      </a>
    </div>
  );
};

const Avatar = () => {
  return (
    <div>
      <img src="https://placehold.co/200x200?text=200X200" alt="" />
    </div>
  );
};

const UserInfo = () => {
  const user = {
    name: "Alice Smith",

    age: 28,

    email: "alice.smith@example.com",

    bio: "Passionate about React and building innovative web applications.",
  };
  return (
    <div>
      <h1>User Information</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
};

function App() {
  return (
    <>
      <Heading/>

      <Greetings />

      <ExternalLink />

      <Avatar />

      <UserInfo />
    </>
  );
}

export default App;
