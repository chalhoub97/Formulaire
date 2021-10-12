// JavaScript Document
function testRB(radio) {
      for (var i=0; i<radio.length;i++) {
        if (radio[i].checked) {
          alert("Civilité : "+radio[i].value)
        }
    }
} 
   
function verifNom(nom) {
	if (nom.value.length==0)
		alert("Veuillez saisir un nom");
}

function verifCode(code) {
	s=code.value;
	n=s.length;
	if ((n!=4)||(isNaN(s))){
		alert("Veuillez saisir un code postal valide");
		document.form1.code.select();
	}
	else
		alert("Code valide");
}

function testCB(lang){
        if ((lang[0].checked)&&(lang[2].checked)&&(!lang[1].checked)) 
          alert("Excellente réponse");
	else
          alert("Mauvaise réponse");   
}

function checkAll(lang){
        for (var i=0; i<lang.length;i++) {
			lang[i].checked = true;     
        }
}

function unCheckAll(lang){
	        for (var i=0; i<lang.length;i++) {
				lang[i].checked = false;     
        }
  
}

