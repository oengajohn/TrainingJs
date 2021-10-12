Ext.define('TrainingJs.view.base.NavigationPanel', {
    extend: 'Ext.tree.Panel',
    xtype: 'navigationpanel',
    controller: 'navigationpanelcontroller',
    rootVisible: false,
    store: {
        type: 'menu'
    },
    listeners: {
        itemclick: 'onItemClick',
    }

});