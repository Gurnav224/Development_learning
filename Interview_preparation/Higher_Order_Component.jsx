

// a higher order react component is function that
//  take a component as input
// return a component with added features and modifier behaviour

// ✅ Step 1: Original Component
function Profile({ user, color }) {
  return (
    <div style={{ color }}>
      <h2>Hello, {user.name} 👋</h2>
    </div>
  )
}

// ✅ Step 2: Higher-Order Component (HOC)
function withUser(WrappedComponent) {
  return function EnhancedComponent(props) {
    const user = { name: "Gurnav" }; // Adding extra logic/data

    // Inject `user` prop into the wrapped component
    return <WrappedComponent {...props} user={user} />;
  };
}

// ✅ Step 3: Enhanced Component
const ProfileWithUser = withUser(Profile);

// ✅ Step 4: Render It!
function App() {
  return (
    <div>
      <h1>🌟 HOC Demo</h1>
      {/* Passing prop color — goes into props */}
      <ProfileWithUser color="blue" />
    </div>
  );
}
