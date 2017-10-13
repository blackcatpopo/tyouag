window.load()

document.querySelector("button").addEventListener("click", save_options());

console.log("test");

function save_options() {
//	var sex = document.querySelector("input[name='sex']:checked");
//	var birthyear = document.querySelector("input[name='birthyear']").value;
//	var prefectures = document.querySelector("select[id='prefectures'] option:checked");
//	var job = document.querySelector("select[id='job'] option:checked").value;
//	var reception_location = document.querySelector("input[name='location']:checked");
	console.log("チェック処理前");
	//if( !sex ){
	//	alert( "性別を選択してください" );
	//	return false;
	//}
	//if( birthyear == "" ){
	//	alert( "誕生年を入力してください。 ");
	//	return false;
	//}
	//if( birthyear.match( /[^0-9\s]+/ ) ){
	//	alert( "誕生年は半角数字のみで入力してください" );
	//	return false;
	//}
	//if( birthyear <= 1800 || 2100 <= birthyear ){
	//	alert( "誕生年の範囲外です" );
	//	return false;
	//}
	//if( job == "null" ) {
	//	alert( "職業を選択してください" );
	//	return false;
	//}
	//if( !reception_location ){
	//	alert( "受信環境を選択してください" );
	//	return false;
	//}
		//'sex' : sex.value,
		//'birthyear' : birthyear,
		//'prefecutres' : prefectures.value,
		//'job' : job,
		//'reception_location' : reception_location.value,
//	}

//	var theValue = "aaa";

//	chrome.storage.local.set({'value': theValue});
//}
	//	console.log("stored");
//	chrome.storage.local.set({
//		'sex' : "a", 	
//	}, function(){
//		var status = document.querySelector("div[id='status']");
//		status.textContent = "保存しました";
//		setTimeout( function() {
//			status.textContent = '';
//		}, 750);
//		console.log("stored");
//	});
}

//function restore_options() {
//	document.querySelector("button[id='save']").addEventListener( 'click', save_options, false );
//	chrome.storage.sync.get(defaults, function(items) {
//		document.querySelector("input[name='birthyear']").value = items.birthyear;
//	});
//}
