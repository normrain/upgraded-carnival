// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  function pAequorFactory(specimenNum, dna){
    return {
      specimenNum,
      dna,
      mutate(){
        const origin = returnRandBase();
        let dest = returnRandBase();
        while(origin === dest){
          dest = returnRandBase()
        }
        for(let i = 0; i < this.dna.length; i++){
          if(this.dna[i] === origin){
            this.dna[i] = dest
          }
        }
      },
      compareDNA (newPAequor){
        let match = 0;
        let result = 0;
        for(let i = 0; i < this.dna.length;i++){
          if(this.dna[i]===newPAequor.dna[i]){
            match++
          }
        }
        result = (match / 15 * 100).toFixed()
        console.log(`specimen #1 and specimen #2 have ${result}% DNA in common`)
      },
      willLikelySurvive(){
        let match = 0;
        for (let i = 0; i < this.dna.length; i++){
          if(this.dna[i] === 'C' || this.dna[i] === 'G'){
            match++;
          }
        }
        return (match/15 >=0.6)
      }
    }
  
  }
  
  let specimens =[];
  let counter = 0;
  while(specimens.length < 30){
    let temp = pAequorFactory(counter, mockUpStrand())
    if(temp.willLikelySurvive()){
      specimens.push(temp);
    }
    counter++
  }
  console.log(specimens)
  
  
  
  