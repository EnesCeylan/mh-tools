"use strict";(self.webpackChunkmythic_companion=self.webpackChunkmythic_companion||[]).push([[820],{820:function(e,a,t){t.r(a);var n=t(902),i=t(184);a.default=function(e){var a=e.teamData,t=e.setTeamData,s=e.handleClick,c=e.setSelectedElement;return(0,i.jsxs)("div",{className:"build-container",children:[(0,i.jsxs)("div",{className:"row back",children:[(0,i.jsx)(n.Z,{teamData:a,setTeamData:t,handleClick:s,setSelectedElement:c,position:2}),(0,i.jsx)(n.Z,{teamData:a,setTeamData:t,handleClick:s,setSelectedElement:c,position:3}),(0,i.jsx)(n.Z,{teamData:a,setTeamData:t,handleClick:s,setSelectedElement:c,position:4})]}),(0,i.jsxs)("div",{className:"row front",children:[(0,i.jsx)(n.Z,{teamData:a,setTeamData:t,handleClick:s,setSelectedElement:c,position:0}),(0,i.jsx)(n.Z,{teamData:a,setTeamData:t,handleClick:s,setSelectedElement:c,position:1})]})]})}},902:function(e,a,t){t.d(a,{Z:function(){return o}});var n=t(791),i=t(773),s=function(e,a,t){var n=JSON.parse(JSON.stringify(e));n.team[t].name="",n.team[t].rune="",n.team[t].artifact="",n.team[t].divinityNodes=["","",""],n.team[t].weaponLv="",a(n)},c=t(184);var o=function(e){var a=e.teamData,t=e.setTeamData,o=e.handleClick,m=e.setSelectedElement,l=e.position;return(0,c.jsx)("div",{className:""!==a.team[l].name?"position active "+a.team[l].name.replace("&",""):"position",onClick:function(){o(l),m(l)},children:""!==a.team[l].name&&(0,c.jsxs)(n.Fragment,{children:[""!==a.team[l].weaponLv?(0,c.jsx)("img",{src:"/mythic-companion/assets/factions/faction-weaponlv/"+i.Z[a.team[l].name].faction.join("_")+"_"+a.team[l].weaponLv+".png",alt:i.Z[a.team[l].name].faction.join(" and ")+" lv."+a.team[l].weaponLv+" weapon faction icon"}):(0,c.jsx)("img",{src:"/mythic-companion/assets/factions/"+i.Z[a.team[l].name].faction.join("-")+".png",alt:i.Z[a.team[l].name].faction.join(" and ")+" faction icon"}),(0,c.jsx)("i",{className:"fas fa-times-circle",onClick:function(e){s(a,t,l),e.stopPropagation()}})]})})}}}]);
//# sourceMappingURL=820.9ba079d5.chunk.js.map