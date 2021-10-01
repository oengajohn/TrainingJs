/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('TrainingJs.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function(sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function(choice) {
        if (choice === 'yes') {
            //
        }
    },
    init: function() {
        var main = this.getView();
        var studentView = main.lookupReference('studentview');
        console.log(studentView);
        var store = studentView.getStore();
        store.load();

    }

});