/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/

// Your code here
  const res = fetch("/posts");
  res.then(response => console.log(response.ok))
  res.then(response => console.log(response.status))
  res.then(response => console.log(response.text()))

/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/

// Your code here
const options = {
  method : "POST",
  headers: {"Content-Type":"application/json"},
  body: JSON.stringify({
    postId: 3,
    message: "New Post! (3rd Post)"
  })

}
const post = fetch("/posts", options)