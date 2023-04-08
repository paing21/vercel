const fetchData = async () => {
  const apiurl = localStorage.getItem("Url");
  if (apiurl) {
    console.log("I am single");
    const response = await fetch(`${apiurl}/customer`);
    const data = await response.json();
    console.log(data);
  } else {
    window.location.href = "/api";
  }
};

fetchData();
