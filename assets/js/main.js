(function () {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    const curYear = new Date().getFullYear();
    if (yearSpan && curYear > 2026) {
        yearSpan.textContent = ` - ${curYear}`;
    }
})();

(function (){
    GetViewCount("FSDIOOkHoKJHLD");
})();

(function (){
    const btnShare = document.getElementById("btn-share");
    if(!btnShare)   return;
    btnShare.addEventListener('click', (e)=>{
        e.preventDefault();
        const lnk = window.location.origin + window.location.pathname;
        navigator.clipboard.writeText(lnk);
        const shareData = {
            title: 'Invo26',
            text: "\nInvo26 - Giải pháp tạo hóa đơn điện tử hàng loạt nhanh chóng và chính xác. \nTải về tại: https://invo26.nguyenhx.vn/download ",
            url: lnk
        };
    
        if(navigator.share){
            try{
                navigator.share(shareData);
            } catch{}
        }
    });
})();
