document.addEventListener('DOMContentLoaded', function() {
    const getFeedbackButton = document.getElementById('getFeedback');//按鈕
    const table = document.getElementById('feedbackTable');//表格
    let array = ['user_name', 'date', 'context', 'handle_ok'];//表頭的陣列
    console.log(123)
    update()
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
            console.log(JSON.parse(data));
            let res = JSON.parse(data);
            clearTableRows(); 

            res.forEach((ele) => {//單純顯示文字欄位
                var tr = document.createElement('tr');
                for (var i = 0; i < 4; i++) {
                    var td = document.createElement('td');
                    var text = document.createTextNode(ele[array[i]]);
                    td.appendChild(text);
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            });
        })
    }
    getFeedbackButton.addEventListener('click', update());
    });
  