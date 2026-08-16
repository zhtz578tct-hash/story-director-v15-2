const HTML = String.raw`<!doctype html>
<html lang="hi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Story Director V16</title>
<style>
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#f3f4f7;color:#111;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;padding-bottom:82px}.wrap{max-width:900px;margin:auto;padding:14px 12px 30px}.topbar{position:sticky;top:0;z-index:20;margin:0 -2px 12px;background:#f3f4f7dd;backdrop-filter:blur(14px);padding:6px 2px 10px}.brand{background:#111;color:#fff;border-radius:18px;padding:12px 16px;font-weight:800;display:inline-block}.hero{background:#fff;border-radius:28px;padding:24px 20px;margin-bottom:14px;box-shadow:0 8px 30px #0000000b}.hero h1{font-size:34px;line-height:1.08;margin:10px 0 8px}.hero p{font-size:17px;line-height:1.55;color:#687080;margin:0}.card{background:#fff;border-radius:24px;padding:20px;margin-bottom:14px;box-shadow:0 8px 30px #0000000b}.card h2{font-size:24px;margin:0 0 14px}.section-title{display:flex;align-items:center;justify-content:space-between;gap:10px}.small{font-size:13px;color:#6b7280;line-height:1.5}.muted{color:#7a818d}.grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.three{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}label{display:block;font-weight:750;margin:14px 0 8px}textarea,input,select{width:100%;padding:14px;border:1px solid #d9dce2;border-radius:15px;background:#fff;font-size:16px;outline:none;color:#111}textarea{min-height:220px;resize:vertical;line-height:1.55}button{border:0;border-radius:15px;padding:14px 16px;font-size:16px;font-weight:750;cursor:pointer}button:disabled{opacity:.45;cursor:not-allowed}.primary{width:100%;background:#111;color:#fff;font-size:18px}.secondary{background:#eef0f3}.danger{background:#fff0f0;color:#a32626}.row{display:flex;gap:9px;flex-wrap:wrap;margin-top:12px}.row button{flex:1;min-width:130px}.status{display:none;padding:13px;border-radius:14px;margin-top:12px;line-height:1.5;white-space:pre-wrap}.status.show{display:block}.status.ok{background:#e8f7ed;color:#146b32}.status.err{background:#fff0f0;color:#a40000}.status.info{background:#eef4ff;color:#174ea6}.stepper{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-bottom:12px}.step{padding:9px 6px;border-radius:12px;background:#e9ebef;text-align:center;font-size:12px;font-weight:800;color:#6b7280}.step.active{background:#111;color:#fff}.step.done{background:#dff3e6;color:#146b32}.hidden{display:none!important}.choice-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:14px}.choice{background:#f7f8fa;border:1px solid #e5e7eb;border-radius:18px;padding:18px 14px;text-align:left}.choice b{display:block;font-size:17px;margin-bottom:5px}.choice span{font-size:13px;color:#6b7280;line-height:1.4}.check{display:flex;align-items:center;gap:10px;margin:14px 0;font-weight:750}.check input{width:22px;height:22px}.advanced{border-top:1px solid #eee;margin-top:14px;padding-top:10px}.speaker{border:1px solid #e3e5e9;border-radius:18px;padding:15px;margin-top:10px;background:#fafafa}.speaker-head{display:flex;justify-content:space-between;gap:10px;align-items:center}.speaker-name{font-size:18px;font-weight:850}.pill{display:inline-block;background:#e9ebef;border-radius:20px;padding:5px 9px;font-size:12px;margin:2px}.seg{border:1px solid #e3e5e9;border-radius:16px;padding:13px;margin-top:9px;background:#fff}.seg .who{font-weight:800}.seg .meta{font-size:12px;color:#687080;margin:5px 0}.seg textarea{min-height:80px}.project{border:1px solid #e3e5e9;border-radius:16px;padding:14px;margin-top:9px;background:#fafafa}.project b{display:block;font-size:17px}.nav{position:fixed;left:0;right:0;bottom:0;z-index:50;background:#fffefef2;backdrop-filter:blur(18px);border-top:1px solid #ddd;display:grid;grid-template-columns:repeat(5,1fr);padding:7px max(8px,env(safe-area-inset-left)) calc(7px + env(safe-area-inset-bottom)) max(8px,env(safe-area-inset-right))}.nav button{background:transparent;padding:7px 2px;font-size:11px;color:#626975}.nav button.active{color:#111;font-weight:900}.toolbar{display:flex;gap:8px;flex-wrap:wrap}.toolbar button{flex:0 0 auto}.range-row{display:grid;grid-template-columns:1fr 80px;gap:10px;align-items:center}.range-row input[type=range]{padding:0}.empty{padding:18px;text-align:center;color:#7b818c;background:#f7f8fa;border-radius:16px}.audio-box{background:#f7f8fa;border-radius:18px;padding:14px;margin-top:12px}audio{width:100%;margin-top:10px}@media(max-width:650px){.grid,.three,.choice-grid{grid-template-columns:1fr}.hero h1{font-size:30px}.card{padding:17px}.step{font-size:10px}.nav button{font-size:10px}}
/* V16 UI polish */
body{
  background:#f7f8fc;
  padding-bottom:90px;
}

.wrap{
  max-width:980px;
  margin:auto;
  padding:12px 14px 40px;
}

.card{
  border-radius:22px;
  box-shadow:0 10px 30px rgba(17,24,39,.08);
}

button{
  border-radius:15px;
}

.primary{
  border-radius:16px;
}

textarea,
input,
select{
  border-radius:15px;
}

.hero{
  border-radius:26px;
}

.choice{
  border-radius:19px;
}

@media(max-width:700px){
  .wrap{
    padding:10px 11px 30px;
  }

  .card{
    padding:17px;
    border-radius:20px;
  }

  .grid,
  .three,
  .choice-grid{
    grid-template-columns:1fr;
  }

  .hero h1{
    font-size:31px;
  }
}
</style>
</head>
<body>
<div class="wrap">
<div class="topbar"><span class="brand">ð¬ Story Director V16</span></div>
<div class="stepper"><div class="step active" data-step="1">â  Story</div><div class="step" data-step="2">â¡ Script</div><div class="step" data-step="3">â¢ Director</div><div class="step" data-step="4">â£ Voice</div></div>

<section id="home" class="hero page">
<h1>Story â Script â Voice</h1><p>à¤à¤¹à¤¾à¤¨à¥ à¤²à¤¿à¤à¥à¤ à¤¯à¤¾ à¤à¤ªà¤¨à¥ à¤à¤¹à¤¾à¤¨à¥ à¤¡à¤¾à¤²à¥à¤ â à¤«à¤¿à¤° speakers, emotions à¤à¤° natural voices à¤à¥ à¤¸à¤¾à¤¥ à¤ªà¥à¤°à¤¾ audio à¤¤à¥à¤¯à¤¾à¤° à¤à¤°à¥à¤à¥¤</p>
<div class="choice-grid">
<button class="choice" id="newStory"><b>â¨ à¤¨à¤ à¤à¤¹à¤¾à¤¨à¥ à¤¬à¤¨à¤¾à¤à¤</b><span>AI à¤¸à¥ à¤¨à¤ story / screenplay à¤¤à¥à¤¯à¤¾à¤° à¤à¤°à¥à¤à¥¤</span></button>
<button class="choice" id="pasteStory"><b>ð à¤à¤ªà¤¨à¥ à¤à¤¹à¤¾à¤¨à¥ à¤¡à¤¾à¤²à¥à¤</b><span>Existing Hindi/Bhojpuri story à¤à¥ à¤¸à¥à¤§à¥ Director à¤®à¥à¤ à¤­à¥à¤à¥à¤à¥¤</span></button>
<button class="choice" id="openProjects"><b>ð My Projects</b><span>à¤ªà¤¹à¤²à¥ à¤¸à¥ saved projects à¤à¥à¤²à¥à¤à¥¤</span></button>
</div></section>

<section id="storyPage" class="page">
<div class="card" id="storyCard">
<h2>ð¡ Story</h2>
<label>Story Idea / Prompt</label><textarea id="idea" placeholder="à¤à¤¦à¤¾à¤¹à¤°à¤£: à¤à¤¾à¤à¤µ à¤à¥ à¤¬à¤¾à¤°à¤¿à¤¶ à¤µà¤¾à¤²à¥ à¤¶à¤¾à¤® à¤®à¥à¤ à¤¦à¥ à¤ªà¥à¤°à¤¾à¤¨à¥ à¤¦à¥à¤¸à¥à¤¤ à¤à¤ à¤¸à¤¾à¤² à¤¬à¤¾à¤¦ à¤®à¤¿à¤²à¤¤à¥ à¤¹à¥à¤à¥¤"></textarea>
<div class="grid"><div><label>Language / Dialect</label><select id="language"><option>Hindi</option><option>Bhojpuri</option><option>Purvanchali / Banarasi</option><option>Hindi + Bhojpuri mix</option><option>English</option></select></div><div><label>Genre</label><select id="genre"><option>Drama</option><option>Romance</option><option>Suspense</option><option>Thriller</option><option>Comedy</option><option>Family</option><option>Adventure</option><option>Horror</option><option>Emotional</option></select></div></div>
<div class="three"><div><label>Story Length</label><select id="length"><option value="short">Short</option><option value="medium" selected>Medium</option><option value="long">Long</option></select></div><div><label>Writing Style</label><select id="style"><option>Cinematic</option><option>Natural conversational</option><option>Literary</option><option>Fast paced</option><option>Emotional</option></select></div><div><label>Age Mode</label><select id="ageMode"><option value="general">General</option><option value="mature">21+ Mature</option></select></div></div>
<label>ð¯ Extra Direction</label><input id="direction" placeholder="à¤à¥à¤¸à¥: 5 scenes, strong ending, Banarasi tone">
<label>ð¬ Output Format</label><select id="outputFormat"><option value="normal">Normal Story</option><option value="dialogue-heavy">Dialogue Heavy â 70â80% Dialogue</option><option value="dialogue-dominant" selected>Dialogue Dominant â 80â90% Dialogue</option><option value="pure-dialogue">Pure Dialogue Scene</option><option value="cinematic-script">Cinematic Script</option></select>
<details class="advanced"><summary><b>âï¸ Advanced Settings</b></summary><div class="small" style="margin-top:10px">Advanced controls à¤à¤à¥ à¤à¥ backend tuning à¤à¥ à¤²à¤¿à¤ reserve à¤¹à¥à¤à¥¤ à¤à¤­à¥ à¤®à¥à¤à¥à¤¯ workflow à¤à¥ à¤¸à¤°à¤² à¤°à¤à¤¾ à¤à¤¯à¤¾ à¤¹à¥à¥¤</div></details>
<button class="primary" id="generateStory" style="margin-top:15px">â¨ Generate Story</button><div id="storyStatus" class="status"></div>
</div>

<div class="card" id="pasteCard">
<h2>ð Paste Story</h2><label>à¤à¤ªà¤¨à¥ à¤ªà¥à¤°à¥ à¤à¤¹à¤¾à¤¨à¥ / script</label><textarea id="pasteText" placeholder="à¤¯à¤¹à¤¾à¤ à¤à¤ªà¤¨à¥ existing à¤à¤¹à¤¾à¤¨à¥ paste à¤à¤°à¥à¤â¦"></textarea>
<div class="grid"><div><label>Language / Dialect</label><select id="pasteLanguage"><option>Hindi</option><option>Bhojpuri</option><option>Purvanchali / Banarasi</option><option>Hindi + Bhojpuri mix</option><option>English</option></select></div><div><label>Processing Mode</label><select id="processMode"><option value="full">ð¬ Full Director Mode</option><option value="dialogue">ðï¸ Dialogue + Narration</option><option value="dialogue-only">ð¬ Dialogue Only</option></select></div></div>
<button type="button" class="primary" id="analyzeStory" style="margin-top:15px">🎭 Analyze This Story</button>
</div>

<div class="card" id="scriptCard"><div class="section-title"><h2>ð Script</h2><span class="pill" id="scriptState">Draft</span></div><label>Title</label><input id="title" placeholder="Story title"><label>Story / Script</label><textarea id="story" placeholder="Generated à¤¯à¤¾ pasted story à¤¯à¤¹à¤¾à¤ à¤à¤à¤à¥â¦"></textarea>
<div class="row"><button class="secondary" id="downloadStory" disabled>â¬ï¸ Download Story</button><button class="secondary" id="saveLocal">ð¾ Save Project</button><button class="danger" id="clearAll">Clear</button></div><div id="scriptStatus" class="status"></div></div>
</section>

<section id="directorPage" class="page hidden">
<div class="card"><h2>ð­ Director</h2><div class="check"><input type="checkbox" id="emotion" checked><span>Automatic Emotion Detection</span></div><div class="check"><input type="checkbox" id="adult"><span>ð 21+ Mature Mode</span></div><button class="primary" id="analyze">ð­ Detect Speakers & Emotions</button><div id="status" class="status"></div></div>
<div class="card"><div class="section-title"><h2>ðï¸ Speaker Manager</h2><span class="pill" id="speakerCount">0 speakers</span></div><div id="speakers" class="empty">à¤à¤­à¥ speakers detect à¤¨à¤¹à¥à¤ à¤¹à¥à¤ à¤¹à¥à¤à¥¤</div></div>
<div class="card"><div class="section-title"><h2>ð Segments</h2><span class="small">à¤¹à¤° line à¤à¥ edit/preview à¤à¤° à¤¸à¤à¤¤à¥ à¤¹à¥à¤</span></div><div id="segments" class="empty">Analysis à¤à¥ à¤¬à¤¾à¤¦ segments à¤¯à¤¹à¤¾à¤ à¤à¤à¤à¤à¥à¥¤</div></div>
</section>

<section id="voicePage" class="page hidden">
<div class="card"><h2>ð§ Voice Studio</h2><div class="small">à¤ªà¤¹à¤²à¥ Director à¤®à¥à¤ analysis à¤ªà¥à¤°à¤¾ à¤à¤°à¥à¤à¥¤ à¤«à¤¿à¤° individual segment preview à¤¯à¤¾ full audio à¤¬à¤¨à¤¾à¤à¤à¥¤</div><div class="toolbar" style="margin-top:12px"><button class="secondary" id="previewAllVoices">ð Preview Selected Voices</button><button class="secondary" id="resumeAudio" disabled>â¶ï¸ Resume</button></div><button class="primary" id="generate" disabled style="margin-top:12px">ðï¸ Generate Full Audio</button><div id="progress" class="status"></div><div class="audio-box"><b>Final Audio</b><audio id="player" controls style="display:none"></audio><div class="row"><button class="secondary" id="download" disabled>â¬ï¸ Download WAV</button><button class="secondary" id="downloadMp3" disabled>ðµ MP3</button><button class="secondary" id="downloadM4a" disabled>ð± M4A</button></div><div class="small" id="formatNote" style="margin-top:8px">WAV à¤à¤­à¥ à¤à¤ªà¤²à¤¬à¥à¤§ à¤¹à¥à¥¤ MP3/M4A à¤à¥ à¤²à¤¿à¤ backend encoder à¤à¤à¤²à¤¾ à¤à¤°à¤£ à¤¹à¥à¤à¤¾; à¤¹à¤® fake file à¤¨à¤¹à¥à¤ à¤¬à¤¨à¤¾à¤à¤à¤à¥à¥¤</div></div></div>
</section>

<section id="projectsPage" class="page hidden"><div class="card"><h2>ð My Projects</h2><div class="small">Projects à¤à¤¸ iPhone/browser à¤®à¥à¤ localStorage à¤®à¥à¤ save à¤¹à¥à¤¤à¥ à¤¹à¥à¤à¥¤</div><div id="projects" style="margin-top:12px"></div></div></section>
</div>

<nav class="nav"><button data-nav="home" class="active">ð <br>Home</button><button data-nav="storyPage">âï¸<br>Story</button><button data-nav="directorPage">ð­<br>Director</button><button data-nav="voicePage">ðï¸<br>Voice</button><button data-nav="projectsPage">ð<br>Projects</button></nav>
<script>
const $=id=>document.getElementById(id);let detected=null;let currentStep=1;let finalBlob=null;let audioGeneration={running:false,paused:false,index:0,parts:[],fmt:null};let audioResumeTimer=null,audioResumeBusy=false;
function status(id,text,type=""){const e=$(id);if(!e)return;e.textContent=text;e.className="status show "+type}
function esc(s){return String(s??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}
function nameSafe(s){return String(s||"story").replace(/[^\w\u0900-\u097F-]+/g,"_").slice(0,50)||"story"}
function downloadBlob(blob,name){const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name||"story.wav";a.rel="noopener";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),3000)}
function setStep(n){currentStep=n;document.querySelectorAll(".step").forEach(x=>{const s=Number(x.dataset.step);x.classList.toggle("active",s===n);x.classList.toggle("done",s<n)});if(n===1)showPage("storyPage");if(n===2)showPage("storyPage");if(n===3)showPage("directorPage");if(n===4)showPage("voicePage")}
function showPage(id){document.querySelectorAll(".page").forEach(x=>x.classList.add("hidden"));$(id).classList.remove("hidden");document.querySelectorAll(".nav button").forEach(b=>b.classList.toggle("active",b.dataset.nav===id));window.scrollTo({top:0,behavior:"smooth"})}
function syncPaste(){if(!$('pasteText').value.trim())return;$('story').value=$('pasteText').value.trim();$('language').value=$('pasteLanguage').value;$('downloadStory').disabled=false;$('scriptState').textContent="Pasted"}
function projectData(){return {title:$('title').value||"Untitled Story",idea:$('idea').value,story:$('story').value,language:$('language').value,genre:$('genre').value,length:$('length').value,style:$('style').value,ageMode:$('ageMode').value,direction:$('direction').value,outputFormat:$('outputFormat').value,detected,updated:new Date().toISOString()}}
function saveProject(){const p=projectData();const all=JSON.parse(localStorage.getItem("storyDirectorV16Projects")||"[]");const id=p.title+"|"+p.updated;all.unshift({id,title:p.title,updated:p.updated,data:p});localStorage.setItem("storyDirectorV16Projects",JSON.stringify(all.slice(0,30)));status("scriptStatus","ð¾ Project save à¤¹à¥ à¤à¤¯à¤¾ â","ok");renderProjects()}
function restore(){try{const x=JSON.parse(localStorage.getItem("storyDirectorV16Draft")||"null");if(!x)return;["idea","title","story","language","genre","length","style","ageMode","direction","outputFormat"].forEach(k=>{if(x[k]!==undefined)$(k).value=x[k]});if(x.detected){detected=x.detected;renderSpeakers();renderSegments();$('generate').disabled=!(detected.segments&&detected.segments.length)}$('downloadStory').disabled=!$('story').value.trim()}catch{}}
function renderProjects(){const box=$('projects');const all=JSON.parse(localStorage.getItem("storyDirectorV16Projects")||"[]");if(!all.length){box.innerHTML='<div class="empty">à¤à¤­à¥ à¤à¥à¤ saved project à¤¨à¤¹à¥à¤ à¤¹à¥à¥¤</div>';return}box.innerHTML=all.map((p,i)=>'<div class="project"><b>'+esc(p.title)+'</b><div class="small">'+new Date(p.updated).toLocaleString()+ '</div><div class="row"><button class="secondary" data-open-project="'+i+'">Open</button><button class="danger" data-delete-project="'+i+'">Delete</button></div></div>').join("");box.querySelectorAll("[data-open-project]").forEach(b=>b.onclick=()=>openProject(Number(b.dataset.openProject)));box.querySelectorAll("[data-delete-project]").forEach(b=>b.onclick=()=>deleteProject(Number(b.dataset.deleteProject)))}
function openProject(i){const all=JSON.parse(localStorage.getItem("storyDirectorV16Projects")||"[]");const p=all[i]?.data;if(!p)return;["idea","title","story","language","genre","length","style","ageMode","direction","outputFormat"].forEach(k=>{if(p[k]!==undefined)$(k).value=p[k]});detected=p.detected||null;$('downloadStory').disabled=!$('story').value.trim();if(detected){renderSpeakers();renderSegments();$('generate').disabled=!(detected.segments&&detected.segments.length)}showPage("storyPage");status("scriptStatus","Project opened â","ok")}
function deleteProject(i){const all=JSON.parse(localStorage.getItem("storyDirectorV16Projects")||"[]");all.splice(i,1);localStorage.setItem("storyDirectorV16Projects",JSON.stringify(all));renderProjects()}
$('newStory').onclick=()=>{showPage('storyPage');$('storyCard').scrollIntoView({behavior:'smooth'})};$('pasteStory').onclick=()=>{showPage('storyPage');$('pasteCard').scrollIntoView({behavior:'smooth'})};$('openProjects').onclick=()=>{showPage('projectsPage');renderProjects()};
document.querySelectorAll('.nav button').forEach(b=>b.onclick=()=>{showPage(b.dataset.nav);if(b.dataset.nav==='projectsPage')renderProjects()});
$('generateStory').onclick=async()=>{const idea=$('idea').value.trim();if(!idea){status('storyStatus','à¤ªà¤¹à¤²à¥ Story Idea à¤²à¤¿à¤à¤¿à¤à¥¤','err');return}const b=$('generateStory');b.disabled=true;b.textContent='â³ à¤à¤¹à¤¾à¤¨à¥ à¤¬à¤¨ à¤°à¤¹à¥ à¤¹à¥...';status('storyStatus','AI à¤à¤¹à¤¾à¤¨à¥ à¤¤à¥à¤¯à¤¾à¤° à¤à¤° à¤°à¤¹à¤¾ à¤¹à¥â¦','info');try{const r=await fetch('/api/story',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:idea,language:$('language').value,genre:$('genre').value,length:$('length').value,tone:$('style').value,mature:$('ageMode').value==='mature',direction:$('direction').value,outputFormat:$('outputFormat').value})});const d=await r.json().catch(()=>({}));if(!r.ok||!d.ok)throw Error(d.error||('Server error: '+r.status));const generated=typeof d.story==='string'?d.story:JSON.stringify(d.story||'',null,2);$('story').value=generated;$('title').value=(generated.split('\n').find(x=>x.trim())||'Generated Story').replace(/^TITLE\s*:\s*/i,'').trim();$('downloadStory').disabled=false;$('scriptState').textContent='Generated';status('storyStatus','â à¤à¤¹à¤¾à¤¨à¥ à¤¤à¥à¤¯à¤¾à¤° à¤¹à¥ à¤à¤à¥¤ à¤à¤¬ Script step à¤¸à¥ Director à¤ªà¤° à¤à¤¾à¤à¤à¥¤','ok');setStep(2)}catch(e){status('storyStatus','â '+e.message,'err')}finally{b.disabled=false;b.textContent='â¨ Generate Story'}};
$('downloadStory').onclick=()=>downloadBlob(new Blob([$('title').value+'\n\n'+$('story').value],{type:'text/plain;charset=utf-8'}),nameSafe($('title').value)+'.txt');$('saveLocal').onclick=saveProject;
$('clearAll').onclick=()=>{if(!confirm('à¤ªà¥à¤°à¤¾ current project à¤¸à¤¾à¤«à¤¼ à¤à¤°à¥à¤?'))return;['idea','title','story','direction','pasteText'].forEach(x=>$(x).value='');detected=null;finalBlob=null;audioGeneration={running:false,paused:false,index:0,parts:[],fmt:null};$('downloadStory').disabled=true;$('generate').disabled=true;$('speakers').innerHTML='à¤à¤­à¥ speakers detect à¤¨à¤¹à¥à¤ à¤¹à¥à¤ à¤¹à¥à¤à¥¤';$('segments').innerHTML='Analysis à¤à¥ à¤¬à¤¾à¤¦ segments à¤¯à¤¹à¤¾à¤ à¤à¤à¤à¤à¥à¥¤';$('player').style.display='none';$('download').disabled=true;$('downloadMp3').disabled=true;$('downloadM4a').disabled=true;setStep(1);status('scriptStatus','à¤¸à¤¾à¤«à¤¼ à¤à¤° à¤¦à¤¿à¤¯à¤¾ à¤à¤¯à¤¾à¥¤','ok')};
$('analyze').onclick=async()=>{
const story=$('story').value.trim()||$('pasteText').value.trim();
if(!story){
  status('status','पहले कहानी / script डालें।','err');
  return;
}

const b=$('analyze');
b.disabled=true;
b.textContent='⏳ Analyzing...';
status('status','कहानी analyze हो रही है...','info');

try{
  const r=await fetch('/api/analyze',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      story,
      language:$('language').value,
      autoEmotion:$('emotion').checked,
      mature:$('adult').checked
    })
  });

  const d=await r.json().catch(()=>({}));

  if(!r.ok||!d.ok){
    throw Error(d.error||('Analysis failed: '+r.status));
  }

  detected=d;

  renderSpeakers();
  renderSegments();

  $('generate').disabled=!(detected.segments&&detected.segments.length);

  setStep(3);
  showPage('directorPage');

  status(
    'status',
    'Analysis complete. Speakers और emotions detect हो गए हैं।',
    'ok'
  );

}catch(e){
  console.error(e);
  status('status','❌ '+(e.message||'Analysis failed'),'err');
}finally{
  b.disabled=false;
  b.textContent='🎭 Detect Speakers & Emotions';
}
};
$('analyzeStory').onclick=async(e)=>{e.preventDefault();e.stopPropagation();const story=$('pasteText').value.trim()||$('story').value.trim();if(!story){status('scriptStatus','पहले कहानी / script डालें।','error');$('pasteText').focus();return;}const btn=$('analyzeStory');btn.disabled=true;btn.textContent='⏳ Analyzing...';try{status('scriptStatus','कहानी analyze हो रही है...','');const r=await fetch('/api/analyze',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({story,language:$('pasteLanguage')?.value||'Hindi'})});const d=await r.json();if(!r.ok||!d.ok)throw Error(d.error||'Analysis failed');detected=d;renderSpeakers();renderSegments();showPage('directorPage');$('directorPage').scrollIntoView({behavior:'smooth',block:'start'});status('scriptStatus','Analysis complete.','success')}catch(err){console.error(err);status('scriptStatus',err.message||'Analysis failed','error')}finally{btn.disabled=false;btn.textContent='🎭 Analyze This Story'}};
function defaultVoice(s){const role=String(s.role||'').toLowerCase(),gender=String(s.gender||'').toLowerCase();if(role.includes('narrator')||role.includes('narration'))return 'shimmer';if(gender==='female')return 'nova';if(gender==='male')return 'onyx';return 'alloy'}
function voiceOption(v,label,current){return '<option value="'+v+'"'+(current===v?' selected':'')+'>'+label+'</option>'}
async function previewVoice(voice,button,text){const old=button.textContent;button.disabled=true;button.textContent='â³ à¤¸à¥à¤¨ à¤°à¤¹à¥ à¤¹à¥à¤...';try{const r=await fetch('/api/tts',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text:text||'à¤¨à¤®à¤¸à¥à¤à¤¾à¤°à¥¤ à¤¯à¤¹ à¤à¤¸ à¤à¤µà¤¾à¤à¤¼ à¤à¤¾ à¤ªà¤°à¥à¤à¥à¤·à¤£ à¤¹à¥à¥¤',voice,emotion:'neutral',intensity:20,delivery:'calm',pace:'normal',pause:'none',language:$('language').value})});if(!r.ok){const d=await r.json().catch(()=>({}));throw Error(d.error||('Preview error '+r.status))}const blob=await r.blob(),url=URL.createObjectURL(blob),audio=new Audio(url);audio.onended=()=>URL.revokeObjectURL(url);await audio.play()}catch(e){status('status','â Voice preview: '+e.message,'err')}finally{button.disabled=false;button.textContent=old}}
function renderSpeakers(){const list=detected?.speakers||[];$('speakerCount').textContent=list.length+' speakers';$('speakers').innerHTML=list.length?list.map((s,idx)=>{const segs=(detected.segments||[]).filter(x=>x.speaker===s.name);const strongest=segs.reduce((best,x)=>!best||(x.intensity??0)>(best.intensity??0)?x:best,null);const emotion=strongest?.emotion||'neutral',intensity=strongest?.intensity??50,delivery=strongest?.delivery||'conversational',voice=s.voice||defaultVoice(s);return '<div class="speaker"><div class="speaker-head"><div><div class="speaker-name">'+esc(s.name)+'</div><div class="small">'+esc(s.role||'character')+' Â· '+esc(s.gender||'unknown')+'</div></div><span class="pill">'+esc(emotion)+' Â· '+intensity+'/100</span></div><label>ðï¸ Voice</label><select class="speakerVoice" data-speaker="'+esc(s.name)+'">'+voiceOption('alloy','Alloy â Natural',voice)+voiceOption('onyx','Onyx â Male',voice)+voiceOption('nova','Nova â Female',voice)+voiceOption('shimmer','Shimmer â Soft',voice)+voiceOption('echo','Echo â Deep',voice)+voiceOption('fable','Fable â Expressive',voice)+'</select><div class="row"><button type="button" class="secondary voicePreview" data-voice="'+esc(voice)+'">â¶ï¸ Preview Voice</button></div><div class="grid"><div><label>ð­ Default Emotion</label><select class="speakerEmotion" data-speaker="'+esc(s.name)+'"><option>neutral</option><option>happy</option><option>sad</option><option>angry</option><option>romantic</option><option>playful</option><option>tense</option><option>serious</option><option>concerned</option><option>dramatic</option></select></div><div><label>Intensity</label><div class="range-row"><input class="speakerIntensity" data-speaker="'+esc(s.name)+'" type="range" min="0" max="100" value="'+intensity+'"><output>'+intensity+'</output></div></div></div><div class="small" style="margin-top:9px">Delivery: '+esc(delivery)+' Â· Voice lock: character à¤à¥ voice à¤ªà¥à¤°à¥ à¤à¤¹à¤¾à¤¨à¥ à¤®à¥à¤ à¤¯à¤¹à¥ à¤°à¤¹à¥à¤à¥à¥¤</div></div>'}).join(''):'<div class="empty">à¤à¥à¤ speaker à¤¨à¤¹à¥à¤ à¤®à¤¿à¤²à¤¾à¥¤</div>';
document.querySelectorAll('.voicePreview').forEach(b=>b.onclick=()=>previewVoice(b.dataset.voice,b));document.querySelectorAll('.speakerVoice').forEach(sel=>sel.onchange=()=>{const n=sel.dataset.speaker,v=sel.value;detected.speakers=(detected.speakers||[]).map(x=>x.name===n?{...x,voice:v}:x);detected.segments=(detected.segments||[]).map(x=>x.speaker===n?{...x,voice:v}:x);const p=sel.closest('.speaker').querySelector('.voicePreview');if(p)p.dataset.voice=v});document.querySelectorAll('.speakerEmotion').forEach(sel=>sel.onchange=()=>{const n=sel.dataset.speaker,v=sel.value;detected.segments=(detected.segments||[]).map(x=>x.speaker===n?{...x,emotion:v}:x);renderSegments()});document.querySelectorAll('.speakerIntensity').forEach(r=>r.oninput=()=>{r.nextElementSibling.value=r.value});document.querySelectorAll('.speakerIntensity').forEach(r=>r.onchange=()=>{const n=r.dataset.speaker,v=Number(r.value);detected.segments=(detected.segments||[]).map(x=>x.speaker===n?{...x,intensity:v}:x)})}
function renderSegments(){const segs=detected?.segments||[];$('segments').innerHTML=segs.length?segs.map((s,i)=>'<div class="seg"><div class="who">'+esc(s.speaker||'Narrator')+'</div><div class="meta">ð­ '+esc(s.emotion||'neutral')+' Â· '+Number(s.intensity??50)+'/100 Â· '+esc(s.delivery||'conversational')+'</div><textarea class="segmentText" data-index="'+i+'">'+esc(s.text||'')+'</textarea><div class="row"><button class="secondary segmentPreview" data-index="'+i+'">â¶ï¸ Preview Segment</button><button class="secondary segmentSave" data-index="'+i+'">â Apply Edit</button></div></div>').join(''):'<div class="empty">Analysis à¤à¥ à¤¬à¤¾à¤¦ segments à¤¯à¤¹à¤¾à¤ à¤à¤à¤à¤à¥à¥¤</div>';document.querySelectorAll('.segmentPreview').forEach(b=>b.onclick=()=>previewSegment(Number(b.dataset.index),b));document.querySelectorAll('.segmentSave').forEach(b=>b.onclick=()=>{const i=Number(b.dataset.index),t=document.querySelector('.segmentText[data-index="'+i+'"]').value;detected.segments[i].text=t;status('status','Segment '+(i+1)+' update à¤¹à¥ à¤à¤¯à¤¾ â','ok')})}
async function previewSegment(i,b){const s=detected?.segments?.[i];if(!s)return;const speaker=(detected.speakers||[]).find(x=>x.name===s.speaker)||{};const voice=s.voice||speaker.voice||defaultVoice(speaker);const old=b.textContent;b.disabled=true;b.textContent='â³ Preview...';try{const r=await fetch('/api/tts',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text:s.text,voice,emotion:s.emotion||'neutral',intensity:s.intensity??50,delivery:s.delivery||'natural',pace:s.pace||'normal',pause:s.pause||'none',emphasis:s.emphasis||'normal',language:s.role==='narrator'?'Hindi':$('language').value})});if(!r.ok){const d=await r.json().catch(()=>({}));throw Error(d.error||('TTS error '+r.status))}const blob=await r.blob(),url=URL.createObjectURL(blob),a=new Audio(url);a.onended=()=>URL.revokeObjectURL(url);await a.play()}catch(e){status('status','â Segment preview: '+e.message,'err')}finally{b.disabled=false;b.textContent=old}}
function wavInfo(buf){const v=new DataView(buf);if(v.byteLength<12||v.getUint32(0,false)!==0x52494646||v.getUint32(8,false)!==0x57415645)return null;let p=12,f=null,d=null;while(p+8<=v.byteLength){const id=v.getUint32(p,false),n=v.getUint32(p+4,true);p+=8;const safe=Math.min(n,v.byteLength-p);if(id===0x666d7420&&safe>=16)f={ch:v.getUint16(p+2,true),rate:v.getUint32(p+4,true),bits:v.getUint16(p+14,true)};if(id===0x64617461){if(safe<=0)return null;d=new Uint8Array(buf,p,safe);break}p+=safe+(safe&1)}return f&&d&&d.length?{...f,data:d}:null}
function wavBuild(parts,f){const n=parts.reduce((a,x)=>a+x.length,0),o=new ArrayBuffer(44+n),v=new DataView(o),u=new Uint8Array(o),put=(p,s)=>[...s].forEach((c,i)=>u[p+i]=c.charCodeAt(0));put(0,'RIFF');v.setUint32(4,36+n,true);put(8,'WAVE');put(12,'fmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,f.ch,true);v.setUint32(24,f.rate,true);v.setUint32(28,f.rate*f.ch*f.bits/8,true);v.setUint16(32,f.ch*f.bits/8,true);v.setUint16(34,f.bits,true);put(36,'data');v.setUint32(40,n,true);let p=44;parts.forEach(x=>{u.set(x,p);p+=x.length});return new Blob([o],{type:'audio/wav'})}
function compressLongSilence(buf){try{const a=new Uint8Array(buf);if(a.length<12||a[0]!==82||a[1]!==73||a[2]!==70||a[3]!==70||a[8]!==87||a[9]!==65||a[10]!==86||a[11]!==69)return buf;const dv=new DataView(a.buffer);let pos=12,fmt=null,dataStart=-1,dataSize=0;while(pos+8<=a.length){const id=String.fromCharCode(a[pos],a[pos+1],a[pos+2],a[pos+3]),size=dv.getUint32(pos+4,true),start=pos+8;if(id==='fmt ')fmt={audioFormat:dv.getUint16(start,true),channels:dv.getUint16(start+2,true),sampleRate:dv.getUint32(start+4,true),bits:dv.getUint16(start+14,true)};if(id==='data'){dataStart=start;dataSize=Math.min(size,a.length-start);break}pos=start+size+(size%2)}if(!fmt||fmt.audioFormat!==1||fmt.bits!==16||dataStart<0)return buf;const channels=fmt.channels,sampleRate=fmt.sampleRate,bytesPerFrame=channels*2,totalFrames=Math.floor(dataSize/bytesPerFrame),windowFrames=Math.max(1,Math.floor(sampleRate*.01)),threshold=.008,minSilenceFrames=Math.floor(sampleRate*.32),keepSilenceFrames=Math.floor(sampleRate*.12),ranges=[];let silentStart=-1;for(let frame=0;frame<totalFrames;frame+=windowFrames){const end=Math.min(totalFrames,frame+windowFrames);let sum=0,count=0;for(let f=frame;f<end;f++)for(let ch=0;ch<channels;ch++){const base=dataStart+f*bytesPerFrame;sum+=Math.abs(dv.getInt16(base+ch*2,true))/32768;count++}const silent=count?(sum/count)<threshold:false;if(silent&&silentStart<0)silentStart=frame;if(!silent&&silentStart>=0){if(frame-silentStart>=minSilenceFrames)ranges.push({start:silentStart,end:frame});silentStart=-1}}if(silentStart>=0&&totalFrames-silentStart>=minSilenceFrames)ranges.push({start:silentStart,end:totalFrames});if(!ranges.length)return buf;const chunks=[];let cursor=0;for(const r of ranges){const endKeep=Math.min(r.start+keepSilenceFrames,r.end);chunks.push(a.slice(dataStart+cursor*bytesPerFrame,dataStart+endKeep*bytesPerFrame));cursor=r.end}if(cursor<totalFrames)chunks.push(a.slice(dataStart+cursor*bytesPerFrame,dataStart+totalFrames*bytesPerFrame));const newDataSize=chunks.reduce((n,c)=>n+c.length,0),headerSize=dataStart,out=new Uint8Array(headerSize+newDataSize);out.set(a.slice(0,headerSize),0);let p=12;while(p+8<=headerSize){const id=String.fromCharCode(a[p],a[p+1],a[p+2],a[p+3]),size=dv.getUint32(p+4,true);if(id==='data'){new DataView(out.buffer).setUint32(p+4,newDataSize,true);break}p+=8+size+(size%2)}let write=headerSize;for(const c of chunks){out.set(c,write);write+=c.length}new DataView(out.buffer).setUint32(4,out.length-8,true);return out.buffer}catch{return buf}}
function cleanSegmentForTTS(raw,speakerName,isNarrator){let t=String(raw??'').trim();if(!t)return '';if(isNarrator)return t.replace(/^\s*(?:Narrator|à¤¨à¥à¤°à¥à¤à¤°|à¤µà¤°à¥à¤£à¤¨|Narration)\s*[:ï¼-]\s*/i,'').trim();let previous='';while(t!==previous){previous=t;t=t.replace(/^\s*(?:speaker|emotion|à¤­à¤¾à¤µ|à¤­à¤¾à¤µà¤¨à¤¾|delivery|à¤à¤à¤¦à¤¾à¤à¤¼|à¤¡à¤¿à¤²à¥à¤µà¤°à¥|intensity|à¤¤à¥à¤µà¥à¤°à¤¤à¤¾|pace|à¤à¤¤à¤¿|pause|à¤µà¤¿à¤°à¤¾à¤®|emphasis|à¤à¥à¤°)\s*[:ï¼-]\s*[^\n]+\s*/i,'').replace(/^\s*(?:\[[^\]]{1,200}\]|\([^)]{1,200}\))\s*/g,'').trim();if(speakerName){const n=String(speakerName).trim(),lower=t.toLowerCase(),nl=n.toLowerCase();if(lower.startsWith(nl+':')||lower.startsWith(nl+'ï¼')||lower.startsWith(nl+'-'))t=t.slice(n.length+1).trim()}}t=t.replace(/^\s*[^\n:ï¼]{1,40}\s*[:ï¼]\s*/u,'').trim();return t.replace(/^\s*[ââ"']\s*/, '').replace(/\s*[ââ"']\s*$/i,'').trim()}
async function generateAudioFrom(index=0){if(!detected?.segments?.length)return;const segments=detected.segments;audioGeneration.running=true;audioGeneration.paused=false;$('generate').disabled=true;$('download').disabled=true;try{for(let i=index;i<segments.length;i++){audioGeneration.index=i;const s=segments[i]||{},speakerInfo=(detected.speakers||[]).find(x=>x.name===s.speaker)||{},role=String(speakerInfo.role||'').toLowerCase(),gender=String(speakerInfo.gender||'').toLowerCase(),isNarrator=role.includes('narrator')||role.includes('narration'),voice=s.voice||speakerInfo.voice||(isNarrator?'shimmer':gender==='female'?'nova':gender==='male'?'onyx':'alloy'),language=isNarrator?'Hindi':($('language').value||'Hindi'),speakerName=String(s.speaker||'').trim(),text=cleanSegmentForTTS(s.text||'',speakerName,isNarrator);if(!text)continue;status('progress','ðï¸ Segment '+(i+1)+' / '+segments.length+(document.hidden?'\nâ¸ï¸ Screen/background detected â generation will resume automatically.':''),'info');let success=false,lastError=null;for(let attempt=1;attempt<=3&&!success;attempt++){try{const r=await fetch('/api/tts',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text,voice,emotion:s.emotion||'neutral',emotion2:s.emotion2||'',intensity:s.intensity??50,delivery:s.delivery||'natural',pace:s.pace||'normal',pause:s.pause||'none',emphasis:s.emphasis||'normal',language})});if(!r.ok){const d=await r.json().catch(()=>({}));throw Error(d.error||('TTS error '+r.status))}const rawAudio=await r.arrayBuffer(),processedAudio=compressLongSilence(rawAudio),x=wavInfo(processedAudio);if(!x)throw Error('TTS à¤¨à¥ valid WAV audio à¤¨à¤¹à¥à¤ à¤²à¥à¤à¤¾à¤¯à¤¾à¥¤');if(!audioGeneration.fmt)audioGeneration.fmt={ch:x.ch,rate:x.rate,bits:x.bits};else if(x.ch!==audioGeneration.fmt.ch||x.rate!==audioGeneration.fmt.rate||x.bits!==audioGeneration.fmt.bits)throw Error('TTS segment à¤à¤¾ WAV format à¤à¤²à¤ à¤®à¤¿à¤²à¤¾à¥¤');if(i>0){const prev=segments[i-1],gapMs=prev?.speaker!==s?.speaker?350:25,bytesPerSecond=audioGeneration.fmt.rate*audioGeneration.fmt.ch*audioGeneration.fmt.bits/8;audioGeneration.parts.push(new Uint8Array(Math.max(0,Math.round(bytesPerSecond*gapMs/1000))))}audioGeneration.parts.push(x.data);success=true;status('progress','ðï¸ Segment '+(i+1)+' / '+segments.length+' â','info')}catch(e){lastError=e;if(document.hidden){audioGeneration.paused=true;status('progress','â¸ï¸ iPhone à¤¨à¥ background à¤®à¥à¤ generation à¤°à¥à¤ à¤¦à¥ à¤¹à¥.\nScreen à¤µà¤¾à¤ªà¤¸ ON à¤à¤°à¤¤à¥ à¤¹à¥ Segment '+(i+1)+' à¤¸à¥ automatically resume à¤¹à¥à¤à¤¾.','info');return}if(attempt<3){status('progress','â ï¸ Segment '+(i+1)+' temporarily failed.\nRetry '+attempt+'/3â¦','info');await new Promise(resolve=>setTimeout(resolve,1200*attempt))}}}if(!success){audioGeneration.paused=true;status('progress','â Segment '+(i+1)+' complete à¤¨à¤¹à¥à¤ à¤¹à¥ à¤¸à¤à¤¾.\n'+(lastError?.message||'Unknown TTS error')+'\n\nScreen ON à¤°à¤à¥à¤à¥¤','err');return}}if(!audioGeneration.fmt||!audioGeneration.parts.length)throw Error('à¤à¥à¤ audio segment à¤¤à¥à¤¯à¤¾à¤° à¤¨à¤¹à¥à¤ à¤¹à¥à¤à¥¤');finalBlob=wavBuild(audioGeneration.parts,audioGeneration.fmt);window.finalBlob=finalBlob;$('player').src=URL.createObjectURL(finalBlob);$('player').style.display='block';$('download').disabled=false;$('downloadMp3').disabled=true;$('downloadM4a').disabled=true;audioGeneration.running=false;audioGeneration.paused=false;status('progress','â à¤ªà¥à¤°à¤¾ WAV audio à¤¤à¥à¤¯à¤¾à¤° à¤¹à¥à¥¤','ok');setStep(4)}catch(e){audioGeneration.paused=true;status('progress','â '+(e.message||'Audio generation failed')+'\n\nScreen ON à¤à¤°à¤à¥ à¤¦à¥à¤¬à¤¾à¤°à¤¾ à¤à¥à¤¶à¤¿à¤¶ à¤à¤°à¥à¤.','err')}finally{audioGeneration.running=false;$('generate').disabled=false;$('resumeAudio').disabled=!audioGeneration.paused}}
function tryResumeAudio(){if(audioResumeBusy||document.hidden||!audioGeneration.paused||audioGeneration.running||!detected?.segments?.length)return;audioResumeBusy=true;clearTimeout(audioResumeTimer);audioResumeTimer=setTimeout(()=>{try{if(!document.hidden&&audioGeneration.paused&&!audioGeneration.running){status('progress','â¶ï¸ Screen à¤µà¤¾à¤ªà¤¸ ON à¤¹à¥ à¤à¤¯à¤¾à¥¤ Segment '+(audioGeneration.index+1)+' à¤¸à¥ resume à¤¹à¥ à¤°à¤¹à¥ à¤¹à¥â¦','info');generateAudioFrom(audioGeneration.index)}}finally{audioResumeBusy=false}},700)}
document.addEventListener('visibilitychange',()=>{if(!document.hidden)tryResumeAudio()});window.addEventListener('pageshow',tryResumeAudio);window.addEventListener('focus',tryResumeAudio);
$('generate').onclick=async()=>{
  try{

    if(!detected?.segments?.length){
      status(
        'progress',
        '❌ पहले "Detect Speakers & Emotions" चलाएँ। कोई audio segment नहीं मिला।',
        'err'
      );
      return;
    }

    audioGeneration={
      running:false,
      paused:false,
      index:0,
      parts:[],
      fmt:null
    };

    finalBlob=null;
    window.finalBlob=null;

    $('generate').disabled=true;

    if($('download')) $('download').disabled=true;
    if($('downloadMp3')) $('downloadMp3').disabled=true;
    if($('downloadM4a')) $('downloadM4a').disabled=true;

    status(
      'progress',
      '🎙️ Audio generation शुरू हो रही है...',
      'info'
    );

    await generateAudioFrom(0);

  }catch(e){

    console.error('Generate Audio Error:',e);

    audioGeneration.running=false;
    audioGeneration.paused=true;

    status(
      'progress',
      '❌ Audio generation शुरू नहीं हो सकी.\n\n'+
      (e?.message||String(e)),
      'err'
    );

  }finally{

    $('generate').disabled=false;

    if($('resumeAudio')){
      $('resumeAudio').disabled=!audioGeneration.paused;
    }

  }
};

$('resumeAudio').onclick=()=>{
  tryResumeAudio();
};

$('download').onclick=()=>{
  if(finalBlob){
    downloadBlob(
      finalBlob,
      nameSafe($('title').value||'story')+'-audio.wav'
    );
  }
};

$('downloadMp3').onclick=()=>{
  status(
    'progress',
    'MP3 export अभी backend encoder के बिना उपलब्ध नहीं है। WAV को source master की तरह रखा गया है।',
    'info'
  );
};

$('downloadM4a').onclick=()=>{
  status(
    'progress',
    'M4A export अभी backend encoder के बिना उपलब्ध नहीं है।',
    'info'
  );
};

$('previewAllVoices').onclick=()=>{
  const s=detected?.speakers?.[0];

  if(!s){
    status(
      'progress',
      'पहले speakers detect करें।',
      'err'
    );
    return;
  }

  const b=document.querySelector('.voicePreview');

  if(b){
    previewVoice(
      s.voice||defaultVoice(s),
      b
    );
  }
};
$('pasteText').addEventListener('input',()=>{$('scriptState').textContent='Draft'});$('story').addEventListener('input',()=>{$('downloadStory').disabled=!$('story').value.trim();$('scriptState').textContent='Edited'});
window.addEventListener('beforeunload',()=>{try{localStorage.setItem('storyDirectorV16Draft',JSON.stringify(projectData()))}catch{}});restore();renderProjects();
</script>
</body></html>`;

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
 if(!env.OPENAI_API_KEY)throw Error("OPENAI_API_KEY configured à¤¨à¤¹à¥à¤ à¤¹à¥à¥¤");
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
Use "à¤¤à¥à¤®" by default for husband-wife unless context requires otherwise.
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
 if(!p)throw Error("Story prompt à¤à¤¾à¤²à¥ à¤¹à¥à¥¤");
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
  "dialogue-heavy":"Approximately 70â80% meaningful character dialogue; keep narration brief.",
  "dialogue-dominant":"Approximately 80â90% meaningful character dialogue; narration only for essential setting, action and transitions.",
  "pure-dialogue":"Almost entirely dialogue; narration only when absolutely necessary.",
  "cinematic-script":"Cinematic screenplay with concise scene descriptions and natural dialogue.",
  "normal":"Natural balance of narration and dialogue."
 }[format]||"Natural balance of narration and dialogue.";

 const instructions=[
  "You are STORY DIRECTOR V16, a professional Indian story and dialogue director.",
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
 if(!s)throw Error("Story à¤à¤¾à¤²à¥ à¤¹à¥à¥¤");

 const instructions=[
  "You are the dialogue director for Story Director V16.",
  "Analyze the story carefully and return ONLY valid JSON.",
  "Schema: {title:string,speakers:[{name,role,gender,voice}],segments:[{speaker,text,emotion,intensity,delivery,pace,pause,emphasis}]}",
  "Preserve every character name exactly as written. Never rename characters.",
  "Use narrator only for narration, scene description and non-dialogue text.",
  "Every spoken dialogue must belong to the correct character.",
  "Voice defaults: narrator=shimmer, male=onyx, female=nova, unknown=alloy.",
  "Detect the dominant emotion of every segment from context, not merely punctuation.",
  "Allowed emotions: neutral,happy,sad,angry,fear,surprise,romantic,playful,tense,serious,concerned,dramatic.",
  "Intensity is 0â100 and must reflect actual emotional strength.",
  "Allowed delivery: calm,warm,soft,hesitant,playful,tense,urgent,firm,tearful,conversational.",
  "Allowed pace: very_slow,slow,normal,fast,very_fast.",
  "Pause: none,short. Do not create unnecessary long pauses.",
  "Emphasis: low,normal,strong.",
  "Preserve original dialogue wording exactly whenever possible.",
  "CRITICAL: segment.text must contain ONLY the words that the speaker actually says. NEVER include speaker names, emotion labels, intensity, delivery, pace, pause, emphasis, stage directions, brackets or parentheses inside segment.text.",
  "For character dialogue, remove leading labels such as \"à¤°à¤µà¤¿:\", \"à¤¨à¥à¤¹à¤¾:\", \"Emotion:\", \"Delivery:\" and remove leading parenthetical stage directions. Keep those details only in JSON metadata fields.",
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
 if(role.includes("narrator")||role.includes("narration"))return "shimmer";
 if(gender==="female")return "nova";
 if(gender==="male")return "onyx";
 return "alloy";
}

function repairMojibake(s){
 if(!s||!/[ÃÃÃ Â¤Ã Â¦Ã Â§Ã Â¨Ã Â©Ã ÂªÃ Â«Ã Â¬Ã Â­Ã Â®Ã Â¯]/.test(s))return s;
 try{
  const bytes=new Uint8Array(Array.from(s).map(ch=>ch.charCodeAt(0)&255));
  return new TextDecoder("utf-8").decode(bytes);
 }catch{return s}
}

async function tts(env,b){
 const text=repairMojibake(String(b.text||"")).trim();
 if(!text)throw Error("TTS text à¤à¤¾à¤²à¥ à¤¹à¥à¥¤");
 if(!env.OPENAI_API_KEY)throw Error("OPENAI_API_KEY configured à¤¨à¤¹à¥à¤ à¤¹à¥à¥¤");

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

 const question=/[?Ø]/.test(text);
 const exclamation=/[!ï¼]/.test(text);

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
    service:"Story Director V16",
    openai:!!env.OPENAI_API_KEY,
    model:env.OPENAI_MODEL||"gpt-5-mini",
    ttsModel:env.OPENAI_TTS_MODEL||"gpt-4o-mini-tts"
   });

  if(u.pathname==="/api"&&request.method==="GET")
   return json({
    ok:true,
    service:"Story Director V16",
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
