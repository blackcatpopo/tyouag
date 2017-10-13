	chrome.storage.local.get(function(items){
		console.log(items);
		Array.apply(null, document.querySelectorAll("input[name='sex']")).forEach( function(e){
			if(e.value == items.sex){
				e.checked = true;
				console.log(e.value);
			}

		});
		document.querySelector("input[name='birth_year']").value = items.birthyear;
		document.querySelector("select[name='prefectures']").value = items.prefectures;
		document.querySelector("select[name='job']").value = items.job;
		Array.apply(null, document.querySelectorAll("input[name='location']")).forEach(function(e){
			if(e.value == items.reception_location){
				e.checked = true;
			}
		});
	});
	var form = document.querySelector("form[name='form1']");
	form.action = "form_ins4-sp.php";
	form.submit();
