import{k as e,F as t,V as r}from"./framework.7ea3a455.js";const a={class:"stackblitz-example border-slate-400 border-dashed border-1 rounded-md p-2"},i={__name:"StackBlitzLiveExample",props:{projectPath:{type:String,required:!0},openPath:{type:String,required:!1}},setup(i){const s=i,o={embed:1,theme:"light",ctl:1,initialPath:s.openPath,view:"preview",file:"README.md",terminalHeight:0},p=new URLSearchParams(o).toString(),l=`https://stackblitz.com/github/${s.projectPath}?${p}`;return(i,s)=>(e(),t("div",a,[r("iframe",{class:"w-full h-500px border-none",src:l})]))}};export{i as _};
