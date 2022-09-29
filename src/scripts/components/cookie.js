
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];

        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


export const initCookie = () => {
    const cookiesPopup = document.querySelector('.cookies__pop-up');

    if (cookiesPopup) {
        const cookiesButtons = cookiesPopup.querySelectorAll('.cookies__close, .button');

        cookiesButtons&&cookiesButtons.length&&cookiesButtons.forEach((button) => {
            button.addEventListener('click', function(e) {
                cookiesPopup.classList.add('popup--hide');
                // setCookie('show_cookies_block', 'no', 365);
            })
        });
    }
}
