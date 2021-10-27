Ext.define('TrainingJs.view.counties.CountyPanel', {
    extend: 'Ext.Panel',
    xtype: 'countypanel',

    items: [{
            xtype: 'countiesview'
        },
        {
            xtype: 'countyformpanel'
        }
    ]
});