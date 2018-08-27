$(document).on('click','#search-box',function(e) {
    let query = $('#search').val();
    $( "#page" ).remove();
    $( ".browser" ).append( $(`<iframe src="${query}" width="353" height="680" id="page" align="left"></iframe>`) );
  });

onkeypress = function(event) {
    if(event.keyCode == 13) {
        let query = $('#search').val();
        $( "#page" ).remove();
        $( ".browser" ).append( $(`<iframe src="${query}" width="353" height="680" id="page" align="left"></iframe>`) ); 
    }
}