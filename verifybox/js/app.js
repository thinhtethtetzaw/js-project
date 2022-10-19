// UI
const codes = document.querySelectorAll('.code');
// console.log(codes)
// console.log(codes[0]);

codes[0].focus();

codes.forEach((code,index)=>{
	// console.log(code)
	// keyup nk so yin setTimeout tg ma lo buu
	code.addEventListener('keydown',(e)=>{
		if(e.key >= 0 && e.key <= 9){
			// codes[index+1].focus(); d tine htrr yin 6 lone myout mr error tat

			// for onlyone num
			codes[index].value = '';

			//5 nk ma nyi ma chin
			if(index !== 5){
				// codes[index+1].focus();
				setTimeout(()=>codes[index+1].focus(),10)
			}

		}else if(e.key === "Backspace"){
			if(index !== 0){
				setTimeout(()=>codes[index-1].focus(),10);
			}
		}	

	})
})
