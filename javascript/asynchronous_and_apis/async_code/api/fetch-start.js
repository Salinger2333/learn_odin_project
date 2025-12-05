const header = new Headers();
header.append("Content-Type", "application/json");
const response = fetch("example.com", {
  method: "post",
  headers: header,
  body: JSON.stringify({ username: "example" }),
});
