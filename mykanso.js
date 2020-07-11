'use strict';
const daiNameInput = document.getElementById('dai-name');
const endingInput = document.getElementById('ending');
const pageInput = document.getElementById('page')
const pageNameInput = document.getElementById('page-name')
const kansoInput = document.getElementById('kanso')

const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');

assessmentButton.onclick = () => {
  const daiName = daiNameInput.value;
  const ending = endingInput.value
  const page = pageInput.value
  const pageName = pageNameInput.value
  const kansou = kansoInput.value

  /**
  * 指定した要素の子どもを全て削除する
  * @param {HTMLElement} element HTMLの要素
  */
  function removeAllChildren(element) {
    while (element.firstChild) { // 子どもの要素があるかぎり削除
      element.removeChild(element.firstChild);
    }
  }
  // 診断結果表示エリアの作成
  removeAllChildren(resultDivided);
  const header = document.createElement('h3');
  header.innerText = 'また一つ素晴らしい作品をこの世に生んでくださってありがとうございます。';
  resultDivided.appendChild(header);

  const paragraph = document.createElement('p');
  const result = ` 先日拝見した、${daiName}という作品。大変、心に響きました。
  この気持ち、そのままにしておくことが出来ず、勢いのままに書いた文章をお送りしてしまうこと。どうぞ、お許しください。
  
  ${ending}
  特に${pageName}${page}
  ${kansou}たいへん印象に残りました。私が一番好きな部分です。
  多分この先、ふとした瞬間。何度も思い返しては、こちらの作品に初めて触れた時の感情に浸ってしまうと思います。
  素敵な作品を、ありがとうございました。
                 
 お忙しいかと思いますが、無理のない範囲で創作を続けていただけると、大変うれしいです。
 最後になりましたが、これからもずっと応援しております。`;
  paragraph.innerText = result;
  resultDivided.appendChild(paragraph);
};
