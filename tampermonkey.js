let content = "";
fetch("http://localhost:14623" + location.pathname)
    .then(e => e.text())
    .then(e => content = e);

console.log(content);
