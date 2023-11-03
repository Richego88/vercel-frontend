fetch("https://verceldemo-backend-plum.vercel.app/year").then((response) =>
  response.json().then((data) => {
    document.querySelector("#year").textContent = data.year;
  })
);
