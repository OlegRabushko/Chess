(this.webpackJsonpchess=this.webpackJsonpchess||[]).push([[0],{18:function(e,t,n){e.exports={App:"replays_App__1Bu3t",green:"replays_green__1oc6q",lobby__btn:"replays_lobby__btn__Qzd1X",repeats__block:"replays_repeats__block__3AH6q",chess__info:"replays_chess__info__3Zrmb",info__inner:"replays_info__inner__2pGZY",name__circle:"replays_name__circle__2nExb",name__circle_2:"replays_name__circle_2__1Ef08",win__marker:"replays_win__marker__1xFcG",moves__info:"replays_moves__info__2rljH",time__info:"replays_time__info__1yU90",link:"replays_link__3MWy1",chess__grid:"replays_chess__grid__Ubvan"}},26:function(e,t,n){e.exports={App:"header_App__3A4RW",green:"header_green__1nBe4",header__container:"header_header__container__2MMPN",logo__img:"header_logo__img__2N6mY",logo__text:"header_logo__text__1W2mO"}},31:function(e,t,n){e.exports={App:"footer_App__1b2RE",green:"footer_green__7RJS_",footer__container:"footer_footer__container__14l6n",footer__text:"footer_footer__text__1PMzD"}},32:function(e,t,n){},5:function(e,t,n){e.exports={App:"start-window_App__TNRlA",green:"start-window_green__1XXnX",body__container:"start-window_body__container__2bhoM",player__box:"start-window_player__box__21NAk",player__ava:"start-window_player__ava__2xFyR",player__name:"start-window_player__name__EMY-m",btns__container:"start-window_btns__container__2s-Ma",start__btn:"start-window_start__btn__3yA-0",network__info:"start-window_network__info__47baf",view__btn:"start-window_view__btn__3gJXo",modal:"start-window_modal__3KQ7Z",modal__inner:"start-window_modal__inner__2bl8e",top__text:"start-window_top__text__1QFyE",top__text_special:"start-window_top__text_special__1te69",input__plus__text:"start-window_input__plus__text__2k7ss",input:"start-window_input__3VCFP",text:"start-window_text__3Qid-",change__btn:"start-window_change__btn__1t-U9",block__container:"start-window_block__container__1HCMv",inactive__type:"start-window_inactive__type__3FRA1",active__type:"start-window_active__type__2y8h5",change__game__btn:"start-window_change__game__btn__12jP6",modal__disable:"start-window_modal__disable__15ckL"}},50:function(e,t,n){},6:function(e,t,n){e.exports={App:"game_App__24KvD",green:"game_green__Nrz4g",game__container:"game_game__container__teyyq",timer:"game_timer__VvAaM",loss__btn:"game_loss__btn__29kfA",start__btn:"game_start__btn__5ko3d",lobby__btn:"game_lobby__btn__R6lkK",replays__btn:"game_replays__btn__1Cldm",player__field:"game_player__field__1GWfh",player__ava:"game_player__ava__1HIDw",player__name:"game_player__name__1KpMX",win__ico:"game_win__ico__2pJaq",moveHand__img:"game_moveHand__img__3o6h1",player__board:"game_player__board__3WoYE",part__one:"game_part__one__1SRRX",part__two:"game_part__two__1Ro3D",part__three:"game_part__three__nJJ5k",figure__img:"game_figure__img__2_HRK",move__info:"game_move__info__1xZZB",win__window:"game_win__window__3MOaU",winWindow:"game_winWindow__3-Xtl",preloader__window:"game_preloader__window__3uD10",text:"game_text__3DRTo",preloader:"game_preloader__EKtYp"}},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a,r,c=n(1),s=n.n(c),i=n(23),o=n.n(i),u=(n(50),n(26)),l=n.n(u),_=n(0),p=function(){return Object(_.jsxs)("div",{className:l.a.header__container,children:[Object(_.jsx)("div",{className:l.a.logo__img}),Object(_.jsx)("div",{className:l.a.logo__text})]})},b=n(12),m=n(8),d=n(2),j=n.n(d),f=n(3),O=n(4),h=(n(32),function(e){var t=e.number,n=e.image,a=e.position,r=e.size;return t%2===0?Object(_.jsx)("div",{className:"black__field",children:n&&Object(_.jsx)("div",{style:{backgroundImage:"url(".concat("/Chess"+n,")"),width:"".concat(r,"px")},className:"figure__img",children:a})}):Object(_.jsx)("div",{className:"white__field",children:n&&Object(_.jsx)("div",{style:{backgroundImage:"url(".concat("/Chess"+n,")"),width:"".concat(r,"px")},className:"figure__img",children:a})})}),v=n(41),y=n(42);!function(e){e[e.OPPONENT=0]="OPPONENT",e[e.OUR=1]="OUR"}(a||(a={})),function(e){e[e.PAWN=0]="PAWN",e[e.BISHOP=1]="BISHOP",e[e.KNIGHT=2]="KNIGHT",e[e.ROOK=3]="ROOK",e[e.QUEEN=4]="QUEEN",e[e.KING=5]="KING"}(r||(r={}));var x,g=function(){function e(){Object(v.a)(this,e)}return Object(y.a)(e,[{key:"tileIsOccupiedForPawns",value:function(e,t,n){return!!n.find((function(n){return n.x===e&&n.y===t}))}},{key:"tileIsOccupied",value:function(e,t,n,a,r,c,s){return!!n.find((function(n){return n.x===e&&n.y===t&&n.team===a}))}},{key:"checkWin",value:function(e,t,n){return!!n.find((function(n){return n.x===e&&n.y===t&&n.type===r.KING}))}},{key:"tileIsOccupiedByOpponent",value:function(e,t,n,a){return!!n.find((function(n){return n.x===e&&n.y===t&&n.team!==a}))}},{key:"checkMoveRook",value:function(e,t,n,a,r){return e-t===r&&n-a===0}},{key:"isEnPassantMove",value:function(e,t,n,c,s,i,o){var u=i===a.OUR?1:-1;if(s===r.PAWN&&((e-n===1||e-n===-1)&&t-c===u&&o.find((function(e){return e.x===n&&e.y===c+u&&e.enPassant}))))return!0;return!1}},{key:"isValidMove",value:function(e,t,n,c,s,i,o,u){if(s===r.BISHOP&&(("white"===u?(n+c)%2===0:(n+c)%2===1)&&e!==n&&t!==c&&!this.tileIsOccupied(n,c,o,i,e,t)))return!0;if(s===r.KING&&(e-n===1||e-n===-1||t-c===1||t-c===-1)&&!this.tileIsOccupied(n,c,o,i))return!0;if(s===r.QUEEN)for(var l=function(a,r){return"-"===r?e-n===-a&&t-c===a:"x"===r?e-n===a&&t-c===0:"y"===r?t-c===a&&e-n===0:e-n===a&&t-c===a},_=-7;_<8;_++)if((l(_)||l(_,"-")||l(_,"x")||l(_,"y"))&&!this.tileIsOccupied(n,c,o,i))return!0;if(s===r.KNIGHT&&(e-n===1&&t-c===2||e-n===-1&&t-c===-2||e-n===1&&t-c===-2||e-n===-1&&t-c===2||e-n===-2&&t-c===-1||e-n===2&&t-c===1||e-n===-2&&t-c===1||e-n===2&&t-c===-1)&&!this.tileIsOccupied(n,c,o,i))return!0;if(s===r.ROOK)for(var p=function(a,r){return"x"===r?e-n===a&&t-c===0:t-c===a&&e-n===0},b=-7;b<8;b++)if((p(b,"x")||p(b,"y"))&&!this.tileIsOccupied(n,c,o,i))return!0;if(s===r.PAWN){var m=i===a.OUR?6:1,d=i===a.OUR?1:-1;if(e-n===1&&t-c===d||e-n===-1&&t-c===d){if(this.tileIsOccupiedByOpponent(n,c,o,i))return!0}else if(t===m){if(e===n&&t-c===1*d&&!this.tileIsOccupiedForPawns(n,c,o))return!0;if(e===n&&t-c===2*d&&!this.tileIsOccupiedForPawns(n,c,o)&&!this.tileIsOccupiedForPawns(n,c+1*d,o))return!0}else if(e===n&&t-c===1*d&&!this.tileIsOccupiedForPawns(n,c,o))return!0}return!1}}]),e}(),w=n(43),N=n.n(w),k=function(){var e=Object(f.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3002/state");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(f.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3002/state",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(f.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3002/state/".concat(t),{method:"DELETE"});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(f.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3002/state/queue");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(f.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3002/state/queue",{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify([t])});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(f.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=P,e.next=3,t;case 3:return e.t1=e.sent,e.t2=Date.now(),e.t3={name:e.t1,id:e.t2},e.next=8,(0,e.t0)(e.t3);case 8:return e.next=10,N.a.post("http://localhost:3002/new-player");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=n(10),R="SET_GAME",W="SET_ONLINE_PLAYERS",C="SET_MOVES_ONE",M="SET_MOVES_TWO",U="ADD_MOVE_ONE",F="ADD_MOVE_TWO",K="PlAYER_ONE",G="PlAYER_TWO",H="PlAYER_ONLINE",B=function(e){return{type:F,payload:e}},J=function(e){return{type:R,payload:e}},D=function(e){return{type:W,payload:e}},L=function(e){return{type:C,payload:e}},Q=function(e){return{type:M,payload:e}},Y=function(e){return{type:G,payload:e}},q=function(e){return{type:H,payload:e}},X=n(9),V=[{image:"/assets/imgs/w-king.png",x:4,y:7,type:r.KING,team:a.OUR,id:1},{image:"/assets/imgs/w-queen.png",x:3,y:7,type:r.QUEEN,team:a.OUR,id:2},{image:"/assets/imgs/w-pawn.png",x:0,y:6,type:r.PAWN,team:a.OUR,id:3},{image:"/assets/imgs/w-pawn.png",x:1,y:6,type:r.PAWN,team:a.OUR,id:4},{image:"/assets/imgs/w-pawn.png",x:2,y:6,type:r.PAWN,team:a.OUR,id:5},{image:"/assets/imgs/w-pawn.png",x:3,y:6,type:r.PAWN,team:a.OUR,id:6},{image:"/assets/imgs/w-pawn.png",x:4,y:6,type:r.PAWN,team:a.OUR,id:7},{image:"/assets/imgs/w-pawn.png",x:5,y:6,type:r.PAWN,team:a.OUR,id:8},{image:"/assets/imgs/w-pawn.png",x:6,y:6,type:r.PAWN,team:a.OUR,id:9},{image:"/assets/imgs/w-pawn.png",x:7,y:6,type:r.PAWN,team:a.OUR,id:10},{image:"/assets/imgs/w-knight.png",x:1,y:7,type:r.KNIGHT,team:a.OUR,id:11},{image:"/assets/imgs/w-knight.png",x:6,y:7,type:r.KNIGHT,team:a.OUR,id:12},{image:"/assets/imgs/w-rook.png",x:0,y:7,type:r.ROOK,team:a.OUR,id:13},{image:"/assets/imgs/w-rook.png",x:7,y:7,type:r.ROOK,team:a.OUR,id:14},{image:"/assets/imgs/w-bishop.png",x:2,y:7,type:r.BISHOP,team:a.OUR,cellColor:"black",id:15},{image:"/assets/imgs/w-bishop.png",x:5,y:7,type:r.BISHOP,team:a.OUR,cellColor:"white",id:16},{image:"/assets/imgs/b-king.png",x:4,y:0,type:r.KING,team:a.OPPONENT,id:17},{image:"/assets/imgs/b-queen.png",x:3,y:0,type:r.QUEEN,team:a.OPPONENT,id:18},{image:"/assets/imgs/b-pawn.png",x:0,y:1,type:r.PAWN,team:a.OPPONENT,id:19},{image:"/assets/imgs/b-pawn.png",x:1,y:1,type:r.PAWN,team:a.OPPONENT,id:20},{image:"/assets/imgs/b-pawn.png",x:2,y:1,type:r.PAWN,team:a.OPPONENT,id:21},{image:"/assets/imgs/b-pawn.png",x:3,y:1,type:r.PAWN,team:a.OPPONENT,id:22},{image:"/assets/imgs/b-pawn.png",x:4,y:1,type:r.PAWN,team:a.OPPONENT,id:23},{image:"/assets/imgs/b-pawn.png",x:5,y:1,type:r.PAWN,team:a.OPPONENT,id:24},{image:"/assets/imgs/b-pawn.png",x:6,y:1,type:r.PAWN,team:a.OPPONENT,id:25},{image:"/assets/imgs/b-pawn.png",x:7,y:1,type:r.PAWN,team:a.OPPONENT,id:26},{image:"/assets/imgs/b-knight.png",x:6,y:0,type:r.KNIGHT,team:a.OPPONENT,id:27},{image:"/assets/imgs/b-knight.png",x:1,y:0,type:r.KNIGHT,team:a.OPPONENT,id:28},{image:"/assets/imgs/b-rook.png",x:7,y:0,type:r.ROOK,team:a.OPPONENT,id:29},{image:"/assets/imgs/b-rook.png",x:0,y:0,type:r.ROOK,team:a.OPPONENT,id:30},{image:"/assets/imgs/b-bishop.png",x:2,y:0,type:r.BISHOP,team:a.OPPONENT,cellColor:"white",id:31},{image:"/assets/imgs/b-bishop.png",x:5,y:0,type:r.BISHOP,team:a.OPPONENT,cellColor:"black",id:32}],z=function(){return V.map((function(e){return Object(X.a)({},e)}))},Z=new WebSocket("ws://localhost:3001"),$=function(){var e=Object(f.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={event:"check-chessboard",boardState:t},Z.send(JSON.stringify(n));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(e){var t={event:"queue",data:e};Z.send(JSON.stringify(t))},te=window.indexedDB.open("olegrabushko-JSFE2021Q1",1);te.onupgradeneeded=function(e){(x=e.target.result).createObjectStore("player",{autoIncrement:!0})},te.onerror=function(e){var t=e.target.errorCode;console.log("error".concat(t))},te.onsuccess=function(e){x=e.target.result};var ne=function(){var e=Object(f.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.transaction(["player"],"readwrite");case 2:return n=e.sent,e.next=5,n.objectStore("player");case 5:e.sent.getAll().onsuccess=function(){var e=Object(f.a)(j.a.mark((function e(n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.target.result;case 2:(a=e.sent)&&t(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae={gamers:[],time:"",movesCount:0,winner:!0},re=function(){x.transaction(["player"],"readwrite").objectStore("player").add(ae)},ce=function(){var e=Object(f.a)(j.a.mark((function e(t,n,a,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){re(),r(!0),n(!1),t(!0),a.current.style.pointerEvents="none"}),1e3);case 1:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),se=function(){var e=Object(f.a)(j.a.mark((function e(t){var n,a,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return n=e.sent,e.next=5,k();case 5:return a=e.sent,r=t,c=n?1:0,e.abrupt("return",a[c].name===r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=n(13),oe=[8,7,6,5,4,3,2,1],ue=["a","b","c","d","e","f","g","h"],le=function(e,t,n,a,r,c,s,i){a?function(e,t,n){var a={event:"move-message",data:{move:e,time:t,url:n}};Z.send(JSON.stringify(a))}(e,n,t):c&&!s?r(L({moves:[].concat(Object(ie.a)(i.one.moves),[e]),times:[].concat(Object(ie.a)(i.one.times),[n]),figures:[].concat(Object(ie.a)(i.one.figures),[t])})):c||s||r(Q({moves:[].concat(Object(ie.a)(i.two.moves),[e]),times:[].concat(Object(ie.a)(i.two.times),[n]),figures:[].concat(Object(ie.a)(i.two.figures),[t])}))},_e=function(e){var t=e.setWin,n=e.setActiveForBoard,s=e.setTurnQueue,i=e.setStart,o=e.setPieces,u=e.setTimer,l=e.setPlayer,p=e.pieces,b=e.player,m=e.boardActivator,d=e.checkUpdatedMoves,v=e.win,y=e.start,x=e.time,w=e.checkTurnQueue,N=Object(c.useState)(null),P=Object(O.a)(N,2),E=P[0],A=P[1],R=Object(c.useState)(0),W=Object(O.a)(R,2),C=W[0],M=W[1],U=Object(c.useState)(0),F=Object(O.a)(U,2),K=F[0],G=F[1],H=Object(c.useState)(null),B=Object(O.a)(H,2),J=B[0],D=B[1],L=Object(c.useRef)(null),Q=new g,Y=[],q=function(e){return Math.floor(e/100)},X=Object(I.c)((function(e){return e.game.onlineGame})),V=Object(I.c)((function(e){return e.player})),z=Object(I.b)(),Z=Object(I.c)((function(e){return e.moves})),te=document.querySelectorAll(".figure__img");Object(c.useEffect)((function(){n(L)}),[]),document.onmousemove=Object(f.a)(j.a.mark((function e(){var t,n,a,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return t=e.sent,e.next=5,k();case 5:return n=e.sent,a=V.playerOnline,e.next=9,!t;case 9:if(!e.sent){e.next=13;break}e.t0=0,e.next=14;break;case 13:e.t0=1;case 14:r=e.t0,c=(X?t:w)?"w":"b",y?te.forEach((function(e){var t=e;X&&n[r].name!==a||t.style.backgroundImage.split("/")[4].split("")[0]===c?t.style.pointerEvents="none":t.style.pointerEvents="auto"})):te.forEach((function(e){return e.style.pointerEvents="none"}));case 17:case"end":return e.stop()}}),e)}))),Object(c.useEffect)((function(){(function(){var e=Object(f.a)(j.a.mark((function e(){var n,a,c,s,o,l,_,f;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0,p.forEach((function(e){e.type===r.KING&&n++})),n<2&&ce(t,i,m,u),J&&(a=J.innerHTML.split(","),c=Number(a[0]),s=Number(a[1]),o=Number(a[2]),l=J.style.backgroundImage.split('"')[1].split("/Chess")[1],(_=p.find((function(e){return e.image===l&&e.id===o})))&&!v&&(f="".concat(ue[c]).concat(oe[s],"-").concat(ue[_.x]).concat(oe[_.y]),le(f,l,x,X,z,b,d,Z)));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]);for(var ne=function(e,t){return p.reduce((function(n,a){return a.x===C&&a.y===K?(2===Math.abs(K-t)&&a.type===r.PAWN?a.enPassant=!0:a.enPassant=!1,a.x=e,a.y=t,n.push(a)):a.x===e&&a.y===t||(a.type===r.PAWN&&(a.enPassant=!1),n.push(a)),n}),[])},ae=function(){var e=Object(f.a)(j.a.mark((function e(t,n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:a=e.sent,T(!a),ee(w),$(ne(t,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),re=function(){var e=Object(f.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(ne(t,n)),s(!w),l((function(e){return!e}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),se=function(e,t,n,a,c,s){a?o(function(e,t,n){return p.reduce((function(a,c){return c.x===C&&c.y===K?(c.enPassant=!1,c.x=e,c.y=t,a.push(c)):c.x===e&&c.y===t+n||(c.type===r.PAWN&&(c.enPassant=!1),a.push(c)),a}),[])}(e,t,n)):c?(!function(e,t){if(t.type===r.PAWN&&(0===e||7===e)){var n=0===e?"w":"b";t.type=r.QUEEN,t.image="/assets/imgs/".concat(n,"-queen.png")}}(t,s),X?ae(e,t):re(e,t)):(E.style.position="relative",E.style.removeProperty("top"),E.style.removeProperty("left"))},ie=function(){var e=Object(f.a)(j.a.mark((function e(t){var n,r,c,s,i,o,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=L.current,E&&n&&(r=q(t.clientX-n.offsetLeft),c=q(t.clientY-n.offsetTop),(s=p.find((function(e){return e.x===C&&e.y===K})))&&(i=s.team===a.OUR?1:-1,E.style.zIndex="10",o=Q.isValidMove(C,K,r,c,s.type,s.team,p,s.cellColor),u=Q.isEnPassantMove(C,K,r,c,s.type,s.team,p),se(r,c,i,u,o,s)),E.style.zIndex="1",A(null));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_e=function(e){for(var t=function(t){var n=void 0,a=void 0,r=oe[e]+t+1;p.forEach((function(r){r.x===t&&r.y===e&&(n=r.id,a=r.image)})),Y.push(Object(_.jsx)(h,{image:a,number:r,position:"".concat(t,",").concat(e,",").concat(n),player:b},"".concat(e,",").concat(t)))},n=0;n<8;n++)t(n)},pe=0;pe<8;pe++)_e(pe);return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:"chess__container",children:[Object(_.jsx)("div",{className:"chess__letters",children:ue.map((function(e,t){return Object(_.jsx)("div",{className:"chess__letter",children:e},t)}))}),Object(_.jsxs)("div",{className:"chess__inner",children:[Object(_.jsx)("div",{className:"chess__numbers",children:oe.map((function(e,t){return Object(_.jsx)("div",{className:"chess__number",children:e},t)}))}),Object(_.jsx)("div",{ref:L,onMouseMove:function(e){var t=L.current;if(E&&t){var n=t.offsetLeft-10,a=t.offsetTop+3,r=t.offsetLeft+t.offsetWidth-65,c=t.offsetTop+t.offsetHeight-83,s=e.clientX-40,i=e.clientY-40;E.style.position="absolute",E.style.left="".concat(s<n?n:s>r?r:s,"px"),E.style.top="".concat(i<a?a:i>c?c:i,"px")}},onMouseDown:function(e){var t=L.current,n=e.target;if(D(n),n.classList.contains("figure__img")&&t){var a=q(e.clientX-t.offsetLeft),r=q(e.clientY-t.offsetTop);M(a),G(r),A(n)}},onMouseUp:ie,className:"chess__grid",children:Y}),Object(_.jsx)("div",{className:"chess__numbers__2",children:oe.map((function(e,t){return Object(_.jsx)("div",{className:"chess__number__2",children:e},t)}))})]}),Object(_.jsx)("div",{className:"chess__letters",children:ue.map((function(e,t){return Object(_.jsx)("div",{className:"chess__letter",children:e},t)}))})]})})},pe=n(6),be=n.n(pe),me=function(e){var t=e.checkWinner,n=e.id,a=e.name,r=e.checkMove,s=e.checkLoss,i=Object(c.useState)(""),o=Object(O.a)(i,2),u=o[0],l=o[1],p=Object(c.useState)(""),b=Object(O.a)(p,2),m=b[0],d=b[1],h=Object(I.c)((function(e){return e.player})),v=Object(I.c)((function(e){return e.game.onlineGame})),y=Object(I.c)((function(e){return 1===n?e.moves.one:e.moves.two}));return Object(c.useEffect)((function(){(function(){var e=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v){e.next=7;break}return e.next=3,k();case 3:t=e.sent,a===t[0].name?(l("white"),d("black")):(l("black"),d("white")),e.next=8;break;case 7:a===h.playerOne?(l("white"),d("black")):(l("black"),d("white"));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:be.a.player__field,children:[t||s?Object(_.jsx)("img",{className:be.a.win__ico,src:"/Chess/assets/imgs/win-ico.svg",alt:""}):"",Object(_.jsxs)("div",{className:be.a.player__ava,style:{background:"".concat(1===n?m:u)},children:[null===a||void 0===a?void 0:a.split("")[0],r?Object(_.jsx)("img",{className:be.a.moveHand__img,src:"/Chess/assets/imgs/move-hand.svg",alt:""}):""]}),Object(_.jsx)("div",{className:be.a.player__name,children:a}),Object(_.jsxs)("div",{className:be.a.player__board,children:[Object(_.jsx)("div",{className:be.a.part__one,children:y.figures.filter((function(e,t){return v?t%2===n-1:e})).map((function(e,t){return Object(_.jsx)("div",{className:be.a.figure__img,style:{backgroundImage:"url(".concat("/Chess"+e,")")}},t)}))}),Object(_.jsx)("div",{className:be.a.part__two,children:y.moves.filter((function(e,t){return v?t%2===n-1:e})).map((function(e,t){return Object(_.jsx)("div",{className:be.a.move__info,children:e},t)}))}),Object(_.jsx)("div",{className:be.a.part__three,children:y.times.filter((function(e,t){return v?t%2===n-1:e})).map((function(e,t){return Object(_.jsx)("div",{className:be.a.move__info,children:e},t)}))})]})]})})},de=function(e){var t=e.winner;return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:be.a.win__window,children:"Win ".concat(t)})})},je=function(e){var t=e.waitTime;return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:be.a.preloader__window,children:0!==t?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:be.a.text,children:"Please, expect another player..."}),Object(_.jsx)("img",{className:be.a.preloader,src:"/Chess/assets/imgs/preloader.gif",alt:""})]}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:be.a.text,children:"Timeout expired. Try again."}),Object(_.jsx)(b.b,{to:"/",children:Object(_.jsx)("button",{className:be.a.lobby__btn,children:"to lobby"})})]})})})},fe=function(){var e=Object(c.useState)(z),t=Object(O.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(0),s=Object(O.a)(r,2),i=s[0],o=s[1],u=Object(c.useState)(1),l=Object(O.a)(u,2),p=l[0],m=l[1],d=Object(c.useState)(!1),h=Object(O.a)(d,2),v=h[0],y=h[1],x=Object(c.useState)(!1),g=Object(O.a)(x,2),w=g[0],N=g[1],P=Object(c.useState)(!1),E=Object(O.a)(P,2),A=E[0],R=E[1],W=Object(c.useState)("00:00:00"),C=Object(O.a)(W,2),M=C[0],F=C[1],K=Object(c.useState)(!1),G=Object(O.a)(K,2),H=G[0],J=G[1],Y=Object(c.useState)(!1),q=Object(O.a)(Y,2),X=q[0],V=q[1],$=Object(c.useState)(!1),ee=Object(O.a)($,2),te=ee[0],ne=ee[1],ce=Object(c.useState)(!0),ie=Object(O.a)(ce,2),oe=ie[0],ue=ie[1],le=Object(c.useState)(),pe=Object(O.a)(le,2),fe=pe[0],Oe=pe[1],he=Object(c.useState)(),ve=Object(O.a)(he,2),ye=ve[0],xe=ve[1],ge=Object(c.useState)(!1),we=Object(O.a)(ge,2),Ne=we[0],ke=we[1],Pe=Object(c.useState)(null),Ee=Object(O.a)(Pe,2),Se=Ee[0],Te=Ee[1],Ae=Object(I.c)((function(e){return e.game.onlineGame})),Ie=Object(I.c)((function(e){return e.player})),Re=Object(I.b)(),We=Object(I.c)((function(e){return e.game.playersReady})),Ce=60;Object(c.useEffect)((function(){!function(e,t,n,a,r){Z.onopen=function(){var e={event:"check-chessboard",boardState:z()};Z.send(JSON.stringify(e))},Z.onmessage=function(){var c=Object(f.a)(j.a.mark((function c(s){var i,o;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,S();case 2:if(i=c.sent,"check-chessboard"===(o=JSON.parse(s.data)).event&&e(o.boardState),"queue"===o.event&&n((function(e){return!e})),"loss"===o.event&&(a(!0),r()),"players"!==o.event){c.next=12;break}return c.next=10,k();case 10:c.sent.length>1&&t(D(!0));case 12:"move-message"===o.event&&t(i?(u=o.data,{type:U,payload:u}):B(o.data));case 13:case"end":return c.stop()}var u}),c)})));return function(e){return c.apply(this,arguments)}}()}(a,Re,ne,N,Ue),Oe(Ie.playerOne),xe(Ie.playerTwo),Ae||(ae.gamers=[Ie.playerOne,Ie.playerTwo]);var e=setInterval((function(){Ae&&(!function(e){var t={event:"players",data:e};Z.send(JSON.stringify(t))}(!0),Ce--),0===Ce&&(clearInterval(e),m(0))}),1e3)}),[]),Object(c.useEffect)((function(){We&&function(){var e=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:return t=e.sent,e.next=5,Oe(t[0].name);case 5:return e.next=7,xe(t[1].name);case 7:ae.gamers=[t[0].name,t[1].name],Me();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[We]),Object(c.useEffect)((function(){We&&Ae&&function(){var e=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ke,e.next=3,se(Ie.playerOnline);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();o((function(e){return e+1})),ae.winner=te,ae.movesCount=i,ae.time=M}),[n]),Object(c.useEffect)((function(){var e,t=Number(M.split(":")[0]),n=Number(M.split(":")[1]),a=Number(M.split(":")[2]);return oe?clearInterval(e):e=setInterval((function(){t<3?n<59?a<59?a++:(n++,a=0):(t++,n=0,a=0):(n=0,a=0),F("0".concat(t," : ").concat(n>9?n:"0".concat(n)," : ").concat(a>9?a:"0".concat(a)))}),1e3),function(){return clearInterval(e)}}),[oe,M]);var Me=function(){var e=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T(!1),V(!1),R(!0),ue(!1),N(!1),F("00:00:00"),ne(!1),Se&&(Se.current.style.pointerEvents="auto");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ue=function(){var e=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(z()),V(!0),Re(L({moves:[],times:[],figures:[]})),Re(Q({moves:[],times:[],figures:[]})),R(!1),y(!1),o(0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Fe=function(){re(),N(!0),function(e){var t={event:"loss",data:e};Z.send(JSON.stringify(t))}(!0),Ue()};return Object(_.jsxs)(_.Fragment,{children:[!Ae||We||w?"":Object(_.jsx)(je,{waitTime:p}),w||v?Object(_.jsx)(de,{winner:v?te?fe:ye:!te&&w?ye:fe}):null,A||v?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:be.a.timer,children:["Round Time: ",Object(_.jsx)("b",{children:M})]}),v?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(b.b,{to:"/",onClick:Ue,children:Object(_.jsx)("button",{className:be.a.lobby__btn,children:"to lobby"})}),Object(_.jsx)(b.b,{to:"/replays",onClick:Ue,children:Object(_.jsx)("button",{className:be.a.replays__btn,children:"replays"})})]}):"",v?Ae?"":Object(_.jsx)("button",{className:be.a.loss__btn,onClick:Ue,children:"reset"}):Ae?Ne?Object(_.jsx)("button",{className:be.a.loss__btn,onClick:Fe,children:"admit loss"}):"":Object(_.jsx)("button",{className:be.a.loss__btn,onClick:Fe,children:"admit loss"})]}):Object(_.jsxs)(_.Fragment,{children:[Ae?"":Object(_.jsx)("button",{className:be.a.start__btn,onClick:Me,children:"Start"}),Object(_.jsx)(b.b,{to:"/",children:Object(_.jsx)("button",{className:be.a.lobby__btn,style:{left:"80%"},children:"to lobby"})}),Object(_.jsx)(b.b,{to:"/replays",onClick:Ue,children:Object(_.jsx)("button",{className:be.a.replays__btn,children:"replays"})})]}),Object(_.jsxs)("div",{className:be.a.game__container,children:[Object(_.jsx)(me,{name:fe,id:1,checkWinner:!(!te||!v),checkLoss:!(!te||!w),checkMove:!(te||!A)}),Object(_.jsx)(_e,{setWin:y,setPieces:a,setActiveForBoard:Te,setStart:R,setPlayer:J,setTimer:ue,setTurnQueue:ne,checkTurnQueue:te,checkUpdatedMoves:X,pieces:n,win:v,player:H,time:M,boardActivator:Se,start:A}),Object(_.jsx)(me,{name:ye,id:2,checkWinner:!(te||!v),checkLoss:!(te||!w),checkMove:!(!te||!A)})]})]})},Oe=n(18),he=n.n(Oe),ve=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){x&&(ne(a),clearInterval(e))}),1e3)}),[]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(b.b,{to:"/",children:Object(_.jsx)("button",{className:he.a.lobby__btn,children:"to lobby"})}),Object(_.jsx)("div",{className:he.a.repeats__container,children:n.map((function(e){return Object(_.jsx)("div",{className:he.a.repeats__block,children:Object(_.jsxs)("div",{className:he.a.chess__info,children:[Object(_.jsxs)("div",{className:he.a.name__circle,children:[e.gamers[0][0],e.winner?Object(_.jsx)("div",{className:he.a.win__marker}):""]}),Object(_.jsxs)("div",{className:he.a.name__circle_2,children:[e.gamers[1][0],e.winner?"":Object(_.jsx)("div",{className:he.a.win__marker})]}),Object(_.jsxs)("div",{className:he.a.moves__info,children:["Moves: ",Object(_.jsx)("b",{children:e.movesCount})]}),Object(_.jsxs)("div",{className:he.a.time__info,children:["Common Time: ",Object(_.jsx)("b",{children:e.time})]})]})})}))})]})},ye=n(5),xe=n.n(ye),ge=function(e){var t=e.active,n=e.setActive,a=e.number,r=e.setInput,s=e.setInput2,i=Object(c.useRef)(null);return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:t?xe.a.modal:xe.a.modal__disable,children:Object(_.jsxs)("div",{className:xe.a.modal__inner,children:[Object(_.jsx)("div",{className:xe.a.top__text,children:"Change player name"}),Object(_.jsxs)("div",{className:xe.a.input__plus__text,children:[Object(_.jsx)("input",{type:"text",className:xe.a.input,ref:i}),Object(_.jsxs)("div",{className:xe.a.text,children:["Player ",a]})]}),Object(_.jsx)("button",{className:xe.a.change__btn,onClick:function(){var e,t;n(!1),1===a?r("".concat(null===(e=i.current)||void 0===e?void 0:e.value)):s("".concat(null===(t=i.current)||void 0===t?void 0:t.value)),i.current.value=""},children:"Change"})]})})})},we=function(e){var t=e.gameType,n=e.setGameType,a=Object(c.useState)(!1),r=Object(O.a)(a,2),s=r[0],i=r[1],o=Object(I.b)(),u=function(){var e=Object(f.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:(n=e.sent).forEach(function(){var e=Object(f.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length>1)){e.next=3;break}return e.next=3,E(t.id);case 3:if(t.name!==localStorage.getItem("player")){e.next=6;break}return e.next=6,E(t.id);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),o(J(!1)),o(D(!1)),""!==t&&(i(!0),"2"===t&&o(J(!0)));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:s?xe.a.modal__disable:xe.a.modal,children:Object(_.jsxs)("div",{className:xe.a.modal__inner,children:[Object(_.jsx)("div",{className:xe.a.top__text,children:"Change Game"}),Object(_.jsxs)("div",{className:xe.a.block__container,children:[Object(_.jsx)("div",{className:"2"!==t?xe.a.inactive__type:xe.a.active__type,onClick:function(){return n("2")},children:"Online"}),Object(_.jsx)("div",{className:"1"!==t?xe.a.inactive__type:xe.a.active__type,onClick:function(){return n("1")},children:"Offline"})]}),Object(_.jsx)("button",{className:xe.a.change__game__btn,onClick:u,children:"OK"})]})})})},Ne=function(e){var t=e.num,n=e.name,a=e.setPlayer,r=e.setModalActive;return Object(_.jsxs)("div",{className:xe.a.player__box,children:[Object(_.jsx)("div",{className:xe.a.player__ava}),Object(_.jsx)("div",{className:xe.a.player__name,onClick:function(){r(!0),a(t)},children:""!==n?n:"Player ".concat(t)})]})},ke=function(){var e=Object(c.useState)(0),t=Object(O.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(O.a)(r,2),i=s[0],o=s[1],u=Object(c.useState)(!0),l=Object(O.a)(u,2),p=l[0],m=l[1],d=Object(c.useState)(""),h=Object(O.a)(d,2),v=h[0],y=h[1],x=Object(c.useState)(""),g=Object(O.a)(x,2),w=g[0],N=g[1],k=Object(c.useState)(""),P=Object(O.a)(k,2),E=P[0],S=P[1],T=Object(c.useState)(""),R=Object(O.a)(T,2),W=R[0],C=R[1],M=Object(c.useRef)(null),U=Object(I.b)(),F=function(){var e=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U((t="".concat(""!==v?v:"Player 1"),{type:K,payload:t})),U(Y("".concat(""!==w?w:"Player 2"))),e.next=4,U(q("".concat(""!==E?E:"Unknown")));case 4:return e.next=6,A(E);case 6:case"end":return e.stop()}var t}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S("".concat(null===(t=M.current)||void 0===t?void 0:t.value)),M.current.value="",m(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(_.jsxs)(_.Fragment,{children:["2"===W?Object(_.jsx)("div",{className:p?xe.a.modal:xe.a.modal__disable,children:Object(_.jsxs)("div",{className:xe.a.modal__inner,children:[Object(_.jsx)("div",{className:xe.a.top__text_special,children:"Type Your Name"}),Object(_.jsx)("input",{className:xe.a.input,type:"text",ref:M}),Object(_.jsx)("button",{className:xe.a.change__btn,onClick:G,children:"OK"})]})}):"",Object(_.jsxs)("div",{className:xe.a.body__container,children:["1"===W?Object(_.jsx)(Ne,{num:1,name:v,setPlayer:a,setModalActive:o}):"",Object(_.jsxs)("div",{className:xe.a.btns__container,children:[Object(_.jsx)(b.b,{to:"/game",children:Object(_.jsx)("button",{className:xe.a.start__btn,onClick:F,children:"Start"})}),Object(_.jsx)("div",{className:xe.a.network__info,children:"2"===W?"Online":"Offline"}),Object(_.jsx)(b.b,{to:"/replays",children:Object(_.jsx)("button",{className:xe.a.view__btn,children:"View replays"})})]}),"1"===W?Object(_.jsx)(Ne,{num:2,name:w,setPlayer:a,setModalActive:o}):""]}),Object(_.jsx)(we,{setGameType:C,gameType:W}),Object(_.jsx)(ge,{active:i,setActive:o,number:n,setInput:y,setInput2:N})]})},Pe=function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(b.a,{children:Object(_.jsxs)(m.c,{children:[Object(_.jsx)(m.a,{path:"/game",children:Object(_.jsx)(fe,{})}),Object(_.jsx)(m.a,{path:"/replays",children:Object(_.jsx)(ve,{})}),Object(_.jsx)(m.a,{path:"/",children:Object(_.jsx)(ke,{})})]})})})},Ee=n(31),Se=n.n(Ee),Te=function(){return Object(_.jsxs)("div",{className:Se.a.footer__container,children:[Object(_.jsx)("a",{className:Se.a.footer__text,href:"https://github.com/OlegRabushko/Chess-Server#readme",children:"\u0423\u0432\u0430\u0436\u0430\u0435\u043c\u044b\u0439 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u044e\u0449\u0438\u0439, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043f\u043e \u044d\u0442\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0435. \u0417\u0434\u0435\u0441\u044c \u043a\u0440\u0430\u0442\u043a\u043e \u043e \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u0435!"}),Object(_.jsx)("div",{children:"Rabushko Oleg\xa9 - RS School 2021"})]})};n(76);var Ae=function(){return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(p,{}),Object(_.jsx)(Pe,{}),Object(_.jsx)(Te,{})]})},Ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},Re=n(22),We={onlineGame:!1,playersReady:!1};var Ce={playerOne:"",playerTwo:"",playerOnline:""};var Me={one:{moves:[],times:[],figures:[]},two:{moves:[],times:[],figures:[]}};var Ue=n(44),Fe=n(45),Ke=Object(Re.combineReducers)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(X.a)(Object(X.a)({},e),{},{onlineGame:t.payload});case W:return Object(X.a)(Object(X.a)({},e),{},{playersReady:t.payload});default:return e}},player:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(X.a)(Object(X.a)({},e),{},{playerOne:t.payload});case G:return Object(X.a)(Object(X.a)({},e),{},{playerTwo:t.payload});case H:return Object(X.a)(Object(X.a)({},e),{},{playerOnline:t.payload});default:return e}},moves:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case C:return Object(X.a)(Object(X.a)({},e),{},{one:t.payload});case M:return Object(X.a)(Object(X.a)({},e),{},{two:t.payload});case U:return Object(X.a)(Object(X.a)({},e),{},{one:{moves:[].concat(Object(ie.a)(e.one.moves),[n.move]),times:[].concat(Object(ie.a)(e.one.times),[n.time]),figures:[].concat(Object(ie.a)(e.one.figures),[n.url])}});case F:return Object(X.a)(Object(X.a)({},e),{},{two:{moves:[].concat(Object(ie.a)(e.two.moves),[n.move]),times:[].concat(Object(ie.a)(e.two.times),[n.time]),figures:[].concat(Object(ie.a)(e.two.figures),[n.url])}});default:return e}}}),Ge=Object(Re.createStore)(Ke,Object(Ue.composeWithDevTools)(Object(Re.applyMiddleware)(Fe.a)));o.a.render(Object(_.jsx)(s.a.StrictMode,{children:Object(_.jsx)(I.a,{store:Ge,children:Object(_.jsx)(Ae,{})})}),document.getElementById("root")),Ie()}},[[77,1,2]]]);
//# sourceMappingURL=main.f3570fcb.chunk.js.map