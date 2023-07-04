let makeNewMemo = document.querySelector('#makeNewMemo');
let memoDate = document.querySelectorAll("ul.memoDate");
let checks = document.querySelectorAll('input.checkbox');


makeNewMemo.addEventListener("click", function(){
    let makeLi = document.createElement('li');

    makeLi.innerHTML = '<input type="checkbox" class="checkbox"> <input type="text"><button class="saveMemo">저장</button><button class="deleteMemo">삭제</button>';
    
    memoDate[0].appendChild(makeLi)
    //해당사항 저장하고 새로고침하여 보여지게 되어야함
})


//체크박스 다중삭제는 나중에 고려해보기
// for(let check of checks){
//     check.addEventListener('click', function(){
//         console.log("work?")
//         if(check.checked === 'true'){
//             console.log('plz')
//         }
//     })
// }

//삭제버튼시 해당 li 삭제됨
let deleteBtns = document.querySelectorAll("li button.deleteMemo");
for(let deleteBtn of deleteBtns){
    deleteBtn.addEventListener('click', () => {
        deleteBtn.parentNode.remove()
    })
}

