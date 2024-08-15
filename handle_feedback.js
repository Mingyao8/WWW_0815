document.addEventListener('DOMContentLoaded', function() {
    const getFeedbackButton = document.getElementById('getFeedback');//按鈕
    const table = document.getElementById('feedbackTable');//表格
    const check = document.getElementById('sub');//提交的按鈕
    let array = ['user_name', 'date', 'context', 'handle_ok'];//表頭的陣列
  
    function clearTableRows() {//避免重複載入欄位
        while (table.rows.length > 1) {
            table.deleteRow(1);
        }
    }
    function update(){
        fetch('get_feedback.php')
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            let res = JSON.parse(data);//php取回來的資料要先轉譯
            clearTableRows();
            res.forEach((ele) => {//遍歷有幾筆資料
            var tr = document.createElement('tr');//建立table row
            for (var i = 0; i < 4; i++) {//每筆資料的每個元素都要新增一個table data
                var td = document.createElement('td');
                if (i === 3) {//若是最後一個元素的話要新增一個按鈕
                if(ele[array[i]] === 'NO'){//檢查這個元素被處理了沒
                    var radioButton = document.createElement('input');
                    radioButton.type = 'radio';
                    radioButton.name = 'handle';
                    radioButton.value = ele['ID'];//這是要去SQL更新的KEY值
                    td.appendChild(radioButton);
                }
                else{
                    var radioButton = document.createElement('input');
                    radioButton.type = 'radio';
                    radioButton.name = 'handle';
                    radioButton.value = ele['ID'];
                    radioButton.disabled = true;
                    td.appendChild(radioButton);//同上
                }
                } else {//其他就新增文字節點就可以
                var text = document.createTextNode(ele[array[i]]);
                td.appendChild(text);
                }  
                tr.appendChild(td);
            }
            table.appendChild(tr);
            });
        })
    }

    getFeedbackButton.addEventListener('click', update())

    check.addEventListener('click',function(){
        let select = document.querySelector('input[name = "handle"]:checked');//取得屬性為handle的button值
        console.log(select.value)
        let val = select.value
        $.post("./update_feedback.php",{'ID':val})//傳給PHP去更新資料庫
        //之後更新新的資料
        if (confirm('成功!!!') == true) {
            update();
        } else {
            console.log('NOOK')
        }

    })
    });
  