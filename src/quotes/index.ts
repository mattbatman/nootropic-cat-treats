const quotes = [
  {
    quote: '<p>You ever tried skiing on mushrooms?</p>',
    quotee: 'Aubrey Marcus',
    platform: 'Joe Rogan Experience, #878',
    link: 'https://www.youtube.com/watch?v=2xplJOx3Vjw&t=2h27m49s',
    length: 'short'
  },
  {
    quote: `
    <p>
      You’ve probably heard the fable about &mdash; I think it’s Buridan’s donkey,
      who &mdash; it’s a fable about a donkey that is standing halfway in-between a pile
      of hay and a bucket of water. And he just keeps looking left, to the hay, or
      right, to the water, trying to decide. Hay, or water? Hay, or water? And he
      is unable to decide, so he eventually falls over and dies of both hunger and thirst.
    </p>
    `,
    quotee: 'Derek Sivers',
    platform: 'The Tim Ferriss Show',
    link: 'http://fourhourworkweek.com/2016/11/21/tools-of-titans-derek-sivers-distilled/',
    length: 'medium'
  },
  {
    quote: `
    <p>Dear God,</p>
    <p>
      Thank you so much for letting us exist. I can’t believe we got even a few moments
      to experience what it’s like to be thrust into time as monkey-descendants
      with an advanced biocomputer that allows us to experience a past, present, and
      future.
    </p>
    <p>
      And though, at this moment, we may find ourselves surrounded by deeply
      brainwashed weirdos whose entire conceptualization of reality has been constructed
      for them by religious institutions, corporations, or politicians, please help
      us remember that our family is actually me, wrapped around the infinite
      goodness of the universe, and just because we’re currently acting like vicious
      hyenas doesn’t mean that we don’t suffer, just like anyone else.
    </p>
    <p>
      Help us see beyond our temporary mask of cuntiness, to the never ending transcendent glory
      that our puffy, wrinkled, alcoholic, racist, intolerant, hypocritical, news-obsessed
      skin-suits hang upon. And thank you for this incredible show called human
      incarnation.
    </p>
    <p>
      Please grant everyone at this table a lifetime of ever increasing,
      powerful orgasms &mdash; orgasms that move all of us in the direction of heightened
      states of consciousness, so that we can truly allow ourselves to surrender
      to the strange attractor at the end of time, that is rapidly transforming
      history into something that will be completely unrecognizable to those that
      survive the economic and societal upheavals that await for us as we go plunging
      into the singularity.
    </p>
    <p>Thank you God, Hare Krishna</p>
    `,
    quotee: 'Duncan Trussell',
    platform: 'The Duncan Trussell Family Hour',
    link: 'http://www.duncantrussell.com/episodes/2016/11/22/emil-amos',
    length: 'long'
  },
  {
    quote: `
    <p>
      8 hours? There’s 24 hours in a day, bro. What are you worried about?
    </p>`,
    quotee: 'Joe Rogan',
    platform: 'Joe Rogan Experience, #895',
    link: 'https://www.youtube.com/watch?v=5r-vP3N2uAg&t=51m40s',
    length: 'short'
  },
  {
    quote: `
    <p>
      Before I had children, I used to think of people as being sort of static.
      Obviously I was younger, and when you’re &mdash; especially when you’re really
      young, when you’re like 20 or something like that &mdash; you don’t really take
      into consideration that the people around you used to be your age. You
      kind of know it in an abstract sort of a sense, but once you actually have
      a baby, and then like, 5 years later the baby’s talking to you and you’re
      having conversations, you’re like, “Ah, you’re fucking learning shit now.”
      And then 10 years later the baby’s in high school, and you’re like, “Oh
      Jesus Christ, you’re almost a man.” And then...well, you realize, “Oh, we’re
      all babies who had babies.” And then you raise those babies, and then they
      become adults and have babies of their own, but there are no grown-ups.
      It’s bullshit. It doesn’t exist. Like, when you’re a kid and you’re sad and
      you go, “Oh, one day I’m going to be a grown-up and this is all going to
      make sense.” But that day never comes. You get older, but you’re a baby
      still. You’re just an old baby. You’re an old baby with a car and fucking
      credit card debt. And then you have a baby and then that baby grows up.
    </p>
    `,
    quotee: 'Joe Rogan',
    platform: 'Joe Rogan Experience, #891',
    link: 'https://www.youtube.com/watch?v=g5AKVbx2M38&t=1h24m50s',
    length: 'medium'
  },
  {
    quote: `
    <p>
      At a certain point in time, you go, “How much fucking sand is left in this
      goddamned hour glass? What are we doing with it?” You know? Are we on a
      continued path of improvement and spiritual enlightenment, or do we
      eventually go, “Hey, guys, there’s a cliff coming up. Let’s just have a
      drink. There’s a fucking cliff. There’s a cliff right over there. We’re
      both looking at it."
    </p>
    `,
    quotee: 'Joe Rogan',
    platform: 'Joe Rogan Experience, #888',
    link: 'https://www.youtube.com/watch?v=tka857PmVXg&t=1h00m20s',
    length: 'medium'
  },
  {
    quote: `
    <p>
      Have you ever heard of when people get poop transfusions?
    </p>
    <p>
      No.
    </p>
    <p>
      Yeah, they’ll take poop from a healthy person...
    </p>
    <p>
      No!
    </p>
    <p>
      Yes! Yes! It’s a real thing!
    </p>
    <p>
      Ass to ass?
    </p>
    <p>
      Well, they don’t make you go butt-to-butt with somebody. I think they go
      in and fish it out and they shoot it up in you. But they literally will
      shoot somebody else’s poop up your asshole, into your body. And some
      people even swallow poop tablets.
    </p>
    `,
    quotee: 'Joe Rogan to Greg Fitzsimmons',
    platform: 'Joe Rogan Experience, #902',
    link: 'https://www.youtube.com/watch?v=OYK84qCWz_M&t=23m10s',
    length: 'medium'
  },
  {
    quote: `
    <p>
      I didn’t let my brother AJ score on me in basketball &mdash; he’s 11 years
      younger than me &mdash; until he was like, 15. Score. Like, score.
    </p>
    <p>
      You wouldn’t let him?
    </p>
    <p>
      No! Now I have a 4 year old guy &mdash; Zander my little guy &mdash; he’s got a weird
      condition. When he picks up the basketball, he starts kind of weirdly
      crying, because he knows dad’s going to come out of somewhere and block the
      fucking shit out of him. And so I posted this thing about it today on
      instagram, and it was funny to watch everybody. I mean everybody’s into
      these fucking eigth place trophies &mdash; I want to kill people. Like, all this
      fake infrastructure of fake fucking self-esteem and then these kids
      go into the market, and they get punched in the mouth and they don’t know
      what to do.
    </p>
    `,
    quotee: 'Gary Vaynerchuk to Joe Rogan',
    platform: 'Joe Rogan Experience, #910',
    link: 'https://www.youtube.com/watch?v=OLHdzLpMg-s&t=49m00s',
    length: 'medium'
  },
  {
    quote: `
    <p>
      You know the problem with, “woe is me?” Nobody’s fucking
      listening. My friends, let me tell you who’s listening to you
      complain. Either the two or three people that kind of have
      to because they’re your parents, or your other fucking losing
      friends. Nobody gives a fuck. That’s the problem. What nobody
      understands about complaining is that it has zero ROI.
    </p>
    `,
    quotee: 'Gary Vaynerchuk',
    platform: 'Joe Rogan Experience, #910',
    link: 'https://www.youtube.com/watch?v=OLHdzLpMg-s&t=1h34m45s',
    length: 'medium'
  },
  {
    quote: `
    <p>
      If anybody’s made it that looks like you &mdash; that’s it. That’s
      it. There’s a blueprint.
    </p>
    `,
    quotee: 'Gary Vaynerchuk',
    platform: 'Joe Rogan Experience, #910',
    link: 'https://www.youtube.com/watch?v=OLHdzLpMg-s&t=1h35m25s',
    length: 'short'
  },
  {
    quote: `
    <p>
      You understand that there’s a very big difference between
      being an entrepreneur, and being a successful entrepreneur?
      But the market right now &mdash; everyone’s like, "Oh, you’re a CEO
      and entrepreneur?" Like, as if you won. That’s like me saying,
      "I’m a basketball player." I play basketball...I’m not making
      any fucking money.
    </p>
    `,
    quotee: 'Gary Vaynerchuk',
    platform: 'Joe Rogan Experience, #910',
    link: 'https://www.youtube.com/watch?v=OLHdzLpMg-s&t=1h39m30s',
    length: 'medium'
  },
  {
    quote: `
    <p>
      When I was a kid, being an entrepreneur meant you were a loser
      and had an idea.
    </p>
    `,
    quotee: 'Gary Vaynerchuk',
    platform: 'Joe Rogan Experience, #910',
    link: 'https://www.youtube.com/watch?v=OLHdzLpMg-s&t=1h40m00s',
    length: 'short'
  },
  {
    quote: `
    <p>
      I’m from the generation where people made fun of my dad
      because I didn’t open a second wine store and I went on the
      internet.
    </p>
    `,
    quotee: 'Gary Vaynerchuk',
    platform: 'Joe Rogan Experience, #910',
    link: 'https://www.youtube.com/watch?v=OLHdzLpMg-s&t=1h41m30s',
    length: 'short'
  },
  {
    quote: `
    <p>
      "The telephone is not a viable product," was once said by
      people that didn’t want the telephone to win.
    </p>
    `,
    quotee: 'Gary Vaynerchuk',
    platform: 'Joe Rogan Experience, #910',
    link: 'https://www.youtube.com/watch?v=OLHdzLpMg-s&t=1h42m00s',
    length: 'short'
  },
  {
    quote: `
    <p>
      If you’re lucky enough, right now, to be listening, and you’re
      good at what you like &mdash; become tunnel fucking vision.
    </p>
    `,
    quotee: 'Gary Vaynerchuk',
    platform: 'Joe Rogan Experience, #910',
    link: 'https://www.youtube.com/watch?v=OLHdzLpMg-s&t=1h42m40s',
    length: 'short'
  },
  {
    quote: `
    <p>
      Have the conversation with the person that’s holding you back.
      The reason most people who are listening right now are not
      doing "that thing" is because they’re worried about the opinion
      of somebody.
    </p>
    `,
    quotee: 'Gary Vaynerchuk',
    platform: 'Joe Rogan Experience, #910',
    link: 'https://www.youtube.com/watch?v=OLHdzLpMg-s&t=1h42m55s',
    length: 'short'
  },
  {
    quote: `
    <p>
      We have to get to a place where you’re doing you, because
      the number one thing that scares the fuck out of me is regret.
      And you’re going to sit there at 72, and you’re going to say,
      "I wish. I wish. I wish."
    </p>
    `,
    quotee: 'Gary Vaynerchuk',
    platform: 'Joe Rogan Experience, #910',
    link: 'https://www.youtube.com/watch?v=OLHdzLpMg-s&t=1h43m15s',
    length: 'short'
  },
  {
    quote: `
    <p>
      If you have a handle on your annual spending, and you know how much you
      need to live on, all you need to do is save up 25 times that amount &mdash;
      and on the very, very conservative side let’s say 28 times that amount &mdash;
      in conservative investments like a giant vanguard index fund, and that’s
      enough to fund you with passive income with a high degree of safety for
      the rest of your life. So, if you have &mdash; let’s just keep the numbers
      simple &mdash; if you need $30,000 to live on, multiply that by 25 and
      &mdash; ah darn, I’m giving myself a tricky math question &mdash; I’m thinking
      that’s like $750,000 you’d need saved up or something like that to quit forever.
      And that’s a lot less than most people think. Most people, at least in my
      age group &mdash; they’re shooting for the tens of millions type of range
      if they were to ever quit work early, and they haven’t really done the
      math on how easy it really is.
    </p>
    `,
    quotee: 'Mr. Money Mustache (Pete Adeney)',
    platform: 'The Tim Ferriss Show, #221',
    link: 'http://tim.blog/2017/02/13/mr-money-mustache/',
    length: 'medium'
  },
  {
    quote: `
    <p>
      When somebody tries to explain recursion to you using Fibonacci numbers,
      you must murder them. I know that sounds rough, because they might be your
      friend and they only mean well, but they must die.
    </p>
    `,
    quotee: 'Mattias Petter Johansson (MPJ)',
    platform: 'Recursion - Part 7 of Functional Programming in JavaScript',
    link: 'https://www.youtube.com/watch?v=k7-N8R0-KY4&index=7&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&t=1m5s',
    length: 'short'
  },
  {
    quote: `
    <p>
      This is, by the way, a good trick whenever you’re programming
      &mdash; to always think about what it is you’re doing &mdash;
      what is my end goal? &mdash; instead of just starting to code.
      I think one of the most common mistakes in programming is to
      start coding too early. Take some time to think about your
      problem and where you’re going and that will save you a lot
      of time.
    </p>
    `,
    quotee: 'Mattias Petter Johansson (MPJ)',
    platform: 'Recursion - Part 7 of Functional Programming in JavaScript',
    link: 'https://www.youtube.com/watch?v=k7-N8R0-KY4&index=7&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&t=8m45s',
    length: 'medium'
  },
  {
    quote: `
    <p>
      There was an article in Scientific American how people &mdash;
      and granted I’m sure this study was skewed and it’s a specific,
      you know, group of people that sign-up for a study &mdash;
      but that when someone was wrong, when someone told them they
      were wrong, it made them believe their point even more.
      But if you say to them &mdash; and I think that it’s the CIA
      that uses this as a form of questioning &mdash; is that you
      first have to legitimize their position before you suggest
      that there might be something flawed about it. So you go like,
      "I totally understand that you would think that &mdash; you
      know &mdash; the earth is flat. I can see why you would have
      thought that. I mean you grew up here. Of course you thought
      that." If you empathize with them first, and then say, “You
      know, but, turns out it’s round,” they’re more likely to
      come around. But if you say, “Hey, you know that’s fucking
      wrong," and if you show them proof, they double down even further.
    </p>
    `,
    quotee: 'Whitney Cummings',
    platform: 'Joe Rogan Experience, #910',
    link: 'https://www.youtube.com/watch?v=v_P55Bexc5s&t=2h26m20s',
    length: 'long'
  },
  {
    quote: `
    <p>
      Are we talking about chemtrails now?
    </p>
    <p>
      No. No. We’re talking about stratospheric aerosol injections.
    </p>
    `,
    quotee: 'Joe Rogan and Eddie Bravo',
    platform: 'Joe Rogan Experience, #911',
    link: 'https://www.youtube.com/watch?v=UZPCp8SPfOM&t=1h23m30s',
    length: 'short'
  },
  {
    quote: `
    <p>
      But it’s just like anything else. It’s sticking with it. Right now, I’m in
      a slump. So what do you do as a baseball player &mdash; Jamie, when you’re
      in a slump, what do you do as a baseball player? You quit? No! You keep
      fuckin’ hittin’! And you keep striking out and you keep fuckin’ striking out
      and you keep it together.
    </p>
    `,
    quotee: 'Joey Diaz',
    platform: 'Joe Rogan Experience, #926',
    link: 'https://www.youtube.com/watch?v=-mQjF-tPdiI&t=1h29m00s',
    length: 'medium'
  },
  {
    quote: `
    <p>
      It’s a hunt. It’s a pursuit. It’s a constant thing that’s
      going on all the time, and when you’re in the middle of it,
      in motion, that’s when you feel your best. But the discomfort
      of that motion makes people so uneasy that they feel like,
      “Well, I’m gonna go through this discomfort, and then I’m
      going to get to a place of stillness, where it’s all going
      to make sense. Finally, I made it.”
    </p>
    <p>
      I’m here to tell you &mdash; that fucking place doesn’t exist.
      It doesn’t exist. It’s not a real place. It’s a place that
      people look to as an inspirational goal &mdash; a destination.
      And that’s going to be the thing that you work hard for.
      You’re going to push until you get to this place, and then
      it’s all going to be worth it. That place is not real. If you
      have a million dollars, you want a billion. If you have a big
      house, you want a bigger house.
    </p>
    <p>
      You have to find out what actually makes you happy. And it’s
      not having all your ducks in a row on paper. It’s improvement.
      It’s improvement in the way you manage your mind. It’s
      improvement in the way you manage your emotions. It’s
      understanding how you’ve made mistakes and how to improve
      upon them, and also understanding what you’ve done right and
      building upon that.
    </p>
    <p>
      All of those things are what make people happy &mdash;
      including love, and friendship, and being good at that.
      Being a good friend. Being a good lover. Being a good neighbor.
      All those things &mdash; those aren’t distractions &mdash;
      those are part of the big overall of being a human being.
    </p>
    `,
    quotee: 'Joe Rogan',
    platform: 'Joe Rogan on Happiness',
    link: 'https://www.youtube.com/watch?v=bMlsPTH62Ks',
    length: 'long'
  },
  {
    quote: `
    <p>
      From Rusticus...I learned to read carefully and not be satisfied with a
      rough understanding of the whole, and not to agree too quickly with those
      who have a lot to say about something.
    </p>
    `,
    quotee: 'Marcus Aurelius',
    platform: 'Meditations, 1.7.3 via The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance/dp/0735211736?tag=ryanholnet-20',
    length: 'short'
  },
  {
    quote: `
    <p>
      For this is what makes us evil &mdash; that none of us looks
      back upon our own lives. We reflect upon only that which we
      are about to do. And yet our plans for the future descend
      from the past.
    </p>
    `,
    quotee: 'Seneca',
    platform: 'Moral Letters, 83.2 via The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance/dp/0735211736?tag=ryanholnet-20',
    length: 'medium'
  },
  {
    quote: `
    <p>
      Each day presents the chance to overthink things.
    </p>
    `,
    quotee: 'Ryan Holiday and Stephen Hanselman',
    platform: 'The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance/dp/0735211736?tag=ryanholnet-20',
    length: 'short'
  },
  {
    quote: `
    <p>
      At every moment keep a sturdy mind on the task at hand, as a Roman and
      human being, doing it with strict and simple dignity, affection, freedom,
      and justice &mdash; giving yourself a break from all other considerations.
      You can do this if you approach each task as if it is your last, giving
      up every distraction, emotional subversion of reason, and all drama,
      vanity, and complaint over your fair share. You can see how mastery over
      a few things makes it possible to live an abundant and devout life &mdash;
      for, if you keep watch over these things, the gods won’t ask for more.
    </p>
    `,
    quotee: 'Marcus Aurelius',
    platform: 'Meditations, 2.5 via The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance/dp/0735211736?tag=ryanholnet-20',
    length: 'long'
  },
  {
    quote: `
    <p>
      If you wish to improve, be content to appear clueless or stupid in
      extraneous matters &mdash; don’t wish to seem knowledgeable. And if some
      regard you as important, distrust yourself.
    </p>
    `,
    quotee: 'Epictetus',
    platform: 'Enchiridion, 13a via The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic',
    length: 'medium'
  },
  {
    quote: `
    <p>
      Frame your thoughts like this &mdash; you are an old person, you won’t let
      yourself be enslaved by this any longer, no longer pulled like a puppet
      by every impulse, and you’ll stop complaining about your present fortune
      or dreading the future.
    </p>
    `,
    quotee: 'Marcus Auerelius',
    platform: 'Meditations, 2.2 via The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic',
    length: 'medium'
  },
  {
    quote: `
    <p>
      When I see an anxious person, I ask myself, what do they want? For if a
      person wasn’t wanting something outside of their own control, why would
      they be stricken by anxiety?
    </p>
    `,
    quotee: 'Epictetus',
    platform: 'Discourses, 2.13.1 via The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic',
    length: 'short'
  },
  {
    quote: `
    <p>
      Who then is invincible? The one who cannot be upset by anything outside
      their reasoned choice.
    </p>
    `,
    quotee: 'Epictetus',
    platform: 'Discourses, 1.18.21 via The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic',
    length: 'short'
  },
  {
    quote: `
    <p>
      Anyway, I’m sorry. I know I haven’t been my best this past decade.
    </p>
    `,
    quotee: 'Steve Zissou',
    platform: 'The Life Aquatic with Steve Zissou',
    link: 'https://www.amazon.com/Life-Aquatic-Steve-Zissou/dp/B006C0AT9O/ref=sr_1_1?ie=UTF8&qid=1493640677&sr=8-1&keywords=a+life+aquatic',
    length: 'short'
  },
  {
    quote: `
    <p>
      And then you realize that this area of stuff that you don’t know is almost
      infinite. So, you realize that learning in programming &mdash; it cannot
      be completed. Not even close. You just have to pick like, a path inside of
      it and go slowly and just grow and compare yourself to the person that you
      were yesterday. That feeling of, “Oh my god, there is so much that I don’t
      know,” that feeling will not go away by learning more. It will grow - to a
      point where you just realize, “Oh...uh...OK."
    </p>
    `,
    quotee: 'Mattias Petter Johansson (MPJ)',
    platform: 'Top 8 developer Habits: Perseverance',
    link: 'https://www.youtube.com/watch?v=DwQ7psiU23I&t=10m50s',
    length: 'long'
  },
  {
    quote: `
    <p>
      That’s the thing about national conversations...not everyone gets to talk.
    </p>
    `,
    quotee: 'Cody Wilson',
    platform: 'Come and Take It',
    link: 'https://www.amazon.com/Come-Take-Printers-Guide-Thinking-ebook/dp/B01CO34MBI/ref=sr_1_4?ie=UTF8&qid=1494211026&sr=8-4&keywords=come+and+take+it',
    length: 'short'
  },
  {
    quote: `
    <p>
      Whenever you get an impression of some pleasure, as with any impression,
      guard yourself from being carried away by it, let it await your action,
      give yourself a pause. After that, bring to mind both times, first when
      you you have enjoyed the pleasure and later when you will regret it and
      hate yourself. Then compare to those the joy and satisfaction you’d feel
      for abstaining altogether. However, if a seemingly appropriate time arises
      to act on it, don’t be overcome by its comfort, pleasantness, and allure
      &mdash; but against all of this, how much better the consciousness of
      conquering it.
    </p>
    `,
    quotee: 'Epictetus',
    platform: 'Enchiridion, 34 via The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic',
    length: 'long'
  },
  {
    quote: `
    <p>
      Clear your mind and get a hold on yourself and, as when awakened from
      sleep and realizing it was only a bad dream upsetting you, wake up and
      see that what’s there is just like those dreams.
    </p>
    `,
    quotee: 'Marcus Aurelius',
    platform: 'Meditations, 6.31 via The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic',
    length: 'medium'
  },
  {
    quote: `
    <p>
      If someone asks you how to write your name, would you bark out each letter?
      And if they get angry, would you then return the anger? Wouldn’t you rather
      gently spell out each letter for them? So then, remember in life that your
      duties are the sum of individual acts. Pay attention to each of these as you
      do your duty...just methodically complete your task.
    </p>
    `,
    quotee: 'Marcus Aurelius',
    platform: 'Meditations, 6.26 via The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic',
    length: 'medium'
  },
  {
    quote: `
    <p>
      It is quite impossible to unite happiness with a yearning for what we
      don’t have.
    </p>
    `,
    quotee: 'Epictetus',
    platform: 'Discourses, 3.24.17 via The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic',
    length: 'short'
  },
  {
    quote: `
    <p>
      Remember to conduct yourself in life as if at a banquet.
      As something being passed around comes to you, reach out
      your hand and take a moderate helping. Does it pass you by?
      Don’t stop it. It hasn’t yet come? Don’t burn in desire for
      it, but wait until it arrives in front of you. Act this way
      with children, a spouse, toward position, with wealth &mdash;
      one day it will make you worthy of a banquet with the gods.
    </p>
    `,
    quotee: 'Epictetus',
    platform: 'Enchriridion, 15 via The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic',
    length: 'medium'
  },
  {
    quote: `
    <p>
      You shouldn’t give circumstances the power to rouse anger, for they don’t
      care at all.
    </p>
    `,
    quotee: 'Marcus Aurelius',
    platform: 'Meditations, 7.38 via The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic',
    length: 'short'
  },
  {
    quote: `
    <p>
      Keep in mind that it isn’t the one who has it in for you and takes a
      swipe that harms you, but rather the harm comes from your own belief
      about the abuse. So when someone arouses your anger, know that it’s really
      your own opinion fueling it. Instead, make it your first response not to
      be carried away by such impressions, for with time and distance
      self-mastery is more easily achieved.
    </p>
    `,
    quotee: 'Epictetus',
    platform: 'Enchiridion, 20 via The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic',
    length: 'medium'
  },
  {
    quote: `
    <p>
      Listen and connect with people, don’t perform for them.
    </p>
    `,
    quotee: 'Ryan Holiday and Stephen Hanselman',
    platform: 'Enchiridion, 20 via The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic',
    length: 'short'
  },
  {
    quote: `
    <p>
      If a person gave away your body to some passerby, you’d be furious. Yet
      you hand over your mind to anyone who comes along, so they may abuse you,
      leaving it disturbed and troubled &mdash; have you no shame in that?
    </p>
    `,
    quotee: 'Epictetus',
    platform: 'Enchiridion, 28 via The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic',
    length: 'medium'
  },
  {
    quote: `
    <p>
      Yesterday, I was on the road, and this woman is just tailing me so hard
      &mdash; coming around, getting all crazy &mdash; and I just look over at
      her, and I’m just like, "Easy. Like, eeeaaasssyyy. Like, live is good.
      You have a beautiful car. You look healthy and young and pretty. Whatever.
      Like, chill the hell out." You know? And I think people &mdash; they get
      so caught up in these little problems, and they let it manifest into
      something so great that they stop &mdash; they never stop to reflect that,
      “Hey, look &mdash; life is OK."
    </p>
    `,
    quotee: 'Jason Khalipa',
    platform: 'The Tim Ferriss Show, #246',
    link: 'http://tim.blog/2017/06/14/jason-khalipa/',
    length: 'medium'
  },
  {
    quote: `
    <p>
      There are two ways to be wealthy &mdash; to get everything you want or to
      want everything you have.
    </p>
    `,
    quotee: 'Ryan Holiday and Stephen Hanselman',
    platform: 'The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic',
    length: 'short'
  },
  {
    quote: `
    <p>
      It isn’t events themselves that disturb people, but only their judgments
      about them.
    </p>
    `,
    quotee: 'Epictetus, Enchiridion, 5',
    platform: 'The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic',
    length: 'short'
  },
  {
    quote: `
    <p>
      When your sparring partner scratches or head-butts you, you don’t then
      make a show of it, or protest, or view him with suspicion or as plotting
      against you. And yet you keep an eye on him, not as an enemy or with
      suspicion, but with a healthy avoidance. You should act this way with all
      things in life. We should give a pass to many things with our fellow
      trainees. For, as I’ve said, it’s possible to avoid without suspicion or
      hate.
    </p>
    `,
    quotee: 'Marcus Aurelius, Meditations, 6.20',
    platform: 'The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic',
    length: 'medium'
  },
  {
    quote: `
    <p>
      God laid down this law, saying: if you want some good, get it from yourself.
    </p>
    `,
    quotee: 'Epictetus, Discourses, 1.29.4',
    platform: 'The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic',
    length: 'short'
  },
  {
    quote: `
    <p>
      Such as your habitual thoughts, such also will be the character of your mind.
    </p>
    `,
    quotee: 'Marcus Aurelius',
    platform: 'The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic',
    length: 'short'
  },
  {
    quote: `
    <p>
      We are what we repeatedly do. Therefore, excellence is not an act but a habit.
    </p>
    `,
    quotee: 'Aristotle',
    platform: 'The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic',
    length: 'short'
  },
  {
    quote: `
    <p>
      One of my direct subordinates, one of my guys that worked for me &mdash; he would
      call me up, he would pull me aside with some major problem, some issue that
      was going on, and he’d say, "Boss, we got this and that and the other thing."
    </p>
    <p>
      And I’d look at him and I’d say, "Good."
    </p>
    <p>
      And finally one day he was telling me about some issue that he was having,
      some problem, and he said, "I already know what you’re going to say."
    </p>
    <p>
      And I said, "Well, what am I going to say?"
    </p>
    <p>
      And he said, "You’re going to say, ’good.’" He said, "That’s what you always say.
      When something is wrong and going bad, you always just look at me and say,
      ’good.’"
    </p>
    <p>
      And I said, "Well, yeah. When things are going bad, there’s going to be some
      good that’s going to come from it. Didn’t get the high-speed gear we wanted?
      Didn’t get promoted? Good. More time to get better. Oh, mission got canceled?
      Good. We can focus on our other one. Didn’t get funded? Didn’t get the job
      you wanted? Got injured? Sprained my ankle? Got tapped out? Good. Got beat?
      Good. You learned. Unexpected problems? Good. We have the opportunity to
      figure out a solution."
    </p>
    <p>
      That’s it. When things are going bad. Don’t get all bummed out. Don’t get
      startled. Don’t get frustrated.
    </p>
    <p>
      If you can say the word, "good." Guess what? It means you’re still alive.
      It means you’re still breathing. And if you’re still breating, well then
      hell &mdash; it means you’ve still got some fight left in you. So get up.
      Dust off. Reload. Recalibrate. Reengage. And go out on the attack.
    </p>
    `,
    quotee: 'Jocko Willink',
    platform: 'Jocko Podcast',
    link: 'https://www.youtube.com/watch?v=IdTMDpizis8',
    length: 'long'
  },
  {
    quote: `
    <p>
      We don’t tell ourselves, "I’m never going to write my symphony." Instead
      we say, "I’m going to write my symphony; I’m just going to start tomorrow."
    </p>
    `,
    quotee: 'Steven Pressfield',
    platform: 'The War of Art',
    link: 'https://www.amazon.com/War-Art-Through-Creative-Battles/dp/1936891026/ref=sr_1_1?ie=UTF8&qid=1503404221&sr=8-1&keywords=the+war+of+art',
    length: 'short'
  },
  {
    quote: `
    <p>
      We cry to God Almighty, how can we escape this agony? Fool, don’t you have
      hands? Or could it be God forgot to give you a pair? Sit and pray your
      nose doesn’t run! Or, rather just wipe your nose and stop seeking a
      scapegoat.
    </p>
    `,
    quotee: 'Epictetus',
    platform: 'Discourses, 2.16.13',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic',
    length: 'medium'
  },
  {
    quote: `
    <p>
      Don’t let your reflection on the whole sweep of life crush you. Don’t fill
      your mind with all the bad things that might still happen. Stay focused
      on the present situation and ask yourself why it’s so unbearable and can’t
      be survived.
    </p>
    `,
    quotee: 'Marcus Aurelius',
    platform: 'Meditations, 8.36',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic',
    length: 'medium'
  },
  {
    quote: `
    <p>
      That’s who you want to be, whatever your line of work: the casual, relaxed
      person in every situation who tells everyone else to take a breath and not
      to worry. Because you’ve got this. Don’t be the agitator, the paranoid,
      the worrier, or the irrational. Be the calm, not the liability.
    </p>
    `,
    quotee: 'Ryan Holiday and Stephen Hanselman',
    platform: 'The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance/dp/0735211736?tag=ryanholnet-20',
    length: 'medium'
  },
  {
    quote: `
    <p>
      If you are defeated once and tell yourself you will overcome, but carry
      on as before, know in the end you’ll be so ill and weakened that eventually
      you won’t even notice your mistake and will begin to rationalize your
      behavior.
    </p>
    `,
    quotee: 'Epictetus',
    platform: 'Discourses, 2.18.31',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance/dp/0735211736?tag=ryanholnet-20',
    length: 'medium'
  },
  {
    quote: `
    <p>
      When you see someone often flashing their rank or position, or someone
      whose name is often bandied about in public, don't be envious; such things
      are bought at the expense of life. Some die on the first rungs of the
      ladder of success, others before they can reach the top, and the few that
      make it to the top of their ambition through a thousand indignities realize
      at the end it's only for an inscription on their gravestone.
    </p>
    `,
    quotee: 'Seneca',
    platform: 'On the Brevity of Life, 20',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance/dp/0735211736?tag=ryanholnet-20',
    length: 'medium'
  },
  {
    quote: `
    <p>
      You hear about a friend who has cancer, and you think like, "What would I
      do if I had cancer?" You do have cancer. You’re going to fucking die. You
      do have cancer. You just don’t &mdash; first off, because lot’s of people
      do have cancer, so there’s a good chance the cells are already in your
      body. But like, you do have a fatal diagnosis from a doctor. He just can’t
      tell you if it’s 6 months or 60 years. But you are definitely, 100%, going
      to die. And it could be tomorrow. So what are you going to do with that
      information?
    </p>
    `,
    quotee: 'Ryan Holiday',
    platform: '#ASKGARYVEE 262',
    link: 'https://www.youtube.com/watch?v=QTbQMbRDZj4&t=52m5s',
    length: 'long'
  },
  {
    quote: `
    <p>
      You become the sum of your actions, and as you do, what flows from that
      &mdash; your impulses &mdash; reflect the actions you've taken.
    </p>
    `,
    quotee: 'Ryan Holiday and Stephen Hanselman',
    platform: 'The Daily Stoic',
    link: 'https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance/dp/0735211736?tag=ryanholnet-20',
    length: 'short'
  },
  {
    quote: `
    <p>
      When you’re flexible, you’ll never be bent out of shape.
    </p>
    `,
    quotee: 'Kyle Kingsbury',
    platform: 'Onnit Podcast, #8',
    link: 'https://www.youtube.com/watch?v=7EbQO2R-Sh8&t=31m5s',
    length: 'short'
  },
  {
    quote: `
    <p>
      You know how people are supposed to edit? You’re supposed to edit, like
      when you make a document? You’re supposed to edit when you write a book?
      You should also edit your thoughts. You can’t just let them all run wild.
    </p>
    `,
    quotee: 'Joe Rogan',
    platform: 'Joe Rogan Experience, #1045',
    link: 'https://www.youtube.com/watch?v=_ERIRyhQ_34&t=2h5m55s',
    length: 'short'
  }
];

export default quotes;
