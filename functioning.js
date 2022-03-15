const quotes = [
    {
        "quote": "When you have a dream, you've got to grab it and never let go."
        , "author": "Carol Burnett"
    },
    {
        "quote": "Nothing is impossible. The word itself says 'I'm possible!'"
        , "author": "Audrey Hepburn"
    },
    {
        "quote": "There is nothing impossible to they who will try."
        , "author": "Alexander the Great"
    },
    {
        "quote": "The bad news is time flies. The good news is you're the pilot."
        , "author": " Michael Altshuler"
    },
    {
        "quote": "Life has got all those twists and turns. You've got to hold on tight and off you go."
        , "author": "Nicole Kidman"
    },
    {
        "quote": "Keep your face always toward the sunshine, and shadows will fall behind you."
        , "author": "Walt Whitman"
    },
    {
        "quote": "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell."
        , "author": "Amal Clooney"
    },
    {
        "quote": "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box."
        , "author": "Duchess Meghan"
    },
    {
        "quote": "I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened … it's normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please."
        , "author": " Taylor Swift"
    },
    {
        "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts."
        , "author": "Winston Churchill"
    },
    {
        "quote": "You define your own life. Don't let other people write your script."
        , "author": "Oprah Winfrey"
    },
    {
        "quote": "You are never too old to set another goal or to dream a new dream."
        , "author": "Malala Yousafzai"
    },
    {
        "quote": "At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you're comfortable with it."
        , "author": " Dr. Phil"
    },
    {
        "quote": "People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you're lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life."
        , "author": "Carrie Ann Moss"
    },
    {
        "quote": "For me, becoming isn't about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn't end."
        , "author": "Michelle Obama"
    },
    {
        "quote": "Spread love everywhere you go."
        , "author": "Mother Teresa"
    },
    {
        "quote": "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on."
        , "author": " Lady Gaga"
    },
    {
        "quote": "If you make your internal life a priority, then everything else you need on the outside will be given to you and it will be extremely clear what the next step is."
        , "author": "Gabrielle Bernstein"
    },
    {
        "quote": "You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens."
        , "author": "Mandy Hale"
    },
    {
        "quote": "You can be everything. You can be the infinite amount of things that people are."
        , "author": "Kesha"
    },
    {
        "quote": "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you."
        , "author": "Ralph Waldo Emerson"
    },
    {
        "quote": "I want to be in the arena. I want to be brave with my life. And when we make the choice to dare greatly, we sign up to get our asses kicked. We can choose courage or we can choose comfort, but we can't have both. Not at the same time."
        , "author": "Brene Brown"
    },
    {
        "quote": "I'm going to be gone one day, and I have to accept that tomorrow isn't promised. Am I OK with how I'm living today? It's the only thing I can help. If I didn't have another one, what have I done with all my todays? Am I doing a good job?"
        , "author": "Hayley Williams"
    },
    {
        "quote": "I am experienced enough to do this. I am knowledgeable enough to do this. I am prepared enough to do this. I am mature enough to do this. I am brave enough to do this."
        , "author": "Alexandria Ocasio-Cortez"
    },
    {
        "quote": "Belief creates the actual fact."
        , "author": "William James"
    },
    {
        "quote": "No matter what people tell you, words and ideas can change the world."
        , "author": "Robin Williams"
    },
    {
        "quote": "I'm not going to continue knocking that old door that doesn't open for me. I'm going to create my own door and walk through that."
        , "author": "Ava DuVernay"
    },
    {
        "quote": "It is during our darkest moments that we must focus to see the light."
        , "author": "Aristotle"
    },
    {
        "quote": "Not having the best situation, but seeing the best in your situation is the key to happiness."
        , "author": "Marie Forleo"
    },
    {
        "quote": "Believe you can and you're halfway there."
        , "author": "Theodore Roosevelt"
    },
    {
        "quote": "Weaknesses are just strengths in the wrong environment."
        , "author": "Marianne Cantwell"
    },
    {
        "quote": "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong."
        , "author": "Ella Fitzgerald"
    },
    {
        "quote": "Silence is the last thing the world will ever hear from me."
        , "author": "Marlee Matlin"
    },
    {
        "quote": "In a gentle way, you can shake the world."
        , "author": "Mahatma Gandhi"
    },
    {
        "quote": "Learning how to be still, to really be still and let life happen—that stillness becomes a radiance."
        , "author": "Morgan Freeman"
    },
    {
        "quote": "Everyone has inside of him a piece of good news. The good news is that you don't know how great you can be! How much you can love! What you can accomplish! And what your potential is!"
        , "author": "Anne Frank"
    },
    {
        "quote": "All you need is the plan, the road map, and the courage to press on to your destination."
        , "author": "Earl Nightingale"
    },
    {
        "quote": "I care about decency and humanity and kindness. Kindness today is an act of rebellion."
        , "author": "Pink"
    },
    {
        "quote": "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely."
        , "author": "Roald Dahl"
    },
    {
        "quote": "Try to be a rainbow in someone's cloud."
        , "author": "Maya Angelou"
    },
    {
        "quote": "We must let go of the life we have planned, so as to accept the one that is waiting for us."
        , "author": "Joseph Campbell"
    },
    {
        "quote": "Find out who you are and be that person. That's what your soul was put on this earth to be. Find that truth, live that truth, and everything else will come."
        , "author": "Ellen DeGeneres"
    },
    {
        "quote": "Real change, enduring change, happens one step at a time."
        , "author": "Ruth Bader Ginsburg"
    },
    {
        "quote": "Wake up determined, go to bed satisfied."
        , "author": "Dwayne “The Rock” Johnson"
    },
    {
        "quote": "Nobody built like you, you design yourself."
        , "author": "Jay-Z"
    },
    {
        "quote": "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, 'I lived through this horror. I can take the next thing that comes along.' You must do the thing you think you cannot do."
        , "author": "Eleanor Roosevelt"
    },
    {
        "quote": "I tell myself, 'You've been through so much, you've endured so much, time will allow me to heal, and soon this will be just another memory that made me the strong woman, athlete, and mother I am today."
        , "author": "Serena Williams"
    },
    {
        "quote": "Live your beliefs and you can turn the world around."
        , "author": "Henry David Thoreau"
    },
    {
        "quote": "Our lives are stories in which we write, direct and star in the leading role. Some chapters are happy while others bring lessons to learn, but we always have the power to be the heroes of our own adventures."
        , "author": "Joelle Speranza"
    },
    {
        "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving."
        , "author": "Albert Einstein"
    },
    {
        "quote": "Don't try to lessen yourself for the world; let the world catch up to you."
        , "author": "Beyoncé"
    },
    {
        "quote": "There's nothing more powerful than not giving a f—k."
        , "author": "Amy Schumer"
    },
    {
        "quote": "Faith is love taking the form of aspiration."
        , "author": "William Ellery Channing"
    },
    {
        "quote": "When it comes to luck, you make your own."
        , "author": "Bruce Springsteen"
    },
    {
        "quote": "If you don't like the road you're walking, start paving another one!"
        , "author": "Dolly Parton"
    },
    {
        "quote": "I have learned over the years that when one's mind is made up, this diminishes fear; knowing what must be done does away with fear."
        , "author": "Rosa Parks"
    },
    {
        "quote": "The moral of my story is the sun always comes out after the storm. Being optimistic and surrounding yourself with positive loving people is for me, living life on the sunny side of the street."
        , "author": "Janice Dean"
    },
    {
        "quote": "We generate fears while we sit. We overcome them by action."
        , "author": "Dr. Henry Link"
    },
    {
        "quote": "Dreams don't have to just be dreams. You can make it a reality; if you just keep pushing and keep trying, then eventually you'll reach your goal. And if that takes a few years, then that's great, but if it takes 10 or 20, then that's part of the process."
        , "author": "Naomi Osaka"
    },
    {
        "quote": "We are not our best intentions. We are what we do."
        , "author": "Amy Dickinson"
    },
    {
        "quote": "I've noticed when I fear something, if I just end up doing it, I'm grateful in the end."
        , "author": "Colleen Hoover"
    },
    {
        "quote": "Work hard, know your s—t, show your s—t, and then feel entitled."
        , "author": "Mindy Kaling"
    },
    {
        "quote": "We've been making our own opportunities, and as you prove your worth and value to people, they can't put you in a box. You hustle it into happening, right?"
        , "author": "Jennifer Lopez"
    },
    {
        "quote": "When you've seen beyond yourself, then you may find, peace of mind is waiting there."
        , "author": "George Harrison"
    },
    {
        "quote": "Out of the mountain of despair, a stone of hope."
        , "author": "Martin Luther King, Jr."
    },
    {
        "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals."
        , "author": "Zig Ziglar"
    },
    {
        "quote": "I'm realizing how much I've diminished my own power. I'm not doing that no more."
        , "author": "Alicia Keys"
    },
    {
        "quote": "You are never too old to set another goal or to dream a new dream."
        , "author": "C.S. Lewis"
    },
    {
        "quote": "I believe that if you'll just stand up and go, life will open up for you. Something just motivates you to keep moving."
        , "author": "Tina Turner"
    },
    {
        "quote": "How wild it was, to let it be."
        , "author": "Cheryl Strayed"
    },
    {
        "quote": "The simple act of listening to someone and making them feel as if they have truly been heard is a most treasured gift."
        , "author": "L. A. Villafane"
    },
    {
        "quote": "You have to be where you are to get where you need to go."
        , "author": "Amy Poehler"
    },
    {
        "quote": "Don't be afraid. Because you're going to be afraid. But remember when you become afraid, just don't be afraid."
        , "author": "Joan Jett"
    },
    {
        "quote": "We need to take risks. We need to go broke. We need to prove them wrong, simply by not giving up."
        , "author": "Awkwafina"
    },
    {
        "quote": "The only limit to our realization of tomorrow will be our doubts today."
        , "author": "Franklin Delano Roosevelt"
    },
    {
        "quote": "It is never too late to be what you might have been."
        , "author": "George Eliot"
    },
    {
        "quote": "You do not find the happy life. You make it."
        , "author": "Camilla Eyring Kimball"
    },
    {
        "quote": "We all have problems. But it's not what happens to us, [it's] the choices we make after."
        , "author": "Elizabeth Smart"
    },
    {
        "quote": "You don't have to be defined or confined by your environment, by your family circumstances, and certainly not by your race or gender."
        , "author": "Mariah Carey"
    },
    {
        "quote": "When we let fear be our master, we cannot be happy and free as a butterfly. But when we choose to trust the journey and embrace love and joy, we are free to fly."
        , "author": "Annicken R. Day"
    },
    {
        "quote": "Definitions belong to the definers, not the defined."
        , "author": "Toni Morrison"
    },
    {
        "quote": "You must find the place inside yourself where nothing is impossible."
        , "author": "Deepak Chopra"
    },
    {
        "quote": "Whatever you think the world is withholding from you, you are withholding from the world."
        , "author": "Eckhart Tolle"
    },
    {
        "quote": "Perfection is not attainable, but if we chase perfection we can catch excellence."
        , "author": "Vince Lombardi"
    },
    {
        "quote": "A lot of people are afraid to say what they want. That's why they don't get what they want."
        , "author": "Madonna"
    },
    {
        "quote": "We have to let go of who we think we should be and embrace what is."
        , "author": "Achea Redd"
    },
    {
        "quote": "I don't look ahead. I'm right here with you. It's a good way to be."
        , "author": "Danny DeVito"
    },
    {
        "quote": "It ain't about how hard you hit. It's about how hard you can get hit and keep moving forward."
        , "author": "Sylvester Stallone"
    },
    {
        "quote": "I will not let anyone scare me out of my full potential."
        , "author": "Nicki Minaj"
    },
    {
        "quote": "We have to be better. We have to love more, hate less. We've gotta listen more and talk less. We've gotta know that this is everybody's responsibility."
        , "author": "Meghan Rapinoe"
    },
    {
        "quote": "Trying to grow up is hurting. You make mistakes. You try to learn from them, and when you don't, it hurts even more."
        , "author": "Aretha Franklin"
    },
    {
        "quote": "Never bend your head. Always hold it high. Look the world straight in the eye."
        , "author": "Helen Keller"
    },
    {
        "quote": "Let love rule."
        , "author": "Lenny Kravitz"
    },
    {
        "quote": "The power of imagination makes us infinite."
        , "author": "John Muir"
    },
    {
        "quote": "The only journey is the one within."
        , "author": "Rainer Maria Rilke"
    },
    {
        "quote": "If my mind can conceive it, if my heart can believe it, then I can achieve it."
        , "author": "Muhammad Ali"
    },
    {
        "quote": "Embrace the glorious mess that you are."
        , "author": "Elizabeth Gilbert"
    },
    {
        "quote": "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky."
        , "author": "Rabindranath Tagore"
    },
    {
        "quote": "Being vulnerable is a strength, not a weakness."
        , "author": "Selena Gomez"
    },
    {
        "quote": "In order for the light to shine so brightly, the darkness must be present."
        , "author": "Sir Francis Bacon"
    },
];

let newColor = [
    "#FFFBDB",
    "#CDC7E5",
    "#7776BC",
    "#FFEC51",
    "#FF674D",
    "#ACD8AA",
    "#F48498",
    "#E5BEED",
    "#736B92",
    "#B2EF9B",
    "#BCF8EC"
];
function randomColor() {
    return newColor[Math.floor(Math.random() * 11)];
}

function randomQuote() {
    let boxColor = randomColor();
    let current = quotes[Math.floor(Math.random() * 100)];
    let domQuote = document.getElementById("quote");
    let domAuthor = document.getElementById("author");
    let domNewQuote = document.getElementById("new-quote");

    domQuote.innerHTML=current.quote;
    domAuthor.innerHTML = "- " + current.author;
    domAuthor.style.color=boxColor;
    domQuote.style.color=boxColor;
    document.body.style.backgroundColor = boxColor;
    domNewQuote.style.backgroundColor = boxColor;
    // console.log(boxColor);
}
