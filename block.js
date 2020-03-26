//JavaScriptのコード
	//canvasに描画するために、容代への参照を取得
	//<canvas>要素への参照をcanvasに保存
	const canvas = document.getElementById("myCanvas");
	//2D描画コンテキストを保存するためにctx変数を作成
	const ctx = canvas.getContext("2d");

	//赤の四角形を描画
	//全ての命令はbeginPath()メソッドと closePath()メソッドの間に記述
	ctx.beginPath();
	//最初の2つの値は左上の角のキャンバス上での座標を指定あとの2つの値は幅と高さを指定
	ctx.rect(20,40,50,50);//四角形の定義（ピクセル単位）
	ctx.fillStyle = "red";//fill()メソッドで用いられる色情報を保存する
	ctx.fill();
	ctx.closePath();

	//緑の円を描画
	ctx.beginPath();
	//円の中心のｘ、ｙ座標、円の半径、開始角度と終了角度(円を描き始める時点の角度と描き終えたあとの角度（ラジアン）)描く方向 (時計回りはfalseで、デフォルト。半時計回りはtrue。（省略可能）) 
	ctx.arc(240,160,20,0,Math.PI*2,false);
	ctx.fillStyle="green";
	ctx.fill();
	ctx.closePath();

	//縁だけ青の四角形を表示
	ctx.beginPath();
	ctx.rect(160,10,100,40);
	//図形をfill()で塗りつぶすかわりにstroke()で縁だけ色を付けることも出来る
	ctx.strokeStyle="rgba(0,0,255,1)";
	ctx.stroke();
	ctx.closePath();