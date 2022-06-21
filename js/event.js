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
//inputTicket[0] là ô nhập số lượng vé inputticke[1] là ô nhập eamil
let h = 4;
document.querySelector("#btn-payment").addEventListener('click', function () {
    //Check number ticket
    let check = true
    if (inputTicket[0].value <= 0) {
        //Hiện text thông báo lỗi
        document.querySelector(".error-number-ticket").style.display = 'block'

        //hàm setInterval dùng để tạo hieuj ứng boder nhấp nháy đỏ
        //setInterval làm hàm sẽ tự động được thực hiện lặp đi lặp lại sau 1 khoảng thời gian nhất định
        //setTimeout là hàm tự động thực thực hiện 1 lần duy nhất sau 1 khoảng thời gian
        let timerId = setInterval(function () {
            //thêm ô input vào class error. Class error được sytyle boder màu đỏ
            document.querySelector("#input-number-ticket").classList.add("error");
            // sau 0.1s thì xóa class đó đi. lặp di lặp lại sẽ được hiện tượng nhấp nháy
            setTimeout(() => { document.querySelector("#input-number-ticket").classList.remove("error") }, 100);
        }, 150);
        //ClearInterval dùng để ngưng chạy hàm setInterval ở trên
        //Hàm ngưng chạy sau thời gian 1s kiểu nó chỉ nháy đỏ trong khoảng t.gian là 1s
        setTimeout(() => { clearInterval(timerId) }, 1000);
        document.querySelector("#input-number-ticket").classList.remove("error")
        check = false
    }
    //Kiểm tra email. giống cái trên
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
    //Nếu nhập đúng thông tin thì hiện thông báo success
    //Cũng dùng set timeout để nó chạy thông báo tắt sau bn giây, còn cái thanh ở dưới thì dùng animation trong css
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
               // function myTimer() {
        //     document.getElementById('time-loading').textContent = `Hộp thoại sẽ tự động đóng trong ${h}s`;
        //     h = h - 1
        // }
        // setTimeout(clearinter, 5000)
        // function clearinter() {
        //     clearInterval(myInterval);
        //     document.querySelector('.payment-success').style.display = 'none'
        //     h = 4
        // }
        // const myInterval = setInterval(myTimer, 1000);
        document.querySelector('.payment-success').style.display = 'block'
    }

})
//người dùng bắt đầu nhập thì tắt các thông báo đỏ
inputTicket[0].addEventListener('input', hideError)
inputTicket[1].addEventListener('input', hideError)

function hideError() {
    let er = document.querySelectorAll(".error-input")
    for (let i = 0; i < er.length; i++) {
        er[i].style.display = 'none'
    }
}

