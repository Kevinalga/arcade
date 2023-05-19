
window.addEventListener('load', () => {
    const leftSideBarBtn = document.getElementById('left-side-bar-btn')
    const leftSideBar = document.getElementById('left-side-bar')
    leftSideBarBtn.addEventListener('click', () => {
        leftSideBar.classList.toggle('open')
    })
})