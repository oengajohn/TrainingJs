Ext.define('TrainingJs.view.auth.LoginWindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginwindowcontroller',
    /**
     * Called when the view is created
     */
    mixins: [

    ],
    init: function() {

    },
    onLogin: function(btn, e, eOpts) {
        var me = this,
            view = me.getView(),
            model = me.getViewModel(),
            refs = me.getReferences(),
            form = me.lookup('login-form').getForm();
        // submit form form
        localStorage.setItem('isLoggedIn', true);
        view.destroy();
        Ext.widget('mainviewport');
        // success => destroy the form => create the main view



    }
});