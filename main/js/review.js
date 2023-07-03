let makeNewMemo = document.querySelector('#makeNewMemo');
let deleteMemo = document.querySelector('#deleteMemo');
let memoDate = document.querySelectorAll("ul.memoDate");
let checks = document.querySelectorAll('input.checkbox');


makeNewMemo.addEventListener("click", function(){
    let makeLi = document.createElement('li');

    makeLi.innerHTML = '<input type="checkbox" class="checkbox"> <input type="text">';
    
    memoDate[0].appendChild(makeLi)
})

for(let check of checks){
    check.addEventListener('click', function(){
        console.log("work?")
        if(check.checked === 'true'){
            console.log('plz')
        }
    })
}
deleteMemo.addEventListener("click", function(){
    let delLi = document.querySelectorAll('li');
    memoDate[0].removeChild(delLi[0])
    
})