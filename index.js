const geoip = require("geoip-country");

exports.handler = async (event) => {
  const ip = event["requestContext"]["http"]["sourceIp"];
  const geo = geoip.lookup(ip);

  const response = {
    statusCode: 200,
    body: JSON.stringify({ country: geo.country }),
  };
  return response;
};
