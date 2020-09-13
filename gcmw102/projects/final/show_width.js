function showReWidth()
{
	var myWidth = 0, myHeight = 0;
	if( typeof( window.innerWidth ) == 'number' ) {
		myWidth = window.innerWidth; myHeight = window.innerHeight;
	} else if( document.documentElement && ( document.documentElement.clientWidth ||document.documentElement.clientHeight ) ) {
		myWidth = document.documentElement.clientWidth; myHeight = document.documentElement.clientHeight;
	} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
		myWidth = document.body.clientWidth; myHeight = document.body.clientHeight;
	}
	
	myInfo = "<span style='color: brown;'><b>col-xl-#</b> (xlarge devices - screen width equal to or greater than 1200px)</span>";
	myInfosmall = "<span style='font-size: .7em; color: brown;'><b>col-xl-#</b></span>";
	
	if (myWidth < 1200)
	{
		myInfo = "<span style='color: purle;'><b>col-lg-#</b> (large devices - screen width equal to or greater than 992px)</span>";
		myInfosmall = "<span style='font-size: .7em; color: purple;'><b>col-lg-#</b></span>";
	
	}
	
	if (myWidth < 992)
	{
		myInfo = "<span style='color: green;'><b>col-md-#</b> (medium devices - screen width equal to or greater than 768px)</span>";
		myInfosmall = "<span style='font-size: .7em; color: green;'><b>col-md-#</b></span>";
	}
	
	if (myWidth < 768)
	{
		myInfo = "<span style='color: blue;'><b>col-sm-#</b> (small devices - screen width equal to or greater than 576px)</span>";
		myInfosmall = "<span style='font-size: .7em; color: blue;'><b>col-sm-#</b></span>";
	}
		
	if (myWidth < 576)
	{
		myInfo = "<span style='color: red;'> <b>col#</b> - (extra small devices - screen width less than 576px)</span>";
		myInfosmall = "<span style='font-size: .7em; color: red;'><b>xtra small</b></span>";
	}
	
	
	if (document.getElementById("thewidth"))
	{
		document.getElementById("thewidth").innerHTML = "<span style='color: red;'>Screen Width: " + myWidth + "</span>&nbsp; - &nbsp" + myInfo;
	}
	
	if (document.getElementById("thewidthsmall"))
	{
		document.getElementById("thewidthsmall").innerHTML = "<span style='font-size: .7em; color: red;'>Width: " + myWidth + "</span>&nbsp; - &nbsp" + myInfosmall;
	}
}

window.onload = function () 
{
	window.onresize = showReWidth;
	showReWidth();
}
