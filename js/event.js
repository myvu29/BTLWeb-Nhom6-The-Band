//  show popup 

  let elements =  document.querySelectorAll(".btn-buy-ticket")
  document.querySelector(".form-buy-ticket").addEventListener('click',function(e){
    if(e.target ==this){
      document.querySelector(".form-buy-ticket_content").classList.add("hide-form-buy-ticket")
    setTimeout(function(){
      document.querySelector(".form-buy-ticket").style.display = 'none'
    },400)
    }
  })
  elements.forEach(element =>{
    element.addEventListener('click', show)
  })
 // show()
  function show(){
    document.querySelector(".form-buy-ticket_content").classList.remove("hide-form-buy-ticket")
    document.querySelector(".form-buy-ticket_content").classList.add("center")
    document.querySelector(".form-buy-ticket").style.display = 'block'
  }

  function hideFormBuyTicket(){
    document.querySelector(".form-buy-ticket_content").classList.remove("center")
document.querySelector(".form-buy-ticket_content").classList.add("hide-form-buy-ticket")
    setTimeout(function(){
      document.querySelector(".form-buy-ticket").style.display = 'none'
    },400)
  }


let inputTicket = document.querySelectorAll(".input-ticket")
let h = 4;
document.querySelector("#btn-payment").addEventListener('click', function () {
    //Check number ticket
    let check = true
    if (inputTicket[0].value <= 0) {
        document.querySelector(".error-number-ticket").style.display = 'block'

        let timerId = setInterval(function () {
            document.querySelector("#input-number-ticket").classList.add("error");
            setTimeout(() => { document.querySelector("#input-number-ticket").classList.remove("error") }, 100);
        }, 150);
        setTimeout(() => { clearInterval(timerId) }, 1000);
        document.querySelector("#input-number-ticket").classList.remove("error")
        check = false
    }
    if (!/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/.test(inputTicket[1].value)) {
        console.log('abc')
        document.querySelector(".error-email").style.display = 'block'

        let timerId2 = setInterval(function () {
            document.querySelector("#input-email").classList.add("error");
            setTimeout(() => { document.querySelector("#input-email").classList.remove("error") }, 100);
        }, 150);
        setTimeout(() => { clearInterval(timerId2) }, 1000);
        document.querySelector("#input-email").classList.remove("error")
        check = false
    }
    if (check) {
        let a = [[5,0],[4,1000],[3,2000],[2,3000],[1,4000],[0,5000]]
        for(let i = 0;i<a.length;i++){
            setTimeout(function(){
                document.getElementById('time-loading').textContent = `Hộp thoại sẽ tự động đóng trong ${a[i][0]}s`;
                if(a[i][0] == 0){
                    document.querySelector('.payment-success').style.display = 'none'
                }
            }, a[i][1])
        }
        document.querySelector('.payment-success').style.display = 'block'
    }

})
inputTicket[0].addEventListener('input', hideError)
inputTicket[1].addEventListener('input', hideError)

function hideError() {
    let er = document.querySelectorAll(".error-input")
    for (let i = 0; i < er.length; i++) {
        er[i].style.display = 'none'
    }
}

