document.querySelector( "input[name='sex']" ).checked = true;
document.querySelector( "input[name='birth_year']" ).value = "1993";
document.querySelector( "select[name='prefectures'] option[value='27']" ).selected = true;
document.querySelector( "select[name='job'] option[value='2']" ).selected = true;
document.querySelector("input[name='location']").checked= true;
var form = document.querySelector("form[name='form1']");
form.action = "form_ins4-sp.php";
form.submit();