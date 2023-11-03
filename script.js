fetch("https://verceldemo-backend-plum.vercel.app/date").then((response) =>
  response.json().then((data) => {
    document.querySelector("#year").textContent = data.year;
  })
);
