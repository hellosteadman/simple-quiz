var game = new Game(
    {
        title: 'Trivia Detective',
        rounds: 10,
        url: 'https://poddle.io/play/td/',
        facebook_id: '120r87240872408',
        lives: 3,
        questions: [
            {
                prompt: 'Who performs the opening theme?',
                answers: [
                    'The Thompson Twins',
                    'The Walker Brothers',
                    'Handsome Family'
                ],
                correct: 2
            },
            {
                prompt: 'What\'s Detective Hart\'s middle name?',
                answers: [
                    'Carl',
                    'Eric',
                    'Philip'
                ],
                correct: 1
            },
            {
                prompt: 'What was Cohle\'s old nickname?',
                answers: [
                    'The Taxman',
                    'The Accountant',
                    'The Surveyor'
                ],
                correct: 0
            },
            {
                prompt: 'What food stuff was used to describe the \'monster\'?',
                answers: [
                    'Spaghetti',
                    'Noddle',
                    'Tapioca'
                ],
                correct: 0
            },
            {
                prompt: 'What is the name of the Governor?',
                answers: [
                    'The Reverend Cuddy',
                    'The Reverend Tuttle',
                    'The Reverend Cullen'
                ],
                correct: 1
            },
            {
                prompt: 'What\'s the name of the department Cohle used to work?',
                answers: [
                    'NIDTA',
                    'NTSC',
                    'RSPB'
                ],
                correct: 0
            },
            {
                prompt: 'Michelle Monaghan plays which character?',
                answers: [
                    'Lisa Tragnetti',
                    'Charlie Lange',
                    'Maggie Hart'
                ],
                correct: 2
            },
            {
                prompt: 'Which psychiatric hospital was Cohle an out-patient of?',
                answers: [
                    'North Shore, Lubbock, TX',
                    'West Jefferson Medical Center, LA',
                    'Hermitage Hall, TN'
                ],
                correct: 0
            },
            {
                prompt: 'Who does Rust say bad men keep from the door?',
                answers: [
                    'The wolf',
                    'The other bad men',
                    'The one who knocks'
                ],
                correct: 1
            },
            {
                prompt: 'What is Hart and Cohle\'s car number?',
                answers: [
                    'I23',
                    'I5',
                    'I52'
                ],
                correct: 0
            },
            {
                prompt: 'Rust works a bar most nights. What\'s his big day off?',
                answers: [
                    'Wednesday',
                    'Thursday',
                    'Saturday'
                ],
                correct: 1
            },
            {
                prompt: 'What is the name of the hurricane that destroyed the original case files?',
                answers: [
                    'Rita',
                    'Roseline',
                    'Linda'
                ],
                correct: 0
            },
            {
                prompt: 'Who was the victim of the Lake Charles murder?',
                answers: [
                    'Janice K Torrence',
                    'Madeline P Macabe',
                    'Stephanie L Kardish'
                ],
                correct: 2
            },
            {
                prompt: 'In what year did Marie Fontenot go missing?',
                answers: [
                    '1990',
                    '1991',
                    '1994',
                ],
                correct: 0
            },
            {
                prompt: 'What\'s the name of the biker gang Cohle hooks up with?',
                answers: [
                    'The Iron Giants',
                    'The Iron Crusaders',
                    'The Iron Champions'
                ],
                correct: 1
            },
            {
                prompt: 'After leaving the police, where did Rust go?',
                answers: [
                    'Alaska',
                    'Atlanta',
                    'Alabama'
                ],
                correct: 0
            },
            {
                prompt: 'Who interviews Marty and Rust?',
                answers: [
                    'McGinley & Gabel',
                    'Martaux & Griswald',
                    'Papania & Gilbough'
                ],
                correct: 2
            },
            {
                prompt: 'In which decade did the Reverend open his Foundation?',
                answers: [
                    '1970s',
                    '1980s',
                    '1990s'
                ],
                correct: 1
            },
            {
                prompt: 'Who wrote The King in Yellow, from which the show draws influence?',
                answers: [
                    'Robert W Chambers',
                    'Robert Browning',
                    'Robert the Bruce'
                ],
                correct: 0
            },
            {
                prompt: 'What\'s the name of Rust\'s theory concerning the nature of space-time?',
                answers: [
                    'The K-Hole Theory',
                    'The M-Brane Theory',
                    'The Gimble Theory'
                ],
                correct: 1
            }
        ],
        judgements: {
            2000: {
                self: "I'm a proper fanboy.",
                third: "You know your Tuttles from your Rusts. You're a proper fanboy."
            },
            1000: {
                self: "I like it, I'm not a nerd about it.",
                third: "You've clearly seen the show, but you're not a herd about it."
            },
            500: {
                self: "I wasn't really paying attention.",
                third: "You weren't really paying attention while it was on."
            },
            0: {
                self: "I'm a 6-minute tracking shot away from oblivion.",
                third: "You're a 6-minute tracking shot away from oblivion. Your True Detective knowledge sucks."
            }
        }
    }
);
