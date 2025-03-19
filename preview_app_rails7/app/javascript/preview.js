document.addEventListener('turbo:load', function(){
  // 新規投稿・編集ページのフォームを取得
  const postForm = document.getElementById('new_post');

   // プレビューを表示するためのスペースを取得
  const previewList = document.getElementById('previews');

  // 新規投稿・編集ページのフォームがないならここで終了。「!」は論理否定演算子。
  if (!postForm) return null;
  console.log("preview.jsが読み込まれました");

    // input要素を取得
    // const fileField = document.querySelector('input[type="file"][name="post[image]"]');
    const fileField = document.querySelector('input[type="file"][name="post[images][]"]');
    // input要素で値の変化が起きた際に呼び出される関数
    fileField.addEventListener('change', function(e){

    // data-index（何番目を操作しているか）を取得
    const dataIndex = e.target.getAttribute('data-index');
    console.log( dataIndex);
    
    // 古いプレビューが存在する場合は削除
    const alreadyPreview = document.querySelector('.preview');
      if (alreadyPreview) {
        alreadyPreview.remove();
      };
      console.log("input要素で値の変化が起きました");
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);
      console.log(blob);

      // 画像を表示するためのdiv要素を生成
      const previewWrapper = document.createElement('div');
      previewWrapper.setAttribute('class', 'preview');

      // 表示する画像を生成
      const previewImage = document.createElement('img');
      previewImage.setAttribute('class', 'preview-image');
      previewImage.setAttribute('src', blob);

      // 生成したHTMLの要素をブラウザに表示させる
      previewWrapper.appendChild(previewImage);
      previewList.appendChild(previewWrapper);

      // 2枚目用のfile_fieldを作成
      const newFileField = document.createElement('input');
      newFileField.setAttribute('type', 'file');
      newFileField.setAttribute('name', 'post[images][]');

      // 生成したfile_fieldを表示
      const fileFieldsArea = document.querySelector('.click-upload');
      fileFieldsArea.appendChild(newFileField);
    });
});