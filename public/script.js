// const url = "http://localhost:4000/users";
const fetchData = async () => {
  const url = localStorage.getItem("apiurl");
  if (url) {
    const response = await fetch(`${url}/users`);
    const data = await response.json();
    console.log(data);
  } else {
    window.location.href = "/api";
  }
};

fetchData();
