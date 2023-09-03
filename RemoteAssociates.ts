function getQuestionPart(phrases: string[]): string[] {
  let result : string [] = [];
  let firstLetter:number = 0;
  let lastLetter:number = 0;
  let commonWord :string = "";
  

  for (let i=0; i < phrases[0].length; i++){
    for (let j=0; j < phrases[1].length; j++){
      if (phrases[0][i] == phrases[1][j]){
          console.log(i + "," + j)
        if (phrases[0][i+1] == phrases[1][j+1]){
          firstLetter = i
          console.log('firstLetter : ' + i)
          for (let f = i ; f < phrases[0].length ; f++){
            for(let l = j ; l < phrases[1].length ; l++){
              if (phrases[0][f] == phrases[1][l]){
                console.log(phrases[0][f] + ' : ' + phrases[1][l])
                f++
                if (l == phrases[1].length-1){
                  f = phrases[0].length
                  lastLetter = l
                  console.log('lastLetter : ' + lastLetter)
                break
                }else{
                  continue
                }
              }else{
                f = phrases[0].length
                lastLetter = l
                console.log('lastLetter : ' + lastLetter)
                break
              }
            }
          }
          i = phrases[0].length
          break
        }
      }
    }
  }

  commonWord = phrases[0].substring(firstLetter,lastLetter)

  for ( let i =0 ; i < phrases.length ; i++){
    result.push(phrases[i].replace(commonWord,""))
  }

    
  return result
}
// Test cases
console.log(getQuestionPart(['BATHROOM', 'BATH SALTS', 'BLOODBATH']))
console.log(getQuestionPart(['BEFRIEND', 'GIRLFRIEND','FRIENDSHIP' ]))
console.log(getQuestionPart(['ICECREAM', 'ICESKATE', 'ICEWATER']))
