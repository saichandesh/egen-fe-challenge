QUnit.test( "getContent function behaviour", function( assert ) {
  	$('#jsinput').val('function log(result) {document.write(result);}var x=7;function sum(y){return x+y;}log(sum(1));log("message");');
  	$('#run').trigger('click');
  	res = $('#output').contents()[0].body.innerHTML;
  	assert.ok( res === '8message', "Passed!" );
});