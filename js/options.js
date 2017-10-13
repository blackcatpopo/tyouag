window.addEventListener('load', function(){
	chrome.storage.local.get(function(items){
		console.log(items);
		Array.apply(null, document.querySelectorAll("input[name='sex']")).forEach( function(e){
			if(e.value == items.sex){
				e.checked = true;
			}

		});
		document.querySelector("input[name='birthyear']").value = items.birthyear;
		document.querySelector("select[id='prefectures']").value = items.prefectures;
		document.querySelector("select[id='job']").value = items.job;
		Array.apply(null, document.querySelectorAll("input[name='location']")).forEach(function(e){
			if(e.value == items.reception_location){
				e.checked = true;
			}
		});
	});
});


document.querySelector("button[id='save']").addEventListener('click', function(event){
	sex = document.querySelector("input[name='sex']:checked");
	birthyear = document.querySelector("input[name='birthyear']");
	prefectures = document.querySelector("select[id='prefectures'] option:checked");
	job = document.querySelector("select[id='job'] option:checked");
	reception_location = document.querySelector("input[name='location']:checked");
	if(sex && birthyear && prefectures && job && reception_location){
		chrome.storage.local.set({
			'sex': sex.value,
			'birthyear' : birthyear.value,
			'prefectures' : prefectures.value,
			'job' : job.value,
			'reception_location' : reception_location.value,
		}, function(){
			document.querySelector("div[id='message']").textContent = "保存した";
		});	
	}else {
		document.querySelector("div[id='message']").textContent = "未入力か未選択の項目があります。";
	}
}, false);
