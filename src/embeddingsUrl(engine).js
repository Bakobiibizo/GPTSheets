/*TODO setup url parsing to enable this
function check_embeddings_engine_name(engine) {
const embeddingsUrl = `${OPEN_AI_URL}/engines/${engine}/embeddings`;
return embeddingsUrl
}

function check_embeddings_engine_name(engine) {
  const availableEngineNames = [

  ];

  if (!availableEngineNames.includes(engine)) {
    throw new Error(`Unknown engine name for embeddings. Available engine names are ${availableEngineNames}`);
  }
}

function embeddings(opts) {
  this._check_embeddings_engine_name(opts.engine);

  const url = config.embeddingsUrl(opts.engine);
  return this.send_request(url, 'post', opts);
}

*/