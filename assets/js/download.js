(function (){
    const btnDl = document.querySelector("#btn-download");
    if(!btnDl)  return;
    btnDl.addEventListener('click', (e)=>{
        const url = e.currentTarget.href;
        console.log(url);
        if(!url)    return;
        const fp = NTV_VISITOR_INFO.fingerprint;
        fetch('https://script.google.com/macros/s/AKfycbzLmQSg5b_rUwG_kTm0T8JfBsyTjXmxTIifBKJ08lcOV1AfdgL53j3RQrpMp4NupvtQyQ/exec?' + (new URLSearchParams({ url: url, fp: fp ? fp : 'undefined' })).toString());

    })
})();

