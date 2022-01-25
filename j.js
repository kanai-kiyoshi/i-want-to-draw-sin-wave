setInterval(funk,50);
let time0=new Date(), time1=new Date();
let theta=0;
let pi=Math.PI;
function funk(){
	time1=new Date();
	const radian=theta/180*pi;

	x=Math.cos(radian);
	y=Math.sin(radian);

	// circle
	let dotCircle=document.createElement('div');
	dotCircle.setAttribute('class','dot');
	dotCircle.style.left=x*180+180;
	dotCircle.style.top=-y*180+180;
	let circleCanvas=document.getElementById('circleCanvas');
	circleCanvas.appendChild(dotCircle);
	// radius
	let circleCircle=document.createElement('div');
	circleCircle.setAttribute('class','dot');
	circleCircle.style.left=x*18+180;
	circleCircle.style.top=-y*18+180;
	let ccCanvas=document.getElementById('circleCircle');
	ccCanvas.appendChild(circleCircle);
	document.getElementById('radius').style.transform=`rotate(${-theta}deg) translateX(90px)`;
	// radius unit
	document.getElementById('radiusUnit').style.transform=`rotate(${-theta}deg) translate(90px, -20px)`;

	// rotate line
	let radius=document.getElementById('radianText');
	radius.innerHTML=(theta/180).toFixed(2)+'&#x3C0;';
	// vertical line
	let verticalLine=document.getElementById('verticalLine');
	verticalLine.style.left=x*180+180;
	verticalLine.style.top=-y*180+180;
	verticalLine.style.width=-x*180+180+10+theta;
	// vertical unit
	let verticalUnit=document.getElementById('verticalUnit');
	verticalUnit.style.left=360+20;
	if(y<0){
		verticalUnit.style.top=-y*180+180-10;
	}
	else{
		verticalUnit.style.top=-y*180+180+10;
	}
	verticalUnit.innerText=y.toFixed(2);

	// sine wave
	let dotSine=document.createElement('div');
	dotSine.setAttribute('class','dot');
	dotSine.style.left=theta;
	dotSine.style.top=-y*180+180;
	let sineCanvas=document.getElementById('sineCanvas');
	sineCanvas.appendChild(dotSine);
	// horizontial dot
	let horizontialLine=document.getElementById('horizontialLine');
	horizontialLine.style.left=360+10;
	horizontialLine.style.top=-y*180+180;

	theta++;
	if(theta===360){
		theta=0;
		sineCanvas.innerHTML='';
		circleCanvas.innerHTML='';
		ccCanvas.innerHTML='';
	}
	time0=time1;
};
