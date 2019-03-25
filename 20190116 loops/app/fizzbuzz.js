let txt = '';
for(let i = 0; i < 1000; i++){
	txt = '';
//	if(i % 3 == 0){
//		txt += ' fizz';
//	}
//	if(i % 5 == 0){
//		txt += ' bizz';
//	}
//	
	
	switch(true){
		case i % 3 == 0 && i % 5 == 0:{
			txt = ' fizz bizz';
			break;
		}
		case i % 3 == 0:{
			txt = ' fizz';
			break;
		}
		case i % 5 == 0:{
			txt = ' bizz';
			break;
		}
	}
	console.log(i + txt );
}