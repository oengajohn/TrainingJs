Ext.define('TrainingJs.view.base.MainViewPortController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainviewportcontroller',
    /**
     * Called when the view is created
     */
    mixins: [

    ],
    init: function() {
        var me = this,
            viewport = me.getView(),
            center = viewport.lookupReference('center');
        // console.log(center);
    }
});