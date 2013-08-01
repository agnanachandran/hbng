var words = {};

words.Noun = new Array("apples", "babies", "balls", "beds", "bears", "boys", "bells", "birds", "brothers", "boats", "giants", "dinosaurs", "cakes", "cars", "cats", "children", "corn", "chairs", "chickens", "cows", "dogs", "wind", "dolls", "frogs", "ducks", "eggs", "eyes", "snails", "waves", "lizards", "feet", "clouds", "fish", "trains", "flowers", "pets", "books", "girls", "snakes", "grass", "pies", "hands", "pizzas", "oranges", "bikes", "horses", "houses", "kittens", "legs", "letters", "ants", "men", "tomatoes", "money", "teeth", "mice", "friends", "spiders", "pigs", "rabbits", "rain", "rings", "clocks", "fairies", "planes", "songs", "sheep", "shoes", "sisters", "trees", "plants", "trucks", "sticks", "sun", "toys", "things");

words.Verb = new Array("creeping", "crawling", "walking", "running", "jumping", "skipping", "hoping", "slithering", "climbing", "diging", "squirming", "flying", "sitting", "stalking", "stomping", "tiptoeing", "galloping", "blowing", "dancing", "gliding", "swimming", "washing", "playing", "throwing", "drinking", "eating", "chewing", "singing", "shouting", "growling", "barking", "buzzing", "laughing", "smiling", "crying", "mooing", "quacking", "talking", "yelling", "screaming", "screeching", "squawking", "squealing", "glowing", " listening", "painting", "looking", "reading", "knitting", " sleeping", "drawing", "shining", "watching", "kicking", "diving", "finding", "building", "working", "exploring", "shopping", "cleaning", "catching", "shake");

words.Adjective = new Array("average", "big", "colossal", "fat", "giant", "gigantic", "great", "huge", "immense", "large", "little", "long", "mammoth", "massive", "miniature", "petite", "puny", "short", "small", "tall", "tiny", "boiling", "breezy", "broken", "bumpy", "chilly", "cold", "cool", "creepy", "crooked", "cuddly", "curly", "damaged", "damp", "dirty", "dry", "dusty", "filthy", "flaky", "fluffy", "wet", "broad", "chubby", "crooked", "curved", "deep", "flat", "high", "hollow", "low", "narrow", "round", "shallow", "skinny", "square", "steep", "straight", "wide", "ancient", "brief", "early", "fast", "late", "long", "modern", "old", "old-fashioned", "quick", "rapid", "short", "slow", "swift", "young", "abundant", "empty", "few", "heavy", "light", "many", "numerous", "sound", "cooing", "deafening", "faint");

var $pickOne = null;
var $pickTwo = null;
var $pickThree = null;

$(document).ready(function() {

    function onClickity() {
        $pickOne = $('.option-one').find('.focus');
        $pickTwo = $('.option-two').find('.focus');
        $pickThree = $('.option-three').find('.focus');
    }

    onClickity(); 

    $(".button").click(function() {
        if (($(this).parent().hasClass('option-one'))) {
            $('.option-one').find('.focus').removeClass('focus active');
        }
        else if (($(this).parent().hasClass('option-two'))) {
            $('.option-two').find('.focus').removeClass('focus active');
        }
        else if (($(this).parent().hasClass('option-three'))) {
            $('.option-three').find('.focus').removeClass('focus active');
        }
        $(this).addClass('focus active');
        onClickity();
    });

    var changeWords = function(wordOne, wordTwo, wordThree) {
        $('.word-one').text(wordOne);
        $('.word-two').text(wordTwo);
        $('.word-three').text(wordThree);
    }

    $(".generate").click(function() {
        var strOne = $('.option-one').find('.focus').html();
        var strTwo = $('.option-two').find('.focus').html();
        var strThree = $('.option-three').find('.focus').html();
        
        var realOne = "";
        var realTwo = "";
        var realThree = "";

        for (var i = 0; i < 20; i++) {
            var randOne = Math.floor((Math.random()*words[strOne].length));
            var randTwo = Math.floor((Math.random()*words[strTwo].length));
            var randThree = Math.floor((Math.random()*words[strThree].length));

            var wordOne = words[strOne][randOne];
            var wordTwo = words[strTwo][randTwo];
            var wordThree = words[strThree][randThree];
            // Implement this properly
            if (i === 19) {
                setTimeout(changeWords(wordOne, wordTwo, wordThree), 1000);
                realOne = wordOne;
                realTwo = wordTwo;
                realThree = wordThree;
            }
        }

        $('.band-text').fadeIn(500, function() {
            $(this).text('Your hipster band name is: ' + realOne + " " + realTwo + " " + realThree);
        });
    });
});