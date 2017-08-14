const komada = require('komada');

komada.start({
  botToken: "~~~~~~~~~~~~~~~~~~~~~~~~",
  ownerID : "~~~~~~~~~~~~~~~~~~~~~~~~",
  clientID: "~~~~~~~~~~~~~~~~~~~~~~~~",
  prefix: "!",

  clientOptions: {
    fetchAllMembers: true,
  },
});