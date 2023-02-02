/*TODO setup url parsing to enable this
function completionUrl(engine) {
const completionUrl = `'`

return completionUrl
}

function complete(opts) {
  const url = config.completionURL(opts.engine || DEFAULT_ENGINE);
  delete opts.engine;
  
  

  return url
}
const arr = []
async function runComplete(params){
  
    const gptResponse = await completion({
        engine: params.engine,
        prompt: params.prompt,
        maxTokens: params.maxTokens,
        temperature: params.temperature,
        topP: params.topP,
        presencePenalty: params.presencePenalty,
        frequencyPenalty: params.frequencyPenalty,
        bestOf: params.bestOf,
        n: params.n,
        stream: params.stream,
        stop: params.stop
    });
    arr.push(params)
    return gptResponse.data
};

*/