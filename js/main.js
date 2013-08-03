var words = {
    Noun: ["apples", "babies", "balls", "beds", "bears", "boys", "bells", "birds", "brothers", "boats", "giants", "dinosaurs", "cakes", "cars", "cats", "children", "corn", "chairs", "chickens", "cows", "dogs", "wind", "dolls", "frogs", "ducks", "eggs", "eyes", "snails", "waves", "lizards", "feet", "clouds", "fish", "trains", "flowers", "pets", "books", "girls", "snakes", "grass", "pies", "hands", "pizzas", "oranges", "bikes", "horses", "houses", "kittens", "legs", "letters", "ants", "men", "tomatoes", "money", "teeth", "mice", "friends", "spiders", "pigs", "rabbits", "rain", "rings", "clocks", "fairies", "planes", "songs", "sheep", "shoes", "sisters", "trees", "plants", "trucks", "sticks", "sun", "toys", "things"],
    Verb:["creeping", "crawling", "walking", "running", "jumping", "skipping", "hoping", "slithering", "climbing", "diging", "squirming", "flying", "sitting", "stalking", "stomping", "tiptoeing", "galloping", "blowing", "dancing", "gliding", "swimming", "washing", "playing", "throwing", "drinking", "eating", "chewing", "singing", "shouting", "growling", "barking", "buzzing", "laughing", "smiling", "crying", "mooing", "quacking", "talking", "yelling", "screaming", "screeching", "squawking", "squealing", "glowing", " listening", "painting", "looking", "reading", "knitting", " sleeping", "drawing", "shining", "watching", "kicking", "diving", "finding", "building", "working", "exploring", "shopping", "cleaning", "catching", "shake"],
    Adjective:["average", "big", "colossal", "fat", "giant", "gigantic", "great", "huge", "immense", "large", "little", "long", "mammoth", "massive", "miniature", "petite", "puny", "short", "small", "tall", "tiny", "boiling", "breezy", "broken", "bumpy", "chilly", "cold", "cool", "creepy", "crooked", "cuddly", "curly", "damaged", "damp", "dirty", "dry", "dusty", "filthy", "flaky", "fluffy", "wet", "broad", "chubby", "crooked", "curved", "deep", "flat", "high", "hollow", "low", "narrow", "round", "shallow", "skinny", "square", "steep", "straight", "wide", "ancient", "brief", "early", "fast", "late", "long", "modern", "old", "old-fashioned", "quick", "rapid", "short", "slow", "swift", "young", "abundant", "empty", "few", "heavy", "light", "many", "numerous", "sound", "cooing", "deafening", "faint"]
};

$(function() {
    var picks = {
        $one:$('#starting-one'),
        $two:$('#starting-two'),
        $three:$('#starting-three')
    };
    var numbers = ['one', 'two', 'three'];
    var names = [];

    $('.button').click(function() {
        for (i = 0; i < numbers.length; i++) {
            if (($(this).parent().hasClass('option-' + numbers[i]))) {
                picks['$'+numbers[i]].removeClass('focus active');
                picks['$'+numbers[i]] = $(this);
            }
        }
        $(this).addClass('focus active');
    });

    var getRandomNumber = function(max) {
        return Math.floor((Math.random()*max));
    }

    $('.generate').click(function() {
        for(i = 0; i < numbers.length; i++) {
            choiceType = picks['$'+numbers[i]].html();
            randomNumber = getRandomNumber(words[choiceType].length);
            names[i] = words[choiceType][randomNumber];
        }
        $('.band-text').fadeIn().text('Your hipster band name is: ' + names[0] + ' ' + names[1] + ' ' + names[2]);
    });
});
