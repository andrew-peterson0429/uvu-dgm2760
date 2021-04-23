
function duplicateMenu() {
    let newList = document.getElementById('primaryNavigation')
    let newNav = document.getElementById('smallNavArea')
    let clone = newList.cloneNode(true)
    clone.removeAttribute('id')
    // newNav.appendChild(newList)
    newNav.after(clone)
    newNav.appendChild(clone)
    console.log(newNav)
    console.log('duplicateMenu has been called')
}

duplicateMenu()