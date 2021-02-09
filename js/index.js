let list = $(".list");

list.hover(
    function() {
        $( this ).append( $( "<input type='button' class='button-remove' name='addItem' onclick='removeElementFromList(this)' value='X'>" ) );
    }, function() {
        $( this ).find( ".button-remove" ).last().remove();
    }
);

$("input:checkbox").click(
    function() {
        $(this).next().toggleClass("crossed-out");
    }
);

function addElementToList() {
    let element = '<li><input type="checkbox">';
    let textElement = $(".newItemField");
    let text = textElement.val();
    if (text !== "") {
        list.append(element + text + " </li>");
        $("li").last().hover(
            function() {
                $( this ).append( $( "<input type='button' class='button-remove' name='addItem' onclick='removeElementFromList(this)' value='X'>" ) );
            }, function() {
                $( this ).find( ".button-remove" ).last().remove();
            }
        );
        textElement.val("");
    }
}

function removeElementFromList(element) {
    $(element).parent().remove();
}