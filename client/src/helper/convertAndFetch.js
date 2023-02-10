export const convertShopping = async (shoppingCart, sanityClient) => {
  if (shoppingCart.length === 0) {
    return [];
  } else {
    const fetchSanity = async (array) => {
      let dataArray = "";
      let dataString = "";
      await array.forEach((element, index) => {
        dataString += `_id == "${element.key.replace("LP-", "")}" ${
          array.length - 1 === index ? "" : " || "
        }`;
      });

      await sanityClient
        .fetch(
          `*[${dataString}] {
          _id,
          title,
          artist,
          cover,
          price,
          singleTrack,
          multiTrack,
          currency
        }`
        )
        .then((data) => (dataArray = data))
        .catch(console.error);

      return dataArray;
    };

    const counted = shoppingCart.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});

    const result = Object.entries(counted).map(([key, value]) => ({
      key,
      value,
    }));

    const pulledAlbums = await fetchSanity(result);

    result.forEach((element) => {
      let foundObject = pulledAlbums.find(
        (obj) => obj._id === element.key.replace("LP-", "")
      );
      if (foundObject) {
        foundObject.quantity = element.value;
      }
    });
    console.log(pulledAlbums);
    return pulledAlbums;
  }
};
