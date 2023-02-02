/*TODO setup url parsing to enable this
function send_request(url, method, opts = {}) {
  let camelToUnderscore = (key) => {
    let result = key.replace(/([A-Z])/g, " $1");
    return result.split(' ').join('_').toLowerCase();
  };
  const data = {};
  for (const key in opts) {
    data[camelToUnderscore(key)] = opts[key];
  }

  const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + apiKey
  };
  const response = UrlFetchApp.fetch({
      url,
      headers,
      data: Object.keys(data).length ? data : '',
      method,
  });
  console.log(JSON.parse(response))
}


//function send_request(url, method, opts, apiKey){
//
//const headers = {
//  "Content-Type": "application/json",
//  "Authorization": "Bearer " + apiKey
//};
//const response = UrlFetchApp.fetch(url, {
//  method: method,
//  payload: JSON.stringify(opts),
//  headers: headers
//});
//
//console.log(JSON.parse(response))
//}*/