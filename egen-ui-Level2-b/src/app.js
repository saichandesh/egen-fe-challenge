
function getContent(){
	var content = document.getElementById("jsinput").value;
	output.iframe = document.getElementsByTagName('iframe')[0].contentWindow.document;
	output.iframe_head = (output.iframe).getElementsByTagName('head')[0];
	output.iframe.body.innerHTML="";
	output.iframe_script = (output.iframe_head).appendChild((output.iframe).createElement('script'));
	(output.iframe_script).textContent = '//<![CDATA['+"\n"+content+"\n"+'//]]>';	    
}