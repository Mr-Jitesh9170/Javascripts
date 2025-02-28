// Promise race =>
// -> Promise race used when we have multiple asyncrounous operation but we want to get fast response , whether any one of the asyncrounous operation excecuted and return response.
// -> In this case we use of promise race to get any one of promise whether reject or resolve.

const server1 = new Promise((resolve) =>
    setTimeout(() => resolve("🌍 Server 1 Responded"), 2000)
);
const server2 = new Promise((resolve) =>
    setTimeout(() => resolve("🚀 Server 2 Responded"), 1000)
);

// promise settle will response when all promise excecuted.
Promise.allSettled([server1, server2])
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

// promise all, if all promise succeded successfully then fine if any one of faild all rejected.
Promise.all([server1, server2])
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

// promise race , if any one of response resolved or rejected it will reponse just not will wait for all promises.
Promise.race([server1, server2])
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
