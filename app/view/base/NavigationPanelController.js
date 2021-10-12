Ext.define('TrainingJs.view.base.NavigationPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.navigationpanelcontroller',
    /**
     * Called when the view is created
     */
    mixins: [

    ],
    init: function() {},
    onItemClick: function(sender, info, eOpts) {
        // console.log(info.data.xtype);
        // console.log(info.data.leaf);
        // switch (info.data.id) {
        //     case 'users':

        //         break;

        //     default:
        //         break;
        // }
        if (info.data.leaf) {
            //reference to the center panel
            var center = Ext.ComponentQuery.query('viewport  #center')[0];
            var item = {
                title: info.data.text,
                closable: true,
                items: [{
                    xtype: info.data.xtype
                }]
            };
            center.add(item);
            center.setActiveTab(item);

        }
    }
});