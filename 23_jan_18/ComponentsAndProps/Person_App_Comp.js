function Person(props) {
  return <h1>Hello, Name : {props.name}-
   Age : {props.age}-
    Birthdate : {props.birthdate}-
  </h1>;
}

function App() {
  return (
    <div>
      <Person name="Sara" age="21" birthdate="17-6-18" />
      <Person name="Cahal" />
      <Person name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
