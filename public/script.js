const fetchData = async () => {
  const apiurl = localStorage.getItem("Url");
  if (apiurl) {
    const response = await fetch(`${apiurl}/customer`);
    const data = await response.json();
    console.log(data);
  } else {
    window.location.href = "/api";
  }
};

fetchData();
