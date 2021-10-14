"use strict";

//----------------------------------------------------------------
function submitForm(elem, names) {
    console.log(names);
    let form = $(elem);
    let x = 1;
    for (let field of names) {
        console.log(field);
        console.log(form.find('[name="' + field + '"]').val());
        x = x & validate(form.find('[name="' + field + '"]'));
    }
    if (x === 0)
        form.submit();

};

function validate(elem) {
    let element = $(elem);
    console.log(element);
    console.log(element.val());
    let errorElem = $(".for-alert")
    console.log("error element", errorElem);

    if (element.val() === "") {
        console.log("Note Title cannot be empty");
        errorElem.text("Note Title cannot be empty");
        errorElem.addClass("alert-error").addClass("alert");
        errorElem.show();
        return 1;
    } else {
        console.log("hiding");
        errorElem.hide();
        return 0;
    }

};