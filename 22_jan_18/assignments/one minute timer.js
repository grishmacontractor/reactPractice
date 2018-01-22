function timer() {
  const element = (
    <div>
      <h1>1 minute timer</h1>
      <h2>
        {s = new Date().getSeconds()}
      </h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(timer, 1000);
