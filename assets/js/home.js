import{g as _}from"./listPages.js";import{_ as i,r as d,b as a,d as s,F as p,e as u,f as t,o as e,c as m,w as n,a as h,t as f}from"./index.js";import{V as g}from"./VBtn.js";import"./index2.js";const v={data(){return{sections:[]}},created(){this.sections=_()}},k={class:"pageHome"},x=s("div",{class:"pageHome__logo"},[t("CHEAT_PAGE "),s("span",{class:"px-2"},"/")],-1),w={class:"pageHome__content customScroll"},H=s("h1",{class:"pl-5"},"Привет!",-1),V={class:"pageHome__contentRow"},y=s("div",{class:"w-50"},[s("p",{class:"pt-5"},"Это шпаргалка для собеседований!"),s("p",null," Здесь собраны ключевые моменты, которые надо знать, но которые могут выскочить из головы в самый неподходящий момент. "),s("p",null," Однако, будь в курсе, что информация, представленная здесь, может быть не всегда достоверной, актуальной или полной. "),s("p",null," Я делаю эти записи исключительно для себя, чтобы не потерять важные детали и иметь постоянный доступ к кратким ответам. "),s("p",null,[s("b",null," Большая часть материала сгенерирована нейросетью, сейчас я пытаюсь отфильтровать и переписать весь материал. А также дополнить все примерами. ")]),s("p",null,[t(" Буду рад, если заметки окажутся полезными кому-то еще! Если у вас есть замечания или дополнения к материалам прошу сообщить в "),s("a",{href:"https://t.me/Vetrash"},"Telegram")])],-1),B=s("div",{class:"line"},null,-1),$={class:"w-50"},C=s("h2",{class:"pl-5"},"Разделы:",-1),E={class:"pageHome__section"};function N(S,T,b,A,c,F){const l=d("router-link");return e(),a("div",k,[x,s("div",w,[H,s("div",V,[y,B,s("div",$,[C,s("div",E,[(e(!0),a(p,null,u(c.sections,(o,r)=>(e(),m(l,{to:`/questions/?type=${o}`,"v-key":r},{default:n(()=>[h(g,{class:"w-100",color:"grey-darken-4",variant:"tonal",rounded:"xs"},{default:n(()=>[t(f(o),1)]),_:2},1024)]),_:2},1032,["to","v-key"]))),256))])])])])])}const P=i(v,[["render",N]]);export{P as default};