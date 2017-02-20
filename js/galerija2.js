var i = 1;
		var check = false;
	function slajd()
	{
		check = true;
		slajder.src = eval("image" + i + ".src");
		if(i<9)
			i++;
		else
			i=1;
		setTimeout("slajd()", 3000);
	}
	function prethodna()
	{
		if(!check){
		if(i>1)
			i--;
		else
			i=9;
		}
		else
		{
			if(i>2)
			i-=2;
			else if(i==2)
				i=9;
			else if(i==1)
				i=8;
			check=false;
		}
		slajder.src = eval("image" + i + ".src");
	}
	function sledeca()
	{
		if(!check){
		if(i<9)
			i++;
		else
			i=1;	
		}
		else
			check=false;
		slajder.src = eval("image" + i + ".src");
	}
	slajd();