Ext.define('TrainingJs.view.lifecycle.LifeCycleEventsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.lifecycleeventscontroller',
    /**
     * Called when the view is created
     */
    mixins: [

    ],
    afterRender: function(view) {
        console.log("onAfterRender");
        console.log(view);
    },
    init: function() {
        var me = this;
        console.log("Logging me from controller");
        console.log(me);
        console.log("Init from controller");
        Ext.getStore('counties').load();
    },
    beforeRender: function(view) {
        console.log("onBeforeRender");
        console.log(view);
    },

});