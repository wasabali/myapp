(this.webpackJsonposlomet3=this.webpackJsonposlomet3||[]).push([[0],[,,,,,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),r=s(2),i=s.n(r),c=s(6),a=s.n(c),l=(s(24),s(25),s.p,s.p+"static/media/LogoOsloMet.0aa23c2a.png"),d=(s(9),function(){return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("img",{src:l,alt:"OslometLogo"}),Object(n.jsx)("h1",{children:"Gj\xf8r deg kjent med de ulike retningene ved l\xe6rerutdanningen p\xe5 OsloMet!"})]})}),j=s(3),b=s(4),o=s(7),O=(s(26),function(e){var t=e.children,s=e.inverted,r=Object(o.a)(e,["children","inverted"]);return Object(n.jsx)("button",Object(b.a)(Object(b.a)({className:"".concat(s?"yellow":""," custom-button")},r),{},{children:t}))}),m=function(e,t){var s=Object(r.useState)(null),n=Object(j.a)(s,2),i=n[0],c=n[1],a=Object(r.useState)(!0),l=Object(j.a)(a,2),d=l[0],b=l[1],o=Object(r.useState)(null),O=Object(j.a)(o,2),m=O[0],u=O[1],g=Object(r.useState)(null),h=Object(j.a)(g,2),x=h[0],v=h[1];return Object(r.useEffect)((function(){var t=new AbortController;return console.log("use effetct ran"),fetch(e,{signal:AbortController.signal}).then((function(e){if(!e.ok)throw Error("Could not fetch the data for that resource");return e.json()})).then((function(e){c(e),b(!1),u(null),v(x)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(b(!1),u(e.message))})),function(){return t.abort()}}),[e]),{data:i,isPending:d,error:m,obligFag:x}},u=(s(12),s(11));s(27);function g(e){var t=e.children,s=e.open,r=e.onClose;return s?a.a.createPortal(Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"popup",children:Object(n.jsxs)("div",{className:"popup-inner",children:[Object(n.jsx)("button",{children:Object(n.jsx)(u.a,{onClick:r,size:"1.5em",className:"close-btn"})}),t]})})}),document.getElementById("portal")):null}var h=s(28).AiFillInfoCircle,x=function(e){e.children,e.inverted;var t=Object(o.a)(e,["children","inverted"]);return Object(n.jsx)("button",Object(b.a)(Object(b.a)({className:"infoknapp"},t),{},{children:Object(n.jsx)(h,{size:"1.5em"})}))},v=(s(13),s(5)),k=function(e){var t=e.answer,s=e.semester,i=(e.setSemesterList7,m("http://localhost:5000/api/obligfag/")),c=i.data,a=(i.error,i.isPending,Object(r.useState)()),l=Object(j.a)(a,2),d=l[0],b=l[1],o=Object(r.useState)(),u=Object(j.a)(o,2),h=u[0],k=u[1],f=Object(r.useState)(),p=Object(j.a)(f,2),S=p[0],I=p[1],N=Object(r.useState)(),F=Object(j.a)(N,2),w=F[0],B=F[1],M=Object(r.useState)(!1),L=Object(j.a)(M,2),V=L[0],C=L[1],y=v.sortBy(c,(function(e){return e.semester}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(n.Fragment,{children:y.map((function(e){return e.klasseId===t&&e.semester===s&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O,{id:"Videre",children:e.fagnavn},e.id),Object(n.jsx)(x,{className:"infoknapp",onClick:function(){C(!0),b(e.fagnavn),k(e.emnekode),I(e.studiepoeng),B(e.klasseId)}})]})}))}),Object(n.jsxs)(g,{open:V,onClose:function(){return C(!1)},children:[Object(n.jsxs)("h5",{children:["Info om ",d]}),Object(n.jsx)("br",{}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:["Fagnavn: ",d]}),Object(n.jsxs)("li",{children:["Emnekode: ",h]}),Object(n.jsxs)("li",{children:["Studiepoeng: ",S]}),Object(n.jsxs)("li",{children:["klassetrinn: ",w]})]})]})]})},f=function(e){var t=e.masterId,s=(e.valg7Master,e.setValg7Master),i=(e.setFag,e.setSemesterList7),c=(e.semesterList7,e.semester),a=e.klassetrinn,l=e.sorted,d=Object(r.useState)(),b=Object(j.a)(d,2),o=b[0],m=b[1],u=Object(r.useState)(),h=Object(j.a)(u,2),v=h[0],k=h[1],f=Object(r.useState)(),p=Object(j.a)(f,2),S=p[0],I=p[1],N=Object(r.useState)(),F=Object(j.a)(N,2),w=F[0],B=F[1],M=Object(r.useState)(!1),L=Object(j.a)(M,2),V=L[0],C=L[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(n.Fragment,{children:a&&l.map((function(e){return e.masterFagId===t&&e.semester===c&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O,{style:{backgroundColor:"#FFDC00"},fag:e.fagnavn,onClick:function(){i(e.id),s(e.masterFagId)},children:e.fagnavn},e.id),Object(n.jsx)(x,{onClick:function(){C(!0),m(e.fagnavn),k(e.emnekode),I(e.studiepoeng),B(e.klasseId)}})]})}))}),Object(n.jsxs)(g,{open:V,onClose:function(){return C(!1)},children:[Object(n.jsxs)("h3",{children:["Info om ",o]}),Object(n.jsx)("br",{}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:["Fagnavn: ",o]}),Object(n.jsxs)("li",{children:["Emnekode: ",v]}),Object(n.jsxs)("li",{children:["Studiepoeng: ",S]}),Object(n.jsxs)("li",{children:["klassetrinn: ",w]})]})]})]})},p=(s(14),function(e){var t=e.klasseId,s=e.semester,i=e.klassetrinn,c=e.setMuligheterId,a=e.activeButton,l=e.setActiveButton;e.setFag;var d=Object(r.useState)(),b=Object(j.a)(d,2),o=b[0],m=b[1],u=Object(r.useState)(),h=Object(j.a)(u,2),v=h[0],k=h[1],f=Object(r.useState)(),p=Object(j.a)(f,2),S=p[0],I=p[1],N=Object(r.useState)(!1),F=Object(j.a)(N,2),w=F[0],B=F[1];return Object(n.jsxs)(n.Fragment,{children:[i&&i.map((function(e){var r=a===e.masterFagId?"red":"";return e.semester===s&&e.klasseId===t&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O,{inverted:r,semester:e.semester,klasseId:e.klasseId,onClick:function(){var t;t=e.id,c(t),l(e.masterFagId)},children:e.fagnavn},e.id),Object(n.jsx)(x,{onClick:function(){B(!0),m(e.fagnavn),k(e.emnekode),I(e.studiepoeng)}})]})})),Object(n.jsxs)(g,{open:w,onClose:function(){return B(!1)},children:[Object(n.jsxs)("h3",{children:["Info om ",o]}),Object(n.jsx)("br",{}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:["Fagnavn: ",o]}),Object(n.jsxs)("li",{children:["Emnekode: ",v]}),Object(n.jsxs)("li",{children:["Studiepoeng: ",S]}),Object(n.jsxs)("li",{children:["klassetrinn: ",t]})]})]})]})}),S=s(15),I=s(16),N=s(18),F=s(17),w=(s(31),function(e){Object(N.a)(s,e);var t=Object(F.a)(s);function s(){var e;Object(S.a)(this,s);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).printResultat=function(){var e="<html><head><title></title></head><body>"+document.getElementById("printId").innerHTML+"</body></html>",t=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=t,console.log("Print utf\xf8rt"),window.location.reload()},e}return Object(I.a)(s,[{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(O,{onClick:function(){return e.printResultat()},children:"Lagre som PDF"})})}}]),s}(i.a.Component)),B=function(e){var t=e.klasseId,s=(e.semester,e.klassetrinn),i=e.muligheterId,c=Object(r.useState)(),a=Object(j.a)(c,2),l=a[0],d=a[1],b=Object(r.useState)(),o=Object(j.a)(b,2),m=o[0],u=o[1],h=Object(r.useState)(),v=Object(j.a)(h,2),k=v[0],f=v[1],p=Object(r.useState)(!1),S=Object(j.a)(p,2),I=S[0],N=S[1];return Object(n.jsxs)(n.Fragment,{children:[s&&s.map((function(e){return e.id===i&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(O,{semester:e.semester,klasseId:e.klasseId,children:[e.semester,e.fagnavn]},e.id),Object(n.jsx)(x,{onClick:function(){N(!0),d(e.fagnavn),u(e.emnekode),f(e.studiepoeng)}})]})})),Object(n.jsxs)(g,{open:I,onClose:function(){return N(!1)},children:[Object(n.jsxs)("h3",{children:["Info om ",l]}),Object(n.jsx)("br",{}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:["Fagnavn: ",l]}),Object(n.jsxs)("li",{children:["Emnekode: ",m]}),Object(n.jsxs)("li",{children:["Studiepoeng: ",k]}),Object(n.jsxs)("li",{children:["klassetrinn: ",t]})]})]})]})},M=(s(10),s(32),function(e){var t=e.klasseId,s=e.semester,i=e.klassetrinn,c=e.setMuligheterId,a=e.activeButton,l=(e.farge,e.setActiveButton),d=e.setMasterFagId;e.setSemesterList7,e.setFag,e.setValgtFag,e.messages,e.fag;var b=Object(r.useState)(),o=Object(j.a)(b,2),m=o[0],u=o[1],h=Object(r.useState)(),v=Object(j.a)(h,2),k=v[0],f=v[1],p=Object(r.useState)(),S=Object(j.a)(p,2),I=S[0],N=S[1],F=Object(r.useState)(!1),w=Object(j.a)(F,2),B=w[0],M=w[1];return Object(n.jsxs)(n.Fragment,{children:[i&&i.map((function(e){var r=a===e.masterFagId?"red":"";return e.semester===s&&e.klasseId===t&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O,{inverted:r,semester:e.semester,klasseId:e.klasseId,onClick:function(){var t;t=e.id,c(t),l(e.masterFagId),d(e.masterFagId)},children:e.fagnavn},e.id),Object(n.jsx)(x,{onClick:function(){M(!0),u(e.fagnavn),f(e.emnekode),N(e.studiepoeng)}})]})})),Object(n.jsxs)(g,{open:B,onClose:function(){return M(!1)},children:[Object(n.jsxs)("h3",{children:["Info om ",m]}),Object(n.jsx)("br",{}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:["Fagnavn: ",m]}),Object(n.jsxs)("li",{children:["Emnekode: ",k]}),Object(n.jsxs)("li",{children:["Studiepoeng: ",I]}),Object(n.jsxs)("li",{children:["klassetrinn: ",t]})]})]})]})}),L=function(e){var t=e.answer,s=e.klassetrinn,r=e.sorted,i=(e.activeButton,e.muligheterId1),c=e.muligheterId2,a=e.muligheterId3,l=e.masterId,d=e.semesterList7,j=(e.mulighetTull,e.fagNavn,e.setMessages,e.messages,e.valg7Master),b=e.semesterList9;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{classname:"card-container",id:"printId",children:[Object(n.jsxs)("div",{className:"card-container",children:[Object(n.jsx)("h1",{children:"semester 1"}),Object(n.jsx)("div",{className:"semester",children:Object(n.jsx)(k,{semester:1,answer:t})})]}),Object(n.jsxs)("div",{className:"card-container",children:[Object(n.jsx)("h1",{children:"semester 2"}),Object(n.jsx)("div",{className:"semester",children:Object(n.jsx)(k,{semester:2,answer:t})})]}),Object(n.jsxs)("div",{className:"card-container",children:[Object(n.jsx)("h1",{children:"semester 3"}),Object(n.jsx)("div",{className:"semester",children:Object(n.jsx)(k,{semester:3,answer:t})})]}),Object(n.jsxs)("div",{className:"card-container",children:[Object(n.jsx)("h1",{children:"semester 4"}),Object(n.jsx)("div",{className:"semester",children:1===l||2===l||4===l||12===l||13===l||14===l||15===l||16===l||17===l||25===l||26===l||27===l?Object(n.jsx)(B,{klassetrinn:s,muligheterId:i}):Object(n.jsx)(f,{klassetrinn:s,sorted:r,semester:4,masterId:l})})]}),Object(n.jsxs)("div",{className:"card-container",children:[Object(n.jsx)("h1",{children:"semester 5"}),Object(n.jsx)("div",{className:"semester",children:12===l||13===l||14===l||25===l||26===l||27===l?Object(n.jsx)(B,{klassetrinn:s,muligheterId:c}):Object(n.jsx)(f,{klassetrinn:s,sorted:r,semester:5,masterId:l})})]}),Object(n.jsxs)("div",{className:"card-container",children:[Object(n.jsx)("h1",{children:"semester 6"}),Object(n.jsx)("div",{className:"semester",children:12===l||13===l||14===l||25===l||26===l||27===l?Object(n.jsx)(f,{klassetrinn:s,sorted:r,semester:6,masterId:l}):Object(n.jsx)(B,{klassetrinn:s,muligheterId:a})})]}),Object(n.jsxs)("div",{className:"card-container",children:[Object(n.jsx)("h1",{children:"semester 7"}),Object(n.jsxs)("div",{className:"semester",children:[12===l||13===l||14===l||2===t?Object(n.jsx)(B,{klassetrinn:s,muligheterId:d}):Object(n.jsx)(f,{klassetrinn:s,sorted:r,semester:7,masterId:l}),Object(n.jsx)(k,{semester:7,answer:t})]})]}),Object(n.jsxs)("div",{className:"card-container",children:[Object(n.jsx)("h1",{children:"semester 8"}),Object(n.jsxs)("div",{className:"semester",children:[12===l||13===l||14===l||2===t?Object(n.jsx)(f,{klassetrinn:s,sorted:r,semester:8,masterId:j}):Object(n.jsx)(f,{klassetrinn:s,sorted:r,semester:8,masterId:l}),Object(n.jsx)(k,{semester:8,answer:t})]})]}),Object(n.jsxs)("div",{className:"card-container",children:[Object(n.jsx)("h1",{children:"semester 9"}),Object(n.jsxs)("div",{className:"semester",children:[12===l||13===l||14===l||2===t?Object(n.jsx)(B,{klassetrinn:s,muligheterId:b}):Object(n.jsx)(f,{klassetrinn:s,sorted:r,semester:9,masterId:l}),Object(n.jsx)(k,{semester:9,answer:t})]})]}),Object(n.jsxs)("div",{className:"card-container",children:[Object(n.jsx)("h1",{children:"semester 10"}),Object(n.jsx)("div",{className:"semester",children:Object(n.jsx)(f,{klassetrinn:s,answer:t,sorted:r,semester:10,masterId:d})})]})]}),Object(n.jsxs)("div",{className:"card-container2",children:[Object(n.jsx)("h1",{children:"Lagre din vei til master"}),Object(n.jsx)("div",{className:"print",children:Object(n.jsx)(w,{})})]})]})},V=s(5),C=function(e){var t=e.masterId,s=e.answer,i=e.fagNavn,c=m("http://localhost:5000/api/muligheter/"),a=c.data,l=(c.error,c.isPending,Object(r.useState)(!1)),d=Object(j.a)(l,2),b=(d[0],d[1],Object(r.useState)()),o=Object(j.a)(b,2),u=o[0],g=o[1],h=Object(r.useState)(),x=Object(j.a)(h,2),v=x[0],S=x[1],I=Object(r.useState)(),N=Object(j.a)(I,2),F=N[0],w=N[1],B=Object(r.useState)(),C=Object(j.a)(B,2),y=C[0],H=C[1],A=Object(r.useState)(),E=Object(j.a)(A,2),P=(E[0],E[1]),D=Object(r.useState)(),T=Object(j.a)(D,2),K=T[0],R=T[1],G=Object(r.useState)(),z=Object(j.a)(G,2),J=z[0],U=z[1],q=Object(r.useState)(),Q=Object(j.a)(q,2),W=Q[0],X=Q[1],Y=Object(r.useState)(),Z=Object(j.a)(Y,2),$=Z[0],_=Z[1],ee=Object(r.useState)(),te=Object(j.a)(ee,2),se=(te[0],te[1]),ne=Object(r.useState)(),re=Object(j.a)(ne,2),ie=re[0],ce=re[1],ae=Object(r.useState)(),le=Object(j.a)(ae,2),de=le[0],je=le[1];var be=Object(r.useState)(),oe=Object(j.a)(be,2),Oe=oe[0],me=oe[1],ue=Object(r.useState)(),ge=Object(j.a)(ue,2),he=ge[0],xe=ge[1],ve=Object(r.useState)(!1),ke=Object(j.a)(ve,2),fe=ke[0],pe=ke[1],Se=V.sortBy(a,(function(e){return e.semester}));return console.log("semesterList7",he),console.log("masterId",t),console.log("semester9Resultat",ie),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{class:"row",children:Object(n.jsxs)("div",{class:"column",id:"Hundre",children:[Object(n.jsx)("h3",{children:"2. Studie\xe5r"}),Object(n.jsx)("h2",{id:"Studieaar",children:"Obligatorisk emner p\xe5 h\xf8sten og fordypning p\xe5 v\xe5ren"}),Object(n.jsx)("p",{id:"AarBeskrivelse",children:"Lorem Ipsum dorem amet."}),Object(n.jsxs)("div",{className:"obligatoriske semestre",children:[Object(n.jsxs)("div",{classname:"Seksti",children:[Object(n.jsx)("h5",{children:"Semester 3"}),Object(n.jsx)("p",{id:"SemesterBeskrivelse",children:"H\xf8stsemester, 30 studiepoeng"}),Object(n.jsx)("div",{className:"fag",children:Object(n.jsx)(k,{id:"Gul",semester:3,answer:s})})]}),Object(n.jsxs)("div",{className:"Forti",children:[Object(n.jsx)("h5",{children:"Semester 4"}),Object(n.jsx)("p",{id:"SemesterBeskrivelse",children:"V\xe5rsemester, 30 studiepoeng"}),Object(n.jsxs)("div",{className:"fag",children:[Object(n.jsx)(f,{setValg7Master:!0,setSemesterList7:P,fagNavn:i,klassetrinn:a,sorted:Se,semester:4,masterId:t}),i.includes("Norsk")||i.includes("Matte")||i.includes("Profesjonsrettet pedagogikk")||12===t||13===t||14===t||15===t||16===t||17===t||24===t||25===t||26===t||27===t?Object(n.jsx)(p,{setMuligheterId:g,muligheterId:u,setValgtFag:_,valgtFag:$,klassetrinn:a,semester:4,klasseId:s,activeButton:de,setActiveButton:je}):null]})]})]})]})}),Object(n.jsx)("div",{class:"row",children:Object(n.jsxs)("div",{class:"column",id:"Hundre",children:[Object(n.jsx)("h3",{children:"3. Studie\xe5r"}),Object(n.jsx)("h2",{id:"Studieaar",children:"Mulighet for studier i utlandet og fordypning i valgfrie emner"}),Object(n.jsxs)("p",{id:"AarBeskrivelse",children:["Det tredje \xe5ret p\xe5 studiet er preget av at du kan velge fordypning i \xf8nsket emne. Dette er ogs\xe5 tidpunktet hvor det er mulighet for \xe5 studere fremmedspr\xe5k i utlandet. OsloMet tilbyr utveksling p\xe5 en rekke universiteter i utlandet. Dersom du er interessert i dette oppfordrer vi til \xe5 lese mer p\xe5 OsloMet sine utvekslingssider.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"For begge studieretninger har studentene mulighet til \xe5 fordype seg i ett eller flere valgfrie emner. Valgmulighetene er listet opp under."]}),Object(n.jsxs)("div",{className:"obligatoriske semestre",children:[Object(n.jsxs)("div",{classname:"Seksti",children:[Object(n.jsx)("h5",{children:"Semester 5"}),Object(n.jsx)("p",{id:"SemesterBeskrivelse",children:"H\xf8stsemester, 30 studiepoeng"}),Object(n.jsxs)("div",{className:"fag",children:[Object(n.jsx)(f,{setValg7Master:!0,setSemesterList7:P,semesterList7:y,klassetrinn:a,sorted:Se,semester:5,masterId:t}),i.includes("Profesjonsrettet pedagogikk")||12===t||13===t||14===t||15===t||16===t||17===t||25===t||26===t||27===t?Object(n.jsx)(p,{activeButton:de,setActiveButton:je,setMuligheterId:S,muligheterId:v,klassetrinn:a,semester:5,klasseId:s}):null]})]}),Object(n.jsxs)("div",{className:"Forti",children:[Object(n.jsx)("h5",{children:"Semester 6"}),Object(n.jsx)("p",{id:"SemesterBeskrivelse",children:"V\xe5rsemester, 30 studiepoeng"}),Object(n.jsxs)("div",{className:"fag",children:[Object(n.jsx)(f,{setValg7Master:!0,setSemesterList7:P,klassetrinn:a,sorted:Se,semester:6,masterId:t}),i.includes("Norsk")||i.includes("Matte")||i.includes("Engelsk")||i.includes("KRLE")||i.includes("Kropps\xf8ving")||i.includes("Kunst og h\xe5ndverk")||i.includes("Musikk")||i.includes("Naturfag")||i.includes("Samfunnsfag")||i.includes("Pedagogikk")||15===t||16===t||17===t||18===t||19===t||20===t||21===t||22===t||23===t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(M,{setMasterFagId:X,activeButton:Oe,setActiveButton:me,setMuligheterId:w,muligheterId:F,klassetrinn:a,semester:6,klasseId:s}),Object(n.jsx)(p,{setMuligheterId:w,muligheterId:F,klassetrinn:a,semester:4,klasseId:s,activeButton:Oe,setActiveButton:me})]}):null]})]}),console.log("semesterList7",he)]})]})}),Object(n.jsx)("div",{class:"row",children:Object(n.jsxs)("div",{class:"column",id:"Hundre",children:[Object(n.jsx)("h3",{children:"4. Studie\xe5r"}),Object(n.jsx)("h2",{id:"Studieaar",children:"Forberedelser til masteroppgaven"}),Object(n.jsx)("p",{id:"AarBeskrivelse",children:"Emnene i dette studie\xe5ret er som regel avgj\xf8rende for hvilke muligheter du har til masteroppgaven."}),Object(n.jsxs)("div",{className:"obligatoriske semestre",children:[Object(n.jsxs)("div",{classname:"Seksti",children:[Object(n.jsx)("h5",{children:"Semester 7"}),Object(n.jsx)("p",{id:"SemesterBeskrivelse",children:"H\xf8stsemester, 30 studiepoeng"}),Object(n.jsxs)("div",{className:"fag",children:[Object(n.jsx)(f,{valg7Master:K,setValg7Master:R,setSemesterList7:xe,klassetrinn:a,sorted:Se,semester:7,masterId:t}),Object(n.jsx)(p,{setSemesterList7:xe,klassetrinn:a,semester:7,klasseId:s}),Object(n.jsx)(k,{setSemesterList7:xe,semester:7,answer:s}),2===s||12===t||13===t||14===t?Object(n.jsx)(f,{valg7Master:K,setValg7Master:R,setSemesterList7:xe,klassetrinn:a,sorted:Se,semester:7,masterId:de}):null]})]}),Object(n.jsxs)("div",{className:"Forti",children:[Object(n.jsx)("h5",{children:"Semester 8"}),Object(n.jsx)("p",{id:"SemesterBeskrivelse",children:"V\xe5rsemester, 30 studiepoeng"}),Object(n.jsxs)("div",{className:"fag",children:[1===t&&Object(n.jsx)(p,{setSemesterList7:xe,klassetrinn:a,semester:8,klasseId:s}),Object(n.jsx)(k,{setSemesterList7:xe,semester:8,answer:s}),2===s||12===t||13===t||14===t?Object(n.jsx)(f,{setValg7Master:se,setSemesterList7:xe,klassetrinn:a,sorted:Se,semester:8,masterId:K}):Object(n.jsx)(f,{setSemesterList7:xe,klassetrinn:a,sorted:Se,semester:8,masterId:t})]})]})]})]})}),Object(n.jsx)("div",{class:"row",children:Object(n.jsxs)("div",{class:"column",id:"Hundre",children:[Object(n.jsx)("h3",{children:"5. Studie\xe5r"}),Object(n.jsx)("h2",{id:"Studieaar",children:"Undervisningsfag og masteroppgaven"}),Object(n.jsx)("p",{id:"AarBeskrivelse",children:"Lorem Ipsum dorem amet."}),Object(n.jsxs)("div",{className:"obligatoriske semestre",children:[Object(n.jsxs)("div",{classname:"Seksti",children:[Object(n.jsx)("h5",{children:"Semester 9"}),Object(n.jsx)("p",{id:"SemesterBeskrivelse",children:"H\xf8stsemester, 30 studiepoeng"}),Object(n.jsxs)("div",{className:"fag",children:[F&&Object(n.jsx)(f,{setValg7Master:U,setSemesterList7:xe,klassetrinn:a,sorted:Se,semester:9,masterId:W}),1===t&&Object(n.jsx)(p,{setSemesterList7:xe,klassetrinn:a,semester:9,klasseId:s}),Object(n.jsx)(k,{setSemesterList7:xe,semester:9,answer:s}),2===s||12===t||13===t||14===t?Object(n.jsx)(f,{setValg7Master:U,setSemesterList7:ce,klassetrinn:a,sorted:Se,semester:9,masterId:K}):Object(n.jsx)(f,{setValg7Master:U,setSemesterList7:ce,klassetrinn:a,sorted:Se,semester:9,masterId:t})]})]}),Object(n.jsxs)("div",{className:"Forti",children:[Object(n.jsx)("h5",{children:"Semester 10"}),Object(n.jsx)("p",{id:"SemesterBeskrivelse",children:"V\xe5rsemester, 30 studiepoeng"}),Object(n.jsx)("div",{className:"fag",children:W?Object(n.jsx)(f,{setValg7Master:!0,setSemesterList7:H,klassetrinn:a,sorted:Se,semester:10,masterId:J}):Object(n.jsx)(f,{setValg7Master:!0,setSemesterList7:H,klassetrinn:a,sorted:Se,semester:10,masterId:t})})]})]})]})}),Object(n.jsx)("div",{class:"row",children:Object(n.jsxs)("div",{class:"column",id:"Hundre",children:[Object(n.jsx)("div",{className:"videreknapp",children:Object(n.jsx)(O,{onClick:function(){return pe(!0)},children:"Se oppsummering"})}),Object(n.jsx)("div",{className:"sluttskjerm",children:fe&&Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(L,{answer:s,klassetrinn:a,sorted:Se,activeButton:de,muligheterId1:u,muligheterId2:v,muligheterId3:F,masterId:t,semesterList7:he,mulighetTull:y,fagNavn:i,valg7Master:K,klasseId:s,semester9Resultat:ie})})})]})})]})},y=(s.p,s(5)),H=function(e){var t=e.answer,s=e.semester,i=e.fagNavnStudierettning,c=m("http://localhost:5000/api/obligfag/"),a=c.data,l=(c.error,c.isPending,Object(r.useState)()),d=Object(j.a)(l,2),b=d[0],o=d[1],u=Object(r.useState)(),h=Object(j.a)(u,2),v=h[0],k=h[1],f=Object(r.useState)(),p=Object(j.a)(f,2),S=p[0],I=p[1],N=Object(r.useState)(),F=Object(j.a)(N,2),w=F[0],B=F[1],M=Object(r.useState)(!1),L=Object(j.a)(M,2),V=L[0],C=L[1],H=y.sortBy(a,(function(e){return e.semester}));return console.log("fagNavnStudierettning2",i),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(n.Fragment,{children:H.map((function(e){return e.klasseId===t&&e.semester===s&&e.fagnavn.includes(i)?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(O,{id:"Videre",children:[e.fagnavn," "]},e.id),Object(n.jsx)(x,{className:"infoknapp",onClick:function(){C(!0),o(e.fagnavn),k(e.emnekode),I(e.studiepoeng),B(e.klasseId)}})]}):null}))}),Object(n.jsxs)(g,{open:V,onClose:function(){return C(!1)},children:[Object(n.jsxs)("h5",{children:["Info om ",b]}),Object(n.jsx)("br",{}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:["Fagnavn: ",b]}),Object(n.jsxs)("li",{children:["Emnekode: ",v]}),Object(n.jsxs)("li",{children:["Studiepoeng: ",S]}),Object(n.jsxs)("li",{children:["klassetrinn: ",w]})]})]})]})},A=function(e){var t=e.answer,s=e.masterId,i=e.obj,c=e.fagNavn,a=e.fagNavnStudierettning,l=Object(r.useState)(!1),d=Object(j.a)(l,2);d[0],d[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{class:"row",children:[Object(n.jsx)("div",{class:"column",id:"Hundre",children:Object(n.jsx)("h3",{children:"Obligatoriske emner"})}),Object(n.jsx)("div",{class:"column",id:"MasterBilde"}),Object(n.jsxs)("div",{class:"column",id:"Atti",children:[Object(n.jsx)("h2",{id:"Left",children:"Oversikt over de obligatoriske emnene i de tre f\xf8rste semestrene"}),Object(n.jsxs)("p",{id:"Beskrivelse",children:["De tre f\xf8rste semesterene best\xe5r kun av obligatoriske emner. Disse er felles for begge studieretninger og p\xe5virker ikke masteroppgaven. I l\xf8pet av de tre f\xf8rste semestrene vil alle gjennomf\xf8re eksamner i Norsk og Matematikk, samt f\xe5 innf\xf8ring i pedagogikk. ",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("bold",{children:"De obligatoriske emnene er listet opp under!"})]})]})]}),Object(n.jsx)("div",{class:"row",children:Object(n.jsx)("div",{class:"column",id:"Hundre",children:Object(n.jsxs)("div",{className:"obligatoriske semestre",children:[Object(n.jsxs)("div",{classname:"Seksti",children:[Object(n.jsx)("h5",{children:"Semester 1"}),Object(n.jsx)("p",{id:"SemesterBeskrivelse",children:"H\xf8stsemester, 30 studiepoeng"}),Object(n.jsx)("div",{className:"fag",children:2===t?Object(n.jsx)(H,{fagNavnStudierettning:a,semester:1,answer:t}):Object(n.jsx)(k,{id:"IkkeKnapp",semester:1,answer:t})})]}),Object(n.jsxs)("div",{className:"Forti",children:[Object(n.jsx)("h5",{children:"Semester 2"}),Object(n.jsx)("p",{id:"SemesterBeskrivelse",children:"V\xe5rsemester, 30 studiepoeng"}),Object(n.jsx)("div",{className:"fag",children:2===t?Object(n.jsx)(H,{fagNavnStudierettning:a,semester:2,answer:t}):Object(n.jsx)(k,{id:"IkkeKnapp",semester:2,answer:t})})]}),Object(n.jsxs)("div",{className:"obligkort",children:[Object(n.jsx)("h5",{children:"Semester 3"}),Object(n.jsx)("p",{id:"SemesterBeskrivelse",children:"H\xf8stsemester, 30 studiepoeng"}),Object(n.jsx)("div",{className:"fag",children:2===t?Object(n.jsx)(H,{fagNavnStudierettning:a,semester:3,answer:t}):Object(n.jsx)(k,{id:"IkkeKnapp",semester:3,answer:t})})]})]})})}),Object(n.jsxs)("div",{class:"row",children:[Object(n.jsx)("div",{class:"column",id:"Hundre",children:Object(n.jsx)("h3",{children:"Veien Videre"})}),Object(n.jsx)("div",{class:"column",id:"BygningBilde"}),Object(n.jsxs)("div",{class:"column",id:"Atti",children:[Object(n.jsx)("h2",{id:"Left",children:"F\xe5 oversikt over emnene du m\xe5 ta, samt hvilke semestre du kan velge valgfrie emner"}),Object(n.jsxs)("p",{id:"Beskrivelse",children:["Semester fire er det semesteret man f\xf8rst f\xe5r lov til \xe5 velge fag selv. her kan du velge mellom en del ulike fag. Fagene du trenger for \xe5 g\xe5 opp til master er allerede lagt inn og er ",Object(n.jsx)("bold",{children:"markert i gult. "}),"S\xe5 du f\xe5r muligheten til \xe5 ta et fag til og f\xe5 60 studiepoeng i det emne, det er ikke n\xf8dvendig \xe5 ha 60 studiepoeng i det valgfrie emne, men er en fin ting \xe5 tenke p\xe5 om du f\xe5r lyst til \xe5 endre studiel\xf8pet underveis i studie."]})]})]}),Object(n.jsx)("div",{children:Object(n.jsx)(C,{fagNavn:c,masterId:s,answer:t,obj:i})})]})},E=(s(5),function(e){var t=e.answer,s=(e.studieId,e.fagNavnStudierettning),i=m("http://localhost:5000/api/masterfag/"),c=i.data,a=(i.error,i.isPending,Object(r.useState)()),l=Object(j.a)(a,2),d=l[0],b=l[1],o=Object(r.useState)(),u=Object(j.a)(o,2),g=u[0],h=u[1],x=Object(r.useState)(!1),v=Object(j.a)(x,2),k=v[0],f=v[1],p=Object(r.useState)(),S=Object(j.a)(p,2),I=(S[0],S[1],Object(r.useState)()),N=Object(j.a)(I,2),F=N[0],w=N[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{class:"row",children:[Object(n.jsx)("div",{class:"column",id:"Hundre",children:Object(n.jsx)("h3",{children:"Velg Masteremne"})}),Object(n.jsx)("div",{class:"column",id:"Tjue"}),Object(n.jsxs)("div",{class:"column",id:"Atti",children:[Object(n.jsx)("h2",{id:"Left",children:"Velg et masteremne og se hvordan du m\xe5 bygge oppstudiet for \xe5 kunne skrive masteroppgave i det valgt emnet"}),Object(n.jsxs)("p",{id:"Beskrivelse",children:["Valget du gj\xf8r her vil p\xe5virke valgmulighetene resten av studiet. For \xe5 kunne skrive master i et av de f\xf8lgende emnene m\xe5 du ha nok studiepoeng i valgt emne for \xe5 kunne skrive masteroppgave i det aktuelle faget. ",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"Du kan senere g\xe5 tilbake til denne delen og velge et annet mastermne du kunne v\xe6re interessert i \xe5 skrive masteroppgave. ",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("bold",{children:"Alle mulighetene er listet opp under!"})]})]})]}),Object(n.jsx)("div",{class:"row",children:Object(n.jsxs)("div",{class:"column",id:"Hundre",children:[Object(n.jsx)("h2",{children:"Velg et masteremne: "}),Object(n.jsx)("div",{className:"masterfag",children:c&&c.map((function(e){var s=F===e.id?"red":"";return e.klasseId===t&&Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"masterknapper",children:Object(n.jsx)(O,{inverted:s,options:e,activeButton:F,onClick:function(){var t;t=e,console.log("The link was clicked."),console.log(t),h(e.id),b(e.fagnavn),f(!0),function(e){w(e.id)}(e)},children:e.fagnavn},e.id)})})}))})]})}),k&&Object(n.jsx)(A,{fagNavnStudierettning:s,masterId:g,fagNavn:d,answer:t})]})}),P=(s.p,s.p,s.p,s.p+"static/media/Elever.c7ae9564.jpeg"),D=(s.p,s.p+"static/media/Praksis.36a9411b.jpeg"),T=function(e){e.handleClick;var t=e.klassetrinn,s=e.setVisVidere,r=e.visVidere,i=e.setAnswer,c=e.setObj;return Object(n.jsx)(n.Fragment,{children:t&&t.map((function(e){return Object(n.jsxs)(O,{className:"benButton",options:e,onClick:function(){c(e),i(e.id),function(e){console.log("The link was clicked. klasse"),console.log(e);var t=e.id;console.log("id fra handleClick = "+t)}(e.id),function(e){console.log("vis videre klikket"),console.log(e),s(!0)}(r)},children:["Grunnskolel\xe6rer ",e.klassetrinn," trinn"]},e.id)}))})},K=function(e){var t=e.valgtObligFag,s=e.setValgtObligFag,i=e.fagNavnStudierettning,c=e.setFagNavnStudierettning,a=m("http://localhost:5000/api/masterfag/"),l=a.data,d=(a.error,a.isPending,Object(r.useState)()),b=Object(j.a)(d,2),o=b[0],u=b[1];return console.log("valgtObligFag",t),console.log("fagNavnStudierettning",i),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{class:"row",children:Object(n.jsxs)("div",{class:"column",id:"Hundre",children:[Object(n.jsx)("h2",{children:"Velg et emne 5-10: "}),Object(n.jsx)("div",{className:"masterfag",children:l&&l.map((function(e){var t=o===e.id?"red":"";return 15===e.id||16===e.id||17===e.id?Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"masterknapper",children:Object(n.jsx)(O,{inverted:t,options:e,activeButton:o,onClick:function(){s(e.id),u(e.id),c(e.fagnavn)},children:e.fagnavn},e.id)})}):null}))})]})})})},R=function(e){e.handleClick;return function(e){var t=m("http://localhost:5000/api/klasser"),s=t.data,i=(t.error,t.isPending,Object(r.useState)(s)),c=Object(j.a)(i,2),a=c[0],l=c[1],d=Object(r.useState)(),b=Object(j.a)(d,2),o=b[0],O=b[1],u=Object(r.useState)(!1),g=Object(j.a)(u,2),h=g[0],x=g[1],v=Object(r.useState)(),k=Object(j.a)(v,2),f=(k[0],k[1],Object(r.useState)()),p=Object(j.a)(f,2),S=p[0],I=p[1],N=Object(r.useState)(),F=Object(j.a)(N,2),w=F[0],B=F[1];return Object(n.jsxs)("div",{className:"applikasjon",children:[Object(n.jsxs)("div",{class:"row",children:[Object(n.jsxs)("div",{class:"column",id:"Seksti",children:[Object(n.jsx)("img",{id:"Illustrasjon",src:P,alt:"Illustrasjon"}),Object(n.jsx)("h2",{id:"Innledning",children:"Med denne veilederen kan du utforske hvordan du \xf8nsker \xe5 legge opp studiel\xf8pet ditt her ved OsloMet. Utforsk de forskjellige fagene, og se hvilke konsekvenser valgt av fag vil ha senere i studiet."}),Object(n.jsx)("p",{id:"Padding",children:"Veilederen er utviklet for at alle elever skal ta riktige valg underveis i l\xe6rerutdanningen. M\xe5let er at du som student skal legge opp studiel\xf8pet riktig slik at du f\xe5r en master innenfor det emnet du \xf8nsker deg. Vi vet at oppbyggingen av l\xe6rerutdanningen kan v\xe6re vanskelig \xe5 forst\xe5, og dermed er denne veilederen utviklet for \xe5 visualisere oppbyggingen av studiet p\xe5 en bedre m\xe5te."})]}),Object(n.jsxs)("div",{class:"column",id:"Forti",children:[Object(n.jsx)("img",{id:"Illustrasjon",src:D,alt:"Illustrasjon"}),Object(n.jsx)("h2",{id:"Innledning",children:"Hvordan bruke veilederen?"}),Object(n.jsxs)("p",{id:"Padding",children:[Object(n.jsxs)("ol",{children:[Object(n.jsxs)("li",{children:["Velg studieretning, det f\xf8rste valget du f\xe5r er om du g\xe5r grunnskoleutdanning 1-7 eller grunnskoleutdanning 5-10.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("li",{children:["Deretter f\xe5r du muligheten til \xe5 velge hvilket masteremne du vil g\xe5 opp til i 10. semester. Basert p\xe5 valget du tar vil studieplanen oppdatere seg med de fagene du trenger for valgt masteremne.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]}),Object(n.jsx)("li",{children:"Siste del er \xe5 fylle inn planen med valgfag. Husk at man trenger 60 studiepoeng i syklus 1 for \xe5 ta faget videre i syklus 2. Om du har to fag kan du velge selv i semester 7."})]}),"yarn\xe7"]}),Object(n.jsx)("p",{id:"Bold",children:"Scroll ned for \xe5 starte veilederen!"})]})]}),Object(n.jsx)("div",{class:"row",id:"Start",children:Object(n.jsxs)("div",{class:"column",id:"Hundre",children:[Object(n.jsx)("h3",{children:"Velg studieretning "}),Object(n.jsx)("h2",{children:"Velg din studieretning ved OsloMet"}),Object(n.jsx)("div",{className:"introknapp",children:Object(n.jsx)(T,{visVidere:h,setVisVidere:x,setObj:O,setAnswer:l,klassetrinn:s})})]})}),2===a&&Object(n.jsx)(K,{fagNavnStudierettning:S,setFagNavnStudierettning:I,valgtObligFag:w,setValgtObligFag:B}),h&&Object(n.jsx)(E,{answer:a,obj:o,fagNavnStudierettning:S,setFagNavnStudierettning:I})]})}()};s(33);var G=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(d,{}),Object(n.jsx)("div",{className:"content",children:Object(n.jsx)("div",{className:"body",children:Object(n.jsx)(R,{})})})]})};a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(G,{})}),document.getElementById("root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.5c8aeeda.chunk.js.map