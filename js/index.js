// 課題Aクイズ
const quizList = [
    {
        // ラジオボタン
        question:'「蒸気船ウィリー」でデビューしたのは？',
        answer:['ミッキー','プーさん','ジー二―','スティッチ'],
        correct:'ミッキー'
    },
    {
        // 記述式
        question:'「アースラ」が出てくる物語のプリンセスは？',
        answer:'',
        correct:'アリエル'
    },
    {
        // チェックボックス
        question:'山寺宏一さんが吹替をしているキャラクターは？',
        answer:['カジモド','野獣','ドナルドダック','ニック'],

    }
];

// 今何問目かをカウントする
let current_number = 0;

// 回答ボタンを押されたら関数を呼び出して次の問題を表示する
const quiz_start = document.getElementById('quiz');
quiz_start.addEventListener("click",func_quiz_start);

function func_quiz_start(){
    let question_element = document.getElementById("quiz_question");
    let answer_element = document.getElementById("quiz_answer");

    let radio_button = document.createElement("input");
    radio_button.type = "radio";

    if(current_number<quizList.length){
        // 問題文を表示
        question_element.textContent = quizList[current_number].question;
        current_number++;
    }else{
        question_element.textContent = 'おわり';
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