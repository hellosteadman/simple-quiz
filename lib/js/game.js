var Game = function(data) {
    function shuffle(o) {
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    function hash(str) {
        var hash = 0, i, chr;
        if (str.length == 0) {
            return hash;
        }

        for (i = 0, l = str.length; i < l; i++) {
            chr = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0;
        }

        return hash;
    };

    function fire(evt, data) {
        if(typeof(events[evt]) != 'undefined') {
            for(var key in events[evt]) {
                events[evt][key](data);
            }
        }
    };

    self.title = data.title;
    self.questions = shuffle(data.questions);
    self.templates = new TemplateRegistry();
    self.judgements = data.judgements;
    self.url = data.url;
    self.facebook_id = data.facebook_id;
    self.points = 0;
    self.correct = 0;
    self.incorrect = 0;
    self.round = 0;
    self.rounds = data.rounds;
    self.lives = data.lives;

    var events = {};
    self.nextRound = function() {
        var question = questions.pop();
        var cards = $('#cards');
        var started = new Date().getTime();

        for(var i = 0; i < question.answers.length; i ++) {
            question.answers[i] = {
                'text': question.answers[i],
                'index': i
            };
        }

        question.answers = shuffle(question.answers);
        if(self.round == self.rounds) {
            self.end();
            return;
        }

        self.round ++;
        self.templates.get('question').on('render',
            function(html) {
                var card = $(html).addCard();

                card.find('ul.answers li').each(
                    function() {
                        var index = parseInt($(this).attr('data-index'));
                        var correct = parseInt($(this).closest('ul').attr('data-correct'));

                        $(this).find('a').on('click',
                            function(e) {
                                var ended = new Date().getTime();
                                var points = 500 - Math.round((ended - started) / 100);

                                e.preventDefault();
                                if(index == correct) {
                                    self.correct ++;
                                    if(points > 0) {
                                        self.points += points;
                                        fire('score', self.points);
                                    }

                                    fire('correct');
                                    $(this).addClass('correct');
                                } else {
                                    self.incorrect ++;
                                    self.lives --;
                                    $(this).addClass('incorrect');
                                    fire('incorrect');
                                }

                                setTimeout(
                                    function() {
                                        card.removeCard(
                                            function() {
                                                if(self.lives == 0) {
                                                    self.end();
                                                } else {
                                                    self.nextRound();
                                                }
                                            }
                                        );
                                    },
                                    500
                                );
                            }
                        );
                    }
                );

                cards.append(card);
            }
        ).render(
            {
                question: question
            }
        );
    };

    self.start = function() {
        self.nextRound();
    };

    self.end = function() {
        var judgement = {};

        for(var threshold in self.judgements) {
            if(self.points >= threshold) {
                judgement = self.judgements[threshold];
            }
        }

        self.templates.get('end').on('render',
            function(html) {
                var card = $(html);
                $('#cards').append(card);
                fire('end');
            }
        ).render(
            {
                points: self.points,
                correct: self.correct,
                incorrect: self.incorrect,
                judgement: judgement,
                title: game.title
            }
        );
    };

    self.on = function(evt, callback) {
        if(typeof(events[evt]) == 'undefined') {
            events[evt] = {};
        }

        var sig = hash(callback.toString());
        if(typeof(events[evt][sig]) == 'undefined') {
            events[evt][sig] = callback;
        }
    };

    self.off = function(evt, callback) {
        if(typeof(callback) == 'undefined') {
            events[evt] = {};
        } else if(typeof(events[evt]) != 'undefined') {
            var newList = {};
            var sig = hash(callback.toString());

            for(var key in events[evt]) {
                if(key != sig) {
                    newList[key] = events[evt][key];
                }
            }

            events[evt] = newList;
        }
    };

    return self;
};
