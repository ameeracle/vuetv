import{_ as c,o,c as a,a as i,b as r,d as l}from"./index-aI7r4DpM.js";const n={data(){return{complate:!1,subtitleData:"",subtitleDataUrl:"",videoUrl:"https://cndw1.shabakaty.com/mp420-720/11EC702F-DDA2-10E3-CF7C-B112FA39BD45_video.mp4?response-content-disposition=attachment%3B%20filename%3D%22video.mp4%22&AWSAccessKeyId=RNA4592845GSJIHHTO9T&Expires=1702300442&Signature=iRuTvOW7QsxYe6vUO6ZuRcbtBTw%3D",subtitleUrl:"https://cnth2.shabakaty.com/translation-files/ED50EF0D-CBDA-BB77-B103-6AFB5E4B7517_ar_transfile.vtt?response-cache-control=max-age%3D86400&AWSAccessKeyId=RNA4592845GSJIHHTO9T&Expires=1704733467&Signature=9YjEIJcsrrG%2FVWzWA3F0NoqbJbc%3D"}},mounted(){this.fetchSubtitleData()},methods:{fetchSubtitleData(){fetch(this.subtitleUrl).then(t=>{if(!t.ok)throw new Error(`Failed to fetch subtitle: ${t.status} ${t.statusText}`);var e=t.text();return console.log(e),e}).then(t=>{this.subtitleData=t;const e=new Blob([t],{type:"text/plain"});this.subtitleDataUrl=URL.createObjectURL(e),this.complate=!0}).catch(t=>{console.error("Error fetching subtitle:",t)})}}},u={key:0,controls:"",width:"640",height:"360"},h=["src"],b=["src"];function d(t,e,p,m,s,_){return s.complate?(o(),a("video",u,[i("source",{src:s.videoUrl,type:"video/mp4"},null,8,h),s.subtitleData?(o(),a("track",{key:0,src:s.subtitleDataUrl,kind:"captions",srclang:"ar",label:"Arabic",default:""},null,8,b)):r("",!0),l(" Your browser does not support the video tag. ")])):r("",!0)}const D=c(n,[["render",d]]);export{D as default};
