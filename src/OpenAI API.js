
//declare constants
const DEFAULT_ENGINE = 'davinci';
const ORIGIN = 'https://api.openai.com';
const API_VERSION = 'v1';
const OPEN_AI_URL = `${ORIGIN}/${API_VERSION}`;

const ss = SpreadsheetApp.getActiveSpreadsheet()
const sheet = ss.getSheetByName("ChatUI")

const range = sheet.getRange(3, 3, 18, 1);
const values = range.getValues()
const apiRange = sheet.getRange(2, 1)
const prePromptRange = sheet.getRange(1, 2)
const promptRange = sheet.getRange(13, 6)
const imageRange = sheet.getRange(19, 3, 1, 3)
const responseRange = sheet.getRange(3, 6)

const prePromptValue = prePromptRange.getValue()
const imageValues = imageRange.getValues()
const apiKey = apiRange.getValue()
const prompt = promptRange.getValue()
Logger.log(prompt)

//object for moving parameters around

const params = {
  model: values[1][0],
  apiKey: apiRange.getValue(),
  prompt: prompt,
  engine: values[0][0],
  temperature: values[2][0],
  maxTokens: values[3][0],
  frequencyPenalty: values[4][0],
  presencePenalty: values[5][0],
  logprobs: values[6][0],
  logit_bias: values[7][0],
  best_of: values[8][0],
  stream: values[9][0],
  suffix: values[10][0],
  n: values[11][0],
  echo: values[12][0],
  topP: values[13][0],
  stop: values[14][0],
  file: values[15][0],
  image: imageValues[0],
  imageSize: imageValues[2],
  imageFormat: imageValues[1],
  method: values[0][18]
}

//formula to populate methods in constants tab

function methods(){
  methods = 
  [
   'GET',
   'DELETE',
   'HEAD',
   'OPTIONS',
   'POST',
   'PUT',
   'PATCH',
   'PURGE',
   'LINK',
   'UNLINK',
   ]
   return methods
}

//formula to populate engines in constants tab
function engines() {
  return engine = [
    'davinci',
    'text-similarity-ada-001',
    'text-similarity-babbage-001',
    'text-similarity-curie-001',
    'text-similarity-davinci-001',
    'text-search-ada-doc-001',
    'text-search-ada-query-001',
    'text-search-babbage-doc-001',
    'text-search-babbage-query-001',
    'text-search-curie-doc-001',
    'text-search-curie-query-001',
    'text-search-davinci-doc-001',
    'text-search-davinci-query-001',
    'code-search-ada-code-001',
    'code-search-ada-text-001',
    'code-search-babbage-code-001',
    'code-search-babbage-text-001',
  ]
}
//define the model
const model = params.model

//make the api call
function runOpenAI() {

  // Set the API endpoint URL
  const openaiUrl = `https://api.openai.com/v1/completions`

  //construct the body

  const requestBody = {
    model: params.model,
    prompt: `${prePromptValue} ${prompt} /n ChatBot: `,
    max_tokens: params.maxTokens,
    temperature: params.temperature,
    //top_P: params.topP,
    presence_penalty: params.presencePenalty,
    frequency_penalty: params.frequencyPenalty,
    best_of: params.bestOf,
    n: params.n,
    stream: params.stream,
    stop: params.stop
  };

//Logger.log(requestBody)


  // Define the request headers
  const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + apiKey
  };

  // Make the POST request to the OpenAI API endpoint
  var response = UrlFetchApp.fetch(openaiUrl, {
    method: params.method,
    payload: JSON.stringify(requestBody),
    headers: headers
  })

  // Parse the JSON response
  const json = JSON.parse(response.getContentText());
  console.log(JSON.stringify(response.payload))

  //if its gpt3 log in its own set of columns else just log
  if (params.model == 'text-davninci-003') {
    let davinciTrue = true
    logChatGPT(davinciTrue, json)

  } else {
    let davinciTrue = false
    logChatGPT(davinciTrue, json)
  }

//set the response, clear the prompt and focus cell
  promptRange.setValue("")
  responseRange.setValue(json.choices[0].text)
  sheet.setActiveRange(promptRange)







}




















/*
{ id: 'cmpl-6c9mJr9ArdFOxZCzcef4NaXPz16bk',
  object: 'text_completion',
  created: 1674552071,
  model: 'davinci',
  choices:
   [ { text: 'YYYY/MM/DD // NNN // HH:MM` user \'',
       index: 0,
       logprobs: null,
       finish_reason: 'length' } ],
  usage: { prompt_tokens: 41, completion_tokens: 16, total_tokens: 57 } }*/