document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookieBanner");
  const acceptBtn = document.getElementById("cookie-accept");
  const rejectBtn = document.getElementById("cookie-reject");
  const KEY = "eqnx_cookie_consent_v1";

  try{
    const saved = localStorage.getItem(KEY);
    if(!saved){ banner.style.display = "flex"; }
  }catch(e){ banner.style.display = "flex"; }

  function closeBanner(){
    banner.style.opacity = "0";
    setTimeout(()=>{ banner.style.display = "none"; }, 280);
  }

  acceptBtn.addEventListener("click", ()=>{
    try{ localStorage.setItem(KEY,"accepted"); }catch(e){}
    closeBanner();
  });
  rejectBtn.addEventListener("click", ()=>{
    try{ localStorage.setItem(KEY,"rejected"); }catch(e){}
    closeBanner();
  });
});