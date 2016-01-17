$.fn.addCard = function() {
    var card = $(this);
    var round = game.round.toString();

    while(round.length < 2) {
        round = '0' + round;
    }

    card.addClass(
        card.attr('data-in')
    ).css(
        {
            'background-image': 'url(\'assets/questions/' + round + '.png\')'
        }
    ).addClass('question-' + game.round);

    return card;
};

$.fn.removeCard = function(callback) {
    var card = $(this);

    card.removeClass(
        card.attr('data-in')
    ).addClass(
        card.attr('data-out')
    );

    setTimeout(
        function() {
            card.remove();
            callback();
        },
        500
    );

    return card;
};

$(document).ready(
    function() {
        var sounds = {};

        $('header .title').html(game.title);
        $('#cards').css(
            {
                height: $(window).height()
            }
        );

        game.on('score',
            function(p) {
                $('header .points').html(p);
            }
        );

        game.on('correct',
            function() {
                if(typeof(sounds.correct) != 'undefined') {
                    sounds.correct.play();
                }
            }
        );

        game.on('incorrect',
            function() {
                if(typeof(sounds.incorrect) != 'undefined') {
                    sounds.incorrect.play();
                }

                $('header .life.active').first().removeClass('active');
            }
        );

        game.on('end',
            function() {
                $('.card.end .twitter a').on('click',
                    function(e) {
                        e.preventDefault();
                        window.open(
                            'http://twitter.com/share?url=' + escape(game.url) +
                                '&text=' + escape(
                                    $(this).attr('data-judgement')
                                ) + '&via=poddlefm',
                            'tweet',
                            'width=640, height=256'
                        );
                    }
                );

                $('.card.end .facebook a').on('click',
                    function(e) {
                        e.preventDefault();

                        FB.ui(
                            {
                                method: 'feed',
                                link: game.url,
                                caption: $(this).attr('data-judgement'),
                            }
                        );
                    }
                );
            }
        );

        $('.intro a.go').on('click',
            function() {
                $('.intro').removeCard(
                    function() {
                        game.start();
                        if(typeof(sounds.start) != 'undefined') {
                            sounds.start.play();
                        }
                    }
                );
            }
        );

        soundManager.setup(
            {
                url: 'lib/swf/',
                onready: function() {
                    sounds.start = soundManager.createSound(
                        {
                            id: 'start',
                            url: 'assets/mp3/start.mp3'
                        }
                    );

                    sounds.correct = soundManager.createSound(
                        {
                            id: 'correct',
                            url: 'assets/mp3/correct.mp3'
                        }
                    );

                    sounds.incorrect = soundManager.createSound(
                        {
                            id: 'incorrect',
                            url: 'assets/mp3/incorrect.mp3'
                        }
                    );
                },
                ontimeout: function() {
                    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
                }
            }
        );
    }
);
