let list = $(".list");

function addElementToList() {
    let element = '<li><input type="checkbox" class="checkbox" onclick="toggleDone(this)"><span>';
    let textElement = $(".newItemField");
    let text = textElement.val();
    if (text !== "") {
        list.append(element + text + "</span><input type=\"button\" class=\"button-remove invisible\" name=\"addItem\" onclick=\"removeElementFromList(this)\" value=\"X\">");
        textElement.val("");
    }
}

function removeElementFromList(element) {
    $(element).parent().remove();
}

function toggleDone(element) {
            $(element).next().toggleClass("crossed-out");
}
