(function () {
    const buttonList = document.getElementsByClassName('js-btn-list')[0]
    const defaultButton = document.getElementsByClassName('js-default-btn')[0]
    defaultButton.onclick = function () {
        if (buttonList.classList.contains('l-btn-list')) {
            buttonList.classList.remove('l-btn-list')
            buttonList.classList.add('l-btn-inline-list')
        } else {
            buttonList.classList.add('l-btn-list')
            buttonList.classList.remove('l-btn-inline-list')
        }
    }
})()
