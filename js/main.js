var words = {
    Noun: ["Apples", "Babies", "Balls", "Beds", "Bears", "Boys", "Bells", "Birds", "Brothers", "Boats", "Giants", "Dinosaurs", "Cakes", "Cars", "Cats", "Children", "Corn", "Chairs", "Chickens", "Cows", "Dogs", "Wind", "Dolls", "Frogs", "Ducks", "Eggs", "Eyes", "Snails", "Waves", "Lizards", "Feet", "Clouds", "Fish", "Trains", "Flowers", "Pets", "Books", "Girls", "Snakes", "Grass", "Pies", "Hands", "Pizzas", "Oranges", "Bikes", "Horses", "Houses", "Kittens", "Legs", "Letters", "Ants", "Men", "Tomatoes", "Money", "Teeth", "Mice", "Friends", "Spiders", "Pigs", "Rabbits", "Rain", "Rings", "Clocks", "Fairies", "Planes", "Songs", "Sheep", "Shoes", "Sisters", "Trees", "Plants", "Trucks", "Sticks", "Sun", "Toys", "Things"],
    Verb:["Creeping", "Crawling", "Walking", "Running", "Jumping", "Skipping", "Hoping", "Slithering", "Climbing", "Diging", "Squirming", "Flying", "Sitting", "Stalking", "Stomping", "Tiptoeing", "Galloping", "Blowing", "Dancing", "Gliding", "Swimming", "Washing", "Playing", "Throwing", "Drinking", "Eating", "Chewing", "Singing", "Shouting", "Growling", "Barking", "Buzzing", "Laughing", "Smiling", "Crying", "Mooing", "Quacking", "Talking", "Yelling", "Screaming", "Screeching", "Squawking", "Squealing", "Glowing", " Listening", "Painting", "Looking", "Reading", "Knitting", " Sleeping", "Drawing", "Shining", "Watching", "Kicking", "Diving", "Finding", "Building", "Working", "Exploring", "Shopping", "Cleaning", "Catching", "Shake"],
    Adjective:["average", "big", "Colossal", "Fat", "Giant", "Gigantic", "Great", "Huge", "Immense", "Large", "Little", "Long", "Mammoth", "Massive", "Miniature", "Petite", "Puny", "Short", "Small", "Tall", "Tiny", "Boiling", "Breezy", "Broken", "Bumpy", "Chilly", "Cold", "Cool", "Creepy", "Crooked", "Cuddly", "Curly", "Damaged", "Damp", "Dirty", "Dry", "Dusty", "Filthy", "Flaky", "Fluffy", "Wet", "Broad", "Chubby", "Crooked", "Curved", "Deep", "Flat", "High", "Hollow", "Low", "Narrow", "Round", "Shallow", "Skinny", "Square", "Steep", "Straight", "Wide", "Ancient", "Brief", "Early", "Fast", "Late", "Long", "Modern", "Old", "Old-fashioned", "Quick", "Rapid", "Short", "Slow", "Swift", "Young", "Abundant", "Empty", "Few", "Heavy", "Light", "Many", "Numerous", "Sound", "Cooing", "Deafening", "Faint"]
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
