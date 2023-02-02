//this theoretically works, You'd need to change the url to https://api.openai.com/v1/images/generations but I havent had time to try it
async function response(params) {

  await openai.createImage({
    prompt: params.prompt,
    n: 1,
    size: params.imageSize
  });
  
  if (params.imageFormat = 'url') {
    return image_url = response.data.data[0].url;
  } else {
    return image_b64json = response.data.data[0].b64_json;
  }
}