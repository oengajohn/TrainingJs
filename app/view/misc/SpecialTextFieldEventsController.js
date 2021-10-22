Ext.define('TrainingJs.view.misc.SpecialTextFieldEventsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.specialtextfieldeventscontroller',
    /**
     * Called when the view is created
     */
    mixins: [],
    init: function() {

    },
    onFocusSearchFieldFocused: function() {
        console.log("Field was focused");
    },
    onSpecialKeyPress: function(field, e, eOpts) {
        var me = this,
            view = me.getView(),
            model = me.getViewModel(),
            refs = me.getReferences(),
            form = view.lookupReference('form').getForm();

        console.log(e.getKeyName());
        if (e.getKey() == e.ENTER) {
            form.submit({
                method: 'GET',
                url: 'http://localhost:3000/counties',
                success: function(form, action) {
                    console.log(action.responseText);
                },
                failure: function(form, action) {
                    console.log(action.responseText);
                }
            });
        }
    },
    onValueChange: function(field, newValue, oldValue, eOpts) {
        this.doRecalculate();
    },
    onFocusLeave: function(field, e, eOpts) {
        this.doRecalculate();
    },
    doRecalculate: function() {
        var me = this,
            numberOne = me.lookupReference('numberOne'),
            numberTwo = me.lookupReference('numberTwo'),
            resultField = me.lookupReference('result');
        var result = me.sum(
            numberOne.getValue(),
            numberTwo.getValue()
        );
        resultField.setValue(result);
    },
    sum: function(a, b) {
        return a + b;
    }
});