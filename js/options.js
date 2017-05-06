function save_options() {
	var sex = document.querySelector("input[name='sex']:checked");
	var birthyear = document.querySelector("input[name='birthyear']").value;
	var prefectures = document.querySelector("select[id='prefectures'] option:checked");
	var job = document.querySelector("select[id='job'] option:checked").value;
	var reception_location = document.querySelector("input[type='radio']:checked");
	if( !sex ){
		alert( "性別を選択してください" );
		return false;
	}
	if( birthyear == "" ){
		alert( "誕生年を入力してください。 ");
		return false;
	}
	if( job == "null" ) {
		alert( "職業を選択してください" );
		return false;
	}
	if( !reception_location ){
		alert( "受信環境を選択してください" );
		return false;
	}
	console.log("save_options()テスト" );
}

function test() {
	console.log( "test()テスト" );
}
function restore_options() {
	document.addEventListener( 'DOMContentLoaded', function() {
		console.log("restore_options()test");
		document.querySelector("button[id='save']").addEventListener( 'click', test, false );
		document.querySelector("button[id='save']").addEventListener( 'click', save_options, false );
	}, false);
}
