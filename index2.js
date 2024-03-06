const url = "https://cute-jade-binturong-boot.cyclic.app/api";

const get_flowers = () => {
  fetch(
    `${url}/flower/category/house-plants?access_token=64bebc1e2c6d3f056a8c85b7`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

get_flowers();
