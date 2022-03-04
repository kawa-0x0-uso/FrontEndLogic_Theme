// 課題Aクイズ
const quizList = [
    {
        // ラジオボタン
        question:'サウナは何語？',
        answer:['ロシア語','英語','フィンランド語','フランス語'],
        type:'radio',
        correct:'フィンランド語'
    },
    {
        // 記述式
        question:'赤く焼けた石の上に水をかけ蒸気を発生させるフィンランドの伝統的なサウナの方法を何という？※まだ表示だけ',
        answer:'',
        type:'write',
        correct:'ロウリュ'
    },
    // {
    //     // チェックボックス
    //     question:'サウナが好きなキャラクターは？※複数回答※まだ表示だけ',
    //     answer:['碧棺左馬刻','ミッキー','キティ','ムーミン'],
    //     type:'check',
    //     correct:['碧棺左馬刻','キティ']
    // }
];

// 今何問目かをカウントする
let current_number = 0;

// 回答ボタンを押されたら関数を呼び出して次の問題を表示する
const quiz_start = document.getElementById('quiz');
quiz_start.addEventListener("click",func_quiz_start);

function func_quiz_start(){
    let question_element = document.getElementById("quiz_question");
    let answer_element = document.getElementById("quiz_answer");

    let radio_element = '';
    let user_radio = '';
    let score = 0;

    if(current_number<quizList.length){
        // 問題文を表示
        question_element.textContent = quizList[current_number].question;

        // 回答のラジオボタン追加
        for(var i in quizList[current_number].answer){
            radio_element += '<input type="radio" name="answer_radio" value="'+quizList[current_number].answer[i]+'" id="radio'+i+'"><label for="radio'+i+'">'+quizList[current_number].answer[i]+'</label><br>';
        }
        answer_element.innerHTML = radio_element;

        // checkedになっているラジオボタンの値を取得
        let radio_check = document.getElementsByName('answer_radio');
        for(let i = 0;i<radio_check.length;i++){
            if(radio_check[i].checked){
                user_radio = radio_check[i].value;
            }
        }

        console.log('ユーザーの選択：'+user_radio);
        // ラジオボタンの正誤判定
        if(user_radio == quizList[current_number].correct){
            score =+ 1 ;
            console.log('得点：'+score);
        }

        // 次の問題を表示する
        current_number++;
    }else{
        current_number = 0;
    }
}


// 課題Bスライダー
$('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    responsive: [,
        {
            breakpoint: 640,
            settings: {
            arrows: false,
            }
        },
    ]
});

// 課題C　クラスを変更する
const backgroundColor_start = document.getElementById('backgroundColor');
backgroundColor_start.addEventListener("click",func_backgroundColor);
let count = 0;

function func_backgroundColor(){
    const colorList = ["red","blue","gray","yellow","purple","orange"];
    let change_class = document.querySelector(".backgroundcolor");
    console.log(count+"回目:変わるまえ");
    console.log(colorList.length+"：色の個数");

    if(count<colorList.length){
        change_class.style.backgroundColor = colorList[count];
        count++;
        console.log(count+"回目:変わったあと");
    }else{
        count = 0;
        change_class.style.backgroundColor = colorList[count];
        count++;
    }
}


// ラジオボタン取得テスト
const test_start = document.getElementById('test');
test_start.addEventListener("click",func_test_start);
let current_no = 0;

const testList = [
    {
        // ラジオボタン
        question:'サウナは何語？',
        answer:['ロシア語','英語','フィンランド語','フランス語'],
        type:'radio',
        correct:'フィンランド語'
    },
    {
        // 記述式
        question:'赤く焼けた石の上に水をかけ蒸気を発生させるフィンランドの伝統的なサウナの方法を何という？※まだ表示だけ',
        answer:'',
        type:'write',
        correct:'ロウリュ'
    },
];

function func_test_start(){
    console.log('func_test_startが動くかテスト');
    let answer_element = document.getElementById("radio");
    let radio_element = '';

    let elems = document.getElementsByName("answer_radio");
    let val = "";

    // 回答のラジオボタン追加
    // for(var i in testList[current_no].answer){
    //     radio_element += '<input type="radio" name="answer_radio" value="'+quizList[current_number].answer[i]+'" id="radio'+i+'"><label for="radio'+i+'">'+quizList[current_number].answer[i]+'</label><br>';
    // }
    // answer_element.innerHTML = radio_element;

    for (let i = 0; i < elems.length; i++) {
        if (elems[i].checked){
            val = elems[i].value;
        }
    } 

    console.log(val);
}