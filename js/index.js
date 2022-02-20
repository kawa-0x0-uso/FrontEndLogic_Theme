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
        question:'赤く焼けた石の上に水をかけ蒸気を発生させるフィンランドの伝統的なサウナの方法を何という？',
        answer:'',
        type:'write',
        correct:'ロウリュ'
    },
    {
        // チェックボックス
        question:'サウナが好きなキャラクターは？※複数回答',
        answer:['碧棺左馬刻','ミッキー','キティ','ムーミン'],
        type:'check',
        correct:['碧棺左馬刻','キティ']
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

    if(current_number<quizList.length){
        // 問題文を表示
        question_element.textContent = quizList[current_number].question;
        // ラジオボタン追加
        answer_element.innerHTML = '<label for=""><input type="radio" name="" id="">'+quizList[current_number].answer+'</label>';
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