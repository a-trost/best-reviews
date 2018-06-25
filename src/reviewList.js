
/*
Review object properties and examples:
  desiredResult - The resulting phrase we're going for ("Mystic Aquarium is THE BEST, THE BEST, THE BEST, THE BEST FISH ZOO.")
  searchTerms - Search phrase that will return a good result for the ending phrase("Aquarium", "Karate lessons", "billiards")
  precedingPhrase - Comes before the location name. Optional. ("At", "I think that")
  connectingPhrase - Connecting verb between "Walmart" and "THE BEST" ("has", "sells", "gives", "makes", "is")
  bestRepetitions - Number of times "THE BEST," is repeated (default: 4)
  endingPhrase - This will be set to Uppercase and include ending punctuation ("KUNG FU.") 
	category - For grouping reviews ("shopping", "funPlaces", "services")
	id - For identifying the review in the URL for easier routing. Increasing int. Don't change or links will break.
*/

export default [
	{
		desiredResult:"Mystic Aquarium is THE BEST, THE BEST, THE BEST, THE BEST FISH ZOO.",
		searchTerms:"Aquarium",
		precedingPhrase: "",
		connectingPhrase:"is",
		bestRepetitions:4,
		endingPhrase:"FISH ZOO.",
		category:"funPlaces",
		id:0
	},
	{
		desiredResult:"J Crew is THE BEST, THE BEST, THE BEST, THE BEST J CREW.",
		searchTerms:"J Crew",
		precedingPhrase: "",
		connectingPhrase:"is",
		bestRepetitions:4,
		endingPhrase:"J CREW.",
		category:"shopping",
		id:1
	},
	{
		desiredResult:"David's Tailors is THE BEST, THE BEST, THE BEST, THE BEST FOR SUITS",
		searchTerms:"mens suits",
		precedingPhrase: "",
		connectingPhrase:"is",
		bestRepetitions:4,
		endingPhrase:"FOR SUITS.",
		category:"shopping",
		id:2
	},
	{
		desiredResult:"Petco sells THE BEST, THE BEST, THE BEST, THE BEST DOG FOOD",
		searchTerms:"pet supplies",
		precedingPhrase: "",
		connectingPhrase:"stocks",
		bestRepetitions:4,
		endingPhrase:"DOG FOOD.",
		category:"shopping",
		id:3
	},
	{
		desiredResult:"Happy Cows Dairy has THE BEST, THE BEST, THE BEST, THE BEST MOO MOOS",
		searchTerms:"dairy farm",
		precedingPhrase: "",
		connectingPhrase:"has",
		bestRepetitions:4,
		endingPhrase:"MOO MOOS.",
		category:"funPlaces",
		id:4
	},
	{
		desiredResult:"Private Eyes LLC is THE BEST, THE BEST, THE BEST, THE BEST GUMSHOE",
		searchTerms:"private investigator",
		precedingPhrase: "",
		connectingPhrase:"is",
		bestRepetitions:4,
		endingPhrase:"GUMSHOE.",
		category:"services",
		id:5
	},
	{
		desiredResult:"Philadelphia Airport has THE BEST, THE BEST, THE BEST, THE BEST PLANE FOOD!",
		searchTerms:"airport",
		precedingPhrase: "",
		connectingPhrase:"has",
		bestRepetitions:4,
		endingPhrase:"PLANE FOOD",
		category:"services",
		id:6
	},
	{
		desiredResult:"Lazer Zone has THE BEST, THE BEST, THE BEST, THE BEST PEW PEW.",
		searchTerms:"laser tag",
		precedingPhrase: "",
		connectingPhrase:"has",
		bestRepetitions:4,
		endingPhrase:"PEW PEW.",
		category:"funPlaces",
		id:7
	},
	{
		desiredResult:"Union Station has THE BEST, THE BEST, THE BEST, THE BEST CHOO CHOOS.",
		searchTerms:"train station",
		precedingPhrase: "The trains at",
		connectingPhrase:"are",
		bestRepetitions:4,
		endingPhrase:"CHOO CHOOS.",
		category:"services",
		id:8
	},
	{
		desiredResult:"Koon Thai makes THE BEST, THE BEST, THE BEST, THE BEST THAI FOOD.",
		searchTerms:"thai food",
		precedingPhrase: "",
		connectingPhrase:"makes",
		bestRepetitions:4,
		endingPhrase:"THAI FOOD",
		category:"services",
		id:9
	},
	{
		desiredResult:"DSW sells THE BEST, THE BEST, THE BEST, THE BEST BLUE SHOES",
		searchTerms:"shoe store",
		precedingPhrase: "",
		connectingPhrase:"sells",
		bestRepetitions:4,
		endingPhrase:"BLUE SHOES.",
		category:"shopping",
		id:10
	},
	{
		desiredResult:"Empire Comics sells THE BEST, THE BEST, THE BEST, THE BEST ISSUES.",
		searchTerms:"comic store",
		precedingPhrase: "",
		connectingPhrase:"sells",
		bestRepetitions:4,
		endingPhrase:"ISSUES.",
		category:"shopping",
		id:11
	},
	{
		desiredResult:"Sports Authority has THE BEST, THE BEST, THE BEST, THE BEST GYM SHOES.",
		searchTerms:"athletic equipment",
		precedingPhrase: "",
		connectingPhrase:"has",
		bestRepetitions:4,
		endingPhrase:"GYM SHOES.",
		category:"shopping",
		id:12
	},
	{
		desiredResult:"Washington Museum has THE BEST, THE BEST, THE BEST, THE BEST STATUE.",
		searchTerms:"museum",
		precedingPhrase: "",
		connectingPhrase:"has",
		bestRepetitions:4,
		endingPhrase:"STATUE.",
		category:"funPlaces",
		id:13
	},
	{
		desiredResult:"The Trocadero is THE BEST, THE BEST, THE BEST, THE BEST VENUE",
		searchTerms:"concert hall",
		precedingPhrase: "",
		connectingPhrase:"is",
		bestRepetitions:4,
		endingPhrase:"VENUE.",
		category:"funPlaces",
		id:14
	},
	{
		desiredResult:"Hallmark Cards sells THE BEST, THE BEST, THE BEST, THE BEST THANK YOUS.",
		searchTerms:"card store",
		precedingPhrase: "",
		connectingPhrase:"sells",
		bestRepetitions:4,
		endingPhrase:"THANK YOUS.",
		category:"shopping",
		id:15
	},
	{
		desiredResult:"Joann Fabric sells THE BEST, THE BEST, THE BEST, THE BEST HOT GLUE.",
		searchTerms:"craft store",
		precedingPhrase: "",
		connectingPhrase:"sells",
		bestRepetitions:4,
		endingPhrase:"HOT GLUE.",
		category:"shopping",
		id:16
	},
	{
		desiredResult:"Happy Smiles Day Care is THE BEST, THE BEST, THE BEST, THE BEST KID ZOO.",
		searchTerms:"day care",
		precedingPhrase: "",
		connectingPhrase:"is",
		bestRepetitions:4,
		endingPhrase:"KID ZOO.",
		category:"services",
		id:17
	},
	{
		desiredResult:"The dancers at Premiere Dance Studio wear THE BEST, THE BEST, THE BEST, THE BEST TUTUS.",
		searchTerms:"ballet",
		precedingPhrase: "The dancers at",
		connectingPhrase:"wear",
		bestRepetitions:4,
		endingPhrase:"TUTUS.",
		category:"funStuff",
		id:18
	},
	{
		desiredResult:"The tiny poems at Walden Books are THE BEST, THE BEST, THE BEST, THE BEST HAIKUS.",
		searchTerms:"books",
		precedingPhrase: "The tiny poems at",
		connectingPhrase:"are",
		bestRepetitions:4,
		endingPhrase:"HAIKUS.",
		category:"shopping",
		id:19
	},
	{
		desiredResult:"The nice nurses at Sacred Heart heal THE BEST, THE BEST, THE BEST, THE BEST BOO BOOS",
		searchTerms:"hospital",
		precedingPhrase: "The nice nurses at",
		connectingPhrase:"heal",
		bestRepetitions:4,
		endingPhrase:"BOO BOOS",
		category:"services",
		id:20
	},
	{
		desiredResult:"Dave's Tattoo Parlor inks THE BEST, THE BEST, THE BEST, THE BEST TATTOOS.",
		searchTerms:"tattoo",
		precedingPhrase: "",
		connectingPhrase:"inks",
		bestRepetitions:4,
		endingPhrase:"TATTOOS.",
		category:"services",
		id:21
	},
	{
		desiredResult:"The old stuff at Specialty Boutique is THE BEST, THE BEST, THE BEST, THE BEST HEIRLOOMS",
		searchTerms:"vintage",
		precedingPhrase: "The old stuff at",
		connectingPhrase:"is",
		bestRepetitions:4,
		endingPhrase:"HEIRLOOMS.",
		category:"shopping",
		id:22
	},
	{
		desiredResult:"Unique Hair gave me THE BEST, THE BEST, THE BEST, THE BEST SHAMPOO.",
		searchTerms:"hair salon",
		precedingPhrase: "",
		connectingPhrase:"gave me",
		bestRepetitions:4,
		endingPhrase:"SHAMPOO.",
		category:"services",
		id:23
	},
	{
		desiredResult:"The great people at Congregation Beth El speak THE BEST, THE BEST, THE BEST, THE BEST HEBREW.",
		searchTerms:"synagogue",
		precedingPhrase: "The great people at",
		connectingPhrase:"speak",
		bestRepetitions:4,
		endingPhrase:"HEBREW.",
		category:"funPlaces",
		id:24
	},
	{
		desiredResult:"At Steve's Used Car Lot I found THE BEST, THE BEST, THE BEST, SUBARU",
		searchTerms:"used cars",
		precedingPhrase: "At",
		connectingPhrase:"I found",
		bestRepetitions:3,
		endingPhrase:"SUBARU.",
		category:"shopping",
		id:25
	},
	{
		desiredResult:"Best Buy sells THE BEST, THE BEST, THE BEST, THE BEST ROKU.",
		searchTerms:"electronics",
		precedingPhrase: "",
		connectingPhrase:"sells",
		bestRepetitions:4,
		endingPhrase:"ROKU.",
		category:"shopping",
		id:26
	},
	{
		desiredResult:"Starbucks makes THE BEST, THE BEST, THE BEST, THE BEST COLD BREW.",
		searchTerms:"coffee",
		precedingPhrase: "",
		connectingPhrase:"makes",
		bestRepetitions:4,
		endingPhrase:"COLD BREW.",
		category:"shopping",
		id:27
	},
	{
		desiredResult:"Regal Cinema plays THE BEST, THE BEST, THE BEST, THE BEST PREVIEWS",
		searchTerms:"movie theater",
		precedingPhrase: "",
		connectingPhrase:"plays",
		bestRepetitions:4,
		endingPhrase:"PREVIEWS.",
		category:"funPlaces",
		id:28
	},
	{
		desiredResult:"Philly Billiards has THE BEST, THE BEST, THE BEST, THE BEST POOL CUES",
		searchTerms:"pool hall",
		precedingPhrase: "",
		connectingPhrase:"has",
		bestRepetitions:4,
		endingPhrase:"POOL CUES.",
		category:"funPlaces",
		id:29
	},
	{
		desiredResult:"Stop & Shop sells THE BEST, THE BEST, THE BEST, THE BEST YOOHOO.",
		searchTerms:"grocery",
		precedingPhrase: "",
		connectingPhrase:"sells",
		bestRepetitions:4,
		endingPhrase:"YOOHOO.",
		category:"shopping",
		id:30
	},
	{
		desiredResult:"Philadelphia Zoo has THE BEST, THE BEST, THE BEST, THE BEST BABOON.",
		searchTerms:"zoo",
		precedingPhrase: "",
		connectingPhrase:"has",
		bestRepetitions:4,
		endingPhrase:"BABOON.",
		category:"funPlaces",
		id:31
	},
	{
		desiredResult:"Sally's Vacuum Repair fixes THE BEST, THE BEST, THE BEST, THE BEST VACUUM.",
		searchTerms:"vacuum repair",
		precedingPhrase: "",
		connectingPhrase:"fixes",
		bestRepetitions:4,
		endingPhrase:"VACUUM.",
		category:"services",
		id:32
	},
];