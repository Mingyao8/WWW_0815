function press(self){
    if (confirm('確定送出?') == true) {
        console.log(0);
        let user = document.getElementById('user')
        let day1 = document.getElementById('uday')
        let con = document.getElementById('con')
        let user_value = user.value;
        let day_value = day1.value;
        let con_value = con.value;
        $.post("./feedback_input",{'user':user_value,'day':day_value,'con':con_value})
    } else {
        console.log('NOOK')
    }
}