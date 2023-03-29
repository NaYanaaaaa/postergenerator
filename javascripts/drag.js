var selectedObjs;
var draggableOptions = {
    start: function(event, ui) {
        //get all selected...
        selectedObjs = $('div.selected').filter('[id!='+$(this).attr('id')+']');
    },
    drag: function(event, ui) {
        var currentLoc = $(this).position();
        var orig = ui.originalPosition;

        var offsetLeft = currentLoc.left-orig.left;
        var offsetTop = currentLoc.top-orig.top;

        moveSelected(offsetLeft, offsetTop);
    }       
};

$(document).ready(function() {
    $('#dragOne, #dragTwo, #dragThree, #dragFour, #dragFive, #dragSix').draggable(draggableOptions);
});

function moveSelected(ol, ot){
    console.log(selectedObjs.length);
    selectedObjs.each(function(){
        $this =$(this);
        var pos = $this.position();

        var l = $this.context.clientLeft;
        var t = $this.context.clientTop;

        $this.css('left', l+ol);
        $this.css('top', t+ot);
    })
}