// ═══════════════════════════════════════════════════════════
//  ADT GROUPS — Firebase Configuration + Utilities v2.0
// ═══════════════════════════════════════════════════════════
const firebaseConfig = {
  apiKey:            "AIzaSyCbNa8LYblS0DNWFghfFqiMdc5r_exrsKo",
  authDomain:        "adtgroupsltd.web.app",
  projectId:         "newforadt",
  storageBucket:     "newforadt.firebasestorage.app",
  messagingSenderId: "269144820825",
  appId:             "1:269144820825:web:6f48a01a92a8892246b548"
};
if (!firebase.apps || !firebase.apps.length) { firebase.initializeApp(firebaseConfig); }

// ── APP CHECK (Bot & Abuse Protection) ────────────────────
try {
  if (typeof firebase.appCheck === 'function') {
    const appCheck = firebase.appCheck();
    appCheck.activate(
      new firebase.appCheck.ReCaptchaV3Provider('6Ldy6w4tAAAAAAREs2kapFTw4Rvac3yWRG3P8h7d'),
      true
    );
  } else {
    window.addEventListener('load', function() {
      try {
        const appCheck = firebase.appCheck();
        appCheck.activate(
          new firebase.appCheck.ReCaptchaV3Provider('6Ldy6w4tAAAAAAREs2kapFTw4Rvac3yWRG3P8h7d'),
          true
        );
      } catch(e) { console.warn('AppCheck init failed:', e); }
    });
  }
} catch(e) { console.warn('AppCheck init error:', e); }

const auth = firebase.auth();
const db   = firebase.firestore();
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(console.error);

// ── LANG ──────────────────────────────────────────────────
const LANGS = {
  en: {
    login:'Login',register:'Register',logout:'Logout',email:'Email Address',password:'Password',name:'Full Name',phone:'Mobile Number',recovery:'Recovery Secret Text',recovery_hint:'Only you know this. Used if you forget your password. Keep it secret!',forgot_password:'Forgot Password?',back_to_login:'Back to Login',create_account:'Create Account →',verify:'Verify →',set_new_password:'Set New Password',
    all_fields:'Please fill all required fields.',pass_short:'Password must be at least 6 characters.',recovery_short:'Recovery text must be at least 3 characters.',email_exists:'This email is already registered.',wrong_credentials:'Incorrect email or password.',no_admin:'You do not have admin access.',email_not_found:'This email is not registered.',recovery_wrong:'Recovery text is incorrect.',low_balance:'Insufficient balance. Please deposit to continue.',account_required:'Please enter your UPI ID or bank account number.',deposit_to_buy:'Insufficient balance. Deposit to buy this product.',
    account_created:'Account created! Redirecting...',verified:'Verified! Set your new password below.',reset_sent:'Password reset email sent! Check your inbox.',deposit_sent:'Deposit request submitted! Admin will verify within 24 hours.',withdraw_sent:'Withdrawal request submitted! Admin will process within 24-48 hours.',claimed:'Claimed! ₹{amount} added to wallet.',invested:'Investment successful!',
    select_amount:'Select Amount',custom_amount:'Custom Amount',custom_hint:'Multiples of 50 only (e.g. 150, 200, 350)',deposit_now:'Deposit Now',pay_now:'Pay ₹{amount}',direct_pay:'Direct Pay',qr_pay:'Scan QR',fast_secure:'🔒 Fast & Secure',i_have_paid:'I Have Paid — Enter UTR',enter_utr:'Enter UTR / Transaction ID',utr_placeholder:'e.g. 427364819263',submit_proof:'Submit Payment Proof ✅',timer_expired:'Time expired! Please start a new deposit.',copy_upi:'Copy UPI ID',copied:'Copied!',
    dashboard:'Dashboard',my_products:'My Products',deposit_history:'Deposit History',withdraw_history:'Withdrawal History',referral:'Referral',settings:'Settings',available_balance:'Available Balance',total_invested:'Total Invested',total_returns:'Total Returns',portfolio_value:'Portfolio Value',
    claim:'Claim ₹{amount}',claim_miss_note:'⚠️ Missed claims cannot be recovered. Claim daily at the same time.',next_claim:'Next claim in:',claimed_today:'Claimed Today ✓',days_remaining:'{n} days remaining',completed:'Completed ✓',
    your_ref_code:'Your Referral Code',your_ref_link:'Your Referral Link',referred_users:'Referred Users',ref_earned:'Total Earned',ref_pending:'Pending',ref_note:'Earn ₹{reward} for each friend who deposits ₹{min}+',
    pending:'Pending',approved:'Approved',rejected:'Rejected',active:'Active',completed_status:'Completed',
    no_investments:'No investments yet',no_transactions:'No transactions found',invest_from:'Browse products to start investing',loading:'Loading...',min_deposit:'Minimum deposit: ₹{min}',max_deposit:'Maximum deposit: ₹{max}',
  },
  hinglish: {
    login:'Login',register:'Register',logout:'Logout',email:'Email Address',password:'Password',name:'Pura Naam',phone:'Mobile Number',recovery:'Recovery Secret Text',recovery_hint:'Sirf aap jaano. Password bhulne pe kaam aayega. Kisi ko mat batana!',forgot_password:'Password Bhul Gaye?',back_to_login:'Login pe Wapas',create_account:'Account Banao →',verify:'Verify Karo →',set_new_password:'Naya Password Set Karo',
    all_fields:'Sab fields bharna zaroori hai.',pass_short:'Password kam se kam 6 characters ka hona chahiye.',recovery_short:'Recovery text thoda lamba rakho.',email_exists:'Yeh email already registered hai.',wrong_credentials:'Email ya password galat hai.',no_admin:'Aapke paas admin access nahi hai.',email_not_found:'Yeh email registered nahi hai.',recovery_wrong:'Recovery text galat hai.',low_balance:'Balance kam hai. Deposit karo.',account_required:'UPI ID ya bank account number daalo.',deposit_to_buy:'Balance kam hai. Product kharidne ke liye deposit karo.',
    account_created:'Account ban gaya! Redirect ho rahe hain...',verified:'Verified! Ab naya password set karein.',reset_sent:'Password reset email bhej di!',deposit_sent:'Deposit request bhej di! Admin 24 ghante mein approve karega.',withdraw_sent:'Withdraw request bhej di!',claimed:'Claim ho gaya! ₹{amount} wallet mein aaya.',invested:'Investment ho gayi!',
    select_amount:'Amount Select Karo',custom_amount:'Custom Amount',custom_hint:'50 ke multiples mein daalo (jaise 150, 200, 350)',deposit_now:'Deposit Karo',pay_now:'₹{amount} Pay Karo',direct_pay:'Direct Pay',qr_pay:'QR Scan Karo',fast_secure:'🔒 Fast & Secure',i_have_paid:'Maine Pay Kar Diya — UTR Daalo',enter_utr:'UTR / Transaction ID Daalo',utr_placeholder:'e.g. 427364819263',submit_proof:'Payment Proof Submit Karo ✅',timer_expired:'Time khatam! Naya deposit shuru karo.',copy_upi:'UPI ID Copy Karo',copied:'Copy Ho Gaya!',
    dashboard:'Dashboard',my_products:'Mere Products',deposit_history:'Deposit History',withdraw_history:'Withdrawal History',referral:'Referral',settings:'Settings',available_balance:'Available Balance',total_invested:'Total Invested',total_returns:'Total Returns',portfolio_value:'Portfolio Value',
    claim:'₹{amount} Claim Karo',claim_miss_note:'⚠️ Miss kiya hua claim wapas nahi aayega. Roz same time pe claim karo.',next_claim:'Agla claim:',claimed_today:'Aaj Claim Ho Gaya ✓',days_remaining:'{n} din bache',completed:'Poora Ho Gaya ✓',
    your_ref_code:'Aapka Referral Code',your_ref_link:'Aapka Referral Link',referred_users:'Referred Users',ref_earned:'Total Kamaya',ref_pending:'Pending',ref_note:'Har dost ke ₹{min}+ deposit pe aapko ₹{reward} milega',
    pending:'Pending',approved:'Approved',rejected:'Rejected',active:'Active',completed_status:'Complete',
    no_investments:'Abhi tak koi investment nahi',no_transactions:'Koi transaction nahi mili',invest_from:'Products dekho aur invest shuru karo',loading:'Load ho raha hai...',min_deposit:'Minimum deposit: ₹{min}',max_deposit:'Maximum deposit: ₹{max}',
  },
  hindi: {
    login:'लॉगिन',register:'रजिस्टर',logout:'लॉगआउट',email:'ईमेल पता',password:'पासवर्ड',name:'पूरा नाम',phone:'मोबाइल नंबर',recovery:'रिकवरी सीक्रेट टेक्स्ट',recovery_hint:'केवल आप जानें। पासवर्ड भूलने पर काम आएगा।',forgot_password:'पासवर्ड भूल गए?',back_to_login:'लॉगिन पर वापस',create_account:'अकाउंट बनाएं →',verify:'सत्यापित करें →',set_new_password:'नया पासवर्ड सेट करें',
    all_fields:'सभी जरूरी फ़ील्ड भरें।',pass_short:'पासवर्ड कम से कम 6 अक्षर का होना चाहिए।',recovery_short:'रिकवरी टेक्स्ट थोड़ा लंबा रखें।',email_exists:'यह ईमेल पहले से रजिस्टर है।',wrong_credentials:'ईमेल या पासवर्ड गलत है।',no_admin:'आपके पास एडमिन एक्सेस नहीं है।',email_not_found:'यह ईमेल रजिस्टर नहीं है।',recovery_wrong:'रिकवरी टेक्स्ट गलत है।',low_balance:'बैलेंस कम है। कृपया डिपॉजिट करें।',account_required:'UPI ID या बैंक खाता नंबर दर्ज करें।',deposit_to_buy:'बैलेंस कम है। प्रोडक्ट खरीदने के लिए डिपॉजिट करें।',
    account_created:'अकाउंट बन गया!',verified:'सत्यापित! अब नया पासवर्ड सेट करें।',reset_sent:'पासवर्ड रीसेट ईमेल भेज दिया!',deposit_sent:'डिपॉजिट अनुरोध भेज दिया!',withdraw_sent:'निकासी अनुरोध भेज दिया!',claimed:'क्लेम हो गया! ₹{amount} वॉलेट में आया।',invested:'निवेश सफल!',
    select_amount:'राशि चुनें',custom_amount:'कस्टम राशि',custom_hint:'50 के गुणक में दर्ज करें (जैसे 150, 200, 350)',deposit_now:'डिपॉजिट करें',pay_now:'₹{amount} भुगतान करें',direct_pay:'सीधा भुगतान',qr_pay:'QR स्कैन करें',fast_secure:'🔒 तेज़ और सुरक्षित',i_have_paid:'मैंने भुगतान कर दिया — UTR दर्ज करें',enter_utr:'UTR / ट्रांजैक्शन ID दर्ज करें',utr_placeholder:'e.g. 427364819263',submit_proof:'भुगतान प्रमाण जमा करें ✅',timer_expired:'समय समाप्त! नया डिपॉजिट शुरू करें।',copy_upi:'UPI ID कॉपी करें',copied:'कॉपी हो गया!',
    dashboard:'डैशबोर्ड',my_products:'मेरे प्रोडक्ट',deposit_history:'डिपॉजिट इतिहास',withdraw_history:'निकासी इतिहास',referral:'रेफरल',settings:'सेटिंग्स',available_balance:'उपलब्ध बैलेंस',total_invested:'कुल निवेश',total_returns:'कुल रिटर्न',portfolio_value:'पोर्टफोलियो मूल्य',
    claim:'₹{amount} क्लेम करें',claim_miss_note:'⚠️ मिस किया गया क्लेम वापस नहीं आएगा।',next_claim:'अगला क्लेम:',claimed_today:'आज क्लेम हो गया ✓',days_remaining:'{n} दिन बचे',completed:'पूरा हो गया ✓',
    your_ref_code:'आपका रेफरल कोड',your_ref_link:'आपका रेफरल लिंक',referred_users:'रेफर किए गए',ref_earned:'कुल कमाई',ref_pending:'लंबित',ref_note:'हर दोस्त के ₹{min}+ डिपॉजिट पर ₹{reward} मिलेगा',
    pending:'लंबित',approved:'स्वीकृत',rejected:'अस्वीकृत',active:'सक्रिय',completed_status:'पूर्ण',
    no_investments:'अभी तक कोई निवेश नहीं',no_transactions:'कोई लेनदेन नहीं मिला',invest_from:'प्रोडक्ट देखें और निवेश शुरू करें',loading:'लोड हो रहा है...',min_deposit:'न्यूनतम जमा: ₹{min}',max_deposit:'अधिकतम जमा: ₹{max}',
  }
};

let currentLang = localStorage.getItem('adt_lang') || 'en';
function t(key, vars={}) {
  let s = (LANGS[currentLang]&&LANGS[currentLang][key]) || (LANGS.en&&LANGS.en[key]) || key;
  Object.entries(vars).forEach(([k,v]) => s = s.replace(`{${k}}`,v));
  return s;
}
function setLang(lang) {
  if(!LANGS[lang]) return;
  currentLang=lang; localStorage.setItem('adt_lang',lang);
  document.querySelectorAll('[data-t]').forEach(el=>{
    const v=t(el.getAttribute('data-t'));
    if(el.tagName==='INPUT'||el.tagName==='TEXTAREA') el.placeholder=v; else el.textContent=v;
  });
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
}

// ── UTILITIES ──────────────────────────────────────────────
function formatINR(n){return '₹'+(parseFloat(n)||0).toLocaleString('en-IN',{minimumFractionDigits:0,maximumFractionDigits:2});}
function formatDate(ts){if(!ts)return '—';try{const d=ts.toDate?ts.toDate():new Date(ts);return d.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});}catch{return '—';}}
function formatDateTime(ts){if(!ts)return '—';try{const d=ts.toDate?ts.toDate():new Date(ts);return d.toLocaleString('en-IN',{day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'});}catch{return '—';}}
function copyText(text,btnEl){if(!text||text==='—')return;navigator.clipboard.writeText(text).then(()=>{if(!btnEl)return;const o=btnEl.textContent;btnEl.textContent=t('copied');setTimeout(()=>btnEl.textContent=o,1800);}).catch(()=>{const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);if(btnEl){const o=btnEl.textContent;btnEl.textContent=t('copied');setTimeout(()=>btnEl.textContent=o,1800);}});}
function generateTxnId(){return 'TXN'+Date.now().toString(36).toUpperCase()+Math.random().toString(36).substr(2,6).toUpperCase();}
function generateRefCode(uid){return 'ADT'+uid.substr(0,6).toUpperCase();}
function showMsg(id,msg,type='error'){const el=document.getElementById(id);if(!el)return;el.textContent=msg;el.className=(type==='error'?'msg-error':'msg-success')+' show';if(el._t)clearTimeout(el._t);if(msg)el._t=setTimeout(()=>el.classList.remove('show'),6000);}
function hideMsg(id){const el=document.getElementById(id);if(el){el.classList.remove('show');el.textContent='';}}
function validateCustomAmount(val,minDep,maxDep){const n=parseInt(val);if(isNaN(n)||n<=0)return 'Please enter a valid amount.';if(n%50!==0)return 'Amount must be in multiples of 50 (e.g. 100, 150, 200).';if(minDep&&n<minDep)return t('min_deposit',{min:minDep});if(maxDep&&n>maxDep)return t('max_deposit',{max:maxDep});return null;}
function formatTimer(secs){return Math.floor(secs/60).toString().padStart(2,'0')+':'+( secs%60).toString().padStart(2,'0');}
function isClaimAvailable(lastClaimedAt){if(!lastClaimedAt)return true;const last=lastClaimedAt.toDate?lastClaimedAt.toDate():new Date(lastClaimedAt);return new Date()>=new Date(last.getTime()+24*60*60*1000);}
function timeUntilNextClaim(lastClaimedAt){if(!lastClaimedAt)return 0;const last=lastClaimedAt.toDate?lastClaimedAt.toDate():new Date(lastClaimedAt);return Math.max(0,new Date(last.getTime()+24*60*60*1000)-new Date());}
function formatCountdown(ms){if(ms<=0)return '00:00:00';const s=Math.floor(ms/1000);return Math.floor(s/3600).toString().padStart(2,'0')+':'+Math.floor((s%3600)/60).toString().padStart(2,'0')+':'+(s%60).toString().padStart(2,'0');}
function encryptStr(s){return btoa(unescape(encodeURIComponent(s)));}
function decryptStr(s){try{return decodeURIComponent(escape(atob(s)));}catch{return '';}}
function openModal(id){const el=document.getElementById(id);if(el){el.classList.add('open');document.body.style.overflow='hidden';}}
function closeModal(id){const el=document.getElementById(id);if(el){el.classList.remove('open');document.body.style.overflow='';}}
function randomFrom(arr){if(!arr||!arr.length)return null;return arr[Math.floor(Math.random()*arr.length)];}
function upiDeepLink(upiId,amount,name){return `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name||'ADT GROUPS')}&am=${amount}&cu=INR`;}
function qrCodeUrl(text,size){return `https://api.qrserver.com/v1/create-qr-code/?size=${size||200}x${size||200}&data=${encodeURIComponent(text)}&bgcolor=ffffff&color=000000&margin=10`;}
function statusBadge(status){const map={approved:'badge-green',pending:'badge-gold',rejected:'badge-red',active:'badge-green',completed:'badge-blue'};const dot=(status==='active'||status==='approved')?'<span class="status-dot green"></span>':'';return `<span class="badge ${map[status]||'badge-muted'}">${dot}${t(status)||status}</span>`;}
function hideSplash(){const s=document.getElementById('splash');if(!s)return;s.style.opacity='0';setTimeout(()=>s.style.display='none',600);}
function initDraggable(elId){const w=document.getElementById(elId);if(!w)return;let drag=false,sx,sy,sl,sb;const sd=(cx,cy)=>{drag=true;sx=cx;sy=cy;const r=w.getBoundingClientRect();sl=r.left;sb=window.innerHeight-r.bottom;};const mv=(cx,cy)=>{if(!drag)return;w.style.left=(sl+(cx-sx))+'px';w.style.bottom=(sb-(cy-sy))+'px';w.style.right='auto';};w.addEventListener('mousedown',e=>{if(!e.target.closest('button')){sd(e.clientX,e.clientY);e.preventDefault();}});document.addEventListener('mousemove',e=>mv(e.clientX,e.clientY));document.addEventListener('mouseup',()=>drag=false);w.addEventListener('touchstart',e=>{if(!e.target.closest('button')){const t2=e.touches[0];sd(t2.clientX,t2.clientY);}},{passive:true});document.addEventListener('touchmove',e=>{const t2=e.touches[0];mv(t2.clientX,t2.clientY);},{passive:true});document.addEventListener('touchend',()=>drag=false);}

document.addEventListener('DOMContentLoaded',()=>{
  setLang(currentLang);
  document.querySelectorAll('.modal-overlay').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)closeModal(m.id);}));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.modal-overlay.open').forEach(m=>closeModal(m.id));});
});

