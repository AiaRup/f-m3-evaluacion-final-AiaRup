(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/gryffindor.eaf993dd.jpg"},22:function(e,a,t){e.exports=t.p+"static/media/hufflepuff.ce66f10b.jpg"},23:function(e,a,t){e.exports=t.p+"static/media/ravenclaw.b1114929.jpg"},24:function(e,a,t){e.exports=t.p+"static/media/slytherin.ec62eb1e.jpeg"},27:function(e,a,t){e.exports=t.p+"static/media/header.bc2d9fbd.png"},28:function(e,a,t){e.exports=t.p+"static/media/background.90e1de3a.jpg"},30:function(e,a,t){e.exports=t(49)},35:function(e,a,t){},36:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(20),s=t.n(n),i=t(29),l=t(9),m=t(10),o=t(12),u=t(11),h=t(8),f=t(13),p=(t(35),t(6)),d=t(5),g=t(21),_=t.n(g),N=t(22),b=t.n(N),E=t(23),v=t.n(E),y=t(24),k=t.n(y),L=function(e){var a="";switch(e){case"Gryffindor":a=_.a;break;case"Hufflepuff":a=b.a;break;case"Ravenclaw":a=v.a;break;case"Slytherin":a=k.a;break;default:a=null}return a},j=(t(36),function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(m.a)(a,[{key:"componentWillUnmount",value:function(){this.props.resetCharacterList()}},{key:"render",value:function(){var e=this.props,a=e.charactersList,t=e.id,r=a.find(function(e){return e.id===parseInt(t)});return c.a.createElement("div",{className:"character__card-container"},c.a.createElement(d.b,{to:"/home",className:"back__link"},c.a.createElement("i",{className:"fas fa-chevron-circle-left"})),r?c.a.createElement("div",{className:"character__card"},c.a.createElement("div",{className:"character__image-container",style:{backgroundImage:"url(".concat(r.image,")")}},c.a.createElement("img",{src:r.image,alt:r.name,className:"character__image"})),c.a.createElement("div",{className:"character__details"},c.a.createElement("h2",{className:"character__title"},r.name),L(r.house)?c.a.createElement("div",{className:"character__house-container",style:{backgroundImage:"url(".concat(L(r.house),")")}},c.a.createElement("img",{src:L(r.house),alt:r.house,className:"house__image"})):c.a.createElement("p",{className:"no__house"},"I'm lonely, I don't belong to any house..."),c.a.createElement("p",{className:"charachter__yob"},"year of birth: ",r.yearOfBirth?r.yearOfBirth:"I have eternal life!"),c.a.createElement("p",{className:"charachter__patronus"},"patronus: ",r.patronus?r.patronus:"N/A"),c.a.createElement("p",{className:"charachter__state"},"state: ",r.alive?c.a.createElement("i",{className:"fas fa-heartbeat"}):c.a.createElement("i",{className:"fas fa-skull-crossbones"})))):c.a.createElement("p",{className:"loading"},"Loading Character Info..."))}}]),a}(r.Component)),S=(t(45),function(e){var a=e.getUserSearchValue,t=e.filterName;return c.a.createElement("div",{className:"page__filters"},c.a.createElement("label",{htmlFor:"name",className:"filter__label"},"Search charachter by name"),c.a.createElement("input",{type:"text",name:"name",id:"name",className:"filter__input",placeholder:"Search charachter by name",onChange:a,value:t}))}),O=(t(46),function(e){var a=e.charactersList,t=e.filterName;return c.a.createElement("ul",{className:"page__list"},a.filter(function(e){return e.name.toUpperCase().includes(t.toUpperCase())}).map(function(e){var a=e.id,t=e.name,r=e.image,n=e.house,s=L(n);return c.a.createElement("li",{className:"character__item",key:a,id:a},c.a.createElement(d.b,{to:"character/".concat(a),className:"item__link"},c.a.createElement("div",{className:"item__image-container",style:{backgroundImage:"url(".concat(r,")")}},c.a.createElement("img",{src:r,alt:t,className:"item__image"})),c.a.createElement("div",{className:"item__details"},c.a.createElement("h2",{className:"item__title"},t),s?c.a.createElement("div",{className:"item__house-container",style:{backgroundImage:"url(".concat(s,")")}},c.a.createElement("img",{src:s,alt:n,className:"item__house-image"})):null)))}))}),C=(t(47),t(27)),I=t.n(C),w=function(e){var a=e.getUserSearchValue,t=e.charactersList,r=e.filterName;return c.a.createElement("div",{className:"page__home"},c.a.createElement("header",{className:"page__header"},c.a.createElement("h1",{className:"page__title",style:{backgroundImage:"url(".concat(I.a,")")}},"Harry Potter characters")),c.a.createElement("main",{className:"page__main"},c.a.createElement(S,{getUserSearchValue:a,filterName:r}),t.length?c.a.createElement(O,{charactersList:t,filterName:r}):c.a.createElement("p",null,"Loading Character List...")))},U=t(28),x=t.n(U),V=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).state={charactersList:[],filterName:""},t.getUserSearchValue=t.getUserSearchValue.bind(Object(h.a)(t)),t.resetCharacterList=t.resetCharacterList.bind(Object(h.a)(t)),t}return Object(f.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("characterList"));e&&e.length?this.setState({charactersList:e}):this.fetcNewCharacters()}},{key:"fetcNewCharacters",value:function(){var e=this;fetch("http://hp-api.herokuapp.com/api/characters").then(function(e){return e.json()}).then(function(a){var t=a.map(function(e,a){return Object(i.a)({},e,{id:a})});e.setState({charactersList:t},function(){localStorage.setItem("characterList",JSON.stringify(e.state.charactersList))})})}},{key:"getUserSearchValue",value:function(e){var a=e.currentTarget.value;this.setState({filterName:a})}},{key:"resetCharacterList",value:function(){this.setState({filterName:""})}},{key:"render",value:function(){var e=this,a=this.state,t=a.charactersList,r=a.filterName;return c.a.createElement("div",{className:"page",style:{backgroundImage:"url(".concat(x.a,")")}},c.a.createElement(p.d,null,c.a.createElement(p.b,{exact:!0,path:"/home",render:function(){return c.a.createElement(w,{charactersList:t,filterName:r,getUserSearchValue:e.getUserSearchValue})}}),c.a.createElement(p.b,{path:"/character/:id",render:function(a){return c.a.createElement(j,{charactersList:t,id:a.match.params.id,resetCharacterList:e.resetCharacterList})}}),c.a.createElement(p.a,{from:"/",to:"/home"})))}}]),a}(r.Component);t(48);s.a.render(c.a.createElement(d.a,null,c.a.createElement(V,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.e7dabdc5.chunk.js.map