Ext.define('TrainingJs.view.user.FormFieldsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formfieldscontroller',
    /**
     * Called when the view is created
     */
    mixins: [],
    init: function() {
        Ext.getStore('counties').load();

    },
    onSubmit: function(btn, e, eOpts) {
        var me = this,
            window = me.getView(),
            model = me.getViewModel(),
            refs = me.getReferences(),
            form = window.lookupReference('form').getForm();
        if (form.isValid()) {
            form.submit({
                url: 'jsonplaceholder.typicode/users/',
                success: function(form, action) {

                },
                failure: function(form, action) {

                },
            })
        }

    }
});