window.addEventListener('DOMContentLoaded', ()=>{

    //コンテナ指定、落ち葉を落とすコンテナをjsで取得する
    const container = document.querySelector('.cats-container');

    //ねこを生成する関数
    //引数3つ、catclassはねこのクラス名(leaf-1とか)
    //minsizevalとmaxsizevalは最小・最大サイズの数値が入る
    const createCat = (catClass, minSizeVal, maxSizeVal) => {

        //ねこを作成しクラス名をつける
        const catEl =document.createElement('span');
        catEl.className = `cat ${catClass}`;

        //onclick、クリックしたら音が鳴るようにする
        catEl.setAttribute("onclick","audio()");

        

        //サイズを最小〜最大の間からランダム指定する
        const minSize = minSizeVal;
        const maxSize = maxSizeVal;
        const size = Math.random() * (maxSize + 1 - minSize) + minSize;

        catEl.style.width = `${size}px`;
        catEl.style.height = `${size}px`;

        //○ねこの発生位置（X軸）をランダム指定
        //leftプロパティに0~100%までのランダム数値を設定する
        catEl.style.left = Math.random() * 100 + '%';

        //ねこの要素をhtmlのコンテナに追加
        container.appendChild(catEl);

        //時間が経ったらねこを消す、8秒
        setTimeout(() =>{
            catEl.remove();
        },8000);
    }

//ねこの生成間隔をミリ秒で指定する
//クラス名・最小、最大サイズ、生成間隔を指定する
//完成したcreatecat関数setIntervalを使って一定間隔で呼び出す
setInterval(createCat.bind(this, 'cat-1', 30, 50), 1000);
setInterval(createCat.bind(this, 'cat-2', 30, 50), 1000);
setInterval(createCat.bind(this, 'cat-3', 30, 50), 1500);

//createｃatに3つの引数(クラス名、最小サイズ、最大サイズ)を渡している。
//第2引数には生成する間隔を1000ミリ秒＝1秒で指定している。
})

function audio(){
    document.getElementById('btn_audio').currentTime = 0;
    document.getElementById('btn_audio').play();
}