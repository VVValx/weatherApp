const getTemp = document.querySelector("#getTemp");
const para = document.querySelector("#result");
const input = document.querySelector("input[name=temp]");

getTemp.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.value === "") return (para.innerHTML = "input is empty");

  const location = input.value;
  const url = `/weather/?location=${location}`;

  para.textContent = "Loading...";

  fetchData(
    url,
    (data) =>
      (para.textContent = `Current temperature in ${location} is ${data.current.temperature}°C`),
    (error) => (para.textContent = error)
  );
});

function fetchData(url, callback, error) {
  fetch(url)
    .then((res) => {
      res.json().then((data) => {
        if (data.error) {
          error(data.error.info);
        } else {
          callback(data);
        }
      });
    })
    .catch((error) => console(error));
}
