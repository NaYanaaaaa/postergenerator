// var selectedObjs;
// var draggableOptions = {
//     start: function(event, ui) {
//         //get all selected...
//         selectedObjs = $('div.selected').filter('[id!='+$(this).attr('id')+']');
//     },
//     drag: function(event, ui) {
//         var currentLoc = $(this).position();
//         var orig = ui.originalPosition;

//         var offsetLeft = currentLoc.left-orig.left;
//         var offsetTop = currentLoc.top-orig.top;

//         moveSelected(offsetLeft, offsetTop);
//     }       
// };

// $(document).ready(function() {
//     $('#dragOne, #dragTwo, #dragThree, #dragFour, #dragFive, #dragSix').draggable(draggableOptions);
// });

// function moveSelected(ol, ot){
//     console.log(selectedObjs.length);
//     selectedObjs.each(function(){
//         $this =$(this);
//         var pos = $this.position();

//         var l = $this.context.clientLeft;
//         var t = $this.context.clientTop;

//         $this.css('left', l+ol);
//         $this.css('top', t+ot);
//     })
// }
$( function() {
    var $constants = $( ".constants" ),
    $maindiv = $( ".maindiv" );
    
    $maindiv.droppable({
    accept: ".constants > .cnst",
    drop: function( event, ui ) {
    deleteImage( ui.draggable );
    }
    });
    });
    
    function deleteImage( $item ) {
    (function($) {
    $item.addClass("item");
    $(".item")
    })(jQuery);
    $item.fadeOut(function() {
    var $list = $( ".item", ".elem_1", ".elem_2", ".elem_3", ".elem_4", ".maindiv" ).length ?
    $( ".item", ".elem_1", ".elem_2", ".elem_3", ".elem_4", ".maindiv" ) :
    $(this).removeAttr("style");
    $(this).appendTo(".maindiv");
    $(this).removeClass("item");
    $(this).css({'top': '8vw', 'left':'7vw', 'animation':'none'});
    $(this).addClass("placed");
    });
    }