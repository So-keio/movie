// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "",
          "content": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class=\"page-item\" style=\"max-width: 750px; margin: 0 auto; padding: 50px 20px; line-height: 1.9; text-align: left;\"\u003E\r\n    \r\n    \u003Ch2 style=\"text-align: center; margin-bottom: 40px; font-size: 1.6rem; color: #2c3e50; border-bottom: 2px solid #dce4ec; padding-bottom: 15px; font-weight: bold;\"\u003E\r\n        実験へのご参加ありがとうございます\r\n    \u003C\u002Fh2\u003E\r\n    \r\n    \u003Cp style=\"font-size: 1.1rem; color: #333; margin-bottom: 25px;\"\u003E\r\n        この実験は、慶應義塾大学所属の研究室が行う研究プロジェクトの一環として、映像についての記憶を調べるためのものです。\r\n    \u003C\u002Fp\u003E\r\n    \r\n    \u003Cp style=\"font-size: 1.1rem; color: #333; margin-bottom: 45px;\"\u003E\r\n        この後、\u003Cstrong\u003E3つの映像\u003C\u002Fstrong\u003Eを見ていただいた後、簡単な\u003Cstrong\u003E記憶テスト\u003C\u002Fstrong\u003Eを行います。\r\n    \u003C\u002Fp\u003E\r\n\r\n    \u003Cdiv style=\"background-color: #f8f9fa; padding: 25px; border-radius: 6px; border-left: 5px solid #2c3e50; margin-bottom: 45px;\"\u003E\r\n        \u003Cp style=\"font-size: 1.1rem; margin-top: 0; margin-bottom: 10px; font-weight: bold; color: #2c3e50;\"\u003E\r\n            【重要】実験を始める前に\r\n        \u003C\u002Fp\u003E\r\n        \u003Cp style=\"font-size: 1.05rem; margin: 0; color: #555;\"\u003E\r\n            次のページでは、まず、実験参加への\u003Cstrong\u003E同意\u003C\u002Fstrong\u003Eをいただきます。\r\n        \u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003Cp style=\"font-size: 1.1rem; text-align: center; font-weight: bold; color: #2c3e50; margin-top: 50px; margin-bottom: 10px;\"\u003E\r\n        準備ができましたら、画面下の「次へ」をクリックしてください。\r\n    \u003C\u002Fp\u003E\r\n    \r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
// 1. 参加者IDとグループ番号を一番最初に計算する
const digits = 10;
const participantID = this.random.range(10**digits, 10**(digits+1));
const id = Number(participantID);
const condition = (id % 3) + 1;

// 2. 実験全体で使えるパラメータとして保存
study.parameters.condition = condition;
study.parameters.participantID = participantID;

// 3. データファイル（CSV）にも記録する
study.options.datastore.set('condition', condition);
study.options.datastore.set('participantID', participantID);
}
      },
      "title": "Introduction"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "\u003Cspan style=\"font-size: 30px;\"\u003E\u003Cdiv style=\"text-align: center;\"\u003E実験参加への同意確認\u003C\u002Fdiv\u003E\u003C\u002Fspan\u003E",
          "content": "\u003Cb\u003E1. 目的\u003C\u002Fb\u003E\u003Cbr\u003Eこの実験は、映像についての記憶を調べるためのものです。\u003Cbr\u003E\n\u003Cb\u003E2. 所要時間\u003C\u002Fb\u003E\u003Cbr\u003Eこの実験はおおよそ10分かかります。\u003Cbr\u003E\n\u003Cb\u003E3. リスク\u003C\u002Fb\u003E\u003Cbr\u003E緊張したり、疲労を感じる可能性があります。\u003Cbr\u003E\n\u003Cb\u003E4. リスクへの対策\u003C\u002Fb\u003E\u003Cbr\u003E体調がわるくなった場合には、参加を取りやめてください。\u003Cbr\u003E\n\u003Cb\u003E5. 謝礼\u003C\u002Fb\u003E\u003Cbr\u003Eこの実験への参加に対する謝金の支払いはありません。\u003Cbr\u003E\n\u003Cb\u003E6. 個人情報\u003C\u002Fb\u003E\u003Cbr\u003Eこの実験では、個人を特定できる情報は一切収集しません。\u003Cbr\u003E\n\u003Cb\u003E7. データの利用\u003C\u002Fb\u003E\u003Cbr\u003Eこの実験で得られたデータは、学術的な目的にのみ利用します。\u003Cbr\u003E\n\u003Cb\u003E8. データの廃棄\u003C\u002Fb\u003E\u003Cbr\u003Eこの実験で得られたデータは、10年後に廃棄します。\u003Cbr\u003E\u003Chr style=\"border: none; border-top: 1px solid #cccccc; margin: 30px 0;\"\u003E"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "上記のすべてをご了解の上、実験参加にご同意いただけますか。\u003Cbr\u003E ご同意いただけない方は、ブラウザを閉じて終了してください。",
          "options": [
            {
              "label": "はい、同意します。",
              "coding": "agree"
            }
          ],
          "name": "consent"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "同意して実験を開始する →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "informedConsent"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 60vh; text-align: center;\"\u003E\r\n\r\n  \u003Ch2 style=\"font-size: 1.8rem; color: #2c3e50; margin-bottom: 20px;\"\u003E\r\n    それでは実験を開始します。\r\n  \u003C\u002Fh2\u003E\r\n\r\n  \u003Cp style=\"font-size: 1.2rem; color: #555; margin-bottom: 40px; line-height: 1.6;\"\u003E\r\n    次のページから、3つの映像が順番に表示されます。\u003Cbr\u003E\r\n    映像を見ていただいた後、\u003Cstrong\u003E記憶テスト\u003C\u002Fstrong\u003Eを行います。\u003Cbr\u003E\u003Cbr\u003E\r\n    \u003Cspan style=\"font-size: 1.1rem; color: #e74c3c; font-weight: bold;\"\u003E\r\n      ※音声付きの映像が流れますので、\u003Cbr\u003E\r\n      事前にイヤホンやスピーカーなどの視聴環境をご確認ください。\r\n    \u003C\u002Fspan\u003E\r\n  \u003C\u002Fp\u003E\r\n\r\n  \u003Cbutton id=\"transition-button\" type=\"button\" style=\"font-size: 1.2rem; font-weight: bold; padding: 15px 40px; border: none; border-radius: 30px; background-color: #3498db; color: white; cursor: pointer; box-shadow: 0 4px 10px rgba(52, 152, 219, 0.4); transition: all 0.3s ease;\"\u003E\r\n    映像の視聴を開始する →\r\n  \u003C\u002Fbutton\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
// 1. この画面（コンポーネント）を変数に格納する
const component = this;

// 2. ボタンをIDで取得する
const transitionButton = document.getElementById("transition-button");

if (transitionButton) {
    // 3. ボタンがクリックされたら、この画面を終了して次へ進む
    transitionButton.addEventListener("click", () => {
        component.end();
    });
}
}
      },
      "title": "Show_Introduction"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Set1_Group1",
      "skip": "${ parameters.condition != 1 }",
      "content": [
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 指定の秒数をカウントダウンする。
const display = document.getElementById("simple-timer");
let count = 3;  //指定の秒数

const intervalId = setInterval(() => {
    count--;

    if (count >= 0 && display) {
        display.textContent = count; // ここで数字だけが書き換わります
    }

    if (count <= 0) {
        clearInterval(intervalId);
        // 【追加】0になったら自動で次（映像）へ進む！
        this.end(); 
    }
}, 1000);
}
          },
          "title": "Countdown",
          "content": "\u003Cdiv class=\"countdown-container\"\u003E\r\n    \u003Cdiv class=\"number\"\u003E\r\n        \u003Cspan id=\"simple-timer\"\u003E3\u003C\u002Fspan\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 1. 今の画面（this）を避難させる
window.currentScreen = this;

// 2. ビデオとボタンをIDで取得する
const video = document.getElementById("video-player");
const nextButton = document.getElementById("next-button");

if (video && nextButton) {
    // 3. 動画の再生が「終了」した瞬間を監視
    video.addEventListener("ended", () => {
        
        // 💡 ボタンのデザインと文字を「押せる状態」に変化させる
        nextButton.disabled = false;
        nextButton.textContent = "記憶テストに進む →";
        
        // 色を鮮やかな青に変更し、カーソルを指マークにする
        nextButton.style.backgroundColor = "#3498db"; 
        nextButton.style.color = "white";
        nextButton.style.cursor = "pointer";
        nextButton.style.boxShadow = "0 4px 10px rgba(52, 152, 219, 0.4)";
    });

    // 4. 押せるようになったボタンをクリックした時の処理
    nextButton.addEventListener("click", () => {
        // 次の画面（記憶テスト）へ進む
        if (window.currentScreen && typeof window.currentScreen.end === "function") {
            window.currentScreen.end();
        }
    });
}
}
          },
          "title": "Video_A",
          "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; text-align: center; padding-top: 20px;\"\u003E\r\n\r\n  \u003C!-- 案内文 --\u003E\r\n  \u003Cp style=\"font-size: 1.2rem; font-weight: bold; color: #2c3e50; margin-bottom: 20px;\"\u003E\r\n    再生ボタン（▶）を押して、映像を最後までご視聴ください。\r\n  \u003C\u002Fp\u003E\r\n\r\n  \u003C!-- ビデオプレイヤー（角丸と影をつけてスタイリッシュに） --\u003E\r\n  \u003Cvideo id=\"video-player\" controls playsinline style=\"max-width: 100%; max-height: 65vh; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);\"\u003E\r\n    \u003C!-- 💡 下の src=\"\" の中に、映像のURLを入れてください --\u003E\r\n    \u003Csource src=\"https:\u002F\u002Fyuuuuuuuuuuuuuuuuuuki.github.io\u002Fmission3\u002Fmission3.mp4\" type=\"video\u002Fmp4\"\u003E\r\n    お使いのブラウザは動画再生に対応していません。\r\n  \u003C\u002Fvideo\u003E\r\n\r\n  \u003C!-- 次へ進むボタン（最初はグレーで押せない状態） --\u003E\r\n  \u003Cbutton id=\"next-button\" type=\"button\" disabled style=\"margin-top: 35px; font-size: 1.2rem; font-weight: bold; padding: 15px 40px; border: none; border-radius: 30px; background-color: #cccccc; color: #666666; cursor: not-allowed; transition: all 0.3s ease;\"\u003E\r\n    映像の終了までお待ちください...\r\n  \u003C\u002Fbutton\u003E\r\n\r\n\u003C\u002Fdiv\u003E"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "q_text": "第１問\u003Cbr\u003E主演はトム・クルーズである",
              "answer": "yes"
            },
            {
              "q_text": "第２問\u003Cbr\u003Eこの映画は12月に公開される",
              "answer": "no"
            },
            {
              "q_text": "第３問\u003Cbr\u003E車やヘリコプター、飛行機といった乗り物が登場するシーンがある。",
              "answer": "yes"
            },
            {
              "q_text": "第４問\u003Cbr\u003Eエッフェル塔が映るシーンがある",
              "answer": "yes"
            },
            {
              "q_text": "第５問\u003Cbr\u003E「FBIのミッション」という言葉が出てくる",
              "answer": "no"
            }
          ],
          "sample": {
            "mode": "sequential"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Quiz_Loop_A",
          "indexParameter": "question_order",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Quiz_Sequence",
            "content": [
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 250px;\"\u003E\r\n \u003Ch3 style=\"font-size: 2.0rem; margin-bottom: 35px; text-align: center;\"\u003E\r\n   ${parameters.q_text}\r\n \u003C\u002Fh3\u003E\r\n\r\n \u003Cdiv id=\"choice-area\" style=\"display: flex; justify-content: center; gap: 120px; margin-bottom: 40px;\"\u003E\r\n  \r\n   \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 2rem;\"\u003E\r\n     \u003Cspan style=\"margin-bottom: 5px;\"\u003E⭕️\u003C\u002Fspan\u003E\r\n     \u003Cinput type=\"radio\" name=\"response\" value=\"yes\" style=\"transform: scale(1.5);\"\u003E\r\n   \u003C\u002Flabel\u003E\r\n\r\n   \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 2rem;\"\u003E\r\n     \u003Cspan style=\"margin-bottom: 5px;\"\u003E❌️\u003C\u002Fspan\u003E\r\n     \u003Cinput type=\"radio\" name=\"response\" value=\"no\" style=\"transform: scale(1.5);\"\u003E\r\n   \u003C\u002Flabel\u003E\r\n\r\n \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// ==========================================
// 1. 変数と要素の定義
// ==========================================
const choiceArea = document.getElementById('choice-area');
const radios = choiceArea.querySelectorAll('input[type="radio"]');

// ==========================================
// 2. 選択肢（⭕️/❌️）がクリックされた時の処理（正解判定）
// ==========================================
radios.forEach(radio => {
  radio.addEventListener('click', (event) => {

    // ユーザーの回答を取得して記録
    const userAnswer = event.target.value;
    this.data.response = userAnswer;

    // 正解（answerパラメータ）と照らし合わせて記録
    const correctAnswer = this.parameters.answer;
    this.data.correct = (userAnswer === correctAnswer);

    // 選択されたことが視覚的にわかるよう、ほんの少し（0.15秒）待ってから進む
    setTimeout(() => {
      this.end();
    }, 150);
  });
});
}
                },
                "title": "Quiz",
                "correctResponse": "${parameters.answer}"
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text"
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class=\"feedback-container\" style=\"text-align: center; margin-top: 50px;\"\u003E\r\n  \r\n  \u003Cdiv id=\"feedback-correct\" style=\"display: none;\"\u003E\r\n    \u003Ch1 style=\"color: #2ecc71; font-size: 2rem;\"\u003E正解！\u003C\u002Fh1\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv id=\"feedback-incorrect\" style=\"display: none;\"\u003E\r\n    \u003Ch1 style=\"color: #e74c3c; font-size: 2rem;\"\u003E不正解\u003C\u002Fh1\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E\r\n",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// ==========================================
// 1. 直前の画面の正誤判定を取得
// ==========================================
// lab.jsが保存した一番最後の試行データ（正誤）を確認します
const isCorrect = this.state.correct;

const correctArea = document.getElementById('feedback-correct');
const incorrectArea = document.getElementById('feedback-incorrect');

// ==========================================
// 2. 判定に合わせて画面の表示を切り替え
// ==========================================
if (isCorrect === true) {
  correctArea.style.display = 'block';   // 正解を表示
} else {
  incorrectArea.style.display = 'block'; // 不正解（または時間切れ）を表示
}

// ==========================================
// 3. 2秒後に自動で次の画面（次の問題）へ進む
// ==========================================
setTimeout(() => {
  this.end();
}, 500); // 2000ミリ秒 = 2秒（長さを変えたい場合はここを調整してください）

}
                },
                "title": "Feedback"
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text"
            },
            {
              "required": true,
              "type": "radio",
              "label": "この映像は映画の予告編でした。\u003Cbr\u003E実際にこの映画の本編を視聴したことがありますか？",
              "options": [
                {
                  "label": "はい"
                },
                {
                  "label": "いいえ"
                }
              ],
              "name": "lessbrgreater"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 選択肢（ラジオボタン）が選ばれたら、0.3秒後に自動で次へ進む
const options = document.querySelectorAll('input[type="radio"]');

options.forEach(option => {
    option.addEventListener('change', () => {
        // 選んだことが視覚的に分かるように、ほんの少し（300ミリ秒）だけ待ってから進む
        setTimeout(() => {
            this.end();
        }, 300);
    });
});
}
          },
          "title": "Seen_A"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 1. 今の画面を避難させる
window.currentScreen = this;

// 2. ボタンをIDで取得する
const transitionButton = document.getElementById("transition-button");

if (transitionButton) {
    // 3. ボタンがクリックされたら次の画面（映像）へ進む
    transitionButton.addEventListener("click", () => {
        if (window.currentScreen && typeof window.currentScreen.end === "function") {
            window.currentScreen.end();
        }
    });
}
}
          },
          "title": "Transition",
          "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 60vh; text-align: center;\"\u003E\r\n\r\n  \u003Ch2 style=\"font-size: 1.8rem; color: #2c3e50; margin-bottom: 20px;\"\u003E\r\n    記憶テスト、お疲れ様でした。\r\n  \u003C\u002Fh2\u003E\r\n\r\n  \u003Cp style=\"font-size: 1.2rem; color: #555; margin-bottom: 40px; line-height: 1.6;\"\u003E\r\n    続いて、次の映像に進みます。\u003Cbr\u003E\r\n    準備ができましたら、下のボタンを押してください。\r\n  \u003C\u002Fp\u003E\r\n\r\n  \u003Cbutton id=\"transition-button\" type=\"button\" style=\"font-size: 1.2rem; font-weight: bold; padding: 15px 40px; border: none; border-radius: 30px; background-color: #3498db; color: white; cursor: pointer; box-shadow: 0 4px 10px rgba(52, 152, 219, 0.4); transition: all 0.3s ease;\"\u003E\r\n    次の映像へ進む →\r\n  \u003C\u002Fbutton\u003E\r\n\r\n\u003C\u002Fdiv\u003E"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 1. 今の画面（this）を避難させる
window.currentScreen = this;

// 2. ビデオとボタンをIDで取得する
const video = document.getElementById("video-player");
const nextButton = document.getElementById("next-button");

if (video && nextButton) {
    // 3. 動画の再生が「終了」した瞬間を監視
    video.addEventListener("ended", () => {
        
        // 💡 ボタンのデザインと文字を「押せる状態」に変化させる
        nextButton.disabled = false;
        nextButton.textContent = "記憶テストに進む →";
        
        // 色を鮮やかな青に変更し、カーソルを指マークにする
        nextButton.style.backgroundColor = "#3498db"; 
        nextButton.style.color = "white";
        nextButton.style.cursor = "pointer";
        nextButton.style.boxShadow = "0 4px 10px rgba(52, 152, 219, 0.4)";
    });

    // 4. 押せるようになったボタンをクリックした時の処理
    nextButton.addEventListener("click", () => {
        // 次の画面（記憶テスト）へ進む
        if (window.currentScreen && typeof window.currentScreen.end === "function") {
            window.currentScreen.end();
        }
    });
}
}
          },
          "title": "Video_B",
          "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; text-align: center; padding-top: 20px;\"\u003E\r\n\r\n  \u003C!-- 案内文 --\u003E\r\n  \u003Cp style=\"font-size: 1.2rem; font-weight: bold; color: #2c3e50; margin-bottom: 20px;\"\u003E\r\n    再生ボタン（▶）を押して、映像を最後までご視聴ください。\r\n  \u003C\u002Fp\u003E\r\n\r\n  \u003C!-- ビデオプレイヤー（角丸と影をつけてスタイリッシュに） --\u003E\r\n  \u003Cvideo id=\"video-player\" controls playsinline style=\"max-width: 100%; max-height: 65vh; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);\"\u003E\r\n    \u003C!-- 💡 下の src=\"\" の中に、映像のURLを入れてください --\u003E\r\n    \u003Csource src=\"https:\u002F\u002Fkamemushi10.github.io\u002Fpieceofcake2\u002Fpieceofcake(nomal).mp4\" type=\"video\u002Fmp4\"\u003E\r\n    お使いのブラウザは動画再生に対応していません。\r\n  \u003C\u002Fvideo\u003E\r\n\r\n  \u003C!-- 次へ進むボタン（最初はグレーで押せない状態） --\u003E\r\n  \u003Cbutton id=\"next-button\" type=\"button\" disabled style=\"margin-top: 35px; font-size: 1.2rem; font-weight: bold; padding: 15px 40px; border: none; border-radius: 30px; background-color: #cccccc; color: #666666; cursor: not-allowed; transition: all 0.3s ease;\"\u003E\r\n    映像の終了までお待ちください...\r\n  \u003C\u002Fbutton\u003E\r\n\r\n\u003C\u002Fdiv\u003E"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "q_text": "第１問\u003Cbr\u003Eこの映画のタイトルは『ピースオブケイク』である",
              "answer": "yes"
            },
            {
              "q_text": "第２問\u003Cbr\u003E登場人物が泣いているシーンがある",
              "answer": "yes"
            },
            {
              "q_text": "第３問\u003Cbr\u003E飛行機に乗っているシーンがある",
              "answer": "no"
            },
            {
              "q_text": "第４問\u003Cbr\u003E「風が吹いた」というワードが何度もでてくる",
              "answer": "yes"
            },
            {
              "q_text": "第５問\u003Cbr\u003E映像の中に、金髪の人物が登場する",
              "answer": "no"
            }
          ],
          "sample": {
            "mode": "sequential"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Quiz_Loop_B",
          "indexParameter": "question_order",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Quiz_Sequence",
            "content": [
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 250px;\"\u003E\r\n \u003Ch3 style=\"font-size: 2.0rem; margin-bottom: 35px; text-align: center;\"\u003E\r\n   ${parameters.q_text}\r\n \u003C\u002Fh3\u003E\r\n\r\n \u003Cdiv id=\"choice-area\" style=\"display: flex; justify-content: center; gap: 120px; margin-bottom: 40px;\"\u003E\r\n  \r\n   \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 2rem;\"\u003E\r\n     \u003Cspan style=\"margin-bottom: 5px;\"\u003E⭕️\u003C\u002Fspan\u003E\r\n     \u003Cinput type=\"radio\" name=\"response\" value=\"yes\" style=\"transform: scale(1.5);\"\u003E\r\n   \u003C\u002Flabel\u003E\r\n\r\n   \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 2rem;\"\u003E\r\n     \u003Cspan style=\"margin-bottom: 5px;\"\u003E❌️\u003C\u002Fspan\u003E\r\n     \u003Cinput type=\"radio\" name=\"response\" value=\"no\" style=\"transform: scale(1.5);\"\u003E\r\n   \u003C\u002Flabel\u003E\r\n\r\n \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// ==========================================
// 1. 変数と要素の定義
// ==========================================
const choiceArea = document.getElementById('choice-area');
const radios = choiceArea.querySelectorAll('input[type="radio"]');

// ==========================================
// 2. 選択肢（⭕️/❌️）がクリックされた時の処理（正解判定）
// ==========================================
radios.forEach(radio => {
  radio.addEventListener('click', (event) => {

    // ユーザーの回答を取得して記録
    const userAnswer = event.target.value;
    this.data.response = userAnswer;

    // 正解（answerパラメータ）と照らし合わせて記録
    const correctAnswer = this.parameters.answer;
    this.data.correct = (userAnswer === correctAnswer);

    // 選択されたことが視覚的にわかるよう、ほんの少し（0.15秒）待ってから進む
    setTimeout(() => {
      this.end();
    }, 150);
  });
});
}
                },
                "title": "Quiz",
                "correctResponse": "${parameters.answer}"
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text"
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class=\"feedback-container\" style=\"text-align: center; margin-top: 50px;\"\u003E\r\n  \r\n  \u003Cdiv id=\"feedback-correct\" style=\"display: none;\"\u003E\r\n    \u003Ch1 style=\"color: #2ecc71; font-size: 2rem;\"\u003E正解！\u003C\u002Fh1\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv id=\"feedback-incorrect\" style=\"display: none;\"\u003E\r\n    \u003Ch1 style=\"color: #e74c3c; font-size: 2rem;\"\u003E不正解\u003C\u002Fh1\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E\r\n",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// ==========================================
// 1. 直前の画面の正誤判定を取得
// ==========================================
// lab.jsが保存した一番最後の試行データ（正誤）を確認します
const isCorrect = this.state.correct;

const correctArea = document.getElementById('feedback-correct');
const incorrectArea = document.getElementById('feedback-incorrect');

// ==========================================
// 2. 判定に合わせて画面の表示を切り替え
// ==========================================
if (isCorrect === true) {
  correctArea.style.display = 'block';   // 正解を表示
} else {
  incorrectArea.style.display = 'block'; // 不正解（または時間切れ）を表示
}

// ==========================================
// 3. 2秒後に自動で次の画面（次の問題）へ進む
// ==========================================
setTimeout(() => {
  this.end();
}, 500); // 2000ミリ秒 = 2秒（長さを変えたい場合はここを調整してください）

}
                },
                "title": "Feedback"
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text"
            },
            {
              "required": true,
              "type": "radio",
              "label": "この映像は映画の予告編でした。\u003Cbr\u003E実際にこの映画の本編を視聴したことがありますか？",
              "options": [
                {
                  "label": "はい"
                },
                {
                  "label": "いいえ"
                }
              ],
              "name": "lessbrgreater"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 選択肢（ラジオボタン）が選ばれたら、0.3秒後に自動で次へ進む
const options = document.querySelectorAll('input[type="radio"]');

options.forEach(option => {
    option.addEventListener('change', () => {
        // 選んだことが視覚的に分かるように、ほんの少し（300ミリ秒）だけ待ってから進む
        setTimeout(() => {
            this.end();
        }, 300);
    });
});
}
          },
          "title": "Seen_B"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 1. 今の画面を避難させる
window.currentScreen = this;

// 2. ボタンをIDで取得する
const transitionButton = document.getElementById("transition-button");

if (transitionButton) {
    // 3. ボタンがクリックされたら次の画面（映像）へ進む
    transitionButton.addEventListener("click", () => {
        if (window.currentScreen && typeof window.currentScreen.end === "function") {
            window.currentScreen.end();
        }
    });
}
}
          },
          "title": "Transition",
          "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 60vh; text-align: center;\"\u003E\r\n\r\n  \u003Ch2 style=\"font-size: 1.8rem; color: #2c3e50; margin-bottom: 20px;\"\u003E\r\n    記憶テスト、お疲れ様でした。\r\n  \u003C\u002Fh2\u003E\r\n\r\n  \u003Cp style=\"font-size: 1.2rem; color: #555; margin-bottom: 40px; line-height: 1.6;\"\u003E\r\n    続いて、次の映像に進みます。\u003Cbr\u003E\r\n    準備ができましたら、下のボタンを押してください。\r\n  \u003C\u002Fp\u003E\r\n\r\n  \u003Cbutton id=\"transition-button\" type=\"button\" style=\"font-size: 1.2rem; font-weight: bold; padding: 15px 40px; border: none; border-radius: 30px; background-color: #3498db; color: white; cursor: pointer; box-shadow: 0 4px 10px rgba(52, 152, 219, 0.4); transition: all 0.3s ease;\"\u003E\r\n    次の映像へ進む →\r\n  \u003C\u002Fbutton\u003E\r\n\r\n\u003C\u002Fdiv\u003E"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 1. 今の画面（this）を避難させる
window.currentScreen = this;

// 2. ビデオとボタンをIDで取得する
const video = document.getElementById("video-player");
const nextButton = document.getElementById("next-button");

if (video && nextButton) {
    // 3. 動画の再生が「終了」した瞬間を監視
    video.addEventListener("ended", () => {
        
        // 💡 ボタンのデザインと文字を「押せる状態」に変化させる
        nextButton.disabled = false;
        nextButton.textContent = "記憶テストに進む →";
        
        // 色を鮮やかな青に変更し、カーソルを指マークにする
        nextButton.style.backgroundColor = "#3498db"; 
        nextButton.style.color = "white";
        nextButton.style.cursor = "pointer";
        nextButton.style.boxShadow = "0 4px 10px rgba(52, 152, 219, 0.4)";
    });

    // 4. 押せるようになったボタンをクリックした時の処理
    nextButton.addEventListener("click", () => {
        // 次の画面（記憶テスト）へ進む
        if (window.currentScreen && typeof window.currentScreen.end === "function") {
            window.currentScreen.end();
        }
    });
}
}
          },
          "title": "Video_C",
          "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; text-align: center; padding-top: 20px;\"\u003E\r\n\r\n  \u003C!-- 案内文 --\u003E\r\n  \u003Cp style=\"font-size: 1.2rem; font-weight: bold; color: #2c3e50; margin-bottom: 20px;\"\u003E\r\n    再生ボタン（▶）を押して、映像を最後までご視聴ください。\r\n  \u003C\u002Fp\u003E\r\n\r\n  \u003C!-- ビデオプレイヤー（角丸と影をつけてスタイリッシュに） --\u003E\r\n  \u003Cvideo id=\"video-player\" controls playsinline style=\"max-width: 100%; max-height: 65vh; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);\"\u003E\r\n    \u003C!-- 💡 下の src=\"\" の中に、映像のURLを入れてください --\u003E\r\n    \u003Csource src=\"https:\u002F\u002Fizemi-web.github.io\u002FKageki-nothingdayo\u002Fkageki-nothing.MOV\" type=\"video\u002Fmp4\"\u003E\r\n    お使いのブラウザは動画再生に対応していません。\r\n  \u003C\u002Fvideo\u003E\r\n\r\n  \u003C!-- 次へ進むボタン（最初はグレーで押せない状態） --\u003E\r\n  \u003Cbutton id=\"next-button\" type=\"button\" disabled style=\"margin-top: 35px; font-size: 1.2rem; font-weight: bold; padding: 15px 40px; border: none; border-radius: 30px; background-color: #cccccc; color: #666666; cursor: not-allowed; transition: all 0.3s ease;\"\u003E\r\n    映像の終了までお待ちください...\r\n  \u003C\u002Fbutton\u003E\r\n\r\n\u003C\u002Fdiv\u003E"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "q_text": "第１問\u003Cbr\u003E映画の題名は『キャラクター』である",
              "answer": "yes"
            },
            {
              "q_text": "第２問\u003Cbr\u003E漫画家が登場する",
              "answer": "yes"
            },
            {
              "q_text": "第３問\u003Cbr\u003Eこれはロマンス映画である",
              "answer": "no"
            },
            {
              "q_text": "第４問\u003Cbr\u003E銃（ピストル）を撃つシーンがある",
              "answer": "no"
            },
            {
              "q_text": "第５問\u003Cbr\u003Eスポーツをしているシーンがある",
              "answer": "no"
            }
          ],
          "sample": {
            "mode": "sequential"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Quiz_Loop_C",
          "indexParameter": "question_order",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Quiz_Sequence",
            "content": [
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 250px;\"\u003E\r\n \u003Ch3 style=\"font-size: 2.0rem; margin-bottom: 35px; text-align: center;\"\u003E\r\n   ${parameters.q_text}\r\n \u003C\u002Fh3\u003E\r\n\r\n \u003Cdiv id=\"choice-area\" style=\"display: flex; justify-content: center; gap: 120px; margin-bottom: 40px;\"\u003E\r\n  \r\n   \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 2rem;\"\u003E\r\n     \u003Cspan style=\"margin-bottom: 5px;\"\u003E⭕️\u003C\u002Fspan\u003E\r\n     \u003Cinput type=\"radio\" name=\"response\" value=\"yes\" style=\"transform: scale(1.5);\"\u003E\r\n   \u003C\u002Flabel\u003E\r\n\r\n   \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 2rem;\"\u003E\r\n     \u003Cspan style=\"margin-bottom: 5px;\"\u003E❌️\u003C\u002Fspan\u003E\r\n     \u003Cinput type=\"radio\" name=\"response\" value=\"no\" style=\"transform: scale(1.5);\"\u003E\r\n   \u003C\u002Flabel\u003E\r\n\r\n \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// ==========================================
// 1. 変数と要素の定義
// ==========================================
const choiceArea = document.getElementById('choice-area');
const radios = choiceArea.querySelectorAll('input[type="radio"]');

// ==========================================
// 2. 選択肢（⭕️/❌️）がクリックされた時の処理（正解判定）
// ==========================================
radios.forEach(radio => {
  radio.addEventListener('click', (event) => {

    // ユーザーの回答を取得して記録
    const userAnswer = event.target.value;
    this.data.response = userAnswer;

    // 正解（answerパラメータ）と照らし合わせて記録
    const correctAnswer = this.parameters.answer;
    this.data.correct = (userAnswer === correctAnswer);

    // 選択されたことが視覚的にわかるよう、ほんの少し（0.15秒）待ってから進む
    setTimeout(() => {
      this.end();
    }, 150);
  });
});
}
                },
                "title": "Quiz",
                "correctResponse": "${parameters.answer}"
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text"
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class=\"feedback-container\" style=\"text-align: center; margin-top: 50px;\"\u003E\r\n  \r\n  \u003Cdiv id=\"feedback-correct\" style=\"display: none;\"\u003E\r\n    \u003Ch1 style=\"color: #2ecc71; font-size: 2rem;\"\u003E正解！\u003C\u002Fh1\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv id=\"feedback-incorrect\" style=\"display: none;\"\u003E\r\n    \u003Ch1 style=\"color: #e74c3c; font-size: 2rem;\"\u003E不正解\u003C\u002Fh1\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E\r\n",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// ==========================================
// 1. 直前の画面の正誤判定を取得
// ==========================================
// lab.jsが保存した一番最後の試行データ（正誤）を確認します
const isCorrect = this.state.correct;

const correctArea = document.getElementById('feedback-correct');
const incorrectArea = document.getElementById('feedback-incorrect');

// ==========================================
// 2. 判定に合わせて画面の表示を切り替え
// ==========================================
if (isCorrect === true) {
  correctArea.style.display = 'block';   // 正解を表示
} else {
  incorrectArea.style.display = 'block'; // 不正解（または時間切れ）を表示
}

// ==========================================
// 3. 2秒後に自動で次の画面（次の問題）へ進む
// ==========================================
setTimeout(() => {
  this.end();
}, 500); // 2000ミリ秒 = 2秒（長さを変えたい場合はここを調整してください）

}
                },
                "title": "Feedback"
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text"
            },
            {
              "required": true,
              "type": "radio",
              "label": "この映像は映画の予告編でした。\u003Cbr\u003E実際にこの映画の本編を視聴したことがありますか？",
              "options": [
                {
                  "label": "はい"
                },
                {
                  "label": "いいえ"
                }
              ],
              "name": "lessbrgreater"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 選択肢（ラジオボタン）が選ばれたら、0.3秒後に自動で次へ進む
const options = document.querySelectorAll('input[type="radio"]');

options.forEach(option => {
    option.addEventListener('change', () => {
        // 選んだことが視覚的に分かるように、ほんの少し（300ミリ秒）だけ待ってから進む
        setTimeout(() => {
            this.end();
        }, 300);
    });
});
}
          },
          "title": "Seen_C"
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Set2_Group2",
      "skip": "${ parameters.condition != 2 }",
      "content": [
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 指定の秒数をカウントダウンする。
const display = document.getElementById("simple-timer");
let count = 3;  //指定の秒数

const intervalId = setInterval(() => {
    count--;

    if (count >= 0 && display) {
        display.textContent = count; // ここで数字だけが書き換わります
    }

    if (count <= 0) {
        clearInterval(intervalId);
        // 【追加】0になったら自動で次（映像）へ進む！
        this.end(); 
    }
}, 1000);
}
          },
          "title": "Countdown",
          "content": "\u003Cdiv class=\"countdown-container\"\u003E\r\n    \u003Cdiv class=\"number\"\u003E\r\n        \u003Cspan id=\"simple-timer\"\u003E3\u003C\u002Fspan\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 1. 今の画面（this）を避難させる
window.currentScreen = this;

// 2. ビデオとボタンをIDで取得する
const video = document.getElementById("video-player");
const nextButton = document.getElementById("next-button");

if (video && nextButton) {
    // 3. 動画の再生が「終了」した瞬間を監視
    video.addEventListener("ended", () => {
        
        // 💡 ボタンのデザインと文字を「押せる状態」に変化させる
        nextButton.disabled = false;
        nextButton.textContent = "記憶テストに進む →";
        
        // 色を鮮やかな青に変更し、カーソルを指マークにする
        nextButton.style.backgroundColor = "#3498db"; 
        nextButton.style.color = "white";
        nextButton.style.cursor = "pointer";
        nextButton.style.boxShadow = "0 4px 10px rgba(52, 152, 219, 0.4)";
    });

    // 4. 押せるようになったボタンをクリックした時の処理
    nextButton.addEventListener("click", () => {
        // 次の画面（記憶テスト）へ進む
        if (window.currentScreen && typeof window.currentScreen.end === "function") {
            window.currentScreen.end();
        }
    });
}
}
          },
          "title": "Video_A'",
          "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; text-align: center; padding-top: 20px;\"\u003E\r\n\r\n  \u003C!-- 案内文 --\u003E\r\n  \u003Cp style=\"font-size: 1.2rem; font-weight: bold; color: #2c3e50; margin-bottom: 20px;\"\u003E\r\n    再生ボタン（▶）を押して、映像を最後までご視聴ください。\r\n  \u003C\u002Fp\u003E\r\n\r\n  \u003C!-- ビデオプレイヤー（角丸と影をつけてスタイリッシュに） --\u003E\r\n  \u003Cvideo id=\"video-player\" controls playsinline style=\"max-width: 100%; max-height: 65vh; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);\"\u003E\r\n    \u003C!-- 💡 下の src=\"\" の中に、映像のURLを入れてください --\u003E\r\n    \u003Csource src=\"https:\u002F\u002Fyuuuuuuuuuuuuuuuuuuki.github.io\u002Fmission2\u002Fmission2.mp4\" type=\"video\u002Fmp4\"\u003E\r\n    お使いのブラウザは動画再生に対応していません。\r\n  \u003C\u002Fvideo\u003E\r\n\r\n  \u003C!-- 次へ進むボタン（最初はグレーで押せない状態） --\u003E\r\n  \u003Cbutton id=\"next-button\" type=\"button\" disabled style=\"margin-top: 35px; font-size: 1.2rem; font-weight: bold; padding: 15px 40px; border: none; border-radius: 30px; background-color: #cccccc; color: #666666; cursor: not-allowed; transition: all 0.3s ease;\"\u003E\r\n    映像の終了までお待ちください...\r\n  \u003C\u002Fbutton\u003E\r\n\r\n\u003C\u002Fdiv\u003E"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "q_text": "第１問\u003Cbr\u003E主演はトム・クルーズである",
              "answer": "yes"
            },
            {
              "q_text": "第２問\u003Cbr\u003Eこの映画は12月に公開される",
              "answer": "no"
            },
            {
              "q_text": "第３問\u003Cbr\u003E車やヘリコプター、飛行機といった乗り物が登場するシーンがある。",
              "answer": "yes"
            },
            {
              "q_text": "第４問\u003Cbr\u003Eエッフェル塔が映るシーンがある",
              "answer": "yes"
            },
            {
              "q_text": "第５問\u003Cbr\u003E「FBIのミッション」という言葉が出てくる",
              "answer": "no"
            }
          ],
          "sample": {
            "mode": "sequential"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Quiz_Loop_A",
          "indexParameter": "question_order",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Quiz_Sequence",
            "content": [
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 250px;\"\u003E\r\n \u003Ch3 style=\"font-size: 2.0rem; margin-bottom: 35px; text-align: center;\"\u003E\r\n   ${parameters.q_text}\r\n \u003C\u002Fh3\u003E\r\n\r\n \u003Cdiv id=\"choice-area\" style=\"display: flex; justify-content: center; gap: 120px; margin-bottom: 40px;\"\u003E\r\n  \r\n   \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 2rem;\"\u003E\r\n     \u003Cspan style=\"margin-bottom: 5px;\"\u003E⭕️\u003C\u002Fspan\u003E\r\n     \u003Cinput type=\"radio\" name=\"response\" value=\"yes\" style=\"transform: scale(1.5);\"\u003E\r\n   \u003C\u002Flabel\u003E\r\n\r\n   \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 2rem;\"\u003E\r\n     \u003Cspan style=\"margin-bottom: 5px;\"\u003E❌️\u003C\u002Fspan\u003E\r\n     \u003Cinput type=\"radio\" name=\"response\" value=\"no\" style=\"transform: scale(1.5);\"\u003E\r\n   \u003C\u002Flabel\u003E\r\n\r\n \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// ==========================================
// 1. 変数と要素の定義
// ==========================================
const choiceArea = document.getElementById('choice-area');
const radios = choiceArea.querySelectorAll('input[type="radio"]');

// ==========================================
// 2. 選択肢（⭕️/❌️）がクリックされた時の処理（正解判定）
// ==========================================
radios.forEach(radio => {
  radio.addEventListener('click', (event) => {

    // ユーザーの回答を取得して記録
    const userAnswer = event.target.value;
    this.data.response = userAnswer;

    // 正解（answerパラメータ）と照らし合わせて記録
    const correctAnswer = this.parameters.answer;
    this.data.correct = (userAnswer === correctAnswer);

    // 選択されたことが視覚的にわかるよう、ほんの少し（0.15秒）待ってから進む
    setTimeout(() => {
      this.end();
    }, 150);
  });
});
}
                },
                "title": "Quiz",
                "correctResponse": "${parameters.answer}"
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text"
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class=\"feedback-container\" style=\"text-align: center; margin-top: 50px;\"\u003E\r\n  \r\n  \u003Cdiv id=\"feedback-correct\" style=\"display: none;\"\u003E\r\n    \u003Ch1 style=\"color: #2ecc71; font-size: 2rem;\"\u003E正解！\u003C\u002Fh1\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv id=\"feedback-incorrect\" style=\"display: none;\"\u003E\r\n    \u003Ch1 style=\"color: #e74c3c; font-size: 2rem;\"\u003E不正解\u003C\u002Fh1\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E\r\n",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// ==========================================
// 1. 直前の画面の正誤判定を取得
// ==========================================
// lab.jsが保存した一番最後の試行データ（正誤）を確認します
const isCorrect = this.state.correct;

const correctArea = document.getElementById('feedback-correct');
const incorrectArea = document.getElementById('feedback-incorrect');

// ==========================================
// 2. 判定に合わせて画面の表示を切り替え
// ==========================================
if (isCorrect === true) {
  correctArea.style.display = 'block';   // 正解を表示
} else {
  incorrectArea.style.display = 'block'; // 不正解（または時間切れ）を表示
}

// ==========================================
// 3. 2秒後に自動で次の画面（次の問題）へ進む
// ==========================================
setTimeout(() => {
  this.end();
}, 500); // 2000ミリ秒 = 2秒（長さを変えたい場合はここを調整してください）

}
                },
                "title": "Feedback"
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text"
            },
            {
              "required": true,
              "type": "radio",
              "label": "この映像は映画の予告編でした。\u003Cbr\u003E実際にこの映画の本編を視聴したことがありますか？",
              "options": [
                {
                  "label": "はい"
                },
                {
                  "label": "いいえ"
                }
              ],
              "name": "lessbrgreater"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 選択肢（ラジオボタン）が選ばれたら、0.3秒後に自動で次へ進む
const options = document.querySelectorAll('input[type="radio"]');

options.forEach(option => {
    option.addEventListener('change', () => {
        // 選んだことが視覚的に分かるように、ほんの少し（300ミリ秒）だけ待ってから進む
        setTimeout(() => {
            this.end();
        }, 300);
    });
});
}
          },
          "title": "Seen_A"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 1. 今の画面を避難させる
window.currentScreen = this;

// 2. ボタンをIDで取得する
const transitionButton = document.getElementById("transition-button");

if (transitionButton) {
    // 3. ボタンがクリックされたら次の画面（映像）へ進む
    transitionButton.addEventListener("click", () => {
        if (window.currentScreen && typeof window.currentScreen.end === "function") {
            window.currentScreen.end();
        }
    });
}
}
          },
          "title": "Transition",
          "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 60vh; text-align: center;\"\u003E\r\n\r\n  \u003Ch2 style=\"font-size: 1.8rem; color: #2c3e50; margin-bottom: 20px;\"\u003E\r\n    記憶テスト、お疲れ様でした。\r\n  \u003C\u002Fh2\u003E\r\n\r\n  \u003Cp style=\"font-size: 1.2rem; color: #555; margin-bottom: 40px; line-height: 1.6;\"\u003E\r\n    続いて、次の映像に進みます。\u003Cbr\u003E\r\n    準備ができましたら、下のボタンを押してください。\r\n  \u003C\u002Fp\u003E\r\n\r\n  \u003Cbutton id=\"transition-button\" type=\"button\" style=\"font-size: 1.2rem; font-weight: bold; padding: 15px 40px; border: none; border-radius: 30px; background-color: #3498db; color: white; cursor: pointer; box-shadow: 0 4px 10px rgba(52, 152, 219, 0.4); transition: all 0.3s ease;\"\u003E\r\n    次の映像へ進む →\r\n  \u003C\u002Fbutton\u003E\r\n\r\n\u003C\u002Fdiv\u003E"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 1. 今の画面（this）を避難させる
window.currentScreen = this;

// 2. ビデオとボタンをIDで取得する
const video = document.getElementById("video-player");
const nextButton = document.getElementById("next-button");

if (video && nextButton) {
    // 3. 動画の再生が「終了」した瞬間を監視
    video.addEventListener("ended", () => {
        
        // 💡 ボタンのデザインと文字を「押せる状態」に変化させる
        nextButton.disabled = false;
        nextButton.textContent = "記憶テストに進む →";
        
        // 色を鮮やかな青に変更し、カーソルを指マークにする
        nextButton.style.backgroundColor = "#3498db"; 
        nextButton.style.color = "white";
        nextButton.style.cursor = "pointer";
        nextButton.style.boxShadow = "0 4px 10px rgba(52, 152, 219, 0.4)";
    });

    // 4. 押せるようになったボタンをクリックした時の処理
    nextButton.addEventListener("click", () => {
        // 次の画面（記憶テスト）へ進む
        if (window.currentScreen && typeof window.currentScreen.end === "function") {
            window.currentScreen.end();
        }
    });
}
}
          },
          "title": "Video_B'",
          "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; text-align: center; padding-top: 20px;\"\u003E\r\n\r\n  \u003C!-- 案内文 --\u003E\r\n  \u003Cp style=\"font-size: 1.2rem; font-weight: bold; color: #2c3e50; margin-bottom: 20px;\"\u003E\r\n    再生ボタン（▶）を押して、映像を最後までご視聴ください。\r\n  \u003C\u002Fp\u003E\r\n\r\n  \u003C!-- ビデオプレイヤー（角丸と影をつけてスタイリッシュに） --\u003E\r\n  \u003Cvideo id=\"video-player\" controls playsinline style=\"max-width: 100%; max-height: 65vh; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);\"\u003E\r\n    \u003C!-- 💡 下の src=\"\" の中に、映像のURLを入れてください --\u003E\r\n    \u003Csource src=\"https:\u002F\u002Fkamemushi10.github.io\u002Fpieceofcake3\u002Fpieceofccake.mp4\" type=\"video\u002Fmp4\"\u003E\r\n    お使いのブラウザは動画再生に対応していません。\r\n  \u003C\u002Fvideo\u003E\r\n\r\n  \u003C!-- 次へ進むボタン（最初はグレーで押せない状態） --\u003E\r\n  \u003Cbutton id=\"next-button\" type=\"button\" disabled style=\"margin-top: 35px; font-size: 1.2rem; font-weight: bold; padding: 15px 40px; border: none; border-radius: 30px; background-color: #cccccc; color: #666666; cursor: not-allowed; transition: all 0.3s ease;\"\u003E\r\n    映像の終了までお待ちください...\r\n  \u003C\u002Fbutton\u003E\r\n\r\n\u003C\u002Fdiv\u003E"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "q_text": "第１問\u003Cbr\u003Eこの映画のタイトルは『ピースオブケイク』である",
              "answer": "yes"
            },
            {
              "q_text": "第２問\u003Cbr\u003E登場人物が泣いているシーンがある",
              "answer": "yes"
            },
            {
              "q_text": "第３問\u003Cbr\u003E飛行機に乗っているシーンがある",
              "answer": "no"
            },
            {
              "q_text": "第４問\u003Cbr\u003E「風が吹いた」というワードが何度もでてくる",
              "answer": "yes"
            },
            {
              "q_text": "第５問\u003Cbr\u003E映像の中に、金髪の人物が登場する",
              "answer": "no"
            }
          ],
          "sample": {
            "mode": "sequential"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Quiz_Loop_B",
          "indexParameter": "question_order",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Quiz_Sequence",
            "content": [
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 250px;\"\u003E\r\n \u003Ch3 style=\"font-size: 2.0rem; margin-bottom: 35px; text-align: center;\"\u003E\r\n   ${parameters.q_text}\r\n \u003C\u002Fh3\u003E\r\n\r\n \u003Cdiv id=\"choice-area\" style=\"display: flex; justify-content: center; gap: 120px; margin-bottom: 40px;\"\u003E\r\n  \r\n   \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 2rem;\"\u003E\r\n     \u003Cspan style=\"margin-bottom: 5px;\"\u003E⭕️\u003C\u002Fspan\u003E\r\n     \u003Cinput type=\"radio\" name=\"response\" value=\"yes\" style=\"transform: scale(1.5);\"\u003E\r\n   \u003C\u002Flabel\u003E\r\n\r\n   \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 2rem;\"\u003E\r\n     \u003Cspan style=\"margin-bottom: 5px;\"\u003E❌️\u003C\u002Fspan\u003E\r\n     \u003Cinput type=\"radio\" name=\"response\" value=\"no\" style=\"transform: scale(1.5);\"\u003E\r\n   \u003C\u002Flabel\u003E\r\n\r\n \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// ==========================================
// 1. 変数と要素の定義
// ==========================================
const choiceArea = document.getElementById('choice-area');
const radios = choiceArea.querySelectorAll('input[type="radio"]');

// ==========================================
// 2. 選択肢（⭕️/❌️）がクリックされた時の処理（正解判定）
// ==========================================
radios.forEach(radio => {
  radio.addEventListener('click', (event) => {

    // ユーザーの回答を取得して記録
    const userAnswer = event.target.value;
    this.data.response = userAnswer;

    // 正解（answerパラメータ）と照らし合わせて記録
    const correctAnswer = this.parameters.answer;
    this.data.correct = (userAnswer === correctAnswer);

    // 選択されたことが視覚的にわかるよう、ほんの少し（0.15秒）待ってから進む
    setTimeout(() => {
      this.end();
    }, 150);
  });
});
}
                },
                "title": "Quiz",
                "correctResponse": "${parameters.answer}"
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text"
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class=\"feedback-container\" style=\"text-align: center; margin-top: 50px;\"\u003E\r\n  \r\n  \u003Cdiv id=\"feedback-correct\" style=\"display: none;\"\u003E\r\n    \u003Ch1 style=\"color: #2ecc71; font-size: 2rem;\"\u003E正解！\u003C\u002Fh1\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv id=\"feedback-incorrect\" style=\"display: none;\"\u003E\r\n    \u003Ch1 style=\"color: #e74c3c; font-size: 2rem;\"\u003E不正解\u003C\u002Fh1\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E\r\n",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// ==========================================
// 1. 直前の画面の正誤判定を取得
// ==========================================
// lab.jsが保存した一番最後の試行データ（正誤）を確認します
const isCorrect = this.state.correct;

const correctArea = document.getElementById('feedback-correct');
const incorrectArea = document.getElementById('feedback-incorrect');

// ==========================================
// 2. 判定に合わせて画面の表示を切り替え
// ==========================================
if (isCorrect === true) {
  correctArea.style.display = 'block';   // 正解を表示
} else {
  incorrectArea.style.display = 'block'; // 不正解（または時間切れ）を表示
}

// ==========================================
// 3. 2秒後に自動で次の画面（次の問題）へ進む
// ==========================================
setTimeout(() => {
  this.end();
}, 500); // 2000ミリ秒 = 2秒（長さを変えたい場合はここを調整してください）

}
                },
                "title": "Feedback"
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text"
            },
            {
              "required": true,
              "type": "radio",
              "label": "この映像は映画の予告編でした。\u003Cbr\u003E実際にこの映画の本編を視聴したことがありますか？",
              "options": [
                {
                  "label": "はい"
                },
                {
                  "label": "いいえ"
                }
              ],
              "name": "lessbrgreater"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 選択肢（ラジオボタン）が選ばれたら、0.3秒後に自動で次へ進む
const options = document.querySelectorAll('input[type="radio"]');

options.forEach(option => {
    option.addEventListener('change', () => {
        // 選んだことが視覚的に分かるように、ほんの少し（300ミリ秒）だけ待ってから進む
        setTimeout(() => {
            this.end();
        }, 300);
    });
});
}
          },
          "title": "Seen_B"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 1. 今の画面を避難させる
window.currentScreen = this;

// 2. ボタンをIDで取得する
const transitionButton = document.getElementById("transition-button");

if (transitionButton) {
    // 3. ボタンがクリックされたら次の画面（映像）へ進む
    transitionButton.addEventListener("click", () => {
        if (window.currentScreen && typeof window.currentScreen.end === "function") {
            window.currentScreen.end();
        }
    });
}
}
          },
          "title": "Transition",
          "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 60vh; text-align: center;\"\u003E\r\n\r\n  \u003Ch2 style=\"font-size: 1.8rem; color: #2c3e50; margin-bottom: 20px;\"\u003E\r\n    記憶テスト、お疲れ様でした。\r\n  \u003C\u002Fh2\u003E\r\n\r\n  \u003Cp style=\"font-size: 1.2rem; color: #555; margin-bottom: 40px; line-height: 1.6;\"\u003E\r\n    続いて、次の映像に進みます。\u003Cbr\u003E\r\n    準備ができましたら、下のボタンを押してください。\r\n  \u003C\u002Fp\u003E\r\n\r\n  \u003Cbutton id=\"transition-button\" type=\"button\" style=\"font-size: 1.2rem; font-weight: bold; padding: 15px 40px; border: none; border-radius: 30px; background-color: #3498db; color: white; cursor: pointer; box-shadow: 0 4px 10px rgba(52, 152, 219, 0.4); transition: all 0.3s ease;\"\u003E\r\n    次の映像へ進む →\r\n  \u003C\u002Fbutton\u003E\r\n\r\n\u003C\u002Fdiv\u003E"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 1. 今の画面（this）を避難させる
window.currentScreen = this;

// 2. ビデオとボタンをIDで取得する
const video = document.getElementById("video-player");
const nextButton = document.getElementById("next-button");

if (video && nextButton) {
    // 3. 動画の再生が「終了」した瞬間を監視
    video.addEventListener("ended", () => {
        
        // 💡 ボタンのデザインと文字を「押せる状態」に変化させる
        nextButton.disabled = false;
        nextButton.textContent = "記憶テストに進む →";
        
        // 色を鮮やかな青に変更し、カーソルを指マークにする
        nextButton.style.backgroundColor = "#3498db"; 
        nextButton.style.color = "white";
        nextButton.style.cursor = "pointer";
        nextButton.style.boxShadow = "0 4px 10px rgba(52, 152, 219, 0.4)";
    });

    // 4. 押せるようになったボタンをクリックした時の処理
    nextButton.addEventListener("click", () => {
        // 次の画面（記憶テスト）へ進む
        if (window.currentScreen && typeof window.currentScreen.end === "function") {
            window.currentScreen.end();
        }
    });
}
}
          },
          "title": "Video_C'",
          "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; text-align: center; padding-top: 20px;\"\u003E\r\n\r\n  \u003C!-- 案内文 --\u003E\r\n  \u003Cp style=\"font-size: 1.2rem; font-weight: bold; color: #2c3e50; margin-bottom: 20px;\"\u003E\r\n    再生ボタン（▶）を押して、映像を最後までご視聴ください。\r\n  \u003C\u002Fp\u003E\r\n\r\n  \u003C!-- ビデオプレイヤー（角丸と影をつけてスタイリッシュに） --\u003E\r\n  \u003Cvideo id=\"video-player\" controls playsinline style=\"max-width: 100%; max-height: 65vh; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);\"\u003E\r\n    \u003C!-- 💡 下の src=\"\" の中に、映像のURLを入れてください --\u003E\r\n    \u003Csource src=\"https:\u002F\u002Fizemi-web.github.io\u002Fkageki-tyoxtuto\u002Fkageki-tyoxtuto.MOV\" type=\"video\u002Fmp4\"\u003E\r\n    お使いのブラウザは動画再生に対応していません。\r\n  \u003C\u002Fvideo\u003E\r\n\r\n  \u003C!-- 次へ進むボタン（最初はグレーで押せない状態） --\u003E\r\n  \u003Cbutton id=\"next-button\" type=\"button\" disabled style=\"margin-top: 35px; font-size: 1.2rem; font-weight: bold; padding: 15px 40px; border: none; border-radius: 30px; background-color: #cccccc; color: #666666; cursor: not-allowed; transition: all 0.3s ease;\"\u003E\r\n    映像の終了までお待ちください...\r\n  \u003C\u002Fbutton\u003E\r\n\r\n\u003C\u002Fdiv\u003E"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "q_text": "第１問\u003Cbr\u003E映画の題名は『キャラクター』である",
              "answer": "yes"
            },
            {
              "q_text": "第２問\u003Cbr\u003E漫画家が登場する",
              "answer": "yes"
            },
            {
              "q_text": "第３問\u003Cbr\u003Eこれはロマンス映画である",
              "answer": "no"
            },
            {
              "q_text": "第４問\u003Cbr\u003E銃（ピストル）を撃つシーンがある",
              "answer": "no"
            },
            {
              "q_text": "第５問\u003Cbr\u003Eスポーツをしているシーンがある",
              "answer": "no"
            }
          ],
          "sample": {
            "mode": "sequential"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Quiz_Loop_C",
          "indexParameter": "question_order",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Quiz_Sequence",
            "content": [
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 250px;\"\u003E\r\n \u003Ch3 style=\"font-size: 2.0rem; margin-bottom: 35px; text-align: center;\"\u003E\r\n   ${parameters.q_text}\r\n \u003C\u002Fh3\u003E\r\n\r\n \u003Cdiv id=\"choice-area\" style=\"display: flex; justify-content: center; gap: 120px; margin-bottom: 40px;\"\u003E\r\n  \r\n   \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 2rem;\"\u003E\r\n     \u003Cspan style=\"margin-bottom: 5px;\"\u003E⭕️\u003C\u002Fspan\u003E\r\n     \u003Cinput type=\"radio\" name=\"response\" value=\"yes\" style=\"transform: scale(1.5);\"\u003E\r\n   \u003C\u002Flabel\u003E\r\n\r\n   \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 2rem;\"\u003E\r\n     \u003Cspan style=\"margin-bottom: 5px;\"\u003E❌️\u003C\u002Fspan\u003E\r\n     \u003Cinput type=\"radio\" name=\"response\" value=\"no\" style=\"transform: scale(1.5);\"\u003E\r\n   \u003C\u002Flabel\u003E\r\n\r\n \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// ==========================================
// 1. 変数と要素の定義
// ==========================================
const choiceArea = document.getElementById('choice-area');
const radios = choiceArea.querySelectorAll('input[type="radio"]');

// ==========================================
// 2. 選択肢（⭕️/❌️）がクリックされた時の処理（正解判定）
// ==========================================
radios.forEach(radio => {
  radio.addEventListener('click', (event) => {

    // ユーザーの回答を取得して記録
    const userAnswer = event.target.value;
    this.data.response = userAnswer;

    // 正解（answerパラメータ）と照らし合わせて記録
    const correctAnswer = this.parameters.answer;
    this.data.correct = (userAnswer === correctAnswer);

    // 選択されたことが視覚的にわかるよう、ほんの少し（0.15秒）待ってから進む
    setTimeout(() => {
      this.end();
    }, 150);
  });
});
}
                },
                "title": "Quiz",
                "correctResponse": "${parameters.answer}"
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text"
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class=\"feedback-container\" style=\"text-align: center; margin-top: 50px;\"\u003E\r\n  \r\n  \u003Cdiv id=\"feedback-correct\" style=\"display: none;\"\u003E\r\n    \u003Ch1 style=\"color: #2ecc71; font-size: 2rem;\"\u003E正解！\u003C\u002Fh1\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv id=\"feedback-incorrect\" style=\"display: none;\"\u003E\r\n    \u003Ch1 style=\"color: #e74c3c; font-size: 2rem;\"\u003E不正解\u003C\u002Fh1\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E\r\n",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// ==========================================
// 1. 直前の画面の正誤判定を取得
// ==========================================
// lab.jsが保存した一番最後の試行データ（正誤）を確認します
const isCorrect = this.state.correct;

const correctArea = document.getElementById('feedback-correct');
const incorrectArea = document.getElementById('feedback-incorrect');

// ==========================================
// 2. 判定に合わせて画面の表示を切り替え
// ==========================================
if (isCorrect === true) {
  correctArea.style.display = 'block';   // 正解を表示
} else {
  incorrectArea.style.display = 'block'; // 不正解（または時間切れ）を表示
}

// ==========================================
// 3. 2秒後に自動で次の画面（次の問題）へ進む
// ==========================================
setTimeout(() => {
  this.end();
}, 500); // 2000ミリ秒 = 2秒（長さを変えたい場合はここを調整してください）

}
                },
                "title": "Feedback"
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text"
            },
            {
              "required": true,
              "type": "radio",
              "label": "この映像は映画の予告編でした。\u003Cbr\u003E実際にこの映画の本編を視聴したことがありますか？",
              "options": [
                {
                  "label": "はい"
                },
                {
                  "label": "いいえ"
                }
              ],
              "name": "lessbrgreater"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 選択肢（ラジオボタン）が選ばれたら、0.3秒後に自動で次へ進む
const options = document.querySelectorAll('input[type="radio"]');

options.forEach(option => {
    option.addEventListener('change', () => {
        // 選んだことが視覚的に分かるように、ほんの少し（300ミリ秒）だけ待ってから進む
        setTimeout(() => {
            this.end();
        }, 300);
    });
});
}
          },
          "title": "Seen_C"
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Set3_Group3",
      "skip": "${ parameters.condition != 3 }",
      "content": [
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 指定の秒数をカウントダウンする。
const display = document.getElementById("simple-timer");
let count = 3;  //指定の秒数

const intervalId = setInterval(() => {
    count--;

    if (count >= 0 && display) {
        display.textContent = count; // ここで数字だけが書き換わります
    }

    if (count <= 0) {
        clearInterval(intervalId);
        // 【追加】0になったら自動で次（映像）へ進む！
        this.end(); 
    }
}, 1000);
}
          },
          "title": "Countdown",
          "content": "\u003Cdiv class=\"countdown-container\"\u003E\r\n    \u003Cdiv class=\"number\"\u003E\r\n        \u003Cspan id=\"simple-timer\"\u003E3\u003C\u002Fspan\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 1. 今の画面（this）を避難させる
window.currentScreen = this;

// 2. ビデオとボタンをIDで取得する
const video = document.getElementById("video-player");
const nextButton = document.getElementById("next-button");

if (video && nextButton) {
    // 3. 動画の再生が「終了」した瞬間を監視
    video.addEventListener("ended", () => {
        
        // 💡 ボタンのデザインと文字を「押せる状態」に変化させる
        nextButton.disabled = false;
        nextButton.textContent = "記憶テストに進む →";
        
        // 色を鮮やかな青に変更し、カーソルを指マークにする
        nextButton.style.backgroundColor = "#3498db"; 
        nextButton.style.color = "white";
        nextButton.style.cursor = "pointer";
        nextButton.style.boxShadow = "0 4px 10px rgba(52, 152, 219, 0.4)";
    });

    // 4. 押せるようになったボタンをクリックした時の処理
    nextButton.addEventListener("click", () => {
        // 次の画面（記憶テスト）へ進む
        if (window.currentScreen && typeof window.currentScreen.end === "function") {
            window.currentScreen.end();
        }
    });
}
}
          },
          "title": "Video_A\"",
          "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; text-align: center; padding-top: 20px;\"\u003E\r\n\r\n  \u003C!-- 案内文 --\u003E\r\n  \u003Cp style=\"font-size: 1.2rem; font-weight: bold; color: #2c3e50; margin-bottom: 20px;\"\u003E\r\n    再生ボタン（▶）を押して、映像を最後までご視聴ください。\r\n  \u003C\u002Fp\u003E\r\n\r\n  \u003C!-- ビデオプレイヤー（角丸と影をつけてスタイリッシュに） --\u003E\r\n  \u003Cvideo id=\"video-player\" controls playsinline style=\"max-width: 100%; max-height: 65vh; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);\"\u003E\r\n    \u003C!-- 💡 下の src=\"\" の中に、映像のURLを入れてください --\u003E\r\n    \u003Csource src=\"https:\u002F\u002Fyuuuuuuuuuuuuuuuuuuki.github.io\u002Fmission1\u002Fmission1.mp4\" type=\"video\u002Fmp4\"\u003E\r\n    お使いのブラウザは動画再生に対応していません。\r\n  \u003C\u002Fvideo\u003E\r\n\r\n  \u003C!-- 次へ進むボタン（最初はグレーで押せない状態） --\u003E\r\n  \u003Cbutton id=\"next-button\" type=\"button\" disabled style=\"margin-top: 35px; font-size: 1.2rem; font-weight: bold; padding: 15px 40px; border: none; border-radius: 30px; background-color: #cccccc; color: #666666; cursor: not-allowed; transition: all 0.3s ease;\"\u003E\r\n    映像の終了までお待ちください...\r\n  \u003C\u002Fbutton\u003E\r\n\r\n\u003C\u002Fdiv\u003E"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "q_text": "第１問\u003Cbr\u003E主演はトム・クルーズである",
              "answer": "yes"
            },
            {
              "q_text": "第２問\u003Cbr\u003Eこの映画は12月に公開される",
              "answer": "no"
            },
            {
              "q_text": "第３問\u003Cbr\u003E車やヘリコプター、飛行機といった乗り物が登場するシーンがある",
              "answer": "yes"
            },
            {
              "q_text": "第４問\u003Cbr\u003Eエッフェル塔が映るシーンがある",
              "answer": "yes"
            },
            {
              "q_text": "第５問\u003Cbr\u003E「FBIのミッション」という言葉が出てくる",
              "answer": "no"
            }
          ],
          "sample": {
            "mode": "sequential"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Quiz_Loop_A",
          "indexParameter": "question_order",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Quiz_Sequence",
            "content": [
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 250px;\"\u003E\r\n \u003Ch3 style=\"font-size: 2.0rem; margin-bottom: 35px; text-align: center;\"\u003E\r\n   ${parameters.q_text}\r\n \u003C\u002Fh3\u003E\r\n\r\n \u003Cdiv id=\"choice-area\" style=\"display: flex; justify-content: center; gap: 120px; margin-bottom: 40px;\"\u003E\r\n  \r\n   \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 2rem;\"\u003E\r\n     \u003Cspan style=\"margin-bottom: 5px;\"\u003E⭕️\u003C\u002Fspan\u003E\r\n     \u003Cinput type=\"radio\" name=\"response\" value=\"yes\" style=\"transform: scale(1.5);\"\u003E\r\n   \u003C\u002Flabel\u003E\r\n\r\n   \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 2rem;\"\u003E\r\n     \u003Cspan style=\"margin-bottom: 5px;\"\u003E❌️\u003C\u002Fspan\u003E\r\n     \u003Cinput type=\"radio\" name=\"response\" value=\"no\" style=\"transform: scale(1.5);\"\u003E\r\n   \u003C\u002Flabel\u003E\r\n\r\n \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// ==========================================
// 1. 変数と要素の定義
// ==========================================
const choiceArea = document.getElementById('choice-area');
const radios = choiceArea.querySelectorAll('input[type="radio"]');

// ==========================================
// 2. 選択肢（⭕️/❌️）がクリックされた時の処理（正解判定）
// ==========================================
radios.forEach(radio => {
  radio.addEventListener('click', (event) => {

    // ユーザーの回答を取得して記録
    const userAnswer = event.target.value;
    this.data.response = userAnswer;

    // 正解（answerパラメータ）と照らし合わせて記録
    const correctAnswer = this.parameters.answer;
    this.data.correct = (userAnswer === correctAnswer);

    // 選択されたことが視覚的にわかるよう、ほんの少し（0.15秒）待ってから進む
    setTimeout(() => {
      this.end();
    }, 150);
  });
});
}
                },
                "title": "Quiz",
                "correctResponse": "${parameters.answer}"
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text"
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class=\"feedback-container\" style=\"text-align: center; margin-top: 50px;\"\u003E\r\n  \r\n  \u003Cdiv id=\"feedback-correct\" style=\"display: none;\"\u003E\r\n    \u003Ch1 style=\"color: #2ecc71; font-size: 2rem;\"\u003E正解！\u003C\u002Fh1\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv id=\"feedback-incorrect\" style=\"display: none;\"\u003E\r\n    \u003Ch1 style=\"color: #e74c3c; font-size: 2rem;\"\u003E不正解\u003C\u002Fh1\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E\r\n",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// ==========================================
// 1. 直前の画面の正誤判定を取得
// ==========================================
// lab.jsが保存した一番最後の試行データ（正誤）を確認します
const isCorrect = this.state.correct;

const correctArea = document.getElementById('feedback-correct');
const incorrectArea = document.getElementById('feedback-incorrect');

// ==========================================
// 2. 判定に合わせて画面の表示を切り替え
// ==========================================
if (isCorrect === true) {
  correctArea.style.display = 'block';   // 正解を表示
} else {
  incorrectArea.style.display = 'block'; // 不正解（または時間切れ）を表示
}

// ==========================================
// 3. 2秒後に自動で次の画面（次の問題）へ進む
// ==========================================
setTimeout(() => {
  this.end();
}, 500); // 2000ミリ秒 = 2秒（長さを変えたい場合はここを調整してください）

}
                },
                "title": "Feedback"
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text"
            },
            {
              "required": true,
              "type": "radio",
              "label": "この映像は映画の予告編でした。\u003Cbr\u003E実際にこの映画の本編を視聴したことがありますか？",
              "options": [
                {
                  "label": "はい"
                },
                {
                  "label": "いいえ"
                }
              ],
              "name": "lessbrgreater"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 選択肢（ラジオボタン）が選ばれたら、0.3秒後に自動で次へ進む
const options = document.querySelectorAll('input[type="radio"]');

options.forEach(option => {
    option.addEventListener('change', () => {
        // 選んだことが視覚的に分かるように、ほんの少し（300ミリ秒）だけ待ってから進む
        setTimeout(() => {
            this.end();
        }, 300);
    });
});
}
          },
          "title": "Seen_A"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 1. 今の画面を避難させる
window.currentScreen = this;

// 2. ボタンをIDで取得する
const transitionButton = document.getElementById("transition-button");

if (transitionButton) {
    // 3. ボタンがクリックされたら次の画面（映像）へ進む
    transitionButton.addEventListener("click", () => {
        if (window.currentScreen && typeof window.currentScreen.end === "function") {
            window.currentScreen.end();
        }
    });
}
}
          },
          "title": "Transition",
          "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 60vh; text-align: center;\"\u003E\r\n\r\n  \u003Ch2 style=\"font-size: 1.8rem; color: #2c3e50; margin-bottom: 20px;\"\u003E\r\n    記憶テスト、お疲れ様でした。\r\n  \u003C\u002Fh2\u003E\r\n\r\n  \u003Cp style=\"font-size: 1.2rem; color: #555; margin-bottom: 40px; line-height: 1.6;\"\u003E\r\n    続いて、次の映像に進みます。\u003Cbr\u003E\r\n    準備ができましたら、下のボタンを押してください。\r\n  \u003C\u002Fp\u003E\r\n\r\n  \u003Cbutton id=\"transition-button\" type=\"button\" style=\"font-size: 1.2rem; font-weight: bold; padding: 15px 40px; border: none; border-radius: 30px; background-color: #3498db; color: white; cursor: pointer; box-shadow: 0 4px 10px rgba(52, 152, 219, 0.4); transition: all 0.3s ease;\"\u003E\r\n    次の映像へ進む →\r\n  \u003C\u002Fbutton\u003E\r\n\r\n\u003C\u002Fdiv\u003E"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 1. 今の画面（this）を避難させる
window.currentScreen = this;

// 2. ビデオとボタンをIDで取得する
const video = document.getElementById("video-player");
const nextButton = document.getElementById("next-button");

if (video && nextButton) {
    // 3. 動画の再生が「終了」した瞬間を監視
    video.addEventListener("ended", () => {
        
        // 💡 ボタンのデザインと文字を「押せる状態」に変化させる
        nextButton.disabled = false;
        nextButton.textContent = "記憶テストに進む →";
        
        // 色を鮮やかな青に変更し、カーソルを指マークにする
        nextButton.style.backgroundColor = "#3498db"; 
        nextButton.style.color = "white";
        nextButton.style.cursor = "pointer";
        nextButton.style.boxShadow = "0 4px 10px rgba(52, 152, 219, 0.4)";
    });

    // 4. 押せるようになったボタンをクリックした時の処理
    nextButton.addEventListener("click", () => {
        // 次の画面（記憶テスト）へ進む
        if (window.currentScreen && typeof window.currentScreen.end === "function") {
            window.currentScreen.end();
        }
    });
}
}
          },
          "title": "Video_B\"",
          "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; text-align: center; padding-top: 20px;\"\u003E\r\n\r\n  \u003C!-- 案内文 --\u003E\r\n  \u003Cp style=\"font-size: 1.2rem; font-weight: bold; color: #2c3e50; margin-bottom: 20px;\"\u003E\r\n    再生ボタン（▶）を押して、映像を最後までご視聴ください。\r\n  \u003C\u002Fp\u003E\r\n\r\n  \u003C!-- ビデオプレイヤー（角丸と影をつけてスタイリッシュに） --\u003E\r\n  \u003Cvideo id=\"video-player\" controls playsinline style=\"max-width: 100%; max-height: 65vh; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);\"\u003E\r\n    \u003C!-- 💡 下の src=\"\" の中に、映像のURLを入れてください --\u003E\r\n    \u003Csource src=\"https:\u002F\u002Fkamemushi10.github.io\u002Fpieceofcake1\u002Fpieceofcake(max).mp4\" type=\"video\u002Fmp4\"\u003E\r\n    お使いのブラウザは動画再生に対応していません。\r\n  \u003C\u002Fvideo\u003E\r\n\r\n  \u003C!-- 次へ進むボタン（最初はグレーで押せない状態） --\u003E\r\n  \u003Cbutton id=\"next-button\" type=\"button\" disabled style=\"margin-top: 35px; font-size: 1.2rem; font-weight: bold; padding: 15px 40px; border: none; border-radius: 30px; background-color: #cccccc; color: #666666; cursor: not-allowed; transition: all 0.3s ease;\"\u003E\r\n    映像の終了までお待ちください...\r\n  \u003C\u002Fbutton\u003E\r\n\r\n\u003C\u002Fdiv\u003E"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "q_text": "第１問\u003Cbr\u003Eこの映画のタイトルは『ピースオブケイク』である",
              "answer": "yes"
            },
            {
              "q_text": "第２問\u003Cbr\u003E登場人物が泣いているシーンがある",
              "answer": "yes"
            },
            {
              "q_text": "第３問\u003Cbr\u003E飛行機に乗っているシーンがある",
              "answer": "no"
            },
            {
              "q_text": "第４問\u003Cbr\u003E「風が吹いた」というワードが何度もでてくる",
              "answer": "yes"
            },
            {
              "q_text": "第５問\u003Cbr\u003E映像の中に、金髪の人物が登場する",
              "answer": "no"
            }
          ],
          "sample": {
            "mode": "sequential"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Quiz_Loop_B",
          "indexParameter": "question_order",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Quiz_Sequence",
            "content": [
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 250px;\"\u003E\r\n \u003Ch3 style=\"font-size: 2.0rem; margin-bottom: 35px; text-align: center;\"\u003E\r\n   ${parameters.q_text}\r\n \u003C\u002Fh3\u003E\r\n\r\n \u003Cdiv id=\"choice-area\" style=\"display: flex; justify-content: center; gap: 120px; margin-bottom: 40px;\"\u003E\r\n  \r\n   \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 2rem;\"\u003E\r\n     \u003Cspan style=\"margin-bottom: 5px;\"\u003E⭕️\u003C\u002Fspan\u003E\r\n     \u003Cinput type=\"radio\" name=\"response\" value=\"yes\" style=\"transform: scale(1.5);\"\u003E\r\n   \u003C\u002Flabel\u003E\r\n\r\n   \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 2rem;\"\u003E\r\n     \u003Cspan style=\"margin-bottom: 5px;\"\u003E❌️\u003C\u002Fspan\u003E\r\n     \u003Cinput type=\"radio\" name=\"response\" value=\"no\" style=\"transform: scale(1.5);\"\u003E\r\n   \u003C\u002Flabel\u003E\r\n\r\n \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// ==========================================
// 1. 変数と要素の定義
// ==========================================
const choiceArea = document.getElementById('choice-area');
const radios = choiceArea.querySelectorAll('input[type="radio"]');

// ==========================================
// 2. 選択肢（⭕️/❌️）がクリックされた時の処理（正解判定）
// ==========================================
radios.forEach(radio => {
  radio.addEventListener('click', (event) => {

    // ユーザーの回答を取得して記録
    const userAnswer = event.target.value;
    this.data.response = userAnswer;

    // 正解（answerパラメータ）と照らし合わせて記録
    const correctAnswer = this.parameters.answer;
    this.data.correct = (userAnswer === correctAnswer);

    // 選択されたことが視覚的にわかるよう、ほんの少し（0.15秒）待ってから進む
    setTimeout(() => {
      this.end();
    }, 150);
  });
});
}
                },
                "title": "Quiz",
                "correctResponse": "${parameters.answer}"
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text"
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class=\"feedback-container\" style=\"text-align: center; margin-top: 50px;\"\u003E\r\n  \r\n  \u003Cdiv id=\"feedback-correct\" style=\"display: none;\"\u003E\r\n    \u003Ch1 style=\"color: #2ecc71; font-size: 2rem;\"\u003E正解！\u003C\u002Fh1\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv id=\"feedback-incorrect\" style=\"display: none;\"\u003E\r\n    \u003Ch1 style=\"color: #e74c3c; font-size: 2rem;\"\u003E不正解\u003C\u002Fh1\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E\r\n",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// ==========================================
// 1. 直前の画面の正誤判定を取得
// ==========================================
// lab.jsが保存した一番最後の試行データ（正誤）を確認します
const isCorrect = this.state.correct;

const correctArea = document.getElementById('feedback-correct');
const incorrectArea = document.getElementById('feedback-incorrect');

// ==========================================
// 2. 判定に合わせて画面の表示を切り替え
// ==========================================
if (isCorrect === true) {
  correctArea.style.display = 'block';   // 正解を表示
} else {
  incorrectArea.style.display = 'block'; // 不正解（または時間切れ）を表示
}

// ==========================================
// 3. 2秒後に自動で次の画面（次の問題）へ進む
// ==========================================
setTimeout(() => {
  this.end();
}, 500); // 2000ミリ秒 = 2秒（長さを変えたい場合はここを調整してください）

}
                },
                "title": "Feedback"
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text"
            },
            {
              "required": true,
              "type": "radio",
              "label": "この映像は映画の予告編でした。\u003Cbr\u003E実際にこの映画の本編を視聴したことがありますか？",
              "options": [
                {
                  "label": "はい"
                },
                {
                  "label": "いいえ"
                }
              ],
              "name": "lessbrgreater"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 選択肢（ラジオボタン）が選ばれたら、0.3秒後に自動で次へ進む
const options = document.querySelectorAll('input[type="radio"]');

options.forEach(option => {
    option.addEventListener('change', () => {
        // 選んだことが視覚的に分かるように、ほんの少し（300ミリ秒）だけ待ってから進む
        setTimeout(() => {
            this.end();
        }, 300);
    });
});
}
          },
          "title": "Seen_B"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 1. 今の画面を避難させる
window.currentScreen = this;

// 2. ボタンをIDで取得する
const transitionButton = document.getElementById("transition-button");

if (transitionButton) {
    // 3. ボタンがクリックされたら次の画面（映像）へ進む
    transitionButton.addEventListener("click", () => {
        if (window.currentScreen && typeof window.currentScreen.end === "function") {
            window.currentScreen.end();
        }
    });
}
}
          },
          "title": "Transition",
          "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 60vh; text-align: center;\"\u003E\r\n\r\n  \u003Ch2 style=\"font-size: 1.8rem; color: #2c3e50; margin-bottom: 20px;\"\u003E\r\n    記憶テスト、お疲れ様でした。\r\n  \u003C\u002Fh2\u003E\r\n\r\n  \u003Cp style=\"font-size: 1.2rem; color: #555; margin-bottom: 40px; line-height: 1.6;\"\u003E\r\n    続いて、次の映像に進みます。\u003Cbr\u003E\r\n    準備ができましたら、下のボタンを押してください。\r\n  \u003C\u002Fp\u003E\r\n\r\n  \u003Cbutton id=\"transition-button\" type=\"button\" style=\"font-size: 1.2rem; font-weight: bold; padding: 15px 40px; border: none; border-radius: 30px; background-color: #3498db; color: white; cursor: pointer; box-shadow: 0 4px 10px rgba(52, 152, 219, 0.4); transition: all 0.3s ease;\"\u003E\r\n    次の映像へ進む →\r\n  \u003C\u002Fbutton\u003E\r\n\r\n\u003C\u002Fdiv\u003E"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 1. 今の画面（this）を避難させる
window.currentScreen = this;

// 2. ビデオとボタンをIDで取得する
const video = document.getElementById("video-player");
const nextButton = document.getElementById("next-button");

if (video && nextButton) {
    // 3. 動画の再生が「終了」した瞬間を監視
    video.addEventListener("ended", () => {
        
        // 💡 ボタンのデザインと文字を「押せる状態」に変化させる
        nextButton.disabled = false;
        nextButton.textContent = "記憶テストに進む →";
        
        // 色を鮮やかな青に変更し、カーソルを指マークにする
        nextButton.style.backgroundColor = "#3498db"; 
        nextButton.style.color = "white";
        nextButton.style.cursor = "pointer";
        nextButton.style.boxShadow = "0 4px 10px rgba(52, 152, 219, 0.4)";
    });

    // 4. 押せるようになったボタンをクリックした時の処理
    nextButton.addEventListener("click", () => {
        // 次の画面（記憶テスト）へ進む
        if (window.currentScreen && typeof window.currentScreen.end === "function") {
            window.currentScreen.end();
        }
    });
}
}
          },
          "title": "Video_C\"",
          "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; text-align: center; padding-top: 20px;\"\u003E\r\n\r\n  \u003C!-- 案内文 --\u003E\r\n  \u003Cp style=\"font-size: 1.2rem; font-weight: bold; color: #2c3e50; margin-bottom: 20px;\"\u003E\r\n    再生ボタン（▶）を押して、映像を最後までご視聴ください。\r\n  \u003C\u002Fp\u003E\r\n\r\n  \u003C!-- ビデオプレイヤー（角丸と影をつけてスタイリッシュに） --\u003E\r\n  \u003Cvideo id=\"video-player\" controls playsinline style=\"max-width: 100%; max-height: 65vh; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);\"\u003E\r\n    \u003C!-- 💡 下の src=\"\" の中に、映像のURLを入れてください --\u003E\r\n    \u003Csource src=\"https:\u002F\u002Fizemi-web.github.io\u002FKageki-max\u002Fkageki-max.MOV\" type=\"video\u002Fmp4\"\u003E\r\n    お使いのブラウザは動画再生に対応していません。\r\n  \u003C\u002Fvideo\u003E\r\n\r\n  \u003C!-- 次へ進むボタン（最初はグレーで押せない状態） --\u003E\r\n  \u003Cbutton id=\"next-button\" type=\"button\" disabled style=\"margin-top: 35px; font-size: 1.2rem; font-weight: bold; padding: 15px 40px; border: none; border-radius: 30px; background-color: #cccccc; color: #666666; cursor: not-allowed; transition: all 0.3s ease;\"\u003E\r\n    映像の終了までお待ちください...\r\n  \u003C\u002Fbutton\u003E\r\n\r\n\u003C\u002Fdiv\u003E"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "q_text": "第１問\u003Cbr\u003E映画の題名は『キャラクター』である",
              "answer": "yes"
            },
            {
              "q_text": "第２問\u003Cbr\u003E漫画家が登場する",
              "answer": "yes"
            },
            {
              "q_text": "第３問\u003Cbr\u003Eこれはロマンス映画である",
              "answer": "no"
            },
            {
              "q_text": "第４問\u003Cbr\u003E銃（ピストル）を撃つシーンがある",
              "answer": "no"
            },
            {
              "q_text": "第５問\u003Cbr\u003Eスポーツをしているシーンがある",
              "answer": "no"
            }
          ],
          "sample": {
            "mode": "sequential"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Quiz_Loop_C",
          "indexParameter": "question_order",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Quiz_Sequence",
            "content": [
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 250px;\"\u003E\r\n \u003Ch3 style=\"font-size: 2.0rem; margin-bottom: 35px; text-align: center;\"\u003E\r\n   ${parameters.q_text}\r\n \u003C\u002Fh3\u003E\r\n\r\n \u003Cdiv id=\"choice-area\" style=\"display: flex; justify-content: center; gap: 120px; margin-bottom: 40px;\"\u003E\r\n  \r\n   \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 2rem;\"\u003E\r\n     \u003Cspan style=\"margin-bottom: 5px;\"\u003E⭕️\u003C\u002Fspan\u003E\r\n     \u003Cinput type=\"radio\" name=\"response\" value=\"yes\" style=\"transform: scale(1.5);\"\u003E\r\n   \u003C\u002Flabel\u003E\r\n\r\n   \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 2rem;\"\u003E\r\n     \u003Cspan style=\"margin-bottom: 5px;\"\u003E❌️\u003C\u002Fspan\u003E\r\n     \u003Cinput type=\"radio\" name=\"response\" value=\"no\" style=\"transform: scale(1.5);\"\u003E\r\n   \u003C\u002Flabel\u003E\r\n\r\n \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// ==========================================
// 1. 変数と要素の定義
// ==========================================
const choiceArea = document.getElementById('choice-area');
const radios = choiceArea.querySelectorAll('input[type="radio"]');

// ==========================================
// 2. 選択肢（⭕️/❌️）がクリックされた時の処理（正解判定）
// ==========================================
radios.forEach(radio => {
  radio.addEventListener('click', (event) => {

    // ユーザーの回答を取得して記録
    const userAnswer = event.target.value;
    this.data.response = userAnswer;

    // 正解（answerパラメータ）と照らし合わせて記録
    const correctAnswer = this.parameters.answer;
    this.data.correct = (userAnswer === correctAnswer);

    // 選択されたことが視覚的にわかるよう、ほんの少し（0.15秒）待ってから進む
    setTimeout(() => {
      this.end();
    }, 150);
  });
});
}
                },
                "title": "Quiz",
                "correctResponse": "${parameters.answer}"
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text"
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class=\"feedback-container\" style=\"text-align: center; margin-top: 50px;\"\u003E\r\n  \r\n  \u003Cdiv id=\"feedback-correct\" style=\"display: none;\"\u003E\r\n    \u003Ch1 style=\"color: #2ecc71; font-size: 2rem;\"\u003E正解！\u003C\u002Fh1\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv id=\"feedback-incorrect\" style=\"display: none;\"\u003E\r\n    \u003Ch1 style=\"color: #e74c3c; font-size: 2rem;\"\u003E不正解\u003C\u002Fh1\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E\r\n",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// ==========================================
// 1. 直前の画面の正誤判定を取得
// ==========================================
// lab.jsが保存した一番最後の試行データ（正誤）を確認します
const isCorrect = this.state.correct;

const correctArea = document.getElementById('feedback-correct');
const incorrectArea = document.getElementById('feedback-incorrect');

// ==========================================
// 2. 判定に合わせて画面の表示を切り替え
// ==========================================
if (isCorrect === true) {
  correctArea.style.display = 'block';   // 正解を表示
} else {
  incorrectArea.style.display = 'block'; // 不正解（または時間切れ）を表示
}

// ==========================================
// 3. 2秒後に自動で次の画面（次の問題）へ進む
// ==========================================
setTimeout(() => {
  this.end();
}, 500); // 2000ミリ秒 = 2秒（長さを変えたい場合はここを調整してください）

}
                },
                "title": "Feedback"
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text"
            },
            {
              "required": true,
              "type": "radio",
              "label": "この映像は映画の予告編でした。\u003Cbr\u003E実際にこの映画の本編を視聴したことがありますか？",
              "options": [
                {
                  "label": "はい"
                },
                {
                  "label": "いいえ"
                }
              ],
              "name": "lessbrgreater"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 選択肢（ラジオボタン）が選ばれたら、0.3秒後に自動で次へ進む
const options = document.querySelectorAll('input[type="radio"]');

options.forEach(option => {
    option.addEventListener('change', () => {
        // 選んだことが視覚的に分かるように、ほんの少し（300ミリ秒）だけ待ってから進む
        setTimeout(() => {
            this.end();
        }, 300);
    });
});
}
          },
          "title": "Seen_C"
        }
      ]
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
// 1. 今の画面を避難させる
window.currentScreen = this;

// 2. ボタンをIDで取得する
const transitionButton = document.getElementById("transition-button");

if (transitionButton) {
    // 3. ボタンがクリックされたら次の画面へ進む
    transitionButton.addEventListener("click", () => {
        if (window.currentScreen && typeof window.currentScreen.end === "function") {
            window.currentScreen.end();
        }
    });
}
}
      },
      "title": "Transition2",
      "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 60vh; text-align: center;\"\u003E\r\n\r\n  \u003Ch2 style=\"font-size: 1.8rem; color: #2c3e50; margin-bottom: 20px;\"\u003E\r\n    すべての映像と記憶テストが終了しました。\r\n  \u003C\u002Fh2\u003E\r\n\r\n  \u003Cp style=\"font-size: 1.2rem; color: #555; margin-bottom: 40px; line-height: 1.6;\"\u003E\r\n    お疲れ様でした！\u003Cbr\u003E\r\n    続いて、映像に対する印象や感想についての\u003Cstrong\u003E質問紙調査（アンケート）\u003C\u002Fstrong\u003Eに移ります。\u003Cbr\u003E\r\n    準備ができましたら、下のボタンを押してください。\r\n  \u003C\u002Fp\u003E\r\n\r\n  \u003Cbutton id=\"transition-button\" type=\"button\" style=\"font-size: 1.2rem; font-weight: bold; padding: 15px 40px; border: none; border-radius: 30px; background-color: #3498db; color: white; cursor: pointer; box-shadow: 0 4px 10px rgba(52, 152, 219, 0.4); transition: all 0.3s ease;\"\u003E\r\n    質問紙調査へ進む →\r\n  \u003C\u002Fbutton\u003E\r\n\r\n\u003C\u002Fdiv\u003E"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Questionnaire_Sequence",
      "content": [
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "q_id": "a1",
              "q_text": "この予告編を見て、映画本編をぜひ鑑賞したいと思った。"
            },
            {
              "q_id": "a2",
              "q_text": "この予告編から、映画本編のストーリー展開を容易に想像できた。"
            },
            {
              "q_id": "a3",
              "q_text": "視聴した予告編は、映画本編のネタバレになっていると感じた。"
            },
            {
              "q_id": "a4",
              "q_text": "この予告編には、刺激的でインパクトのある描写が多いと感じた。"
            },
            {
              "q_id": "a5",
              "q_text": "この予告編は、映像作品として魅力的だった。"
            }
          ],
          "sample": {
            "mode": "sequential"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Loop_A",
          "shuffleGroups": [],
          "template": {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "title": "\u003Cspan style=\"font-size: 1rem; color: #666666; line-height: 1.5;\"\u003E\u003Cspan style=\"color: #111111; font-weight: bold;\"\u003E1本目の映像\u003C\u002Fspan\u003Eについて、\u003Cbr\u003E以下の質問文を読んで、あなたにもっとも当てはまると思う選択肢を選んで回答してください。\u003C\u002Fspan\u003E",
                "content": "\u003Cdiv style=\"font-size: 0.9rem; color: #e74c3c; font-weight: bold; margin-top: 10px; margin-bottom: 20px;\"\u003E\n  ※回答を選択し、画面下の「次へ→」ボタンを押して進んでください。\n\u003C\u002Fdiv\u003E\u003Chr style=\"border: none; border-top: 1px solid #cccccc; margin: 30px 0;\"\u003E"
              },
              {
                "required": true,
                "type": "radio",
                "label": "\u003Cdiv style=\"font-size: 1.4rem; color: #111111; font-weight: bold;\"\u003E   ${parameters.q_text} \u003C\u002Fdiv\u003E",
                "options": [
                  {
                    "label": "1. まったくそう思わない",
                    "coding": "1"
                  },
                  {
                    "label": "2. あまりそう思わない",
                    "coding": "2"
                  },
                  {
                    "label": "3. どちらともいえない",
                    "coding": "3"
                  },
                  {
                    "label": "4. ややそう思う",
                    "coding": "4"
                  },
                  {
                    "label": "5. 非常にそう思う",
                    "coding": "5"
                  }
                ],
                "name": "${parameters.q_id}"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv style=\"text-align: center; margin-bottom: 30px;\"\u003E\r\n    \u003C!-- 💡 下の src=\"\" の中に、ステップ1で用意した画像のURLを直接入れます --\u003E\r\n    \u003Cimg src=\"https:\u002F\u002Fso-keio.github.io\u002Fmission\u002Fmission.jpg\" alt=\"映画ポスター\" style=\"max-height: 300px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);\"\u003E\r\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ →",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Page_A"
          }
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "q_id": "b1",
              "q_text": "この予告編を見て、映画本編をぜひ鑑賞したいと思った。"
            },
            {
              "q_id": "b2",
              "q_text": "この予告編から、映画本編のストーリー展開を容易に想像できた。"
            },
            {
              "q_id": "b3",
              "q_text": "視聴した予告編は、映画本編のネタバレになっていると感じた。"
            },
            {
              "q_id": "b4",
              "q_text": "この予告編には、刺激的でインパクトのある描写が多いと感じた。"
            },
            {
              "q_id": "b5",
              "q_text": "この予告編は、映像作品として魅力的だった。"
            }
          ],
          "sample": {
            "mode": "sequential"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Loop_B",
          "shuffleGroups": [],
          "template": {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "title": "\u003Cspan style=\"font-size: 1rem; color: #666666; line-height: 1.5;\"\u003E\u003Cspan style=\"color: #111111; font-weight: bold;\"\u003E2本目の映像\u003C\u002Fspan\u003Eについて、\u003Cbr\u003E以下の質問文を読んで、あなたにもっとも当てはまると思う選択肢を選んで回答してください。\u003C\u002Fspan\u003E",
                "content": "\u003Cdiv style=\"font-size: 0.9rem; color: #e74c3c; font-weight: bold; margin-top: 10px; margin-bottom: 20px;\"\u003E\n  ※回答を選択し、画面下の「次へ→」ボタンを押して進んでください。\n\u003C\u002Fdiv\u003E\u003Chr style=\"border: none; border-top: 1px solid #cccccc; margin: 30px 0;\"\u003E"
              },
              {
                "required": true,
                "type": "radio",
                "label": "\u003Cdiv style=\"font-size: 1.4rem; color: #111111; font-weight: bold;\"\u003E   ${parameters.q_text} \u003C\u002Fdiv\u003E",
                "options": [
                  {
                    "label": "1. まったくそう思わない",
                    "coding": "1"
                  },
                  {
                    "label": "2. あまりそう思わない",
                    "coding": "2"
                  },
                  {
                    "label": "3. どちらともいえない",
                    "coding": "3"
                  },
                  {
                    "label": "4. ややそう思う",
                    "coding": "4"
                  },
                  {
                    "label": "5. 非常にそう思う",
                    "coding": "5"
                  }
                ],
                "name": "${parameters.q_id}"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv style=\"text-align: center; margin-bottom: 30px;\"\u003E\r\n    \u003C!-- 💡 下の src=\"\" の中に、ステップ1で用意した画像のURLを直接入れます --\u003E\r\n    \u003Cimg src=\"https:\u002F\u002Fso-keio.github.io\u002Fcake\u002Fcake.jpg\" alt=\"映画ポスター\" style=\"max-height: 300px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);\"\u003E\r\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ →",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Page_B"
          }
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "q_id": "c1",
              "q_text": "この予告編を見て、映画本編をぜひ鑑賞したいと思った。"
            },
            {
              "q_id": "c2",
              "q_text": "この予告編から、映画本編のストーリー展開を容易に想像できた。"
            },
            {
              "q_id": "c3",
              "q_text": "視聴した予告編は、映画本編のネタバレになっていると感じた。"
            },
            {
              "q_id": "c4",
              "q_text": "この予告編には、刺激的でインパクトのある描写が多いと感じた。"
            },
            {
              "q_id": "c5",
              "q_text": "この予告編は、映像作品として魅力的だった。"
            }
          ],
          "sample": {
            "mode": "sequential"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Loop_C",
          "shuffleGroups": [],
          "template": {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "title": "\u003Cspan style=\"font-size: 1rem; color: #666666; line-height: 1.5;\"\u003E\u003Cspan style=\"color: #111111; font-weight: bold;\"\u003E3本目の映像\u003C\u002Fspan\u003Eについて、\u003Cbr\u003E以下の質問文を読んで、あなたにもっとも当てはまると思う選択肢を選んで回答してください。\u003C\u002Fspan\u003E",
                "content": "\u003Cdiv style=\"font-size: 0.9rem; color: #e74c3c; font-weight: bold; margin-top: 10px; margin-bottom: 20px;\"\u003E\n  ※回答を選択し、画面下の「次へ→」ボタンを押して進んでください。\n\u003C\u002Fdiv\u003E\u003Chr style=\"border: none; border-top: 1px solid #cccccc; margin: 30px 0;\"\u003E"
              },
              {
                "required": true,
                "type": "radio",
                "label": "\u003Cdiv style=\"font-size: 1.4rem; color: #111111; font-weight: bold;\"\u003E   ${parameters.q_text} \u003C\u002Fdiv\u003E",
                "options": [
                  {
                    "label": "1. まったくそう思わない",
                    "coding": "1"
                  },
                  {
                    "label": "2. あまりそう思わない",
                    "coding": "2"
                  },
                  {
                    "label": "3. どちらともいえない",
                    "coding": "3"
                  },
                  {
                    "label": "4. ややそう思う",
                    "coding": "4"
                  },
                  {
                    "label": "5. 非常にそう思う",
                    "coding": "5"
                  }
                ],
                "name": "${parameters.q_id}"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv style=\"text-align: center; margin-bottom: 30px;\"\u003E\r\n    \u003C!-- 💡 下の src=\"\" の中に、ステップ1で用意した画像のURLを直接入れます --\u003E\r\n    \u003Cimg src=\"https:\u002F\u002Fso-keio.github.io\u002Fkyarakuta-\u002Fkyarakuta-.jpg\" alt=\"映画ポスター\" style=\"max-height: 300px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);\"\u003E\r\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ →",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Page_C"
          }
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "q_id": "d1",
              "q_text": "映画は、映画館で観るべきだ。"
            },
            {
              "q_id": "d2",
              "q_text": "映画は、エンドロールの最後まで見るべきだ。"
            },
            {
              "q_id": "d3",
              "q_text": "映画業界の未来は明るいと思う。"
            }
          ],
          "sample": {
            "mode": "sequential"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Loop_dummy",
          "shuffleGroups": [],
          "template": {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "title": "\u003Cspan style=\"font-size: 1rem; color: #666666; line-height: 1.5;\"\u003E以下の質問文を読んで、あなたにもっとも当てはまると思う選択肢を選んで回答してください。\u003C\u002Fspan\u003E",
                "content": "\u003Cdiv style=\"font-size: 0.9rem; color: #e74c3c; font-weight: bold; margin-top: 10px; margin-bottom: 20px;\"\u003E\n  ※回答を選択し、画面下の「次へ→」ボタンを押して進んでください。\n\u003C\u002Fdiv\u003E\u003Chr style=\"border: none; border-top: 1px solid #cccccc; margin: 30px 0;\"\u003E"
              },
              {
                "required": true,
                "type": "radio",
                "label": "\u003Cdiv style=\"font-size: 1.4rem; color: #111111; font-weight: bold;\"\u003E   ${parameters.q_text} \u003C\u002Fdiv\u003E",
                "options": [
                  {
                    "label": "1. まったくそう思わない",
                    "coding": "1"
                  },
                  {
                    "label": "2. あまりそう思わない",
                    "coding": "2"
                  },
                  {
                    "label": "3. どちらともいえない",
                    "coding": "3"
                  },
                  {
                    "label": "4. ややそう思う",
                    "coding": "4"
                  },
                  {
                    "label": "5. 非常にそう思う",
                    "coding": "5"
                  }
                ],
                "name": "lessdiv-style\"font-size:-1.4rem-color:-111111-font-weight:-bold\"greater-dollarparameters.q_text-lessdivgreater"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ →",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Page_D"
          }
        }
      ]
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
// 1. 今の画面を避難させる
window.currentScreen = this;

// 2. ボタンをIDで取得する
const transitionButton = document.getElementById("transition-button");

if (transitionButton) {
    // 3. ボタンがクリックされたら次の画面へ進む
    transitionButton.addEventListener("click", () => {
        if (window.currentScreen && typeof window.currentScreen.end === "function") {
            window.currentScreen.end();
        }
    });
}
}
      },
      "title": "Transition3",
      "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 60vh; text-align: center;\"\u003E\r\n\r\n  \u003Ch2 style=\"font-size: 1.8rem; color: #2c3e50; margin-bottom: 20px;\"\u003E\r\n    ご回答ありがとうございました。\r\n  \u003C\u002Fh2\u003E\r\n\r\n  \u003Cp style=\"font-size: 1.2rem; color: #555; margin-bottom: 40px; line-height: 1.6;\"\u003E\r\n    最後に、ご自身の年齢や普段の映画視聴の頻度など、\u003Cbr\u003E\r\n    \u003Cstrong\u003E基本情報\u003C\u002Fstrong\u003Eについていくつかお伺いします。\u003Cbr\u003E\r\n    これが最後のステップとなります！\r\n  \u003C\u002Fp\u003E\r\n\r\n  \u003Cbutton id=\"transition-button\" type=\"button\" style=\"font-size: 1.2rem; font-weight: bold; padding: 15px 40px; border: none; border-radius: 30px; background-color: #3498db; color: white; cursor: pointer; box-shadow: 0 4px 10px rgba(52, 152, 219, 0.4); transition: all 0.3s ease;\"\u003E\r\n    基本情報の入力へ進む →\r\n  \u003C\u002Fbutton\u003E\r\n\r\n\u003C\u002Fdiv\u003E"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "radio",
          "label": "あなたの性別をお答えください。",
          "name": "gender",
          "options": [
            {
              "label": "男性",
              "coding": "male"
            },
            {
              "label": "女性",
              "coding": "female"
            },
            {
              "label": "その他",
              "coding": "other"
            },
            {
              "label": "回答したくない",
              "coding": "-"
            }
          ]
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cbr\u003E\r\n\r\n\u003Cdiv class=\"page-item\" style=\"margin-bottom: 40px;\"\u003E\r\n    \u003Cp style=\"font-weight: bold; margin-bottom: 10px;\"\u003Eあなたの年齢をお答えください。\u003C\u002Fp\u003E\r\n    \r\n    \u003Cselect id=\"age_dropdown\" name=\"age\" required style=\"font-size: 1.2rem; padding: 10px; width: 100%; max-width: 300px; cursor: pointer;\"\u003E\r\n        \u003Coption value=\"\" disabled selected\u003E選択してください\u003C\u002Foption\u003E\r\n        \u003Coption value=\"回答拒否\"\u003E回答したくない\u003C\u002Foption\u003E\r\n        \u003C\u002Fselect\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
// ドロップダウンのパーツを見つける
const ageDropdown = document.getElementById('age_dropdown');

// 18歳から100歳までの選択肢を自動で作って追加する
for (let i = 1; i <= 100; i++) {
    const option = document.createElement('option');
    option.value = i;               // データとして保存される数字
    option.textContent = i + '歳';  // 画面に表示される文字
    ageDropdown.appendChild(option);
}
}
      },
      "title": "Demographics1"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class=\"page-item page-item-options\"\u003E\r\n    \u003Cp style=\"font-weight: bold; margin-bottom: 10px;\"\u003E現在お住まいの都道府県をお答えください。\u003C\u002Fp\u003E\r\n    \u003Cselect name=\"prefecture\" required style=\"font-size: 1.2rem; padding: 10px; width: 100%; max-width: 300px; cursor: pointer;\"\u003E\r\n        \u003Coption value=\"\" disabled selected\u003E選択してください\u003C\u002Foption\u003E\r\n        \u003Coption value=\"北海道\"\u003E回答したくない\u003C\u002Foption\u003E\r\n        \u003Coption value=\"北海道\"\u003E北海道\u003C\u002Foption\u003E\r\n        \u003Coption value=\"青森県\"\u003E青森県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"岩手県\"\u003E岩手県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"宮城県\"\u003E宮城県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"秋田県\"\u003E秋田県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"山形県\"\u003E山形県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"福島県\"\u003E福島県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"茨城県\"\u003E茨城県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"栃木県\"\u003E栃木県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"群馬県\"\u003E群馬県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"埼玉県\"\u003E埼玉県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"千葉県\"\u003E千葉県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"東京都\"\u003E東京都\u003C\u002Foption\u003E\r\n        \u003Coption value=\"神奈川県\"\u003E神奈川県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"新潟県\"\u003E新潟県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"富山県\"\u003E富山県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"石川県\"\u003E石川県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"福井県\"\u003E福井県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"山梨県\"\u003E山梨県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"長野県\"\u003E長野県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"岐阜県\"\u003E岐阜県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"静岡県\"\u003E静岡県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"愛知県\"\u003E愛知県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"三重県\"\u003E三重県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"滋賀県\"\u003E滋賀県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"京都府\"\u003E京都府\u003C\u002Foption\u003E\r\n        \u003Coption value=\"大阪府\"\u003E大阪府\u003C\u002Foption\u003E\r\n        \u003Coption value=\"兵庫県\"\u003E兵庫県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"奈良県\"\u003E奈良県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"和歌山県\"\u003E和歌山県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"鳥取県\"\u003E鳥取県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"島根県\"\u003E島根県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"岡山県\"\u003E岡山県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"広島県\"\u003E広島県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"山口県\"\u003E山口県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"徳島県\"\u003E徳島県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"香川県\"\u003E香川県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"愛媛県\"\u003E愛媛県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"高知県\"\u003E高知県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"福岡県\"\u003E福岡県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"佐賀県\"\u003E佐賀県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"長崎県\"\u003E長崎県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"熊本県\"\u003E熊本県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"大分県\"\u003E大分県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"宮崎県\"\u003E宮崎県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"鹿児島県\"\u003E鹿児島県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"沖縄県\"\u003E沖縄県\u003C\u002Foption\u003E\r\n        \u003Coption value=\"北海道\"\u003Eその他\u003C\u002Foption\u003E\r\n    \u003C\u002Fselect\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\r\n\u003Cdiv class=\"page-item\" style=\"margin-bottom: 40px; text-align: center;\"\u003E\r\n    \u003Cp style=\"font-weight: bold; margin-bottom: 10px;\"\u003E普段、どのくらいの頻度で映画\u003Cbr\u003E（動画配信サービスやDVDなども含む）を見ますか？\u003C\u002Fp\u003E\r\n    \r\n    \u003Cdiv style=\"display: flex; justify-content: space-between; max-width: 650px; margin: 0 auto; gap: 10px;\"\u003E\r\n        \r\n    \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; flex: 1;\"\u003E\r\n        \u003Cinput type=\"radio\" name=\"movie_frequency\" value=\"1\" required style=\"transform: scale(1.4); margin-bottom: 12px; cursor: pointer;\"\u003E\r\n        \u003Cspan style=\"font-size: 0.8rem; line-height: 1.3; font-weight: bold; text-align: center;\"\u003E年1回以下\u003C\u002Fspan\u003E\r\n    \u003C\u002Flabel\u003E\r\n\r\n    \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; flex: 1;\"\u003E\r\n        \u003Cinput type=\"radio\" name=\"movie_frequency\" value=\"2\" style=\"transform: scale(1.4); margin-bottom: 12px; cursor: pointer;\"\u003E\r\n        \u003Cspan style=\"font-size: 0.8rem; line-height: 1.3; font-weight: bold; text-align: center;\"\u003E半年に1回程度\u003C\u002Fspan\u003E\r\n    \u003C\u002Flabel\u003E\r\n\r\n    \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; flex: 1;\"\u003E\r\n        \u003Cinput type=\"radio\" name=\"movie_frequency\" value=\"3\" style=\"transform: scale(1.4); margin-bottom: 12px; cursor: pointer;\"\u003E\r\n        \u003Cspan style=\"font-size: 0.8rem; line-height: 1.3; font-weight: bold; text-align: center;\"\u003E3ヶ月に1回程度\u003C\u002Fspan\u003E\r\n    \u003C\u002Flabel\u003E\r\n\r\n    \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; flex: 1;\"\u003E\r\n        \u003Cinput type=\"radio\" name=\"movie_frequency\" value=\"4\" style=\"transform: scale(1.4); margin-bottom: 12px; cursor: pointer;\"\u003E\r\n        \u003Cspan style=\"font-size: 0.8rem; line-height: 1.3; font-weight: bold; text-align: center;\"\u003E月1回程度\u003C\u002Fspan\u003E\r\n    \u003C\u002Flabel\u003E\r\n\r\n    \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; flex: 1;\"\u003E\r\n        \u003Cinput type=\"radio\" name=\"movie_frequency\" value=\"5\" style=\"transform: scale(1.4); margin-bottom: 12px; cursor: pointer;\"\u003E\r\n        \u003Cspan style=\"font-size: 0.8rem; line-height: 1.3; font-weight: bold; text-align: center;\"\u003E週1回以上\u003C\u002Fspan\u003E\r\n    \u003C\u002Flabel\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Demographics2"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class=\"page-item\" style=\"max-width: 800px; margin: 0 auto; line-height: 1.8; text-align: left;\"\u003E\r\n    \r\n    \u003Ch2 style=\"text-align: center; margin-bottom: 30px; font-size: 1.5rem; color: #2c3e50;\"\u003E実験の真の目的について（事後説明）\u003C\u002Fh2\u003E\r\n    \r\n    \u003Cp style=\"font-size: 1.1rem; margin-bottom: 20px;\"\u003E\r\n        本日は実験にご参加いただき、誠にありがとうございました。\u003Cbr\u003E\r\n        実は、この実験では事前にお伝えしていた目的とは別に、真の目的がありました。\r\n    \u003C\u002Fp\u003E\r\n    \r\n    \u003Cp style=\"font-size: 1.1rem; margin-bottom: 20px; padding: 15px; background-color: #f9f9f9; border-left: 5px solid #555;\"\u003E\r\n        この実験の真の目的は、映像の\u003Cstrong\u003E「スペクタクル量（視覚的な迫力や刺激の多さ）の違い」\u003C\u002Fstrong\u003Eが、本編への\u003Cstrong\u003E「視聴意欲」\u003C\u002Fstrong\u003Eにどのような影響を与えるかを調査することでした。\r\n    \u003C\u002Fp\u003E\r\n    \r\n    \u003Cdiv style=\"background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 30px; border: 1px solid #e9ecef;\"\u003E\r\n        \u003Ch3 style=\"font-size: 1.1rem; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #3498db; padding-bottom: 5px;\"\u003E\r\n            実験の条件（グループ分け）について\r\n        \u003C\u002Fh3\u003E\r\n        \u003Cp style=\"font-size: 1rem; color: #333; line-height: 1.6; margin-bottom: 0;\"\u003E\r\n            この実験では、参加者の皆様をコンピュータがランダムに以下の\u003Cstrong\u003E3つのグループ\u003C\u002Fstrong\u003Eのいずれかに割り当てていました。\u003Cbr\u003E\u003Cbr\u003E\r\n            ・ \u003Cstrong\u003E条件A：スペクタクル要素をカットした予告編\u003C\u002Fstrong\u003E\u003Cbr\u003E\r\n            ・ \u003Cstrong\u003E条件B：スペクタクル要素が少し含まれる予告編\u003C\u002Fstrong\u003E\u003Cbr\u003E\r\n            ・ \u003Cstrong\u003E条件C：スペクタクル要素が非常に多い予告編\u003C\u002Fstrong\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n            あなたは、この3つのうちのいずれか1つの条件に割り当てられ、その条件に応じた映像を視聴していただきました。\r\n        \u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n\r\n    \u003Cp style=\"font-size: 1.1rem; margin-bottom: 50px;\"\u003E\r\n        事前にお伝えしていた目的は、皆さまの自然な反応や素直な評価を測定するために設けた仮のものです。ご協力いただき、深く感謝申し上げます。\r\n    \u003C\u002Fp\u003E\r\n\r\n    \u003Cp style=\"font-weight: bold; text-align: center; margin-bottom: 25px; font-size: 1.2rem;\"\u003E\r\n        上記の「真の目的（スペクタクル量と視聴意欲の関係）」について、実験中に気づいていましたか？\r\n    \u003C\u002Fp\u003E\r\n\r\n    \u003Cdiv style=\"display: flex; justify-content: center; gap: 80px; margin-bottom: 40px;\"\u003E\r\n        \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer;\"\u003E\r\n            \u003Cinput type=\"radio\" name=\"noticed_purpose\" value=\"yes\" required style=\"transform: scale(1.5); margin-bottom: 12px; cursor: pointer;\"\u003E\r\n            \u003Cspan style=\"font-size: 1.2rem; font-weight: bold; text-align: center;\"\u003Eはい\u003Cbr\u003E（気づいていた）\u003C\u002Fspan\u003E\r\n        \u003C\u002Flabel\u003E\r\n\r\n        \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer;\"\u003E\r\n            \u003Cinput type=\"radio\" name=\"noticed_purpose\" value=\"no\" style=\"transform: scale(1.5); margin-bottom: 12px; cursor: pointer;\"\u003E\r\n            \u003Cspan style=\"font-size: 1.2rem; font-weight: bold; text-align: center;\"\u003Eいいえ\u003Cbr\u003E（気づかなかった）\u003C\u002Fspan\u003E\r\n        \u003C\u002Flabel\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 次へ進むための標準ボタン --\u003E\r\n    \u003Cdiv style=\"text-align: center;\"\u003E\r\n        \u003Cbutton type=\"submit\" style=\"font-size: 1.1rem; padding: 12px 40px; border-radius: 5px; background-color: #eee; border: 1px solid #ccc; cursor: pointer;\"\u003E\r\n            次へ進む\r\n        \u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Debriefing"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 60vh; text-align: center;\"\u003E\r\n\r\n  \u003Ch2 style=\"font-size: 1.5rem; color: #2c3e50; margin-bottom: 30px;\"\u003E\r\n    データ利用に関する再同意のお願い\r\n  \u003C\u002Fh2\u003E\r\n\r\n  \u003Cp style=\"font-size: 1.1rem; color: #333; margin-bottom: 40px; line-height: 1.8;\"\u003E\r\n    実験の真の目的をご理解いただいた上で、\u003Cbr\u003E\r\n    ご自身の回答データを\u003Cstrong\u003E研究に使用することに同意\u003C\u002Fstrong\u003Eいただけますか？\u003Cbr\u003E\r\n    \u003Cspan style=\"font-size: 1rem; color: #e74c3c; display: block; margin-top: 15px;\"\u003E※同意されない場合、データは破棄され、不利益を被ることは一切ありません。\u003C\u002Fspan\u003E\r\n  \u003C\u002Fp\u003E\r\n\r\n  \u003Cdiv style=\"display: flex; gap: 40px; justify-content: center; width: 100%;\"\u003E\r\n    \u003C!-- 同意するボタン --\u003E\r\n    \u003Cbutton id=\"consent-yes\" type=\"button\" style=\"font-size: 1.1rem; padding: 12px 40px; border-radius: 5px; background-color: #eee; border: 1px solid #ccc; cursor: pointer; color: #333;\"\u003E\r\n      同意する\r\n    \u003C\u002Fbutton\u003E\r\n    \r\n    \u003C!-- 同意しないボタン --\u003E\r\n    \u003Cbutton id=\"consent-no\" type=\"button\" style=\"font-size: 1.1rem; padding: 12px 40px; border-radius: 5px; background-color: #fff; border: 1px solid #ccc; cursor: pointer; color: #333;\"\u003E\r\n      同意しない\r\n    \u003C\u002Fbutton\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
const component = this;
const btnYes = document.getElementById("consent-yes");
const btnNo = document.getElementById("consent-no");

if (btnYes && btnNo) {
    btnYes.addEventListener("click", () => {
        component.data.final_consent = "yes";
        component.end();
    });

    btnNo.addEventListener("click", () => {
        component.data.final_consent = "no";
        component.end();
    });
}
}
      },
      "title": "final_consent"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n\u002F* 画面下部の「次へ（Submit）」ボタンを完全に隠す設定 *\u002F\r\nbutton[type=\"submit\"] {\r\n    display: none !important;\r\n}\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Cdiv class=\"page-item\" style=\"max-width: 700px; margin: 0 auto; padding: 50px 20px; text-align: center; line-height: 1.8;\"\u003E\r\n    \r\n    \u003Ch2 style=\"font-size: 1.8rem; margin-bottom: 25px; color: #333;\"\u003E\r\n        実験はすべて終了です。\u003Cbr\u003Eご協力誠にありがとうございました。\r\n    \u003C\u002Fh2\u003E\r\n    \r\n    \u003Cp style=\"font-size: 1.1rem; color: #555; margin-bottom: 40px;\"\u003E\r\n        貴重なお時間を割いてご参加いただき、心より感謝申し上げます。\u003Cbr\u003E\r\n        ご回答いただいたデータは、本研究の貴重な資料として大切に活用させていただきます。\r\n    \u003C\u002Fp\u003E\r\n\r\n    \u003Cdiv style=\"background-color: #f0f4f8; padding: 25px; border-radius: 8px; border: 1px solid #dce4ec; display: inline-block;\"\u003E\r\n        \u003Cp style=\"font-size: 1.2rem; font-weight: bold; margin: 0; color: #2c3e50;\"\u003E\r\n            データは正常に送信されました。\u003Cbr\u003E\r\n            このままブラウザのタブ（またはウィンドウ）を閉じて終了してください。\r\n        \u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n    \r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
// ファイル名をランダムIDにする
const participantID = this.random.uuid4();

// csvファイルで保存する場合
const filename = participantID + "_data.csv";
const data = study.internals.controller.datastore.exportCsv();

// DataPipeへデータを送信する
fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "5E4UMtcUs1MZ", // ←必ずご自身のIDに書き換えてください！
    filename: filename,
    data: data,
  }),
});
}
      },
      "title": "Thanks",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()