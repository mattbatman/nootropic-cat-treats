webpackJsonp([1,4],{"/fcW":function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="/fcW"},1:function(e,t,n){e.exports=n("x35b")},"1A80":function(e,t,n){"use strict";function o(e){return s._11(0,[(e()(),s._12(null,["\n  "])),(e()(),s._13(0,null,null,30,"div",[],null,null,null,null,null)),s._14(139264,null,0,r.f,[s.t,s.u,s.W,s.X],{ngClass:[0,"ngClass"]},null),(e()(),s._12(null,["\n    "])),(e()(),s._13(0,null,null,1,"span",[["class","quotemark-l"]],null,null,null,null,null)),(e()(),s._12(null,["​‌“"])),(e()(),s._12(null,["\n  \t"])),(e()(),s._13(0,null,null,1,"blockquote",[],[[8,"innerHTML",1]],null,null,null,null)),s._15(65536,r.g,[s._9]),(e()(),s._12(null,["\n    "])),(e()(),s._13(0,null,null,1,"span",[["class","quotemark-r"]],null,null,null,null,null)),(e()(),s._12(null,["​‌”"])),(e()(),s._12(null,["\n      "])),(e()(),s._13(0,null,null,17,"div",[["class","meta"]],null,null,null,null,null)),(e()(),s._12(null,["\n          "])),(e()(),s._13(0,null,null,11,"div",[["class","cite"]],null,null,null,null,null)),(e()(),s._12(null,["\n              "])),(e()(),s._13(0,null,null,2,"p",[["class","person"]],null,null,null,null,null)),(e()(),s._12(null,["",""])),s._15(65536,r.g,[s._9]),(e()(),s._12(null,["\n              "])),(e()(),s._13(0,null,null,4,"p",[],null,null,null,null,null)),(e()(),s._13(0,null,null,3,"a",[],[[8,"href",4]],null,null,null,null)),s._15(65536,r.g,[s._9]),(e()(),s._12(null,["",""])),s._15(65536,r.g,[s._9]),(e()(),s._12(null,["\n          "])),(e()(),s._12(null,["\n          "])),(e()(),s._13(0,null,null,1,"button",[],null,[[null,"click"]],function(e,t,n){var o=!0,i=e.component;if("click"===t){o=!1!==i.onClick(n)&&o}return o},null,null)),(e()(),s._12(null,["New Quote"])),(e()(),s._12(null,["\n      "])),(e()(),s._12(null,["\n  "])),(e()(),s._12(null,["\n  "]))],function(e,t){e(t,2,0,t.component.setContainerClass())},function(e,t){var n=t.component;e(t,7,0,s._16(t,7,0,s._17(t,8).transform(n.text$))),e(t,18,0,s._16(t,18,0,s._17(t,19).transform(n.quotee$))),e(t,22,0,s._18(1,"",s._16(t,22,0,s._17(t,23).transform(n.link$)),"")),e(t,24,0,s._16(t,24,0,s._17(t,25).transform(n.platform$)))})}function i(e){return s._11(0,[(e()(),s._13(0,null,null,1,"app-root",[],null,null,null,o,d)),s._14(57344,null,0,u.a,[l.a],null,null)],function(e,t){e(t,1,0)},null)}var a=n("Ni5f"),s=n("3j3K"),r=n("2Je8"),u=n("YWx4"),l=n("Zcpd");n.d(t,"a",function(){return p});var h=[a.a],d=s._10({encapsulation:0,styles:h,data:{}}),p=s._19("app-root",u.a,i,{},{},[])},Iksp:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o=function(){function e(){}return e}()},Ni5f:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o=[""]},Nkcy:function(e,t,n){"use strict";function o(e,t){function n(e,t,n){var o=Math.floor(Math.random()*(t-e+1))+e;return o===n&&(o<t?o++:o>e?o--:o=Math.floor(Math.random()*(t-e+1))+e),o}void 0===e&&(e=0);var o=t.type,a=t.payload;switch(o){case i:return n(0,a,e)}return e}n.d(t,"b",function(){return i}),t.a=o;var i="REFRESH"},YWx4:function(e,t,n){"use strict";var o=n("EEr4"),i=(n.n(o),n("+pb+")),a=(n.n(i),n("6gFN")),s=(n.n(a),n("WWmu")),r=n("udqi"),u=n("Nkcy");n.d(t,"a",function(){return l});var l=function(){function e(e){var t=this;this.click$=new o.Subject,this.quote$=e.map(function(e){return r.a[e]}),this.text$=this.quote$.map(function(e){return e.quote}),this.quotee$=this.quote$.map(function(e){return e.quotee}),this.platform$=this.quote$.map(function(e){return e.platform}),this.link$=this.quote$.map(function(e){return e.link}),this.length$=this.quote$.map(function(e){return e.length}).subscribe(function(e){t.length=e}),this.click$.mapTo({type:u.b,payload:r.a.length-1}).subscribe(function(t){e.dispatch(t)})}return e.prototype.onClick=function(e){this.click$.next(),e.target.blur()},e.prototype.ngOnInit=function(){this.click$.next()},e.prototype.setContainerClass=function(){return{container:!0,long:"long"===this.length,short:"short"===this.length,medium:"medium"===this.length}},e.ctorParameters=function(){return[{type:s.a}]},e}()},kZql:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={production:!0}},kke6:function(e,t,n){"use strict";var o=n("3j3K"),i=n("Iksp"),a=n("2Je8"),s=n("Qbdm"),r=n("cPow"),u=n("osFu"),l=n("1A80"),h=n("Nkcy"),d=n("oi6x"),p=n("NPiC"),c=n("Zcpd");n.d(t,"a",function(){return _});var y=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),m=function(e){function t(t){return e.call(this,t,[l.a],[l.a])||this}return y(t,e),Object.defineProperty(t.prototype,"_LOCALE_ID_10",{get:function(){return null==this.__LOCALE_ID_10&&(this.__LOCALE_ID_10=o.b(this.parent.get(o.c,null))),this.__LOCALE_ID_10},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgLocalization_11",{get:function(){return null==this.__NgLocalization_11&&(this.__NgLocalization_11=new a.a(this._LOCALE_ID_10)),this.__NgLocalization_11},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Compiler_12",{get:function(){return null==this.__Compiler_12&&(this.__Compiler_12=new o.d),this.__Compiler_12},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_APP_ID_13",{get:function(){return null==this.__APP_ID_13&&(this.__APP_ID_13=o.e()),this.__APP_ID_13},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_IterableDiffers_14",{get:function(){return null==this.__IterableDiffers_14&&(this.__IterableDiffers_14=o.f()),this.__IterableDiffers_14},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_KeyValueDiffers_15",{get:function(){return null==this.__KeyValueDiffers_15&&(this.__KeyValueDiffers_15=o.g()),this.__KeyValueDiffers_15},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_DomSanitizer_16",{get:function(){return null==this.__DomSanitizer_16&&(this.__DomSanitizer_16=new s.b(this.parent.get(s.c))),this.__DomSanitizer_16},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Sanitizer_17",{get:function(){return null==this.__Sanitizer_17&&(this.__Sanitizer_17=this._DomSanitizer_16),this.__Sanitizer_17},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_HAMMER_GESTURE_CONFIG_18",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_18&&(this.__HAMMER_GESTURE_CONFIG_18=new s.d),this.__HAMMER_GESTURE_CONFIG_18},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EVENT_MANAGER_PLUGINS_19",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_19&&(this.__EVENT_MANAGER_PLUGINS_19=[new s.e(this.parent.get(s.c)),new s.f(this.parent.get(s.c)),new s.g(this.parent.get(s.c),this._HAMMER_GESTURE_CONFIG_18)]),this.__EVENT_MANAGER_PLUGINS_19},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EventManager_20",{get:function(){return null==this.__EventManager_20&&(this.__EventManager_20=new s.h(this._EVENT_MANAGER_PLUGINS_19,this.parent.get(o.h))),this.__EventManager_20},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomSharedStylesHost_21",{get:function(){return null==this.__ɵDomSharedStylesHost_21&&(this.__ɵDomSharedStylesHost_21=new s.i(this.parent.get(s.c))),this.__ɵDomSharedStylesHost_21},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomRendererFactory2_22",{get:function(){return null==this.__ɵDomRendererFactory2_22&&(this.__ɵDomRendererFactory2_22=new s.j(this._EventManager_20,this._ɵDomSharedStylesHost_21)),this.__ɵDomRendererFactory2_22},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RendererFactory2_23",{get:function(){return null==this.__RendererFactory2_23&&(this.__RendererFactory2_23=this._ɵDomRendererFactory2_22),this.__RendererFactory2_23},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵSharedStylesHost_24",{get:function(){return null==this.__ɵSharedStylesHost_24&&(this.__ɵSharedStylesHost_24=this._ɵDomSharedStylesHost_21),this.__ɵSharedStylesHost_24},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Testability_25",{get:function(){return null==this.__Testability_25&&(this.__Testability_25=new o.i(this.parent.get(o.h))),this.__Testability_25},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Meta_26",{get:function(){return null==this.__Meta_26&&(this.__Meta_26=new s.k(this.parent.get(s.c))),this.__Meta_26},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Title_27",{get:function(){return null==this.__Title_27&&(this.__Title_27=new s.l(this.parent.get(s.c))),this.__Title_27},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Dispatcher_28",{get:function(){return null==this.__Dispatcher_28&&(this.__Dispatcher_28=new u.a),this.__Dispatcher_28},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_INITIAL_REDUCER_30",{get:function(){return null==this.__INITIAL_REDUCER_30&&(this.__INITIAL_REDUCER_30=r.a(this.__INITIAL_REDUCER_29)),this.__INITIAL_REDUCER_30},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Reducer_31",{get:function(){return null==this.__Reducer_31&&(this.__Reducer_31=r.b(this._Dispatcher_28,this._INITIAL_REDUCER_30)),this.__Reducer_31},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_INITIAL_STATE_33",{get:function(){return null==this.__INITIAL_STATE_33&&(this.__INITIAL_STATE_33=r.c(this.__INITIAL_STATE_32,this._INITIAL_REDUCER_30)),this.__INITIAL_STATE_33},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_State_34",{get:function(){return null==this.__State_34&&(this.__State_34=r.d(this._INITIAL_STATE_33,this._Dispatcher_28,this._Reducer_31)),this.__State_34},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Store_35",{get:function(){return null==this.__Store_35&&(this.__Store_35=r.e(this._Dispatcher_28,this._Reducer_31,this._State_34)),this.__Store_35},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._CommonModule_0=new a.b,this._ErrorHandler_1=s.m(),this._APP_INITIALIZER_2=[o.j,s.n(this.parent.get(s.o,null),this.parent.get(o.k,null))],this._ApplicationInitStatus_3=new o.l(this._APP_INITIALIZER_2),this._ɵf_4=new o.m(this.parent.get(o.h),this.parent.get(o.n),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_3),this._ApplicationRef_5=this._ɵf_4,this._ApplicationModule_6=new o.o(this._ApplicationRef_5),this._BrowserModule_7=new s.p(this.parent.get(s.p,null)),this._StoreModule_8=new r.f,this._AppModule_9=new i.a,this.__INITIAL_REDUCER_29=h.a,this.__INITIAL_STATE_32=void 0,this._AppModule_9},t.prototype.getInternal=function(e,t){return e===a.b?this._CommonModule_0:e===o.p?this._ErrorHandler_1:e===o.q?this._APP_INITIALIZER_2:e===o.l?this._ApplicationInitStatus_3:e===o.m?this._ɵf_4:e===o.r?this._ApplicationRef_5:e===o.o?this._ApplicationModule_6:e===s.p?this._BrowserModule_7:e===r.f?this._StoreModule_8:e===i.a?this._AppModule_9:e===o.c?this._LOCALE_ID_10:e===a.c?this._NgLocalization_11:e===o.d?this._Compiler_12:e===o.s?this._APP_ID_13:e===o.t?this._IterableDiffers_14:e===o.u?this._KeyValueDiffers_15:e===s.q?this._DomSanitizer_16:e===o.v?this._Sanitizer_17:e===s.r?this._HAMMER_GESTURE_CONFIG_18:e===s.s?this._EVENT_MANAGER_PLUGINS_19:e===s.h?this._EventManager_20:e===s.i?this._ɵDomSharedStylesHost_21:e===s.j?this._ɵDomRendererFactory2_22:e===o.w?this._RendererFactory2_23:e===s.t?this._ɵSharedStylesHost_24:e===o.i?this._Testability_25:e===s.k?this._Meta_26:e===s.l?this._Title_27:e===u.a?this._Dispatcher_28:e===r.g?this.__INITIAL_REDUCER_29:e===r.h?this._INITIAL_REDUCER_30:e===d.a?this._Reducer_31:e===r.i?this.__INITIAL_STATE_32:e===r.j?this._INITIAL_STATE_33:e===p.a?this._State_34:e===c.a?this._Store_35:t},t.prototype.destroyInternal=function(){this._ɵf_4.ngOnDestroy(),this.__ɵDomSharedStylesHost_21&&this._ɵDomSharedStylesHost_21.ngOnDestroy()},t}(o.x),_=new o.y(m,i.a)},udqi:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o=[{quote:"<p>You ever tried skiing on mushrooms?</p>",quotee:"Aubrey Marcus",platform:"Joe Rogan Experience, #878",link:"https://www.youtube.com/watch?v=2xplJOx3Vjw&t=2h27m49s",length:"short"},{quote:"\n    <p>\n      You’ve probably heard the fable about &mdash; I think it’s Buridan’s donkey,\n      who &mdash; it’s a fable about a donkey that is standing halfway in-between a pile\n      of hay and a bucket of water. And he just keeps looking left, to the hay, or\n      right, to the water, trying to decide. Hay, or water? Hay, or water? And he\n      is unable to decide, so he eventually falls over and dies of both hunger and thirst.\n    </p>\n    ",quotee:"Derek Sivers",platform:"The Tim Ferriss Show",link:"http://fourhourworkweek.com/2016/11/21/tools-of-titans-derek-sivers-distilled/",length:"medium"},{quote:"\n    <p>Dear God,</p>\n    <p>\n      Thank you so much for letting us exist. I can't believe we got even a few moments\n      to experience what it's like to be thrust into time as monkey-descendants\n      with an advanced biocomputer that allows us to experience a past, present, and\n      future. And though, at this moment, we may find ourselves surrounded by deeply\n      brainwashed weirdos whose entire conceptualization of reality has been constructed\n      for them by religious institutions, corporations, or politicians, please help\n      us remember that our family is actually me, wrapped around the infinite\n      goodness of the universe, and just because we're currently acting like vicious\n      hyenas doesn't mean that we don't suffer, just like anyone else. Help us\n      see beyond our temporary mask of cuntiness, to the never ending transcendent glory\n      that our puffy, wrinkled, alcoholic, racist, intolerant, hypocritical, news-obsessed\n      skin-suits hang upon. And thank you for this incredible show called human\n      incarnation. Please grant everyone at this table a lifetime of ever increasing,\n      powerful orgasms &mdash; orgasms that move all of us in the direction of heightened\n      states of consciousness, so that we can truly allow ourselves to surrender\n      to the strange attractor at the end of time, that is rapidly transforming\n      history into something that will be completely unrecognizable to those that\n      survive the economic and societal upheavals that await for us as we go plunging\n      into the singularity.\n    </p>\n    <p>Thank you God, Hare Krishna</p>\n    ",quotee:"Duncan Trussell",platform:"The Duncan Trussell Family Hour",link:"http://www.duncantrussell.com/episodes/2016/11/22/emil-amos",length:"long"},{quote:"\n    <p>\n      8 hours? There's 24 hours in a day, bro. What are you worried about?\n    </p>",quotee:"Joe Rogan",platform:"Joe Rogan Experience, #895",link:"https://www.youtube.com/watch?v=5r-vP3N2uAg&t=51m40s",length:"short"},{quote:"\n    <p>\n      Before I had children, I used to think of people as being sort of static.\n      Obviously I was younger, and when you’re &mdash; especially when you’re really\n      young, when you're like 20 or something like that &mdash; you don’t really take\n      into consideration that the people around you used to be your age. You\n      kind of know it in an abstract sort of a sense, but once you actually have\n      a baby, and then like, 5 years later the baby’s talking to you and you’re\n      having conversations, you’re like, “Ah, you’re fucking learning shit now.”\n      And then 10 years later the baby’s in high school, and you’re like, “Oh\n      Jesus Christ, you’re almost a man.” And then...well, you realize, “Oh, we’re\n      all babies who had babies.” And then you raise those babies, and then they\n      become adults and have babies of their own, but there are no grown-ups.\n      It’s bullshit. It doesn’t exist. Like, when you’re a kid and you’re sad and\n      you go, “Oh, one day I’m going to be a grown-up and this is all going to\n      make sense.” But that day never comes. You get older, but you’re a baby\n      still. You’re just an old baby. You’re an old baby with a car and fucking\n      credit card debt. And then you have a baby and then that baby grows up.\n    </p>\n    ",quotee:"Joe Rogan",platform:"Joe Rogan Experience, #891",link:"https://www.youtube.com/watch?v=g5AKVbx2M38&t=1h24m50s",length:"medium"},{quote:'\n    <p>\n      At a certain point in time, you go, “How much fucking sand is left in this\n      goddamned hour glass? What are we doing with it?” You know? Are we on a\n      continued path of improvement and spiritual enlightenment, or do we\n      eventually go, “Hey, guys, there’s a cliff coming up. Let’s just have a\n      drink. There’s a fucking cliff. There’s a cliff right over there. We’re\n      both looking at it."\n    </p>\n    ',quotee:"Joe Rogan",platform:"Joe Rogan Experience, #888",link:"https://www.youtube.com/watch?v=tka857PmVXg&t=1h00m20s",length:"medium"},{quote:"\n    <p>\n      Have you ever heard of when people get poop transfusions?\n    </p>\n    <p>\n      No.\n    </p>\n    <p>\n      Yeah, they'll take poop from a healthy person...\n    </p>\n    <p>\n      No!\n    </p>\n    <p>\n      Yes! Yes! It's a real thing!\n    </p>\n    <p>\n      Ass to ass?\n    </p>\n    <p>\n      Well, they don't make you go butt-to-butt with somebody. I think they go\n      in and fish it out and they shoot it up in you. But they literally will\n      shoot somebody else's poop up your asshole, into your body. And some\n      people even swallow poop tablets.\n    </p>\n    ",quotee:"Joe Rogan to Greg Fitzsimmons",platform:"Joe Rogan Experience, #902",link:"https://www.youtube.com/watch?v=OYK84qCWz_M&t=23m10s",length:"medium"},{quote:"\n    <p>\n      I didn't let my brother AJ score on me in basketball &mdash; he's 11 years\n      younger than me &mdash; until he was like, 15. Score. Like, score.\n    </p>\n    <p>\n      You wouldn't let him?\n    </p>\n    <p>\n      No! Now I have a 4 year old guy &mdash; Zander my little guy &mdash; he’s got a weird\n      condition. When he picks up the basketball, he starts kind of weirdly\n      crying, because he knows dad's going to come out of somewhere and block the\n      fucking shit out of him. And so I posted this thing about it today on\n      instagram, and it was funny to watch everybody. I mean everybody’s into\n      these fucking eigth place trophies &mdash; I want to kill people. Like, all this\n      fake infrastructure of fake fucking self-esteem and then these kids\n      go into the market, and they get punched in the mouth and they don’t know\n      what to do.\n    </p>\n    ",quotee:"Gary Vaynerchuk to Joe Rogan",platform:"Joe Rogan Experience, #910",link:"https://www.youtube.com/watch?v=OLHdzLpMg-s&t=49m00s",length:"medium"},{quote:"\n    <p>\n      You know the problem with, “woe is me?” Nobody’s fucking\n      listening. My friends, let me tell you who’s listening to you\n      complain. Either the two or three people that kind of have\n      to because they’re your parents, or your other fucking losing\n      friends. Nobody gives a fuck. That’s the problem. What nobody\n      understands about complaining is that it has zero ROI.\n    </p>\n    ",quotee:"Gary Vaynerchuk",platform:"Joe Rogan Experience, #910",link:"https://www.youtube.com/watch?v=OLHdzLpMg-s&t=1h34m45s",length:"medium"},{quote:"\n    <p>\n      If anybody's made it that looks like you &mdash; that's it. That's\n      it. There's a blueprint.\n    </p>\n    ",quotee:"Gary Vaynerchuk",platform:"Joe Rogan Experience, #910",link:"https://www.youtube.com/watch?v=OLHdzLpMg-s&t=1h35m25s",length:"short"},{quote:"\n    <p>\n      You understand that there's a very big difference between\n      being an entrepreneur, and being a successful entrepreneur?\n      But the market right now &mdash; everyone's like, \"Oh, you're a CEO\n      and entrepreneur?\" Like, as if you won. That's like me saying,\n      \"I'm a basketball player.\" I play basketball...I'm not making\n      any fucking money.\n    </p>\n    ",quotee:"Gary Vaynerchuk",platform:"Joe Rogan Experience, #910",link:"https://www.youtube.com/watch?v=OLHdzLpMg-s&t=1h39m30s",length:"medium"},{quote:"\n    <p>\n      When I was a kid, being an entrepreneur meant you were a loser\n      and had an idea.\n    </p>\n    ",quotee:"Gary Vaynerchuk",platform:"Joe Rogan Experience, #910",link:"https://www.youtube.com/watch?v=OLHdzLpMg-s&t=1h40m00s",length:"short"},{quote:"\n    <p>\n      I'm from the generation where people made fun of my dad\n      because I didn't open a second wine store and I went on the\n      internet.\n    </p>\n    ",quotee:"Gary Vaynerchuk",platform:"Joe Rogan Experience, #910",link:"https://www.youtube.com/watch?v=OLHdzLpMg-s&t=1h41m30s",length:"short"},{quote:'\n    <p>\n      "The telephone is not a viable product," was once said by\n      people that didn\'t want the telephone to win.\n    </p>\n    ',quotee:"Gary Vaynerchuk",platform:"Joe Rogan Experience, #910",link:"https://www.youtube.com/watch?v=OLHdzLpMg-s&t=1h42m00s",length:"short"},{quote:"\n    <p>\n      If you're lucky enough, right now, to be listening, and you're\n      good at what you like &mdash; become tunnel fucking vision.\n    </p>\n    ",quotee:"Gary Vaynerchuk",platform:"Joe Rogan Experience, #910",link:"https://www.youtube.com/watch?v=OLHdzLpMg-s&t=1h42m40s",length:"short"},{quote:"\n    <p>\n      Have the conversation with the person that's holding you back.\n      The reason most people who are listening right now are not\n      doing \"that thing\" is because they're worried about the opinion\n      of somebody.\n    </p>\n    ",quotee:"Gary Vaynerchuk",platform:"Joe Rogan Experience, #910",link:"https://www.youtube.com/watch?v=OLHdzLpMg-s&t=1h42m55s",length:"short"},{quote:"\n    <p>\n      We have to get to a place where you're doing you, because\n      the number one thing that scares the fuck out of me is regret.\n      And you're going to sit there at 72, and you're going to say,\n      \"I wish. I wish. I wish.\"\n    </p>\n    ",quotee:"Gary Vaynerchuk",platform:"Joe Rogan Experience, #910",link:"https://www.youtube.com/watch?v=OLHdzLpMg-s&t=1h43m15s",length:"short"},{quote:"\n    <p>\n      If you have a handle on your annual spending, and you know how much you\n      need to live on, all you need to do is save up 25 times that amount &mdash;\n      and on the very, very conservative side let’s say 28 times that amount &mdash;\n      in conservative investments like a giant vanguard index fund, and that’s\n      enough to fund you with passive income with a high degree of safety for\n      the rest of your life. So, if you have &mdash; let’s just keep the numbers\n      simple &mdash; if you need $30,000 to live on, multiply that by 25 and\n      &mdash; ah darn, I’m giving myself a tricky math question &mdash; I’m thinking\n      that’s like $750,000 you’d need saved up or something like that to quit forever.\n      And that’s a lot less than most people think. Most people, at least in my\n      age group &mdash; they’re shooting for the tens of millions type of range\n      if they were to ever quit work early, and they haven’t really done the\n      math on how easy it really is.\n    </p>\n    ",quotee:"Mr. Money Mustache (Pete Adeney)",platform:"The Tim Ferriss Show, #221",link:"http://tim.blog/2017/02/13/mr-money-mustache/",length:"medium"},{quote:"\n    <p>\n      When somebody tries to explain recursion to you using Fibonacci numbers,\n      you must murder them. I know that sounds rough, because they might be your\n      friend and they only mean well, but they must die.\n    </p>\n    ",quotee:"Mattias Petter Johansson (MPJ)",platform:"Recursion - Part 7 of Functional Programming in JavaScript",link:"https://www.youtube.com/watch?v=k7-N8R0-KY4&index=7&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&t=1m5s",length:"short"},{quote:"\n    <p>\n      This is, by the way, a good trick whenever you’re programming\n      &mdash; to always think about what it is you’re doing &mdash;\n      what is my end goal? &mdash; instead of just starting to code.\n      I think one of the most common mistakes in programming is to\n      start coding too early. Take some time to think about your\n      problem and where you’re going and that will save you a lot\n      of time.\n    </p>\n    ",quotee:"Mattias Petter Johansson (MPJ)",platform:"Recursion - Part 7 of Functional Programming in JavaScript",link:"https://www.youtube.com/watch?v=k7-N8R0-KY4&index=7&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&t=8m45s",length:"medium"},{quote:'\n    <p>\n      There was an article in Scientific American how people &mdash;\n      and granted I’m sure this study was skewed and it’s a specific,\n      you know, group of people that sign-up for a study &mdash;\n      but that when someone was wrong, when someone told them they\n      were wrong, it made them believe their point even more.\n      But if you say to them &mdash; and I think that it’s the CIA\n      that uses this as a form of questioning &mdash; is that you\n      first have to legitimize their position before you suggest\n      that there might be something flawed about it. So you go like,\n      "I totally understand that you would think that &mdash; you\n      know &mdash; the earth is flat. I can see why you would have\n      thought that. I mean you grew up here. Of course you thought\n      that." If you empathize with them first, and then say, “You\n      know, but, turns out it’s round,” they’re more likely to\n      come around. But if you say, “Hey, you know that’s fucking\n      wrong," and if you show them proof, they double down even further.\n    </p>\n    ',quotee:"Whitney Cummings",platform:"Joe Rogan Experience, #910",link:"https://www.youtube.com/watch?v=v_P55Bexc5s&t=2h26m20s",length:"long"},{quote:"\n    <p>\n      Are we talking about chemtrails now?\n    </p>\n    <p>\n      No. No. We’re talking about stratospheric aerosol injections.\n    </p>\n    ",quotee:"Joe Rogan and Eddie Bravo",platform:"Joe Rogan Experience, #911",link:"https://www.youtube.com/watch?v=UZPCp8SPfOM&t=1h23m30s",length:"short"},{quote:"\n    <p>\n      But it's just like anything else. It's sticking with it. Right now, I'm in\n      a slump. So what do you do as a baseball player &mdash; Jamie, when you're\n      in a slump, what do you do as a baseball player? You quit? No! You keep\n      fuckin' hittin'! And you keep striking out and you keep fuckin' striking out\n      and you keep it together.\n    </p>\n    ",quotee:"Joey Diaz",platform:"Joe Rogan Experience, #926",link:"https://www.youtube.com/watch?v=-mQjF-tPdiI&t=1h29m00s",length:"medium"},{quote:"\n    <p>\n      It’s a hunt. It’s a pursuit. It’s a constant thing that’s\n      going on all the time, and when you’re in the middle of it,\n      in motion, that’s when you feel your best. But the discomfort\n      of that motion makes people so uneasy that they feel like,\n      “Well, I’m gonna go through this discomfort, and then I’m\n      going to get to a place of stillness, where it’s all going\n      to make sense. Finally, I made it.”\n    </p>\n    <p>\n      I’m here to tell you &mdash; that fucking place doesn’t exist.\n      It doesn’t exist. It’s not a real place. It’s a place that\n      people look to as an inspirational goal &mdash; a destination.\n      And that’s going to be the thing that you work hard for.\n      You’re going to push until you get to this place, and then\n      it’s all going to be worth it. That place is not real. If you\n      have a million dollars, you want a billion. If you have a big\n      house, you want a bigger house.\n    </p>\n    <p>\n      You have to find out what actually makes you happy. And it’s\n      not having all your ducks in a row on paper. It’s improvement.\n      It’s improvement in the way you manage your mind. It’s\n      improvement in the way you manage your emotions. It’s\n      understanding how you’ve made mistakes and how to improve\n      upon them, and also understanding what you’ve done right and\n      building upon that.\n    </p>\n    <p>\n      All of those things are what make people happy &mdash;\n      including love, and friendship, and being good at that.\n      Being a good friend. Being a good lover. Being a good neighbor.\n      All those things &mdash; those aren’t distractions &mdash;\n      those are part of the big overall of being a human being.\n    </p>\n    ",quotee:"Joe Rogan",platform:"Joe Rogan on Happiness",link:"https://www.youtube.com/watch?v=bMlsPTH62Ks",length:"long"},{quote:"\n    <p>\n      From Rusticus...I learned to read carefully and not be satisfied with a\n      rough understanding of the whole, and not to agree too quickly with those\n      who have a lot to say about something.\n    </p>\n    ",quotee:"Marcus Aurelius",platform:"Meditations, 1.7.3 via The Daily Stoic",link:"https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance/dp/0735211736?tag=ryanholnet-20",length:"short"},{quote:"\n    <p>\n      For this is what makes us evil &mdash; that none of us looks\n      back upon our own lives. We reflect upon only that which we\n      are about to do. And yet our plans for the future descend\n      from the past.\n    </p>\n    ",quotee:"Seneca",platform:"Moral Letters, 83.2 via The Daily Stoic",link:"https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance/dp/0735211736?tag=ryanholnet-20",length:"medium"},{quote:"\n    <p>\n      Each day presents the chance to overthink things.\n    </p>\n    ",quotee:"Ryan Holiday and Stephen Hanselman",platform:"The Daily Stoic",link:"https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance/dp/0735211736?tag=ryanholnet-20",length:"short"},{quote:"\n    <p>\n      At every moment keep a sturdy mind on the task at hand, as a Roman and\n      human being, doing it with strict and simple dignity, affection, freedom,\n      and justice &mdash; giving yourself a break from all other considerations.\n      You can do this if you approach each task as if it is your last, giving\n      up every distraction, emotional subversion of reason, and all drama,\n      vanity, and complaint over your fair share. You can see how mastery over\n      a few things makes it possible to live an abundant and devout life &mdash;\n      for, if you keep watch over these things, the gods won't ask for more.\n    </p>\n    ",quotee:"Marcus Aurelius",platform:"Meditations, 2.5 via The Daily Stoic",link:"https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance/dp/0735211736?tag=ryanholnet-20",length:"long"},{quote:"\n    <p>\n      If you wish to improve, be content to appear clueless or stupid in\n      extraneous matters &mdash; don't wish to seem knowledgeable. And if some\n      regard you as important, distrust yourself.\n    </p>\n    ",quotee:"Epictetus",platform:"Enchiridion, 13a via The Daily Stoic",link:"https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic",length:"medium"},{quote:"\n    <p>\n      Frame your thoughts like this &mdash; you are an old person, you won't let\n      yourself be enslaved by this any longer, no longer pulled like a puppet\n      by every impulse, and you'll stop complaining about your present fortune\n      or dreading the future.\n    </p>\n    ",quotee:"Marcus Auerelius",platform:"Meditations, 2.2 via The Daily Stoic",link:"https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic",length:"medium"},{quote:"\n    <p>\n      When I see an anxious person, I ask myself, what do they want? For if a\n      person wasn't wanting something outside of their own control, why would\n      they be stricken by anxiety?\n    </p>\n    ",quotee:"Epictetus",platform:"Discourses, 2.13.1 via The Daily Stoic",link:"https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic",length:"short"},{quote:"\n    <p>\n      Who then is invincible? The one who cannot be upset by anything outside\n      their reasoned choice.\n    </p>\n    ",quotee:"Epictetus",platform:"Discourses, 1.18.21 via The Daily Stoic",link:"https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic",length:"short"},{quote:"\n    <p>\n      Anyway, I'm sorry. I know I haven't been my best this past decade.\n    </p>\n    ",quotee:"Steve Zissou",platform:"The Life Aquatic with Steve Zissou",link:"https://www.amazon.com/Life-Aquatic-Steve-Zissou/dp/B006C0AT9O/ref=sr_1_1?ie=UTF8&qid=1493640677&sr=8-1&keywords=a+life+aquatic",length:"short"},{quote:'\n    <p>\n      And then you realize that this area of stuff that you don’t know is almost\n      infinite. So, you realize that learning in programming &mdash; it cannot\n      be completed. Not even close. You just have to pick like, a path inside of\n      it and go slowly and just grow and compare yourself to the person that you\n      were yesterday. That feeling of, “Oh my god, there is so much that I don’t\n      know,” that feeling will not go away by learning more. It will grow - to a\n      point where you just realize, “Oh...uh...OK."\n    </p>\n    ',quotee:"Mattias Petter Johansson (MPJ)",platform:"Top 8 developer Habits: Perseverance",link:"https://www.youtube.com/watch?v=DwQ7psiU23I&t=10m50s",length:"long"},{quote:"\n    <p>\n      That's the thing about national conversations...not everyone gets to talk.\n    </p>\n    ",quotee:"Cody Wilson",platform:"Come and Take It",link:"https://www.amazon.com/Come-Take-Printers-Guide-Thinking-ebook/dp/B01CO34MBI/ref=sr_1_4?ie=UTF8&qid=1494211026&sr=8-4&keywords=come+and+take+it",length:"short"},{quote:"\n    <p>\n      Whenever you get an impression of some pleasure, as with any impression,\n      guard yourself from being carried away by it, let it await your action,\n      give yourself a pause. After that, bring to mind both times, first when\n      you you have enjoyed the pleasure and later when you will regret it and\n      hate yourself. Then compare to those the joy and satisfaction you'd feel\n      for abstaining altogether. However, if a seemingly appropriate time arises\n      to act on it, don't be overcome by its comfort, pleasantness, and allure\n      &mdash; but against all of this, how much better the consciousness of\n      conquering it.\n    </p>\n    ",quotee:"Epictetus",platform:"Enchiridion, 34 via The Daily Stoic",link:"https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic",length:"long"},{quote:"\n    <p>\n      Clear your mind and get a hold on yourself and, as when awakened from\n      sleep and realizing it was only a bad dream upsetting you, wake up and\n      see that what's there is just like those dreams.\n    </p>\n    ",quotee:"Marcus Aurelius",platform:"Meditations, 6.31 via The Daily Stoic",link:"https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic",length:"medium"},{quote:"\n    <p>\n      If someone asks you how to write your name, would you bark out each letter?\n      And if they get angry, would you then return the anger? Wouldn't you rather\n      gently spell out each letter for them? So then, remember in life that your\n      duties are the sum of individual acts. Pay attention to each of these as you\n      do your duty...just methodically complete your task.\n    </p>\n    ",quotee:"Marcus Aurelius",platform:"Meditations, 6.26 via The Daily Stoic",link:"https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic",length:"medium"},{quote:"\n    <p>\n      It is quite impossible to unite happiness with a yearning for what we\n      don't have.\n    </p>\n    ",quotee:"Epictetus",platform:"Discourses, 3.24.17 via The Daily Stoic",link:"https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic",length:"short"},{quote:"\n    <p>\n      Remember to conduct yourself in life as if at a banquet.\n      As something being passed around comes to you, reach out\n      your hand and take a moderate helping. Does it pass you by?\n      Don't stop it. It hasn't yet come? Don't burn in desire for\n      it, but wait until it arrives in front of you. Act this way\n      with children, a spouse, toward position, with wealth &mdash;\n      one day it will make you worthy of a banquet with the gods.\n    </p>\n    ",quotee:"Epictetus",platform:"Enchriridion, 15 via The Daily Stoic",link:"https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic",length:"medium"},{quote:"\n    <p>\n      You shouldn't give circumstances the power to rouse anger, for they don't\n      care at all.\n    </p>\n    ",quotee:"Marcus Aurelius",platform:"Meditations, 7.38 via The Daily Stoic",link:"https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic",length:"short"},{quote:"\n    <p>\n      Keep in mind that it isn't the one who has it in for you and takes a\n      swipe that harms you, but rather the harm comes from your own belief\n      about the abuse. So when someone arouses your anger, know that it's really\n      your own opinion fueling it. Instead, make it your first response not to\n      be carried away by such impressions, for with time and distance\n      self-mastery is more easily achieved.\n    </p>\n    ",quotee:"Epictetus",platform:"Enchiridion, 20 via The Daily Stoic",link:"https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic",length:"medium"},{quote:"\n    <p>\n      Listen and connect with people, don't perform for them.\n    </p>\n    ",quotee:"Ryan Holiday and Stephen Hanselman",platform:"Enchiridion, 20 via The Daily Stoic",link:"https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic",length:"Short"},{quote:"\n    <p>\n      If a person gave away your body to some passerby, you'd be furious. Yet\n      you hand over your mind to anyone who comes along, so they may abuse you,\n      leaving it disturbed and troubled &mdash; have you no shame in that?\n    </p>\n    ",quotee:"Epictetus",platform:"Enchiridion, 28 via The Daily Stoic",link:"https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance-ebook/dp/B01HNJIJB2/ref=sr_1_1?ie=UTF8&qid=1493176790&sr=8-1&keywords=the+daily+stoic",length:"Medium"}]},x35b:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("3j3K"),i=n("kZql"),a=n("Qbdm"),s=n("kke6");i.a.production&&n.i(o.a)(),n.i(a.a)().bootstrapModuleFactory(s.a)}},[1]);