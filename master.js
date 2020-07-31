console.log("Hello");

function calljs()
{
	var branch = document.getElementById('Branch').value;
	var batch  = document.getElementById('Batch').value;
	var sequence = document.getElementById('sequence').value;
	var valid = true;
	var d = new Date();
	if (batch.length>2 || batch.length<1)
    {
     alert("Invalid Batch Number");
     valid=false;
    } 
  	
  	if(sequence.length>4 || sequence.length<1)
  	{
  		alert("Invalid Sequence Number")
  		valid=false;
  	}
	year = d.getFullYear();
	year = year.toString().slice(2,4);
	batch = batch.toString();
	sequence = sequence.toString();
	if(batch.length<2)
	{
		batch = "0"+batch;
	}
	if(sequence.length<2)
	{
		sequence = "000"+sequence;
	}
	else if(sequence.length<3)
	{
		sequence = "00"+sequence;
	}
	else if(sequence.length<4)
	{
		sequence = "0"+sequence;
	}
	var prn;
	if(valid)
	{
		prn = "PRN No is : "+year+branch.toString()+batch+sequence;
		alert(prn);
		// document.getElementById("prn").innerHTML =  prn;
	}
}