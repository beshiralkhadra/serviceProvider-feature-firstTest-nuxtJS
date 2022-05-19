function requestRebuilder(serviceName, path, method, data) {
  try {
    let json = {
      method: "POST",
      url: "/api-gateway/",
      headers: {
        "requsted-service": serviceName,
        "requsted-path": path,
        "requsted-method": method,
      },
      data: data,
    };
    // return await this.$axios(json)
    return json;
  } catch (error) {
    return error;
  }
}
module.exports = requestRebuilder;
