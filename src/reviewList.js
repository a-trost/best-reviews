
/*
Review object properties and examples:
  desiredResult - The resulting phrase we're going for ("Mystic Aquarium is THE BEST, THE BEST, THE BEST, THE BEST FISH ZOO.")
  searchTerms - Search phrase that will return a good result for the ending phrase("Aquarium", "Karate lessons", "billiards")
  precedingPhrase - Comes before the location name. Optional. ("At", "I think that")
  connectingPhrase - Connecting verb between "Walmart" and "THE BEST" ("has", "sells", "gives", "makes", "is")
  bestRepetitions - Number of times "THE BEST," is repeated (default: 4)
  endingPhrase - This will be set to Uppercase and include ending punctuation ("KUNG FU.") 
  category - For grouping reviews ("shopping", "food", "funPlaces")
*/

export default [
  {
    desiredResult:"Mystic Aquarium is THE BEST, THE BEST, THE BEST, THE BEST FISH ZOO.",
    searchTerms:"Aquarium",
    precedingPhrase: "",
    connectingPhrase:"is",
    bestRepetitions:4,
    endingPhrase:"FISH ZOO.",
    category:"funPlaces"
  },
  {
    desiredResult:"J Crew is THE BEST, THE BEST, THE BEST, THE BEST J CREW.",
    searchTerms:"J Crew",
    precedingPhrase: "",
    connectingPhrase:"is",
    bestRepetitions:4,
    endingPhrase:"J CREW.",
    category:"shopping"
  },
  {
    desiredResult:"David's Tailors is THE BEST, THE BEST, THE BEST, THE BEST FOR SUITS",
    searchTerms:"mens suits",
    precedingPhrase: "",
    connectingPhrase:"is",
    bestRepetitions:4,
    endingPhrase:"FOR SUITS.",
    category:"shopping"
  },
  {
    desiredResult:" THE BEST, THE BEST, THE BEST, THE BEST ",
    searchTerms:"pet supplies",
    precedingPhrase: "",
    connectingPhrase:"stocks",
    bestRepetitions:4,
    endingPhrase:"DOG FOOD.",
    category:"shopping"
  },
  {
    desiredResult:" THE BEST, THE BEST, THE BEST, THE BEST ",
    searchTerms:"dairy farm",
    precedingPhrase: "",
    connectingPhrase:"has",
    bestRepetitions:4,
    endingPhrase:"MOO MOOS.",
    category:"funPlaces"
  },
  {
    desiredResult:" THE BEST, THE BEST, THE BEST, THE BEST ",
    searchTerms:"private investigator",
    precedingPhrase: "",
    connectingPhrase:"is",
    bestRepetitions:4,
    endingPhrase:"GUMSHOE.",
    category:"services"
  },
  {
    desiredResult:" THE BEST, THE BEST, THE BEST, THE BEST ",
    searchTerms:"airport",
    precedingPhrase: "",
    connectingPhrase:"has",
    bestRepetitions:4,
    endingPhrase:"PLANE FOOD",
    category:"services"
  },
  {
    desiredResult:"Lazer Zone has THE BEST, THE BEST, THE BEST, THE BEST PEW PEW.",
    searchTerms:"laser tag",
    precedingPhrase: "",
    connectingPhrase:"has",
    bestRepetitions:4,
    endingPhrase:"PEW PEW.",
    category:"funPlaces"
  },
  {
    desiredResult:"Union Station has THE BEST, THE BEST, THE BEST, THE BEST CHOO CHOOS.",
    searchTerms:"train station",
    precedingPhrase: "",
    connectingPhrase:"has",
    bestRepetitions:4,
    endingPhrase:"CHOO CHOOS.",
    category:"services"
  },
  {
    desiredResult:"Koon Thai makes THE BEST, THE BEST, THE BEST, THE BEST THAI FOOD.",
    searchTerms:"thai food",
    precedingPhrase: "",
    connectingPhrase:"makes",
    bestRepetitions:4,
    endingPhrase:"THAI FOOD",
    category:"food"
  },
  {
    desiredResult:"DSW sells THE BEST, THE BEST, THE BEST, THE BEST BLUE SHOES",
    searchTerms:"shoe store",
    precedingPhrase: "",
    connectingPhrase:"sells",
    bestRepetitions:4,
    endingPhrase:"BLUE SHOES.",
    category:"shopping"
  }
]



/* Empty Object:
  {
    desiredResult:" THE BEST, THE BEST, THE BEST, THE BEST ",
    searchTerms:"",
    precedingPhrase: ""
    connectingPhrase:"",
    bestRepetitions:4,
    endingPhrase:"",
    category:""
  },
  */
