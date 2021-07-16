var inputname = document.querySelector('.name')

    inputname.addEventListener('keyup', filterlist)

    function filterlist() {
        
        var inputvalue = document.querySelector('.name').value.toUpperCase()
        var ul = document.querySelector('.collection with-header')
        var li = document.querySelectorAll('.collection-item')
        for(var i = 0; i < li.length; i++) {
            var a = li[i].querySelectorAll('a')[0]
            if(a.innerHTML.toUpperCase().indexOf(inputvalue) > -1) {
                li[i].style.display = ''
            }
            else {
                li[i].style.display = 'none'
            }
        }
}