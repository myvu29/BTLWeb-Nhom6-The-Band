function checkName()
{
    //name
    let name=document.getElementById('name').value;
    if(name === '')
    {
            document.getElementById('errorName').innerHTML = 'Name không được để trống <br>';
            return false;
    }
    else
    {
        document. getElementById ('errorName').innerHTML='';
        return true;
    }

}

function checkMail () {
    let email=document.getElementById('email').value;
    if(email === '')
    {
        document.getElementById('errorEmail').innerHTML = 'Email không được để trống <br>';
        return false
    }
    else{
        let regex_email =/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/
        if(!regex_email.test (email)){
            document. getElementById ('errorEmail').innerHTML='Email không hợp lệ <br>';
            return false;
        }
        else{
            document. getElementById ('errorEmail').innerHTML='';
            return true;
        }
        
    }
}

function checkPhone()
{
    //name
    let phone=document.getElementById('phone').value;
    if(phone === '')
    {
            document.getElementById('errorPhone').innerHTML = 'Phone không được để trống <br>';
            return false;
    }
    else
    {
        document. getElementById ('errorPhone').innerHTML='';
        return true;
    }

}

function checkMess()
{
    //name
    let mess=document.getElementById('mess').value;
    if(mess === '')
    {
            document.getElementById('errorMess').innerHTML = 'Mess không được để trống <br>';
            return false;
    }
    else
    {
        document. getElementById ('errorMess').innerHTML='';
        return true;
    }

}

function checkAll() {

    let a = checkMail()
    let b = checkName()
    let c = checkPhone()
    let d = checkMess()
    if(a && b && c && d){
        // 
        alert("Cảm ơn bạn đã phản hồi");
        return true;
    }
    return false;
}
