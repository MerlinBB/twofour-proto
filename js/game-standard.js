(function ($, window, document, undefined) {
    "use strict";

    var Questions = [
        {
            question: "CURRENT HEADS OF STATE",
            num: 3,
            answers: [
                { title: "ANGELA MERKEL", correct: true },
                { title: "DAVID CAMERON", correct: true },
                { title: "BARACK OBAMA", correct: true },
                { title: "NICOLAS SARKOZY", correct: false }
            ]
        },
        {
            question: "TWILIGHT SERIES BOOKS",
            num: 3,
            answers: [
                { title: "BREAKING DAWN", correct: true },
                { title: "MOCKINGJAY", correct: false },
                { title: "NEW MOON", correct: true },
                { title: "ECLIPSE", correct: true }
            ]
        },
        {
            question: "PATRON SAINTS OF THE UK",
            num: 3,
            answers: [
                { title: "ST DAVID", correct: true },
                { title: "ST GEORGE", correct: true },
                { title: "ST PATRICK", correct: false },
                { title: "ST ANDREW", correct: true }
            ]
        },
        {
            question: "ROYAL PARKS OF LONDON",
            num: 3,
            answers: [
                { title: "HYDE PARK", correct: true },
                { title: "KENSINGTON GARDENS", correct: true },
                { title: "BRECON BEACONS", correct: false },
                { title: "ST JAMES'S PARK", correct: true }
            ]
        },
        {
            question: "BIG BROTHER PRESENTERS",
            num: 3,
            answers: [
                { title: "RYLAN CLARK", correct: true },
                { title: "BEN SHEPHARD", correct: false },
                { title: "DERMOT O'LEARY", correct: true },
                { title: "DAVINA MCCALL", correct: true }
            ]
        },
        {
            question: "ENGLISH CONSTITUENCIES",
            num: 3,
            answers: [
                { title: "SHETLAND", correct: false },
                { title: "ALDERSHOT", correct: true },
                { title: "WELWYN HATFIELD", correct: true },
                { title: "NEWBURY", correct: true }
            ]
        },
        {
            question: "BRITISH FASHION MODELS",
            num: 3,
            answers: [
                { title: "MIRANDA KERR", correct: false },
                { title: "KATE MOSS", correct: true },
                { title: "NAOMI CAMPBELL", correct: true },
                { title: "ROSIE HUNTINGTON-WHITELEY", correct: true }
            ]
        },
        {
            question: "GERMAN CITIES",
            num: 3,
            answers: [
                { title: "STRASBOURG", correct: false },
                { title: "HAMBURG", correct: true },
                { title: "BONN", correct: true },
                { title: "STUTTGART", correct: true }
            ]
        },
        {
            question: "AMERICAN RIVERS",
            num: 3,
            answers: [
                { title: "RIO GRANDE", correct: true },
                { title: "YUKON", correct: true },
                { title: "MISSISSIPPI", correct: true },
                { title: "BROADBACK", correct: false }
            ]
        },
        {
            question: "US PRESIDENTIAL RUNNERS-UP",
            num: 3,
            answers: [
                { title: "AL GORE", correct: true },
                { title: "JOHN MCCAIN", correct: true },
                { title: "HILARY CLINTON", correct: false },
                { title: "MITT ROMNEY", correct: true }
            ]
        },
        {
            question: "OLYMPIC 100M GOLD MEDALLISTS",
            num: 3,
            answers: [
                { title: "LINFORD CHRISTIE", correct: true },
                { title: "FRANCIS OBIKWELU", correct: false },
                { title: "USAIN BOLT", correct: true },
                { title: "JUSTIN GATLIN", correct: true }
            ]
        },
        {
            question: "BOND FILMS",
            num: 3,
            answers: [
                { title: "THUNDERBALL", correct: true },
                { title: "DEVIL MAY CARE", correct: false },
                { title: "DR NO", correct: true },
                { title: "QUANTUM OF SOLACE", correct: true }
            ]
        },
        {
            question: "CELEBRITY BIG BROTHER CONTESTANTS",
            num: 3,
            answers: [
                { title: "JAMELIA", correct: false },
                { title: "JACK DEE", correct: true },
                { title: "LES DENNIS", correct: true },
                { title: "JO O'MEARA", correct: true }
            ]
        },
        {
            question: "EAST AFRICAN COUNTRIES",
            num: 3,
            answers: [
                { title: "SOMALIA", correct: true },
                { title: "ETHIOPIA", correct: true },
                { title: "NIGERIA", correct: false },
                { title: "ERITREA", correct: true }
            ]
        },
        {
            question: "STEPHEN KING NOVELS",
            num: 3,
            answers: [
                { title: "CARRIE", correct: true },
                { title: "THE COLOUR OF MAGIC", correct: false },
                { title: "IT", correct: true },
                { title: "THE GREEN MILE", correct: true }
            ]
        },
        {
            question: "AMERICAN FOOTBALL POSITIONS",
            num: 3,
            answers: [
                { title: "QUARTERBACK", correct: true },
                { title: "WIDE RECEIVER", correct: true },
                { title: "FLY-HALF", correct: false },
                { title: "LINEBACKER", correct: true }
            ]
        },
        {
            question: "FORMER SOVIET STATES",
            num: 3,
            answers: [
                { title: "BELARUS", correct: true },
                { title: "MOLDOVA", correct: true },
                { title: "CROATIA", correct: false },
                { title: "LITHUANIA", correct: true }
            ]
        },
        {
            question: "INTERNET SEARCH ENGINES",
            num: 3,
            answers: [
                { title: "GOOGLE", correct: true },
                { title: "BING", correct: true },
                { title: "REDDIT", correct: false },
                { title: "YAHOO", correct: true }
            ]
        },
        {
            question: "80s VIDEO GAMES",
            num: 3,
            answers: [
                { title: "DONKEY KONG", correct: true },
                { title: "SUPER MARIO", correct: true },
                { title: "POKEMON", correct: false },
                { title: "ZELDA", correct: true }
            ]
        },
        {
            question: "CHINESE MARTIAL ARTS",
            num: 3,
            answers: [
                { title: "KRAV MAGA", correct: false },
                { title: "PRAYING MANTIS", correct: true },
                { title: "MONKEY FIST", correct: true },
                { title: "WHITE EYEBROW", correct: true }
            ]
        },
        {
            question: "FELINES",
            num: 3,
            answers: [
                { title: "PANTHER", correct: true },
                { title: "COUGAR", correct: true },
                { title: "LION", correct: true },
                { title: "COYOTE", correct: false }
            ]
        },
        {
            question: "LATIN DANCE STYLES",
            num: 3,
            answers: [
                { title: "SALSA", correct: true },
                { title: "RUMBA", correct: true },
                { title: "WALTZ", correct: false },
                { title: "TANGO", correct: true }
            ]
        },
        {
            question: "REPTILES",
            num: 2,
            answers: [
                { title: "SNAKE", correct: true },
                { title: "FROG", correct: false },
                { title: "NEWT", correct: false },
                { title: "GECKO", correct: true }
            ]
        },
        {
            question: "PREMIER LEAGUE WINNERS",
            num: 2,
            answers: [
                { title: "CHELSEA", correct: true },
                { title: "BLACKBURN", correct: true },
                { title: "NEWCASTLE", correct: false },
                { title: "MIDDLESBOROUGH", correct: false }
            ]
        },
        {
            question: "BRITISH CAR MAKERS",
            num: 2,
            answers: [
                { title: "FORD", correct: false },
                { title: "LAMBORGHINI", correct: false },
                { title: "ROLLS-ROYCE", correct: true },
                { title: "JAGUAR", correct: true }
            ]
        },
        {
            question: "US SITCOMS",
            num: 2,
            answers: [
                { title: "COMMUNITY", correct: true },
                { title: "PEEP SHOW", correct: false },
                { title: "VEEP", correct: true },
                { title: "THE THICK OF IT", correct: false }
            ]
        },
        {
            question: "VERBS",
            num: 2,
            answers: [
                { title: "HAVE", correct: true },
                { title: "SAD", correct: false },
                { title: "UNICORN", correct: false },
                { title: "LOAD", correct: true }
            ]
        },
        {
            question: "OLD TESTAMENT BOOKS",
            num: 2,
            answers: [
                { title: "JOHN", correct: false },
                { title: "GENESIS", correct: true },
                { title: "CORINTHIANS", correct: false },
                { title: "PSALMS", correct: true }
            ]
        },
        {
            question: "DINOSAURS",
            num: 2,
            answers: [
                { title: "TYRANNOSAURUS REX", correct: true },
                { title: "PTERODACTYL", correct: true },
                { title: "INDOMINUS REX", correct: false },
                { title: "RHEDOSAURUS", correct: false }
            ]
        },
        {
            question: "GUITARISTS",
            num: 2,
            answers: [
                { title: "TRAVIS BARKER", correct: false },
                { title: "SLASH", correct: true },
                { title: "QUESTLOVE", correct: false },
                { title: "EDDIE VAN HALEN", correct: true }
            ]
        },
        {
            question: "STAR SIGNS",
            num: 2,
            answers: [
                { title: "ORION", correct: false },
                { title: "ANDROMEDA", correct: false },
                { title: "TAURUS", correct: true },
                { title: "LEO", correct: true }
            ]
        },
        {
            question: "FIBONACCI NUMBERS",
            num: 2,
            answers: [
                { title: "8", correct: true },
                { title: "17", correct: false },
                { title: "4", correct: false },
                { title: "21", correct: true }
            ]
        },
        {
            question: "BRITISH MOUNTAINS",
            num: 2,
            answers: [
                { title: "BEN NEVIS", correct: true },
                { title: "EVEREST", correct: false },
                { title: "TABLE", correct: false },
                { title: "SNOWDON", correct: true }
            ]
        },
        {
            question: "HARRY POTTER CHARACTERS",
            num: 2,
            answers: [
                { title: "DOBBY", correct: true },
                { title: "ELIZABETH SWANN", correct: false },
                { title: "RON WEASLEY", correct: true },
                { title: "JOHN CONNOR", correct: false }
            ]
        },
        {
            question: "MYTHICAL CREATURES",
            num: 2,
            answers: [
                { title: "DODO", correct: false },
                { title: "NARWHAL", correct: false },
                { title: "CENTAUR", correct: true },
                { title: "WEREWOLF", correct: true }
            ]
        },
        {
            question: "WATER SPORTS",
            num: 2,
            answers: [
                { title: "CURLING", correct: false },
                { title: "SAILING", correct: true },
                { title: "WINDSURFING", correct: true },
                { title: "LUGE", correct: false }
            ]
        },
        {
            question: "HOTEL CHAINS",
            num: 2,
            answers: [
                { title: "MARRIOT", correct: true },
                { title: "HILTON", correct: true },
                { title: "FORD", correct: false },
                { title: "MUSK", correct: false }
            ]
        },
        {
            question: "BRIT AWARD WINNERS",
            num: 2,
            answers: [
                { title: "BLUR", correct: true },
                { title: "ELLA HENDERSON", correct: false },
                { title: "ESTELLE", correct: false },
                { title: "SAM SMITH", correct: true }
            ]
        },
        {
            question: "NORTHERN IRELAND COUNTIES",
            num: 2,
            answers: [
                { title: "KILDARE", correct: false },
                { title: "LONDONDERRY", correct: true },
                { title: "KILKENNY", correct: false },
                { title: "ARMAGH", correct: true }
            ]
        },
        {
            question: "90s FILMS",
            num: 2,
            answers: [
                { title: "PULP FICTION", correct: true },
                { title: "MINORITY REPORT", correct: false },
                { title: "THE MATRIX", correct: true },
                { title: "COLD MOUNTAIN", correct: false }
            ]
        },
        {
            question: "EMILY BRONTE NOVEL",
            num: 1,
            answers: [
                { title: "EMMA", correct: false },
                { title: "AGNES GREY", correct: false },
                { title: "JANE EYRE", correct: false },
                { title: "WUTHERING HEIGHTS", correct: true }
            ]
        },
        {
            question: "ENGLISH MONARCH",
            num: 1,
            answers: [
                { title: "PHILIP", correct: true },
                { title: "JANE", correct: false },
                { title: "ALEXANDER", correct: false },
                { title: "CHRISTOPHER", correct: false }
            ]
        },
        {
            question: "FILM DIRECTOR",
            num: 1,
            answers: [
                { title: "LEVITT", correct: true },
                { title: "DAMON", correct: false },
                { title: "DICAPRIO", correct: false },
                { title: "CUMBERBATCH", correct: false }
            ]
        },
        {
            question: "4-SIDED SHAPE",
            num: 1,
            answers: [
                { title: "TRIANGLE", correct: false },
                { title: "HEXAGON", correct: false },
                { title: "DODECAGON", correct: false },
                { title: "RHOMBUS", correct: true }
            ]
        },
        {
            question: "BIG BROTHER WINNER",
            num: 1,
            answers: [
                { title: "NIKKI GRAHAME", correct: false },
                { title: "JADE GOODY", correct: false },
                { title: "NADIA ALMADA", correct: true },
                { title: "MOKOSI MUSAMBASI", correct: false }
            ]
        },
        {
            question: "BRITISH MUSIC FESTIVAL",
            num: 1,
            answers: [
                { title: "OUTLOOK", correct: false },
                { title: "CREAMFIELDS", correct: true },
                { title: "COACHELLA", correct: false },
                { title: "TOMORROWLAND", correct: false }
            ]
        },
        {
            question: "LATIN PHRASE",
            num: 1,
            answers: [
                { title: "SHADENFREUDE", correct: false },
                { title: "MAMMA MIA", correct: false },
                { title: "MAGNUM OPUS", correct: true },
                { title: "DÉJÀ VU", correct: false }
            ]
        },
        {
            question: "CHELSEA FC MANAGER",
            num: 1,
            answers: [
                { title: "RAFA BENITEZ", correct: true },
                { title: "FABIO CAPELLO", correct: false },
                { title: "HARRY REDKNAPP", correct: false },
                { title: "ROBERTO MANCINI", correct: false }
            ]
        },
        {
            question: "BEATLES MEMBER",
            num: 1,
            answers: [
                { title: "PETE TOWNSHEND", correct: false },
                { title: "MICK JAGGER", correct: false },
                { title: "JOHN LENNON", correct: true },
                { title: "BRIAN WILSON", correct: false }
            ]
        },
        {
            question: "X FACTOR HOST",
            num: 1,
            answers: [
                { title: "DAVINA MCCALL", correct: false },
                { title: "DERMOT O’LEARY", correct: true },
                { title: "REGGIE YATES", correct: false },
                { title: "PHILIP SCHOFIELD", correct: false }
            ]
        },
        {
            question: "FORMER EUROPEAN CURRENCIES",
            num: 1,
            answers: [
                { title: "FRANCS", correct: true },
                { title: "DOLLARS", correct: false },
                { title: "RUPEES", correct: false },
                { title: "YEN", correct: false }
            ]
        },
        {
            question: "EPONYMOUS SHAKESPEARE CHARACTER",
            num: 1,
            answers: [
                { title: "HAMLET", correct: true },
                { title: "MERCUTIO", correct: false },
                { title: "IAGO", correct: false },
                { title: "DESDEMONA", correct: false }
            ]
        },
        {
            question: "3-D SHAPE",
            num: 1,
            answers: [
                { title: "PENTAGON", correct: false },
                { title: "SPHERE", correct: true },
                { title: "TRIANGLE", correct: false },
                { title: "TRAPEZIUM", correct: false }
            ]
        },
        {
            question: "ITALIAN CITY",
            num: 1,
            answers: [
                { title: "BARCELONA", correct: false },
                { title: "GIRONA", correct: false },
                { title: "LEEDS", correct: false },
                { title: "MILAN", correct: true }
            ]
        },
        {
            question: "HARRY POTTER CHARACTER",
            num: 1,
            answers: [
                { title: "LEGOLAS", correct: false },
                { title: "STARK", correct: false },
                { title: "WEASLEY", correct: true },
                { title: "ASRIEL", correct: false }
            ]
        },
        {
            question: "COLOUR OF THE RAINBOW",
            num: 1,
            answers: [
                { title: "BLACK", correct: false },
                { title: "RED", correct: true },
                { title: "BROWN", correct: false },
                { title: "GREY", correct: false }
            ]
        },
        {
            question: "A SEVEN DWARF",
            num: 1,
            answers: [
                { title: "SAD", correct: false },
                { title: "ANGRY", correct: false },
                { title: "HAPPY", correct: true },
                { title: "GREEDY", correct: false }
            ]
        },
        {
            question: "BRITISH PRIME MINISTER",
            num: 1,
            answers: [
                { title: "HAGUE", correct: false },
                { title: "PRESCOTT", correct: false },
                { title: "CAMERON", correct: true },
                { title: "MILIBAND", correct: false }
            ]
        },
        {
            question: "CARTOON FAMILY",
            num: 1,
            answers: [
                { title: "TROTTERS", correct: false },
                { title: "ROYLES", correct: false },
                { title: "OSBOURNES", correct: false },
                { title: "FLINTSTONES", correct: true }
            ]
        },
        {
            question: "BRITISH NEWSPAPER",
            num: 1,
            answers: [
                { title: "NEWSDAY", correct: false },
                { title: "LE MONDE", correct: false },
                { title: "MORNING STAR", correct: true },
                { title: "ARGUS", correct: false }
            ]
        },
        {
            question: "STRICTLY WINNER",
            num: 1,
            answers: [
                { title: "ZOE BALL", correct: false },
                { title: "CAROLINE FLACK", correct: false },
                { title: "PIXIE LOTT", correct: false },
                { title: "KIMBERLEY WALSH", correct: true }
            ]
        },
        {
            question: "SOUTH AMERICAN COUNTRY",
            num: 1,
            answers: [
                { title: "BELIZE", correct: false },
                { title: "COSTA RICA", correct: false },
                { title: "ARGENTINA", correct: true },
                { title: "HONDURAS", correct: false }
            ]
        },
        {
            question: "ONE DIRECTION MEMBER",
            num: 1,
            answers: [
                { title: "HARRY", correct: true },
                { title: "TIM", correct: false },
                { title: "JAMES", correct: false },
                { title: "BRANDON", correct: false }
            ]
        },
        {
            question: "SQUARE NUMBER",
            num: 1,
            answers: [
                { title: "45", correct: false },
                { title: "25", correct: true },
                { title: "22", correct: false },
                { title: "50", correct: false }
            ]
        },
        {
            question: "ABBA SINGLE",
            num: 1,
            answers: [
                { title: "VOULEZ VOUS", correct: true },
                { title: "BOHEMIAN RHAPSODY", correct: false },
                { title: "HEY JUDE", correct: false },
                { title: "ROCK ME", correct: false }
            ]
        },
        {
            question: "EU MEMBERS",
            num: 1,
            answers: [
                { title: "ICELAND", correct: false },
                { title: "ROMANIA", correct: true },
                { title: "SERBIA", correct: false },
                { title: "JAPAN", correct: false }
            ]
        },
        {
            question: "SUMMER OLYMPIC SPORT",
            num: 1,
            answers: [
                { title: "SKATEBOARDING", correct: false },
                { title: "CRICKET", correct: false },
                { title: "TENNIS", correct: true },
                { title: "LUGE", correct: false }
            ]
        },
        {
            question: "WINTER MONTH",
            num: 1,
            answers: [
                { title: "MARCH", correct: false },
                { title: "JULY", correct: false },
                { title: "SEPTEMBER", correct: false },
                { title: "DECEMBER", correct: true }
            ]
        },
        {
            question: "UNIT OF DISTANCE",
            num: 1,
            answers: [
                { title: "KILOGRAMS", correct: false },
                { title: "CENTIMETERS", correct: true },
                { title: "JOULES", correct: false },
                { title: "LITRES", correct: false }
            ]
        },
        {
            question: "METALLIC ELEMENT",
            num: 1,
            answers: [
                { title: "SELENIUM", correct: false },
                { title: "COPPER", correct: true },
                { title: "OXYGEN", correct: false },
                { title: "HYDROGEN", correct: false }
            ]
        },
        {
            question: "WORLD CUP HOST",
            num: 1,
            answers: [
                { title: "NETHERLANDS", correct: false },
                { title: "MEXICO", correct: true },
                { title: "WALES", correct: false },
                { title: "DENMARK", correct: false }
            ]
        },
        {
            question: "WWII ALLIES",
            num: 1,
            answers: [
                { title: "USA", correct: true },
                { title: "JAPAN", correct: false },
                { title: "THAILAND", correct: false },
                { title: "ITALY", correct: false }
            ]
        },
        {
            question: "CAPITAL CITY",
            num: 1,
            answers: [
                { title: "ABUJA", correct: true },
                { title: "MARSEILLE", correct: false },
                { title: "LAGOS", correct: false },
                { title: "NEW YORK CITY", correct: false }
            ]
        },
        {
            question: "BRITISH BANDS",
            num: 1,
            answers: [
                { title: "THE KILLERS", correct: false },
                { title: "PINK FLOYD", correct: true },
                { title: "NIRVANA", correct: false },
                { title: "AEROSMITH", correct: false }
            ]
        },
        {
            question: "WORLD CUP WINNERS",
            num: 2,
            answers: [
                { title: "GERMANY", correct: true },
                { title: "NETHERLANDS", correct: false },
                { title: "FRANCE", correct: true },
                { title: "SOUTH KOREA", correct: false }
            ]
        },
        {
            question: "EAST COAST US STATES",
            num: 2,
            answers: [
                { title: "CALIFORNIA", correct: false },
                { title: "SOUTH CAROLINA", correct: true },
                { title: "NEW YORK", correct: true },
                { title: "NEVADA", correct: false }
            ]
        },
        {
            question: "WIVES OF HENRY VIII",
            num: 2,
            answers: [
                { title: "ANNE", correct: true },
                { title: "ELIZABETH", correct: false },
                { title: "MARGARET", correct: false },
                { title: "CATHERINE", correct: true }
            ]
        },
        {
            question: "BIBLICAL PLAGUES",
            num: 2,
            answers: [
                { title: "BRIMSTONE", correct: false },
                { title: "LOCUSTS", correct: true },
                { title: "DARKNESS", correct: true },
                { title: "LEPROSY", correct: false }
            ]
        },
        {
            question: "GREEK GODS",
            num: 2,
            answers: [
                { title: "JUPITER", correct: false },
                { title: "CUPID", correct: false },
                { title: "ZEUS", correct: true },
                { title: "ATHENA", correct: true }
            ]
        },
        {
            question: "US VICE PRESIDENTS",
            num: 2,
            answers: [
                { title: "OBAMA", correct: false },
                { title: "BUSH", correct: true },
                { title: "CLINTON", correct: false },
                { title: "JOHNSON", correct: true }
            ]
        },
        {
            question: "AFRICAN DESERTS",
            num: 2,
            answers: [
                { title: "SAHARA", correct: true },
                { title: "GOBI", correct: false },
                { title: "KALAHARI", correct: true },
                { title: "VICTORIAN", correct: false }
            ]
        },
        {
            question: "CHINESE CALENDAR ANIMALS",
            num: 2,
            answers: [
                { title: "DUCK", correct: false },
                { title: "CRAB", correct: false },
                { title: "ROOSTER", correct: true },
                { title: "DRAGON", correct: true }
            ]
        },
        {
            question: "ARTHURIAN KNIGHTS",
            num: 2,
            answers: [
                { title: "GODIVA", correct: false },
                { title: "LANCELOT", correct: true },
                { title: "GALAHAD", correct: true },
                { title: "JOHN", correct: false }
            ]
        },
        {
            question: "NOBEL PEACE PRIZE WINNERS",
            num: 2,
            answers: [
                { title: "GELDOF", correct: false },
                { title: "OBAMA", correct: true },
                { title: "GORE", correct: false },
                { title: "MANDELA", correct: true }
            ]
        },
        {
            question: "CHARLES DICKENS NOVELS",
            num: 2,
            answers: [
                { title: "OLIVER TWIST", correct: true },
                { title: "LES MISERABLES", correct: false },
                { title: "FRIENDS BEYOND ", correct: false },
                { title: "DOMBEY & SON", correct: true }
            ]
        },
        {
            question: "UK GALLERIES",
            num: 2,
            answers: [
                { title: "TATE MODERN", correct: true },
                { title: "LOUVRE", correct: false },
                { title: "MOMA", correct: false },
                { title: "NATIONAL GALLERY", correct: true }
            ]
        },
        {
            question: "SUPERHERO ALTER EGOS",
            num: 2,
            answers: [
                { title: "HOMER SIMPSON", correct: false },
                { title: "PETER PARKER", correct: true },
                { title: "EDWIN DROOD", correct: false },
                { title: "TONY STARK", correct: true }
            ]
        },
        {
            question: "HURRICANE NAMES",
            num: 2,
            answers: [
                { title: "KATRINA", correct: true },
                { title: "ALEX", correct: false },
                { title: "CHRIS", correct: false },
                { title: "SANDY", correct: true }
            ]
        },
        {
            question: "UK RIVERS",
            num: 2,
            answers: [
                { title: "TOME", correct: false },
                { title: "SEVERN", correct: true },
                { title: "RHONE", correct: false },
                { title: "LUNE", correct: true }
            ]
        },
        {
            question: "COLLECTIVE NOUNS FOR BIRDS",
            num: 2,
            answers: [
                { title: "FLOCK", correct: true },
                { title: "TROOP", correct: false },
                { title: "SCHOOL", correct: false },
                { title: "COMPANY", correct: true }
            ]
        },
        {
            question: "20TH CENTURY INVENTIONS",
            num: 2,
            answers: [
                { title: "COMPUTER", correct: true },
                { title: "ROCKET", correct: true },
                { title: "FILM", correct: false },
                { title: "TELEPHONE", correct: false }
            ]
        },
        {
            question: "NOBLE GASES",
            num: 2,
            answers: [
                { title: "OXYGEN", correct: false },
                { title: "NEON", correct: true },
                { title: "NITROGEN", correct: false },
                { title: "ARGON", correct: true }
            ]
        },
        {
            question: "MEDITERRANEAN ISLANDS",
            num: 2,
            answers: [
                { title: "HAWES", correct: false },
                { title: "JERSEY", correct: false },
                { title: "MALTA", correct: true },
                { title: "DRAGONERA", correct: true }
            ]
        },
        {
            question: "ASSASSINATED FIGURES",
            num: 2,
            answers: [
                { title: "LITVINENKO", correct: true },
                { title: "STARR", correct: false },
                { title: "LINCOLN", correct: true },
                { title: "REAGAN", correct: false }
            ]
        },
        {
            question: "COMMUNIST STATES",
            num: 2,
            answers: [
                { title: "NORTH KOREA", correct: true },
                { title: "GEORGIA", correct: false },
                { title: "RUSSIA", correct: false },
                { title: "VIETNAM", correct: true }
            ]
        },
        {
            question: "LANDLOCKED COUNTRIES",
            num: 2,
            answers: [
                { title: "ENGLAND", correct: false },
                { title: "AUSTRIA", correct: true },
                { title: "BELARUS", correct: true },
                { title: "ITALY", correct: false }
            ]
        },
        {
            question: "MARVEL SUPERHEROES",
            num: 2,
            answers: [
                { title: "WONDER WOMAN", correct: false },
                { title: "BATMAN", correct: false },
                { title: "SPIDERMAN", correct: true },
                { title: "IRON MAN", correct: true }
            ]
        },
        {
            question: "PALACES IN ENGLAND",
            num: 2,
            answers: [
                { title: "HAMILTON", correct: false },
                { title: "BUCKINGHAM", correct: true },
                { title: "WINDSOR", correct: true },
                { title: "VERSAILLES", correct: false }
            ]
        },
        {
            question: "LEAD SINGERS",
            num: 2,
            answers: [
                { title: "SLASH", correct: false },
                { title: "KEITH RICHARDS", correct: false },
                { title: "OZZY OSBOURNE", correct: true },
                { title: "FREDDIE MERCURY", correct: true }
            ]
        },
        {
            question: "LIVING BRITISH PRIME MINISTERS",
            num: 2,
            answers: [
                { title: "BLAIR", correct: true },
                { title: "THATCHER", correct: false },
                { title: "HEATH", correct: false },
                { title: "MAJOR", correct: true }
            ]
        },
        {
            question: "FRENCH PHILOSOPHERS",
            num: 2,
            answers: [
                { title: "FOUCAULT", correct: true },
                { title: "NIETZCHE", correct: false },
                { title: "LOCKE", correct: false },
                { title: "VOLTAIRE", correct: true }
            ]
        },
        {
            question: "APOLLO 11 ASTRONAUTS",
            num: 2,
            answers: [
                { title: "ARMSTRONG", correct: true },
                { title: "ALDRIN", correct: true },
                { title: "YOUNG", correct: false },
                { title: "GAGARIN", correct: false }
            ]
        },
        {
            question: "CITRUS FRUITS",
            num: 2,
            answers: [
                { title: "KIWI", correct: false },
                { title: "LIME", correct: true },
                { title: "APPLE", correct: false },
                { title: "LEMON", correct: true }
            ]
        },
        {
            question: "RENAISSANCE PAINTERS",
            num: 2,
            answers: [
                { title: "DA VINCI", correct: true },
                { title: "REMBRANDT", correct: false },
                { title: "TURNER", correct: false },
                { title: "MICHELANGELO", correct: true }
            ]
        },
        {
            question: "MEN’S WIMBLEDON CHAMPIONS",
            num: 2,
            answers: [
                { title: "ANDY MURRAY", correct: true },
                { title: "TIM HENMAN", correct: false },
                { title: "GORAN IVANISEVIC", correct: false },
                { title: "ROGER FEDERER", correct: true }
            ]
        },
        {
            question: "IVY LEAGUE UNIVERSITIES",
            num: 2,
            answers: [
                { title: "HARVARD", correct: true },
                { title: "YALE", correct: true },
                { title: "UCLA", correct: false },
                { title: "STANFORD", correct: false }
            ]
        },
        {
            question: "COMMONWEALTH NATIONS",
            num: 3,
            answers: [
                { title: "INDIA", correct: true },
                { title: "NIGERIA", correct: true },
                { title: "BRAZIL", correct: false },
                { title: "AUSTRALIA", correct: true }
            ]
        },
        {
            question: "OLYMPIC HOST NATIONS",
            num: 3,
            answers: [
                { title: "USA", correct: true },
                { title: "AUSTRALIA", correct: true },
                { title: "GREECE", correct: true },
                { title: "TURKEY", correct: false }
            ]
        },
        {
            question: "MAMMALS",
            num: 3,
            answers: [
                { title: "FROG", correct: false },
                { title: "DOLPHIN", correct: true },
                { title: "HIPPO", correct: true },
                { title: "LION", correct: true }
            ]
        },
        {
            question: "OXBRIDGE EDUCATED",
            num: 3,
            answers: [
                { title: "HUGH GRANT", correct: true },
                { title: "LILY COLE", correct: true },
                { title: "JOHN CLEESE", correct: true },
                { title: "ROGER MOORE", correct: false }
            ]
        },
        {
            question: "SIMPSONS CHARACTERS",
            num: 3,
            answers: [
                { title: "LUIGI RISOTTO", correct: true },
                { title: "JASPER BEARDLEY", correct: true },
                { title: "DUFFMAN", correct: true },
                { title: "LORETTA BROWN", correct: false }
            ]
        },
        {
            question: "TOP 10 BABY BOY NAMES",
            num: 3,
            answers: [
                { title: "MOHAMMED", correct: false },
                { title: "JACOB", correct: true },
                { title: "JACK", correct: true },
                { title: "HARRY", correct: true }
            ]
        },
        {
            question: "TOP 10 BABY GIRL NAMES",
            num: 3,
            answers: [
                { title: "ISABELLA", correct: true },
                { title: "LILY", correct: true },
                { title: "PARIS", correct: false },
                { title: "SOPHIE", correct: true }
            ]
        },
        {
            question: "NESTLE BRANDS",
            num: 3,
            answers: [
                { title: "AERO", correct: true },
                { title: "CRUNCHIE", correct: false },
                { title: "ROLO", correct: true },
                { title: "YORKIE", correct: true }
            ]
        },
        {
            question: "CORONATION STREET CHARACTERS",
            num: 3,
            answers: [
                { title: "FIZ BROWN", correct: true },
                { title: "LUCY BEALE", correct: false },
                { title: "CARLA CONNOR", correct: true },
                { title: "KEN BARLOW", correct: true }
            ]
        },
        {
            question: "EASTENDERS CHARACTERS",
            num: 3,
            answers: [
                { title: "KAT SLATER", correct: true },
                { title: "JULIE CARP", correct: false },
                { title: "IAN BEALE", correct: true },
                { title: "DEAN WICKS", correct: true }
            ]
        },
        {
            question: "EXTINCT SPECIES",
            num: 3,
            answers: [
                { title: "EMPEROR RAT", correct: true },
                { title: "DODO", correct: true },
                { title: "AUROCHS", correct: true },
                { title: "WHITE RHINO", correct: false }
            ]
        },
        {
            question: "LEGO SETS",
            num: 3,
            answers: [
                { title: "THE SIMPSONS", correct: true },
                { title: "SPIDERMAN", correct: true },
                { title: "KNIGHT RIDER", correct: true },
                { title: "BREAKING BAD", correct: false }
            ]
        },
        {
            question: "COCKTAIL NAMES",
            num: 3,
            answers: [
                { title: "MARTINI", correct: true },
                { title: "DAIQUIRI", correct: true },
                { title: "SAZERAC", correct: true },
                { title: "TOY GUN", correct: false }
            ]
        },
        {
            question: "WU TANG CLAN MEMBERS",
            num: 3,
            answers: [
                { title: "GZA", correct: true },
                { title: "RZA", correct: true },
                { title: "GOLD TEETH", correct: false },
                { title: "METHOD MAN ", correct: true }
            ]
        },
        {
            question: "HANSON FIRST NAMES",
            num: 3,
            answers: [
                { title: "ZAC", correct: true },
                { title: "ISAAC", correct: true },
                { title: "JUSTIN", correct: false },
                { title: "TAYLOR", correct: true }
            ]
        },
        {
            question: "TWIN PEAKS CHARACTERS",
            num: 3,
            answers: [
                { title: "LAURA PALMER", correct: true },
                { title: "AUDREY HORNE", correct: true },
                { title: "PETE MARTELL", correct: true },
                { title: "MADS JENNING", correct: false }
            ]
        },
        {
            question: "SCOTTISH FOOTBALL LEAGUE TEAMS",
            num: 3,
            answers: [
                { title: "HIBERNIAN FC", correct: true },
                { title: "GLENTORAN FC", correct: false },
                { title: "ABERDEEN FC", correct: true },
                { title: "DUNDEE FC ", correct: true }
            ]
        },
        {
            question: "TYPES OF PIG",
            num: 3,
            answers: [
                { title: "BERKSHIRE", correct: true },
                { title: "TAMWORTH", correct: true },
                { title: "MANGALICA", correct: true },
                { title: "POPPET", correct: false }
            ]
        }
    ];
       

    var questions; // this will be mutated, Questions remains
    var speed1;
    var speed2;
    var speed3;
    var rowsToFail;
    var question = 0;
    var questionsPerLevel = [0, 0, 0];
    var rows = 12;
    var score = 0;
    var incorrectAnswers = 0;
    var currentCorrectAnswers = 0;
    var playing = false;
    var paused = false;

    var answerT = "" +
    "<div class=\"bar\">" +
        "<div class=\"inner\">" +
            "<% _.each(answers, function (a, i) { %>" +
                "<div class=\"answer\" data-i=\"<%- i+1 %>\" data-correct=\"<%- a.correct %>\"><%- a.title %></div>" +
            "<% }); %>" +
        "</div>" +
    "</div>";

    var optT = "" +
        "<% _.each(options, function (opt, i) { %>" +
            "<option value=\"<%- i %>\" <%- (i === Math.floor(options.length / 2)) ? 'selected' : '' %>>" +
                "<%- i %>" +
            "</option>" +
        "<% }); %>";

    var tetris = {

        init: function () {
            this.bindUIActions();
            this.setLevels();
            this.setSpeed();
            this.setRowsToFail();
        },

        bindUIActions: function () {
            $(".reset").on("click", function () { tetris.clear(); });
            $(".start").on("click", function () { tetris.start(); });
            $(".speed").on("change", function () { tetris.setSpeed(); });
            $(".rows").on("change", function () { tetris.setRowsToFail(); });
            $(".spreads").on("change", function () { tetris.updateLevels(); });
            $("body").on("click", ".answer", function (e) { tetris.answerClicked(e); });
            $(window).on("keyup", function (e) { tetris.keyHit(e); });
        },

        setLevels: function () {
            var data = {};
            var template = _.template(optT);

            data.options = _.where(Questions, { num: 1 });
            $(".spread-single").prepend(template(data));

            data.options = _.where(Questions, { num: 2 });
            $(".spread-double").prepend(template(data));

            data.options = _.where(Questions, { num: 3 });
            $(".spread-triple").prepend(template(data));

            tetris.updateLevels();
        },

        updateLevels: function () {
            questionsPerLevel[1] = $(".spread-single").val();
            questionsPerLevel[2] = $(".spread-double").val();
            questionsPerLevel[3] = $(".spread-triple").val();

            tetris.getQuestions();
        },

        getQuestions: function () {
            // get questions from master list
            questions = Questions;
            // split them into categories in a temporary object
            var temp = _.groupBy(questions, function (q) { return q.num; });
            // clear our questions into an empty array
            questions = [];

            // for each category
            _.each(temp, function (q, i) {
                // randomise
                temp[i] = _.shuffle(q);
                // then trim to required length
                temp[i] = _.first(temp[i], questionsPerLevel[i]);
                // add this back into our questions array
                questions = questions.concat(temp[i]);
            });
        },

        setSpeed: function (e) {
            speed1 = $(".speed1").val();
            speed2 = $(".speed2").val();
            speed3 = $(".speed3").val();
        },

        setRowsToFail: function (e) {
            rowsToFail = parseInt($(".rows").val(), 10);
            var pos = Math.round((rowsToFail / rows) * 100) + "%";

            $(".marker").css({ bottom: pos });
        },

        clear: function () {
            $(".stage .bar:first").stop();

            score = 0;
            tetris.updateScore();

            question = 0;
            incorrectAnswers = 0;

            paused = false;
            playing = false;

            tetris.getQuestions();

            $(".question .inner").text("");
            $(".question-sub .inner").text("");
            $(".stage .bar").remove();
            $(".start").text("Play");

            var music = $("#bed").get(0);
            music.pause();
            music.currentTime = 0;
        },

        start: function () {
            if (playing) {
                // pause
                $(".start").text("Play");
                playing = false;
                paused = true;
                $(".stage .bar:first").pause();
            } else {
                if (paused) {
                    $(".stage .bar:first").resume();
                    paused = false;
                    playing = true;
                    $(".start").text("Pause");
                } else {
                    // play
                    playing = true;
                    $(".start").text("Pause");
                    tetris.updateScore();
                    tetris.newQuestion();
                    $("#bed").get(0).play();
                }
            }
        },

        newQuestion: function () {
            currentCorrectAnswers = 0;
            var q = questions[question];

            // if there a question left?
            if (q) {
                $(".question .inner").text(q.question);
                $(".question-sub .inner").text(q.num);
                var template = _.template(answerT);
                $(".stage").prepend(template(q));
                tetris.animateBar(q.num);
            } else {
                tetris.gameover(true);
            }

        },

        keyHit: function (e) {
            var answer;
            switch (e.keyCode) {
            case 49: // 1
            case 65: // a
                answer = 1;
                break;

            case 50: // 2
            case 83: // s
                answer = 2;
                break;

            case 51: // 3
            case 68: // d
                answer = 3;
                break;

            case 52: // 4
            case 70: // f
                answer = 4;
                break;
            case 32:
                answer = false;
                break;
            default:
                return false;
            }

            if (answer) {
                tetris.answerChosen(answer);
            }
        },

        answerClicked: function (e) {
            var answer = $(e.currentTarget).data("i");
            tetris.answerChosen(answer);
        },

        answerChosen: function (i) {
            var answer = $(".answer:nth-child(" + i + ")");

            if ($(answer).data("correct")) {
                tetris.correct(answer);
            } else {
                tetris.incorrect();
            }
        },

        incorrect: function () {
            var pos = (incorrectAnswers * 10) + "%";
            $(".stage .bar:first").stop().addClass("incorrect").animate({ bottom: pos }, 400, function () {
                $(this).find(".answer").fadeOut(1500);
            });

            if (incorrectAnswers === rowsToFail) {
                tetris.gameover(false);
            } else {
                incorrectAnswers += 1;

                question++;
                tetris.newQuestion();
            }

            $("#incorrect").get(0).play();
        },

        correct: function (answer) {
            var q = questions[question];

            currentCorrectAnswers += 1;

            if (currentCorrectAnswers === q.num) {
                $(answer).siblings(".selected").removeClass("selected").addClass("correct");
                $(answer).addClass("correct");
                // all answers given - next
                score += q.num;
                tetris.updateScore();


                $(".stage .bar:first").stop().animate({ left: "100%"}, 400, function () {
                    $(this).remove();
                    question++;
                    tetris.newQuestion();
                });

                $("#correct").get(0).play();
            } else {
                $(answer).addClass("selected");
                var music = $("#select").get(0);
                music.pause();
                music.currentTime = 0;
                music.play();
            }
        },

        gameover: function (completed) {
            var message = (completed === true) ? "Complete!<br>Score: " + score : "Game Over<br>Score: " + score;

            $("<div>", {
                class: "message",
                html: message
            }).appendTo("body");

            setTimeout(function () {
                $(".message").fadeOut("fast", function () {
                    $(this).remove();
                    tetris.clear();
                });
            }, 4000);
        },

        updateScore: function () {
            $(".score").text(score);
        },

        animateBar: function (level) {
            var speed;

            if (level === 1) { speed = speed1; }
            if (level === 2) { speed = speed2; }
            if (level === 3) { speed = speed3; }

            var bar = $(".stage .bar:first");
            var end = (incorrectAnswers * 10) + "%";
            var time = (rows - incorrectAnswers) * speed;

            $(bar).animate({ bottom: end }, time,  "linear", function () {
                tetris.incorrect();
            });
        }
    };

    // DOM Ready
    $(function () { tetris.init(); });

})(jQuery, window, document);
