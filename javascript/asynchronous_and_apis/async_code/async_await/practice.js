// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// }
// loadJson('https://javascript.info/no-such-user.json')
//   .catch(alert); // Error: 404

async function loadJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.status);
  }
  const user = await response.json();
  return user;
}
loadJson("https://javascript.info/no-such-user.json");


async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...what should you write here?
  // we need to call async wait() and wait to get 10
  // remember, we can't use "await"
  return wait().then((result) => console.log(result))
}
