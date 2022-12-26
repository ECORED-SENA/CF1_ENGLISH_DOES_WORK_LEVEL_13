(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sintesis"],{"15a3":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"curso-main-container pb-3"},[e("BannerInterno",{attrs:{icono:"fas fa-sitemap",titulo:"Síntesis"}}),e("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[e("div",{staticClass:"bg_grad-01"},[e("div",{staticClass:"row mb-5"},[t._m(0),e("div",{staticClass:"col-lg-9"},[e("TraduccionAudio",{staticClass:"color-acento-botones mt-lg-5",attrs:{dialogo:t.dialogo1,"data-aos":"flip-up"}})],1)])]),e("div",{staticClass:"row justify-content-center"},[t._m(1),e("div",{staticClass:"col-auto"},[e("a",{staticClass:"anexo mb-4",attrs:{href:t.obtenerLink("/downloads/anexo5.pdf"),target:"_blank"}},[t._m(2),t._m(3)])])])])],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-3 mb-3 mb-lg-0",attrs:{"data-aos":"fade-right"}},[s("figure",{staticClass:"d-flex justify-content-center"},[s("img",{staticClass:"w-auto",attrs:{src:e("8abf"),alt:"alt"}})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-10 mb-5"},[s("figure",[s("img",{attrs:{src:e("335e"),alt:"alt"}})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"anexo__icono"},[s("img",{attrs:{src:e("f906")}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"anexo__texto"},[e("p",[t._v("Anexo. Síntesis")])])}],n=e("3633"),o={name:"Sintesis",components:{TraduccionAudio:n["a"]},data:function(){return{dialogo1:[{textoIng:"<em>In this component, we were able to practice grammar tenses such as: <i>simple, continuous and perfect</i>, looking at their structure and examples in negative, positive and interrogative sentences. We also saw how to articulate <i>subordinating conjunctions of time, relative clauses, defining and non-defining, and nominal and adverbial.</i> In terms of strategies to read faster, we learnt reading techniques such as <i>skimming and scanning.</i> And just at the end, we learnt the  pronunciation of <i>unstressed vowels</i> and <i>vowel reduction</i> as strategies to sound like native speakers.</em>",textoEsp:"En este componente, pudimos practicar tiempos gramaticales como: <b>simple, continuo y perfecto,</b> viendo su estructura y ejemplos en oraciones negativas, positivas e interrogativas. También vimos cómo articular las conjunciones <b>subordinadas de tiempo, las oraciones relativas, definidas y no definidas, las nominales y adverbiales.</b> En cuanto a estrategias para leer más rápido, aprendimos técnicas de lectura como skimming y scanning. Y justo al final, aprendimos la pronunciación de las <b>vocales átonas</b> y la <b>reducción de vocales,</b> como estrategias para sonar como hablantes nativos.",audio:e("1e1c")}]}},mounted:function(){var t=this;this.$nextTick((function(){t.$aosRefresh()}))},updated:function(){this.$aosRefresh()}},r=o,c=e("2877"),u=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=u.exports},"1e1c":function(t,a,e){t.exports=e.p+"media/sintesis.b86af956.mp3"},"335e":function(t,a,e){t.exports=e.p+"img/sintesis.08670a7d.svg"},3633:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"traduccionAudio"},[e("div",{staticClass:"row justify-content-center align-items-center g-0"},[e("div",{staticClass:"col-12 traduccionAudio"},t._l(t.dialogoComputed,(function(a,s){return e("div",{staticClass:"row g-0 flex-nowrap traduccionAudio__chat__item mb-3"},[e("div",{staticClass:"col traduccionAudio__chat__item__message__container"},[e("div",{staticClass:"traduccionAudio__chat__item__message"},[e("div",{staticClass:"row g-0 align-items-center traduccionAudio__chat__item__message__bubble"},[e("div",{staticClass:"col traduccionAudio__chat__item__message__text me-2"},[e("div",{staticClass:"traduccionAudio__chat__item__message__text__eng textAudio__ing h5 mb-0"},[t._l(a.textoIng,(function(s,i){return["*"===s?e("div",{staticClass:"d-inline traduccionAudio__chat__item__message__text__drop"},[t.answers[a.id]?e("span",{staticClass:"traduccionAudio__chat__item__message__text__drop__response",domProps:{innerHTML:t._s(t.answers[a.id].palabra)}}):e("span",{staticClass:"traduccionAudio__chat__item__message__text__drop__default"})]):e("span",{key:"phrase-"+a.id+"-"+i,domProps:{innerHTML:t._s(s)}})]}))],2),t.translations.includes(a.id)?e("div",{staticClass:"traduccionAudio__chat__item__message__text__esp textAudio__esp text-small"},[e("hr",{staticClass:"color my-2"}),t._l(a.textoEsp,(function(a){return["*"===a?e("div",{staticClass:"d-inline traduccionAudio__chat__item__message__text__drop"},[e("span",{staticClass:"traduccionAudio__chat__item__message__text__drop__default"})]):e("span",{domProps:{innerHTML:t._s(a)}})]}))],2):t._e()]),e("div",{staticClass:"col-auto traduccionAudio__chat__item__message__audio"},[e("Audio",{attrs:{audio:a.audio},on:{"audio-hover":function(a){t.mostrarIndicadorAudio=!1}}})],1)]),e("div",{staticClass:"d-flex justify-content-end me-3"},[e("button",{staticClass:"traduccionAudio__chat__item__message__translate-btn text-small brad",on:{click:function(e){return t.toggleTranslate(a.id)}}},[t._v("Ver traducción")])])])])])})),0)])])},i=[],n=e("5530"),o=(e("d81d"),e("caad"),e("2532"),e("4de4"),e("07ac"),e("ac1f"),e("1276"),e("5319"),e("af8b")),r={name:"Dialogo",components:{Audio:o["a"]},props:{dialogo:{type:Array,default:function(){return[]}}},data:function(){return{uid:Math.floor(Math.random()*Math.pow(10,10)),touchScreen:!1,dragId:null,dropId:null,answers:{},translations:[],score:null}},computed:{dialogoComputed:function(){var t=this;return this.dialogo?this.dialogo.map((function(a,e){return Object(n["a"])(Object(n["a"])({},a),{},{id:t.uid+e+1,textoIng:t.splitPhrase(a.textoIng),textoEsp:t.splitPhrase(a.textoEsp)})})):[]}},methods:{toggleTranslate:function(t){this.translations.includes(t)?this.translations=this.translations.filter((function(a){return a!==t})):this.translations.push(t)},onCheck:function(){var t=Object.values(this.answers).every((function(t){return t.dragId===t.dropId}));this.score=t?"approved":"disapproved"},reset:function(){this.answers={},this.score=null},shuffle:function(t){for(var a=t.length-1;a>0;a--){var e=Math.floor(Math.random()*(a+1)),s=[t[e],t[a]];t[a]=s[0],t[e]=s[1]}return t},splitPhrase:function(t){return t.replace(/^\s+|\s+$/g,"&nbsp;").replace("***","___*___").split("___").filter(Boolean)}}},c=r,u=(e("f979"),e("2877")),d=Object(u["a"])(c,s,i,!1,null,null,null);a["a"]=d.exports},"845f":function(t,a,e){},"8abf":function(t,a,e){t.exports=e.p+"img/1.70571317.png"},af8b:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"audio position-relative",on:{"~mouseover":function(a){return t.$emit("audio-hover")}}},[t._t("default"),t.audioCanPlay?"pause"===t.state?s("button",{staticClass:"audio__btn",on:{click:t.play}},[s("img",{attrs:{src:e("5ccd")}})]):s("button",{staticClass:"audio__btn",on:{click:t.pause}},[s("img",{attrs:{src:e("f034")}})]):s("div",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[s("span",{staticClass:"visually-hidden"},[t._v("Loading..")])])],2)},i=[],n={props:{audio:{type:String,default:""}},data:function(){return{audioElement:null,audioCanPlay:!1,state:"pause"}},computed:{audioDuration:function(){if(this.audioElement){var t=this.audioElement.buffered;return t.end(t.length-1)}}},mounted:function(){var t=this;this.audioElement=this.createAudioElement(),this.audioElement.oncanplay=function(){t.audioCanPlay=!0},this.audioElement.onloadedmetadata=function(){t.audioCanPlay=!0},this.audioElement.onended=function(){t.audioElement.currentTime=0,t.state="pause"}},beforeDestroy:function(){this.audioElement.remove()},methods:{createAudioElement:function(){var t=document.createElement("audio");return t.setAttribute("preload","metadata"),t.setAttribute("src",this.audio),document.body.appendChild(t),t},play:function(){this.state="play",this.audioElement.play()},pause:function(){this.state="pause",this.audioElement.pause()},stop:function(){this.state="pause",this.audioElement.pause(),this.audioElement.currentTime=0}}},o={name:"Audio",mixins:[n]},r=o,c=e("2877"),u=Object(c["a"])(r,s,i,!1,null,null,null);a["a"]=u.exports},f906:function(t,a,e){t.exports=e.p+"img/icono-pdf.82f139cb.svg"},f979:function(t,a,e){"use strict";e("845f")}}]);
//# sourceMappingURL=sintesis.cccba06b.js.map