(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{110:function(t,e,n){"use strict";n.r(e);var r=n(7),a=n(0),o=n.n(a),i=n(12),s=n.n(i),c=n(155),u=n(146),l=n(149),f=n(150),j=function(){return Object(r.jsx)(u.a,{position:"static",children:Object(r.jsxs)(l.a,{style:{backgroundColor:"black",color:"white"},children:[Object(r.jsx)(f.a,{variant:"h4",style:{fontFamily:"fantasy",fontWeight:300},children:"Search & Find"}),Object(r.jsx)(f.a,{variant:"h6",style:{margin:"10px 0px 0px 10px",fontFamily:"cursive"},children:" Countries"})]})})},d=n(16),h=n.n(d),m=n(28),b=n(41),g=n(42),O=n(46),p=n(45),y=n(151),x=n(21),v=n(35),I=n(158),C=n(154),k=n(156),w=n(159),S=n(160),L=n(67),q=n.n(L),N=n(68),A=n.n(N),J=function(t){Object(O.a)(n,t);var e=Object(p.a)(n);function n(t){return Object(b.a)(this,n),e.call(this,t)}return Object(g.a)(n,[{key:"getInfoClicked",value:function(){this.selectedCountry&&this.requestedInfo&&this.props.getInformation(this.selectedCountry,this.requestedInfo)}},{key:"render",value:function(){var t,e=this,n=this.props,a=n.countries,i=n.informationTypeList,s=Object(r.jsx)(q.a,{fontSize:"small"}),c=Object(r.jsx)(A.a,{fontSize:"small"});return Object(r.jsxs)(y.a,{style:{textAlign:"center",borderBottom:"1px solid"},children:[Object(r.jsx)(I.a,{my:4,children:Object(r.jsx)(f.a,{variant:"h4",style:{fontFamily:"cursive",fontWeight:200},children:" What do you want to know? "})}),Object(r.jsx)(I.a,{my:2,children:Object(r.jsx)(w.a,{options:a,getOptionLabel:function(t){return t.name},onChange:function(t,n){e.selectedCountry=n.name},style:{width:500,marginLeft:"auto",marginRight:"auto"},renderInput:function(t){return Object(r.jsx)(k.a,Object(v.a)(Object(v.a)({},t),{},{label:" Choose the country",required:!0,margin:"normal"}))}})}),Object(r.jsx)(I.a,{my:2,children:Object(r.jsx)(w.a,(t={multiple:!0,id:"checkboxes-tags-demo",options:i},Object(x.a)(t,"id","tags-standard"),Object(x.a)(t,"getOptionLabel",(function(t){return t})),Object(x.a)(t,"onChange",(function(t,n){e.requestedInfo=n})),Object(x.a)(t,"renderOption",(function(t,e){var n=e.selected;return Object(r.jsxs)(o.a.Fragment,{children:[Object(r.jsx)(S.a,{icon:s,checkedIcon:c,style:{marginRight:8},checked:n}),t]})})),Object(x.a)(t,"style",{width:500,marginLeft:"auto",marginRight:"auto"}),Object(x.a)(t,"renderInput",(function(t){return Object(r.jsx)(k.a,Object(v.a)(Object(v.a)({},t),{},{variant:"standard",required:!0,label:"What do you want to know?"}))})),t))}),Object(r.jsx)(I.a,{my:4,children:Object(r.jsx)(C.a,{variant:"contained",style:{backgroundColor:"black",color:"white"},onClick:function(){e.getInfoClicked()},children:"GO!"})})]})}}]),n}(a.Component),T=function(t){var e=t.selectedCountry,n=t.requiredInformation,a=t.selectedCountryInfo;return Object(r.jsxs)(y.a,{style:{textAlign:"center"},children:[Object(r.jsx)(I.a,{my:4,children:Object(r.jsxs)(f.a,{variant:"h2",children:[" ",e," "]})}),Object.values(n).map((function(n){return Object(r.jsxs)(I.a,{my:2,children:[Object(r.jsxs)(f.a,{variant:"h5",color:"primary",children:[n," "]},n+e),"flag"!==n?Object(r.jsxs)(f.a,{variant:"h5",children:[" ",a[n]+e," "]}):Object(r.jsx)("img",{src:t.selectedCountryInfo[n],width:"20%"})]})}))]})},F=n(49),R=n.n(F),E={initCountrInformationOnLocalstorage:function(t){var e={};t.forEach((function(t){e[t.name]={}})),localStorage.setItem("countriesInformation",JSON.stringify(e))},getCountriesList:function(){var t=this;return Object(m.a)(h.a.mark((function e(){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!==(n=JSON.parse(localStorage.getItem("countriesList")))&&null!==n){e.next=8;break}return e.next=4,R.a.get("https://restcountries.eu/rest/v2/all?fields=name;");case 4:r=e.sent,n=r.data,localStorage.setItem("countriesList",JSON.stringify(n)),t.initCountrInformationOnLocalstorage(n);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))()},getMissingInfoFromAPI:function(t,e){var n=this;return Object(m.a)(h.a.mark((function r(){var a,o,i,s;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=JSON.parse(localStorage.getItem("countriesInformation")),o=[],i="",e.forEach((function(t){i=i+t+";"})),r.next=6,R.a.get("https://restcountries.eu/rest/v2/name/"+t+"?fields="+i);case 6:return s=r.sent,e.forEach((function(e){var r=s.data[0][e];Array.isArray(r)&&(r=n.convertResToString(r)),a[t][e]=r})),localStorage.setItem("countriesInformation",JSON.stringify(a)),r.abrupt("return",o);case 10:case"end":return r.stop()}}),r)})))()},convertResToString:function(t){for(var e="",n=0;n<t.length;n++)e=t[n].name?t[n].name+" "+e:t[n]+" "+e;return e},getInformationAboutCountry:function(t,e){var n=this;return Object(m.a)(h.a.mark((function r(){var a,o,i,s;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=JSON.parse(localStorage.getItem("countriesInformation")),o=[],i=[],s=a[t],e.forEach((function(t){void 0===s[t]||null===s[t]?o.push(t):i.push(s[t])})),!(o.length>0)){r.next=8;break}return r.next=8,n.getMissingInfoFromAPI(t,o);case 8:return a=JSON.parse(localStorage.getItem("countriesInformation")),s=a[t],r.abrupt("return",s);case 11:case"end":return r.stop()}}),r)})))()}},W={informationTypeList:["currencies","languages","capital","callingCodes","region","subregion","population","timezones","borders","flag"]},z=function(t){Object(O.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(b.a)(this,n),(r=e.call(this,t)).getCountriesList=Object(m.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.getCountriesList();case 2:e=t.sent,r.setState({countriesNamesList:e});case 4:case"end":return t.stop()}}),t)}))),r.getInformation=function(){var t=Object(m.a)(h.a.mark((function t(e,n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.getInformationAboutCountry(e,n);case 2:a=t.sent,r.setState({selectedCountry:e,selectedCountryInfo:a,requiredInformation:n});case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),r.state={selectedCountryInfo:[],selectedCountry:"",countriesNamesList:[],requiredInformation:[],informationTypeList:W.informationTypeList},r}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.getCountriesList()}},{key:"render",value:function(){return Object(r.jsxs)(y.a,{style:{textAlign:"center"},children:[Object(r.jsx)(J,{countries:this.state.countriesNamesList,informationTypeList:this.state.informationTypeList,getInformation:this.getInformation}),Object(r.jsx)(T,{selectedCountry:this.state.selectedCountry,selectedCountryInfo:this.state.selectedCountryInfo,requiredInformation:this.state.requiredInformation})]})}}]),n}(a.Component),M=function(){return Object(r.jsxs)(c.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(r.jsx)(j,{}),Object(r.jsx)(z,{})]})};s.a.render(Object(r.jsx)(M,{}),document.querySelector("#root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.d203d47f.chunk.js.map