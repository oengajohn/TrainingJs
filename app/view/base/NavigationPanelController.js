Ext.define('TrainingJs.view.base.NavigationPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.navigationpanelcontroller',
    /**
     * Called when the view is created
     */
    mixins: [

    ],
    init: function() {},
    onItemClick: function(treepanel, record, item, index, e, eOpts) {

        var centerPanel = Ext.ComponentQuery.query('mainviewport #center')[0];
        console.log(centerPanel);
        //check if exits in the panel if so get and show it as active item and if not create a new item and show it as 
        // active
        var newItem = centerPanel.items.findBy(function(item, index) {
            return record.get('text') === item.title;
        });

        console.log(record);
        if (newItem === null || newItem === undefined) {
            newItem = centerPanel.add({
                xtype: record.get('xtype'),
                iconCls: record.get('iconCls'),
                title: record.get('text'),
                closable: true,
            });
        }
        centerPanel.setActiveItem(newItem);
    }
});