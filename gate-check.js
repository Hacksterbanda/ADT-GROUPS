// ── ADT Gate Check ─────────────────────────────────────
const ADT_VERIFY_URL = 'https://YOUR-VERCEL-URL.vercel.app';
const ADT_TOKEN_KEY  = 'adt_sec_v1';
const ADT_DAYS       = 7;
(function(){
  const params = new URLSearchParams(window.location.search);
  const urlToken = params.get('adt_v');
  if(urlToken){
    localStorage.setItem(ADT_TOKEN_KEY, JSON.stringify({v:urlToken,exp:Date.now()+ADT_DAYS*86400000}));
    window.history.replaceState({},'',window.location.pathname);
  }
  function isValid(){
    try{const t=JSON.parse(localStorage.getItem(ADT_TOKEN_KEY));if(!t||Date.now()>t.exp){localStorage.removeItem(ADT_TOKEN_KEY);return false;}return true;}catch{return false;}
  }
  if(!isValid()){window.location.replace(ADT_VERIFY_URL+'?from='+encodeURIComponent(window.location.href));}
})();

