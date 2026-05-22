(function () {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    const curYear = new Date().getFullYear();
    if (yearSpan && curYear > 2026) {
        yearSpan.textContent = ` - ${curYear}`;
    }
})();

document.querySelector("#btn-share").addEventListener('click', (e)=>{
    e.preventDefault();
    const lnk = window.location.origin + window.location.pathname;
    navigator.clipboard.writeText(lnk);
        // .then(() => {
        //     popNotif('Link đã được copy!\n' + lnk);
        // })
        // .catch(err => {
        //     popNotif('Không copy được link:\n' + lnk);
        //     console.error('Lỗi copy:', err.message);
        // });
        
    const shareData = {
        title: 'Invo26',
        text: "Invo26 - Giải pháp tạo hóa đơn điện tử hàng loạt nhanh chóng và chính xác. Tải về tại: https://invo26.nguyenhx.vn/download ",
        url: lnk
    };
    
    if(navigator.share){
        try{
            navigator.share(shareData);
        } catch{}
    }
});