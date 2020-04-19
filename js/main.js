


    var status = 0; // 0:停止中 1:動作中
    var time = 1*60*100;
    var startBtn = document.getElementById("startBtn");
    var timerLabel = document.getElementById('timerLabel');

    // STARTボタン
	function start(){
        // 動作中にする
        status = 1;
        // スタートボタンを押せないようにする
        startBtn.disabled = true;

        timer();
    }

    // STOPボタン
    function stop(){
        // 停止中にする
        status = 0;
        // スタートボタンを押せるようにする
        startBtn.disabled = false;
    }

    // RESETボタン
    function reset(){
        // 停止中にする
        status = 0;
        // タイムを0に戻す
        time = 1*60*100;
        // タイマーラベルをリセット
        timerLabel.innerHTML = '60:00';
        // スタートボタンを押せるようにする
        startBtn.disabled = false;
    }

    function timer(){
        // ステータスが動作中の場合のみ実行
        if (status == 1) {
            setTimeout(function() {
                time--;

                if(time<= 0)
                {
                    timerLabel.textContent ="時間切れです！";
                }else
                {
                // 分・秒・ミリ秒を計算
                var min = Math.floor(time/100/60);
                var sec = Math.floor(time/100%60);

                // 分が１桁の場合は、先頭に０をつける
                if (min < 10) min = "0" + min;

                // 秒が１桁の場合は、先頭に０をつける
                if (sec < 10) sec = "0" + sec;

                // タイマーラベルを更新
                timerLabel.innerHTML = min + ":" + sec;

                // 再びtimer()を呼び出す
                timer();
                }
            }, 10);
        }
    }
