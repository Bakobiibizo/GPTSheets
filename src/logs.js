//log in one section for davninci-003 and another for other models
function logChatGPT(danvinciTrue, json) {
  let column = []
  if (danvinciTrue = true) {
    column = ['A', 'C']
  } else {
    column = ['D', 'F']
  }
  const logSheet = ss.getSheetByName('Log');
  let arr = [[""], [""], [prompt]]

  let length = logSheet.getLastRow();
  console.log()
  let targetRange = logSheet.getRange(`${column[0]}${length + 1}:${column[1]}${length + 1}`);
  let targetValues = targetRange.getValues();
  console.log(targetValues)
  targetRange.setValues([arr])

  arr = [[json.id], [json.created], [json.choices[0].text]]
  targetRange = logSheet.getRange(`A${length + 2}:C${length + 2}`);
  targetValues = targetRange.getValues();
  console.log(targetValues)
  targetRange.setValues([arr])

  arr = [];

  console.log('Logged')
}