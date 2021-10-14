Ext.define('TrainingJs.view.user.UserViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userviewcontroller',
    onVbox: function() {
        Ext.create({
            xtype: 'borderlayout'
        });
    },
    onShowForm: function(btn, e, eOpts) {
        Ext.create({
            xtype: 'formfields'
        });
    }
})