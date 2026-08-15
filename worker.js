const HTML = String.raw`<!doctype html>
<html lang="hi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Story Director V15.2</title>
<style>
*{box-sizing:border-box}
body{margin:0;background:#f5f6f8;color:#111;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
.wrap{max-width:900px;margin:auto;padding:16px 10px 70px}
.card{background:#fff;border-radius:24px;padding:20px;margin-bottom:16px;box-shadow:0 8px 30px #0000000d}
h1{font-size:30px;margin:0 0 8px}.sub,.small{color:#666;line-height:1.55}.small{font-size:13px}
label{display:block;font-weight:700;margin:14px 0 8px}
textarea,input,select{width:100%;padding:14px;border:1px solid #d8dbe1;border-radius:15px;background:#fff;font-size:16px;outline:none}
textarea{min-height:220px;resize:vertical;line-height:1.55}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.three{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px}
button{border:0;border-radius:15px;padding:14px 17px;font-size:16px;font-weight:700;cursor:pointer}
button:disabled{opacity:.5;cursor:not-allowed}
.primary{width:100%;background:#111;color:#fff;font-size:18px}.secondary{background:#eee}.danger{background:#fff0f0;color:#a40000}
.row{display:flex;gap:9px;flex-wrap:wrap;margin-top:13px}.row button{flex:1;min-width:125px}
.status{display:none;padding:13px;border-radius:14px;margin-top:13px;line-height:1.5;white-space:pre-wrap}
.status.show{display:block}.status.ok{background:#e8f7ed;color:#146b32}.status.err{background:#fff0f0;color:#a40000}.status.info{background:#eef4ff;color:#174ea6}
.badge{display:inline-block;background:#eee;border-radius:20px;padding:6px 10px;font-size:13px;margin-bottom:10px}
.check{display:flex;align-items:center;gap:10px;margin:15px 0;font-weight:700}.check input{width:22px;height:22px}
.speaker{border:1px solid #e2e2e2;border-radius:16px;padding:14px;margin-top:10px;background:#fafafa}
audio{width:100%;margin-top:14px}
@media(max-width:650px){.grid,.three{grid-template-columns:1fr}.card{padding:17px}h1{font-size:28px}}
</style>
</head>
<body>
<div class="wrap">

<div class="card">
<div class="badge">🎬 Story Director V15.2</div>
<h1>Story → Script → Voice</h1>
<div class="sub">कहानी का विचार दें, AI से कहानी बनवाएँ, speakers और emotions पहचानें और natural voice audio तैयार करें।</div>

<label>💡 Story Idea / Prompt</label>
<textarea id="idea" placeholder="उदाहरण: गाँव की बारिश वाली शाम में दो पुराने दोस्त कई साल बाद मिलते हैं।"></textarea>

<div class="grid">
<div><label>Language / Dialect</label>
<select id="language">
<option>Hindi</option>
<option>Bhojpuri</option>
<option>Purvanchali / Banarasi</option>
<option>Hindi + Bhojpuri mix</option>
<option>English</option>
</select></div>
<div><label>Genre</label>
<select id="genre">
<option>Drama</option><option>Romance</option><option>Suspense</option><option>Thriller</option>
<option>Comedy</option><option>Family</option><option>Adventure</option><option>Horror</option><option>Emotional</option>
</select></div>
</div>

<div class="three">
<div><label>Story Length</label>
<select id="length"><option value="short">Short</option><option value="medium" selected>Medium</option><option value="long">Long</option></select></div>
<div><label>Writing Style</label>
<select id="style"><option>Cinematic</option><option>Natural conversational</option><option>Literary</option><option>Fast paced</option><option>Emotional</option></select></div>
<div><label>Age Mode</label>
<select id="ageMode"><option value="general">General</option><option value="mature">21+ Mature</option></select></div>
</div>

<label>🎯 Extra Direction</label>
<input id="direction" placeholder="जैसे: 5 scenes, strong ending, Banarasi tone">

<label>🎬 Output Format</label>
<select id="outputFormat">
<option value="normal">Normal Story</option>
<option value="dialogue-heavy">Dialogue Heavy — 70–80% Dialogue</option>
<option value="dialogue-dominant" selected>Dialogue Dominant — 80–90% Dialogue</option>
<option value="pure-dialogue">Pure Dialogue Scene</option>
<option value="cinematic-script">Cinematic Script</option>
</select>

<button class="primary" id="generateStory">✨ Generate Story</button>
<div id="storyStatus" class="status"></div>
</div>

<div class="card">
<h2>📖 Generated Story</h2>
<label>Title</label><input id="title" placeholder="Story title">
<label>Story / Script</label><textarea id="story" placeholder="Generated story यहाँ आएगी…"></textarea>
<div class="row">
<button class="secondary" id="downloadStory" disabled>⬇️ Download Story</button>
<button class="secondary" id="saveLocal">💾 Save</button>
<button class="danger" id="clearAll">Clear</button>
</div>
</div>

<div class="card">
<h2>🎭 Director — Speaker & Emotion</h2>
<div class="check"><input type="checkbox" id="emotion" checked><span>🎚️ Automatic Emotion Detection</span></div>
<div class="check"><input type="checkbox" id="adult"><span>🔞 21+ Mature Mode</span></div>
<button class="primary" id="analyze">🎭 Detect Speakers & Emotions</button>
<div id="status" class="status"></div>
</div>

<div class="card">
<h2>🎙️ Detected Speakers</h2>
<div id="speakers">अभी speakers detect नहीं हुए हैं।</div>
</div>

<div class="card">
<h2>🎧 Voice Generation</h2>
<button class="primary" id="generate" disabled>🎙️ Generate Full Audio</button>
<div id="progress" class="status"></div>
<audio id="player" controls style="display:none"></audio>
<div class="row"><button class="secondary" id="download" disabled>⬇️ Download WAV</button></div>
</div>

</div>

<script>
const $=id=>document.getElementById(id);
let detected=null;

function status(id,text,type=""){
 const e=$(id);e.textContent=text;e.className="status show "+type;
}
function esc(s){
 return String(s??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}
function nameSafe(s){
 return String(s||"story").replace(/[^\\w\\u0900-\\u097F-]+/g,"_").slice(0,50)||"story";
}
function downloadBlob(blob,name){
 const url=URL.createObjectURL(blob),a=document.createElement("a");
 a.href=url;a.download=name||"story.wav";a.rel="noopener";
 document.body.appendChild(a);a.click();a.remove();
 setTimeout(()=>URL.revokeObjectURL(url),3000);
}
function saveLocal(){
 localStorage.setItem("storyDirectorV15",JSON.stringify({
  idea:$("idea").value,title:$("title").value,story:$("story").value,
  language:$("language").value,genre:$("genre").value,length:$("length").value,
  style:$("style").value,ageMode:$("ageMode").value,direction:$("direction").value
 }));
 status("storyStatus","Draft save हो गया ✓","ok");
}
function restore(){
 try{
  const x=JSON.parse(localStorage.getItem("storyDirectorV15")||"null");
  if(!x)return;
  ["idea","title","story","language","genre","length","style","ageMode","direction"].forEach(k=>{
   if(x[k]!==undefined)$(k).value=x[k];
  });
  $("downloadStory").disabled=!$("story").value.trim();
 }catch{}
}
async function previewVoice(voice,button){
 const old=button.textContent;button.disabled=true;button.textContent="⏳ सुन रहे हैं...";
 try{
  const r=await fetch("/api/tts",{method:"POST",headers:{"Content-Type":"application/json"},
   body:JSON.stringify({
    text:"नमस्कार। यह इस आवाज़ का परीक्षण है।",
    voice,emotion:"neutral",intensity:20,delivery:"calm",pace:"normal",pause:"none",
    language:$("language").value
   })
  });
  if(!r.ok){const d=await r.json().catch(()=>({}));throw Error(d.error||("Preview error "+r.status));}
  const blob=await r.blob(),url=URL.createObjectURL(blob),audio=new Audio(url);
  audio.onended=()=>URL.revokeObjectURL(url);await audio.play();
 }catch(e){status("status","❌ Voice preview: "+e.message,"err")}
 finally{button.disabled=false;button.textContent=old}
}

$("generateStory").onclick=async()=>{
 const idea=$("idea").value.trim();
 if(!idea){status("storyStatus","पहले Story Idea लिखिए।","err");return}
 const b=$("generateStory");b.disabled=true;b.textContent="⏳ कहानी बन रही है...";
 status("storyStatus","AI कहानी तैयार कर रहा है…","info");
 try{
  const r=await fetch("/api/story",{method:"POST",headers:{"Content-Type":"application/json"},
   body:JSON.stringify({
    prompt:idea,language:$("language").value,genre:$("genre").value,
    length:$("length").value,tone:$("style").value,
    mature:$("ageMode").value==="mature",direction:$("direction").value,
    outputFormat:$("outputFormat").value
   })
  });
  const d=await r.json().catch(()=>({}));
  if(!r.ok||!d.ok)throw Error(d.error||("Server error: "+r.status));
  const generatedStory=typeof d.story==="string"?d.story:JSON.stringify(d.story||"",null,2);
  $("story").value=generatedStory;
  $("title").value=(generatedStory.split("\\n").find(x=>x.trim())||"Generated Story")
    .replace(/^TITLE\\s*:\\s*/i,"").trim();
  $("downloadStory").disabled=!generatedStory;
  status("storyStatus","✅ कहानी सफलतापूर्वक तैयार हो गई!","ok");
 }catch(e){status("storyStatus","❌ "+e.message,"err")}
 finally{b.disabled=false;b.textContent="✨ Generate Story"}
};

$("downloadStory").onclick=()=>{
 const blob=new Blob([$("title").value+"\\n\\n"+$("story").value],{type:"text/plain;charset=utf-8"});
 downloadBlob(blob,nameSafe($("title").value)+".txt");
};
$("saveLocal").onclick=saveLocal;
$("clearAll").onclick=()=>{
 ["idea","title","story","direction"].forEach(x=>$(x).value="");
 detected=null;
 audioGeneration={running:false,paused:false,index:0,parts:[],fmt:null};
 $("downloadStory").disabled=true;$("generate").disabled=true;
 $("speakers").textContent="अभी speakers detect नहीं हुए हैं।";
 $("player").style.display="none";$("player").removeAttribute("src");$("download").disabled=true;
 status("storyStatus","साफ़ कर दिया गया।","ok");
};

$("analyze").onclick=async()=>{
 const story=$("story").value.trim();
 if(!story){status("status","पहले कहानी लिखिए या Generate Story करें।","err");return}
 const b=$("analyze");b.disabled=true;b.textContent="⏳ Analysis...";
 status("status","Speakers और emotions पहचाने जा रहे हैं…","info");
 try{
  const r=await fetch("/api/analyze",{method:"POST",headers:{"Content-Type":"application/json"},
   body:JSON.stringify({story,language:$("language").value,emotion:$("emotion").checked,mature:$("adult").checked})
  });
  const d=await r.json().catch(()=>({}));
  if(!r.ok||!d.ok)throw Error(d.error||("Server error: "+r.status));
  detected=d;
  renderSpeakers();
  $("generate").disabled=!(d.segments&&d.segments.length);
  status("status","✅ Speaker detection complete.","ok");
 }catch(e){status("status","❌ "+e.message,"err")}
 finally{b.disabled=false;b.textContent="🎭 Detect Speakers & Emotions"}
};

function renderSpeakers(){
 const list=detected?.speakers||[];
 $("speakers").innerHTML=list.map(s=>{
  const segs=(detected.segments||[]).filter(x=>x.speaker===s.name);
  const strongest=segs.reduce((best,x)=>!best||(x.intensity??0)>(best.intensity??0)?x:best,null);
  const emotion=strongest?.emotion||"neutral";
  const intensity=strongest?.intensity??50;
  const delivery=strongest?.delivery||"natural";
  const voice=s.voice||defaultVoice(s);
  return '<div class="speaker"><b>'+esc(s.name)+'</b>'+
   '<div class="small">'+esc(s.role||"character")+" · "+esc(s.gender||"unknown")+'</div>'+
   '<label>🎙️ Voice</label>'+
   '<select class="speakerVoice" data-speaker="'+esc(s.name)+'">'+
   voiceOption("alloy","Alloy — Natural",voice)+
   voiceOption("onyx","Onyx — Male",voice)+
   voiceOption("nova","Nova — Female",voice)+
   voiceOption("shimmer","Shimmer — Soft",voice)+
   voiceOption("echo","Echo — Deep",voice)+
   voiceOption("fable","Fable — Expressive",voice)+
   '</select>'+
   '<button type="button" class="secondary voicePreview" data-voice="'+esc(voice)+'">▶️ Preview Voice</button>'+
   '<div class="small" style="margin-top:10px">🎭 Emotion: '+esc(emotion)+' · Intensity: '+esc(intensity)+
   '/100<br>🎙️ Delivery: '+esc(delivery)+'</div></div>';
 }).join("")||"कोई speaker नहीं मिला।";

 document.querySelectorAll(".voicePreview").forEach(button=>{
  button.onclick=()=>previewVoice(button.dataset.voice,button);
 });
 document.querySelectorAll(".speakerVoice").forEach(select=>{
  select.onchange=()=>{
   const speaker=select.dataset.speaker,voice=select.value;
   const preview=select.parentElement.querySelector(".voicePreview");
   if(preview)preview.dataset.voice=voice;
   detected.speakers=(detected.speakers||[]).map(x=>x.name===speaker?{...x,voice}:x);
   detected.segments=(detected.segments||[]).map(x=>x.speaker===speaker?{...x,voice}:x);
  };
 });
}
function voiceOption(v,label,current){
 return '<option value="'+v+'"'+(current===v?" selected":"")+'>'+label+'</option>';
}
function defaultVoice(s){
 const role=String(s.role||"").toLowerCase();
 const gender=String(s.gender||"").toLowerCase();
 if(role.includes("narrator")||role.includes("narration"))return "shimmer";
 if(gender==="female")return "nova";
 if(gender==="male")return "onyx";
 return "alloy";
}

function wavInfo(buf){
 const v=new DataView(buf);
 if(v.byteLength<12||v.getUint32(0,false)!==0x52494646||v.getUint32(8,false)!==0x57415645)return null;
 let p=12,f=null,d=null;
 while(p+8<=v.byteLength){
  const id=v.getUint32(p,false),n=v.getUint32(p+4,true);p+=8;
  const safe=Math.min(n,v.byteLength-p);
  if(id===0x666d7420&&safe>=16){
   f={ch:v.getUint16(p+2,true),rate:v.getUint32(p+4,true),bits:v.getUint16(p+14,true)};
  }
  if(id===0x64617461){
   if(safe<=0)return null;d=new Uint8Array(buf,p,safe);break;
  }
  p+=safe+(safe&1);
 }
 return f&&d&&d.length?{...f,data:d}:null;
}

function wavBuild(parts,f){
 const n=parts.reduce((a,x)=>a+x.length,0),o=new ArrayBuffer(44+n),v=new DataView(o),u=new Uint8Array(o);
 const put=(p,s)=>[...s].forEach((c,i)=>u[p+i]=c.charCodeAt(0));
 put(0,"RIFF");v.setUint32(4,36+n,true);put(8,"WAVE");put(12,"fmt ");
 v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,f.ch,true);
 v.setUint32(24,f.rate,true);v.setUint32(28,f.rate*f.ch*f.bits/8,true);
 v.setUint16(32,f.ch*f.bits/8,true);v.setUint16(34,f.bits,true);put(36,"data");
 v.setUint32(40,n,true);
 let p=44;parts.forEach(x=>{u.set(x,p);p+=x.length});
 return new Blob([o],{type:"audio/wav"});
}

function compressLongSilence(buf){
 try{
  const a=new Uint8Array(buf);
  if(a.length<12||a[0]!==82||a[1]!==73||a[2]!==70||a[3]!==70||a[8]!==87||a[9]!==65||a[10]!==86||a[11]!==69)return buf;
  const dv=new DataView(a.buffer);let pos=12,fmt=null,dataStart=-1,dataSize=0;
  while(pos+8<=a.length){
   const id=String.fromCharCode(a[pos],a[pos+1],a[pos+2],a[pos+3]);
   const size=dv.getUint32(pos+4,true),start=pos+8;
   if(id==="fmt ")fmt={audioFormat:dv.getUint16(start,true),channels:dv.getUint16(start+2,true),
     sampleRate:dv.getUint32(start+4,true),bits:dv.getUint16(start+14,true)};
   if(id==="data"){dataStart=start;dataSize=Math.min(size,a.length-start);break}
   pos=start+size+(size%2);
  }
  if(!fmt||fmt.audioFormat!==1||fmt.bits!==16||dataStart<0)return buf;
  const channels=fmt.channels,sampleRate=fmt.sampleRate,bytesPerFrame=channels*2;
  const totalFrames=Math.floor(dataSize/bytesPerFrame);
  const windowFrames=Math.max(1,Math.floor(sampleRate*.01)),threshold=.008;
  const minSilenceFrames=Math.floor(sampleRate*.32),keepSilenceFrames=Math.floor(sampleRate*.12);
  const ranges=[];let silentStart=-1;
  for(let frame=0;frame<totalFrames;frame+=windowFrames){
   const end=Math.min(totalFrames,frame+windowFrames);let sum=0,count=0;
   for(let f=frame;f<end;f++)for(let ch=0;ch<channels;ch++){
    const base=dataStart+f*bytesPerFrame;
    sum+=Math.abs(dv.getInt16(base+ch*2,true))/32768;count++;
   }
   const silent=count?(sum/count)<threshold:false;
   if(silent&&silentStart<0)silentStart=frame;
   if(!silent&&silentStart>=0){
    if(frame-silentStart>=minSilenceFrames)ranges.push({start:silentStart,end:frame});
    silentStart=-1;
   }
  }
  if(silentStart>=0&&totalFrames-silentStart>=minSilenceFrames)ranges.push({start:silentStart,end:totalFrames});
  if(!ranges.length)return buf;
  const chunks=[];let cursor=0;
  for(const r of ranges){
   const endKeep=Math.min(r.start+keepSilenceFrames,r.end);
   chunks.push(a.slice(dataStart+cursor*bytesPerFrame,dataStart+endKeep*bytesPerFrame));
   cursor=r.end;
  }
  if(cursor<totalFrames)chunks.push(a.slice(dataStart+cursor*bytesPerFrame,dataStart+totalFrames*bytesPerFrame));
  const newDataSize=chunks.reduce((n,c)=>n+c.length,0),headerSize=dataStart;
  const out=new Uint8Array(headerSize+newDataSize);out.set(a.slice(0,headerSize),0);
  let p=12;
  while(p+8<=headerSize){
   const id=String.fromCharCode(a[p],a[p+1],a[p+2],a[p+3]),size=dv.getUint32(p+4,true);
   if(id==="data"){new DataView(out.buffer).setUint32(p+4,newDataSize,true);break}
   p+=8+size+(size%2);
  }
  let write=headerSize;for(const c of chunks){out.set(c,write);write+=c.length}
  new DataView(out.buffer).setUint32(4,out.length-8,true);
  return out.buffer;
 }catch{return buf}
}

let audioGeneration={running:false,paused:false,index:0,parts:[],fmt:null};
let audioResumeTimer=null,audioResumeBusy=false;

async function generateAudioFrom(index=0){
 if(!detected?.segments?.length)return;
 const segments=detected.segments;
 audioGeneration.running=true;audioGeneration.paused=false;
 const b=$("generate");b.disabled=true;$("download").disabled=true;

 try{
  for(let i=index;i<segments.length;i++){
   audioGeneration.index=i;
   const s=segments[i]||{};
   const speakerInfo=(detected.speakers||[]).find(x=>x.name===s.speaker)||{};
   const role=String(speakerInfo.role||"").toLowerCase();
   const gender=String(speakerInfo.gender||"").toLowerCase();
   const isNarrator=role.includes("narrator")||role.includes("narration");
   const voice=isNarrator?"onyx":(s.voice||speakerInfo.voice||(gender==="female"?"nova":gender==="male"?"alloy":"alloy"));
   const language=isNarrator?"Hindi":($("language").value||"Hindi");
   const speakerName=String(s.speaker||"");
const escapedSpeaker=speakerName.split("").map(ch=>"\\^$.*+?()[]{}|".includes(ch)?"\\"+ch:ch).join("");
const text=String(s.text||"").replace(new RegExp("^\\s*"+escapedSpeaker+"\\s*(?:\\([^)]*\\)|\\[[^\\]]*\\])?\\s*[:：\\-–—]\\s*","iu"),"").replace(/^\\s*(?:\\[[^\\]]{1,500}\\]|\\([^)]{1,500}\\))\\s*/g,"").replace(/\\b(?:emotion|intensity|delivery|भाव|भावना|तीव्रता|अभिव्यक्ति)\\s*[:=][^\\n,;|]*/giu,"").trim();;
   if(!text)continue;

   status("progress","🎙️ Segment "+(i+1)+" / "+segments.length+
    (document.hidden?"\\n⏸️ Screen/background detected — generation will resume automatically.":""),"info");

   let success=false,lastError=null;

   for(let attempt=1;attempt<=3&&!success;attempt++){
    try{
     const r=await fetch("/api/tts",{method:"POST",headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
       text,voice,emotion:s.emotion||"neutral",emotion2:s.emotion2||"",
       intensity:s.intensity??50,delivery:s.delivery||"natural",pace:s.pace||"normal",
       pause:s.pause||"none",emphasis:s.emphasis||"normal",language
      })
     });
     if(!r.ok){const d=await r.json().catch(()=>({}));throw Error(d.error||("TTS error "+r.status));}
     const rawAudio=await r.arrayBuffer(),processedAudio=compressLongSilence(rawAudio),x=wavInfo(processedAudio);
     if(!x)throw Error("TTS ने valid WAV audio नहीं लौटाया।");

     if(!audioGeneration.fmt)audioGeneration.fmt={ch:x.ch,rate:x.rate,bits:x.bits};
     else if(x.ch!==audioGeneration.fmt.ch||x.rate!==audioGeneration.fmt.rate||x.bits!==audioGeneration.fmt.bits)
      throw Error("TTS segment का WAV format अलग मिला।");

     if(i>0){
      const prev=segments[i-1];
      const gapMs=prev?.speaker!==s?.speaker?350:25;
      const bytesPerSecond=audioGeneration.fmt.rate*audioGeneration.fmt.ch*audioGeneration.fmt.bits/8;
      audioGeneration.parts.push(new Uint8Array(Math.max(0,Math.round(bytesPerSecond*gapMs/1000))));
     }
     audioGeneration.parts.push(x.data);success=true;
     status("progress","🎙️ Segment "+(i+1)+" / "+segments.length+" ✓","info");
    }catch(e){
     lastError=e;
     if(document.hidden){
      audioGeneration.paused=true;
      status("progress","⏸️ iPhone ने background में generation रोक दी है.\\nScreen वापस ON करते ही Segment "+(i+1)+" से automatically resume होगा.","info");
      return;
     }
     if(attempt<3){
      status("progress","⚠️ Segment "+(i+1)+" temporarily failed.\\nRetry "+attempt+"/3…","info");
      await new Promise(resolve=>setTimeout(resolve,1200*attempt));
     }
    }
   }

   if(!success){
    audioGeneration.paused=true;
    status("progress","❌ Segment "+(i+1)+" complete नहीं हो सका.\\n"+
      (lastError?.message||"Unknown TTS error")+
      "\\n\\nScreen ON रखें। App इसे resume करने की कोशिश करेगा.","err");
    return;
   }
  }

  if(!audioGeneration.fmt||!audioGeneration.parts.length)throw Error("कोई audio segment तैयार नहीं हुआ।");
  const finalBlob=wavBuild(audioGeneration.parts,audioGeneration.fmt);
  window.finalBlob=finalBlob;
  $("player").src=URL.createObjectURL(finalBlob);
  $("player").style.display="block";$("download").disabled=false;
  audioGeneration.running=false;audioGeneration.paused=false;
  status("progress","✅ पूरा WAV audio तैयार है।","ok");
 }catch(e){
  audioGeneration.paused=true;
  status("progress","❌ "+(e.message||"Audio generation failed")+"\\n\\nScreen ON करके दोबारा कोशिश करें.","err");
 }finally{
  audioGeneration.running=false;b.disabled=false;
 }
}

function tryResumeAudio(){
 if(audioResumeBusy||document.hidden||!audioGeneration.paused||audioGeneration.running||!detected?.segments?.length)return;
 audioResumeBusy=true;clearTimeout(audioResumeTimer);
 audioResumeTimer=setTimeout(()=>{
  try{
   if(!document.hidden&&audioGeneration.paused&&!audioGeneration.running){
    status("progress","▶️ Screen वापस ON हो गया।\\nSegment "+(audioGeneration.index+1)+" से audio generation resume हो रही है…","info");
    generateAudioFrom(audioGeneration.index);
   }
  }finally{audioResumeBusy=false}
 },700);
}
document.addEventListener("visibilitychange",()=>{if(!document.hidden)tryResumeAudio()});
window.addEventListener("pageshow",tryResumeAudio);
window.addEventListener("focus",tryResumeAudio);

$("generate").onclick=async()=>{
 if(!detected?.segments?.length)return;
 audioGeneration={running:false,paused:false,index:0,parts:[],fmt:null};
 window.finalBlob=null;
 await generateAudioFrom(0);
};
$("download").onclick=()=>{
 const blob=window.finalBlob;
 if(!blob){status("progress","❌ पहले Generate Full Audio पूरा होने दें।","err");return}
 downloadBlob(blob,nameSafe($("title").value||"story")+"-audio.wav");
};

restore();
</script>
</body>
</html>`;

function corsHeaders(extra={}){
 return {
  "Access-Control-Allow-Origin":"*",
  "Access-Control-Allow-Headers":"content-type,authorization",
  "Access-Control-Allow-Methods":"GET,POST,OPTIONS",
  ...extra
 };
}
function json(data,status=200){
 return new Response(JSON.stringify(data),{
  status,
  headers:{...corsHeaders(),"Content-Type":"application/json; charset=UTF-8","Cache-Control":"no-store"}
 });
}
async function readJson(request){
 try{return await request.json()}catch{throw Error("Invalid JSON request")}
}
async function ai(env,instructions,input){
 if(!env.OPENAI_API_KEY)throw Error("OPENAI_API_KEY configured नहीं है।");
 const r=await fetch("https://api.openai.com/v1/responses",{
  method:"POST",
  headers:{
   "Authorization":"Bearer "+env.OPENAI_API_KEY,
   "Content-Type":"application/json"
  },
  body:JSON.stringify({
   model:env.OPENAI_MODEL||"gpt-5-mini",
   instructions,
   input,
   store:false
  })
 });
 const d=await r.json();
 if(!r.ok)throw Error(d?.error?.message||"OpenAI API request failed");
 let t=d.output_text||"";
 if(!t&&Array.isArray(d.output))
  t=d.output.flatMap(x=>x.content||[]).map(x=>x.text||"").filter(Boolean).join("\n");
 return t.trim();
}
function cleanJson(t){
 let x=String(t||"").trim();
 if(x.startsWith("```")){
  x=x.slice(3).trim();
  if(x.toLowerCase().startsWith("json"))x=x.slice(4).trim();
  if(x.endsWith("```"))x=x.slice(0,-3).trim();
 }
 return x;
}

const languageRules={
 Hindi:`
Write DIRECTLY in natural contemporary Indian Hindi. Do not translate from English.
Use simple, familiar spoken Hindi, correct grammar and natural gender/number agreement.
Dialogue must sound like real people talking, not literary narration.
Keep Ravi and Neha distinct and relationship-consistent.
Use "तुम" by default for husband-wife unless context requires otherwise.
Do not invent Hindi words, unusual synonyms, decorative metaphors or machine-translated phrases.
Do not force English/Hinglish/Bhojpuri/Purvanchali vocabulary.
Characters must not explain information they already know.
Use natural hesitation, interruption and short replies only where appropriate.
Before returning, silently read the complete story aloud in your head and rewrite anything unnatural.
`,
 Bhojpuri:`
Write DIRECTLY in authentic conversational Bhojpuri. Do not translate Hindi word-for-word.
Use authentic Bhojpuri grammar, pronouns, verb forms, particles and natural conversational rhythm.
Do not write standard Hindi with a few Bhojpuri words.
Avoid caricature, theatrical language and forced dialect.
`,
 "Purvanchali / Banarasi":`
Write DIRECTLY in natural conversational Purvanchali/Banarasi speech.
Do not write standard Hindi and insert random regional words.
Use believable eastern-UP/Banarasi rhythm, vocabulary and grammar.
Do not caricature the dialect and do not randomly mix Bhojpuri.
`,
 "Hindi + Bhojpuri mix":`
Write natural Indian Hindi with Bhojpuri used where it genuinely fits the characters and situation.
Do not mechanically alternate languages.
`,
 English:`
Write DIRECTLY in fluent natural conversational English.
Do not translate sentence-by-sentence from Hindi.
Use believable spoken dialogue and distinct character voices.
`
};

async function story(env,b){
 const p=String(b.prompt||b.idea||"").trim();
 if(!p)throw Error("Story prompt खाली है।");
 const language=b.language||"Hindi";
 const mature=b.mature?`
MATURE MODE ENABLED:
All characters must be clearly 21+ adults.
Adult romance and sensual atmosphere are allowed.
Sexual content must remain non-graphic; if explicit intimacy would arise, use tasteful fade-to-black.
Never involve minors in sexual content.
`:"MATURE MODE DISABLED: Keep content appropriate for a general audience.";

 const format=b.outputFormat||"normal";
 const formatInstruction={
  "dialogue-heavy":"Approximately 70–80% meaningful character dialogue; keep narration brief.",
  "dialogue-dominant":"Approximately 80–90% meaningful character dialogue; narration only for essential setting, action and transitions.",
  "pure-dialogue":"Almost entirely dialogue; narration only when absolutely necessary.",
  "cinematic-script":"Cinematic screenplay with concise scene descriptions and natural dialogue.",
  "normal":"Natural balance of narration and dialogue."
 }[format]||"Natural balance of narration and dialogue.";

 const instructions=[
  "You are STORY DIRECTOR V15.2, a professional Indian story and dialogue director.",
  "Create an original story based closely on the user's idea.",
  "Selected language: "+language,
  languageRules[language]||languageRules.Hindi,
  "Genre: "+(b.genre||"Drama"),
  "Length: "+(b.length||"Medium"),
  "Writing style: "+(b.tone||"Cinematic"),
  "Output format: "+format,
  "Format instruction: "+formatInstruction,
  "Extra direction: "+(b.direction||""),
  mature,
  "Keep every character's name, gender, age, role, personality and speaking style consistent.",
  "Every character should have a distinct but believable vocabulary and rhythm.",
  "Natural language is more important than impressive or cinematic wording.",
  "Avoid repetitive dialogue, speeches, exposition and generic AI phrases.",
  "Narration must describe logical actions only.",
  "Return ONLY the finished story."
 ].join("\n");

 return ai(env,instructions,p);
}

async function analyze(env,b){
 const s=String(b.story||"").trim();
 if(!s)throw Error("Story खाली है।");

 const instructions=[
  "You are the dialogue director for Story Director V15.2.",
  "Analyze the story carefully and return ONLY valid JSON.",
  "Schema: {title:string,speakers:[{name,role,gender,voice}],segments:[{speaker,text,emotion,intensity,delivery,pace,pause,emphasis}]}",
  "Preserve every character name exactly as written. Never rename characters.",
  "Use narrator only for narration, scene description and non-dialogue text.",
  "Every spoken dialogue must belong to the correct character.",
  "Voice defaults: narrator=shimmer, male=onyx, female=nova, unknown=alloy.",
  "Detect the dominant emotion of every segment from context, not merely punctuation.",
  "Allowed emotions: neutral,happy,sad,angry,fear,surprise,romantic,playful,tense,serious,concerned,dramatic.",
  "Intensity is 0–100 and must reflect actual emotional strength.",
  "Allowed delivery: calm,warm,soft,hesitant,playful,tense,urgent,firm,tearful,conversational.",
  "Allowed pace: very_slow,slow,normal,fast,very_fast.",
  "Pause: none,short. Do not create unnecessary long pauses.",
  "Emphasis: low,normal,strong.",
  "Preserve original dialogue wording exactly whenever possible.",
  "For Hindi, use natural conversational Indian Hindi.",
  "For Bhojpuri/Purvanchali/Banarasi, preserve the selected dialect naturally.",
  "Questions should use natural question prosody but emotion must be context-aware.",
  "Return valid JSON only."
 ].join("\n");

 const t=await ai(env,instructions,s);
 let d;
 try{d=JSON.parse(cleanJson(t))}catch{throw Error("AI returned invalid JSON.")}
 if(!Array.isArray(d.speakers)||!Array.isArray(d.segments))throw Error("Invalid speaker detection result.");

 d.speakers=d.speakers.map(s=>({
  ...s,
  voice:s.voice||defaultServerVoice(s)
 }));
 d.segments=d.segments.map(s=>({
  ...s,
  emotion:s.emotion||"neutral",
  intensity:Math.max(0,Math.min(100,Number(s.intensity??50))),
  delivery:s.delivery||"conversational",
  pace:s.pace||"normal",
  pause:s.pause||"none",
  emphasis:s.emphasis||"normal",
  voice:s.voice||undefined
 }));
 return {...d,ok:true};
}
function defaultServerVoice(s){
  const role=String(s?.role||"").toLowerCase();
  const gender=String(s?.gender||"").toLowerCase();
  const name=String(s?.name||"").trim();

  // Narrator हमेशा Onyx
  if(role.includes("narrator")||role.includes("narration")){
    return "onyx";
  }

  // Character name से stable voice चुनें,
  // ताकि एक ही character की voice बार-बार न बदले।
  let hash=0;
  for(let i=0;i<name.length;i++){
    hash=((hash<<5)-hash)+name.charCodeAt(i);
    hash|=0;
  }

  const maleVoices=["alloy","echo","fable"];
  const femaleVoices=["nova","shimmer"];

  if(gender==="female"){
    return femaleVoices[Math.abs(hash)%femaleVoices.length];
  }

  if(gender==="male"){
    return maleVoices[Math.abs(hash)%maleVoices.length];
  }

  return "alloy";
}

function repairMojibake(s){
 if(!s||!/[ÃÂà¤à¦à§à¨à©àªà«à¬à­à®à¯]/.test(s))return s;
 try{
  const bytes=new Uint8Array(Array.from(s).map(ch=>ch.charCodeAt(0)&255));
  return new TextDecoder("utf-8").decode(bytes);
 }catch{return s}
}

async function tts(env,b){
 const text=repairMojibake(String(b.text||"")).trim();
 if(!text)throw Error("TTS text खाली है।");
 if(!env.OPENAI_API_KEY)throw Error("OPENAI_API_KEY configured नहीं है।");

 const voice=b.voice||"alloy";
 const language=b.language||"Hindi";
 const regional=["Bhojpuri","Purvanchali / Banarasi","Hindi + Bhojpuri mix"].includes(language);
 const emotion=String(b.emotion||"neutral").toLowerCase();
 const intensity=Math.max(0,Math.min(100,Number(b.intensity??75)));
 const delivery=String(b.delivery||"natural");
 const pace=String(b.pace||"normal");

 const intensityDirection=intensity>=90
  ?"very strong but controlled"
  :intensity>=75
   ?"clearly expressive but natural"
   :intensity>=55
    ?"moderately expressive and subtle"
    :"soft and restrained";

 const emotionDirection={
  sad:"genuinely hurt and vulnerable; soften tone and allow subtle breath/pitch variation",
  angry:"upset and tense; use firmness and energy without shouting",
  romantic:"warm, intimate and sincere; relaxed and subtle, never theatrical",
  suspenseful:"alert, tense and controlled; restrained anticipation",
  funny:"playful and spontaneous; light timing and emphasis, never cartoon-like",
  serious:"calm, firm and believable with controlled emotional weight",
  dramatic:"emotionally engaged but restrained and realistic",
  concerned:"genuinely worried and attentive, with subtle pitch variation",
  happy:"warm, positive and naturally energetic without sounding exaggerated",
  surprise:"brief natural rise in energy and pitch, not theatrical",
  fear:"controlled nervousness and tension, not screaming",
  playful:"light, teasing and spontaneous",
  tense:"controlled tension with tighter rhythm",
  neutral:"relaxed, conversational and human"
 }[emotion]||"natural and believable";

 const question=/[?؟]/.test(text);
 const exclamation=/[!！]/.test(text);

 const instructions=[
  "Speak naturally and expressively in "+language+".",
  regional
   ?"Use authentic natural Indian regional pronunciation and conversational rhythm."
   :"Use clear natural Indian pronunciation.",
  "Primary emotion: "+emotion+".",
  "Emotion intensity: "+intensity+"/100 ("+intensityDirection+").",
  "Delivery: "+delivery+".",
  "Pace: "+pace+".",
  "Emotion direction: "+emotionDirection+".",
  question
   ?"This is a question. Use natural conversational question intonation with a subtle pitch lift; do not exaggerate."
   :exclamation
    ?"This contains a strong reaction. Add a brief natural increase in vocal energy; do not shout."
    :"Use natural sentence-level intonation.",
  "Use subtle pitch, rhythm, emphasis and vocal-energy changes so the emotion is audible.",
  "Never overact, shout or sound like an audiobook narrator unless explicitly intended.",
  "Use natural pauses but never insert unnecessarily long silent gaps.",
  "Do not speak emotion labels, stage directions, speaker names or metadata aloud.",
  "The result must sound like a real person speaking, not synthetic narration."
 ].join(" ");

 const r=await fetch("https://api.openai.com/v1/audio/speech",{
  method:"POST",
  headers:{
   "Content-Type":"application/json",
   "Authorization":"Bearer "+env.OPENAI_API_KEY
  },
  body:JSON.stringify({
   model:env.OPENAI_TTS_MODEL||"gpt-4o-mini-tts",
   voice,
   input:text,
   instructions,
   response_format:"wav"
  })
 });
 if(!r.ok){
  const d=await r.json().catch(()=>({}));
  throw Error(d?.error?.message||"OpenAI TTS request failed");
 }
 return r;
}

export default {
 async fetch(request,env){
  const u=new URL(request.url);

  if(request.method==="OPTIONS")
   return new Response(null,{status:204,headers:corsHeaders()});

  if(u.pathname==="/health")
   return json({
    ok:true,
    service:"Story Director V15.2",
    openai:!!env.OPENAI_API_KEY,
    model:env.OPENAI_MODEL||"gpt-5-mini",
    ttsModel:env.OPENAI_TTS_MODEL||"gpt-4o-mini-tts"
   });

  if(u.pathname==="/api"&&request.method==="GET")
   return json({
    ok:true,
    service:"Story Director V15.2",
    endpoints:["/api/story","/api/analyze","/api/tts","/health"]
   });

  if(u.pathname==="/api/story"){
   if(request.method!=="POST")return json({ok:false,error:"Method Not Allowed"},405);
   try{return json({ok:true,story:await story(env,await readJson(request))})}
   catch(e){return json({ok:false,error:e.message||"Story generation failed"},500)}
  }

  if(u.pathname==="/api/analyze"){
   if(request.method!=="POST")return json({ok:false,error:"Method Not Allowed"},405);
   try{return json(await analyze(env,await readJson(request)))}
   catch(e){return json({ok:false,error:e.message||"Speaker detection failed"},500)}
  }

  if(u.pathname==="/api/tts"){
   if(request.method!=="POST")return json({ok:false,error:"Method Not Allowed"},405);
   try{
    const a=await tts(env,await readJson(request));
    return new Response(a.body,{
     status:200,
     headers:{
      ...corsHeaders(),
      "Content-Type":"audio/wav",
      "Cache-Control":"no-store"
     }
    });
   }catch(e){
    return json({ok:false,error:e.message||"TTS failed"},500);
   }
  }

  const fixedHTML=repairMojibake(HTML);
  return new Response(new TextEncoder().encode(fixedHTML),{
   status:200,
   headers:{
    "Content-Type":"text/html; charset=utf-8",
    "Cache-Control":"no-cache, no-transform"
   }
  });
 }
};
