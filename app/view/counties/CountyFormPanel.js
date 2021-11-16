Ext.define('TrainingJs.view.counties.CountyFormPanel', {
    extend: 'Ext.form.Panel',
    // xtype: 'countyformpanel', 
    alias: 'widget.countyformpanel',
    reference: 'countyformpanel',
    layout: 'form',

    viewModel: {
        type: 'countyformpanelviewmodel'
    },

    defaults: {
        xtype: 'textfield',
        allowBlank: false,
    },
    items: [{
            fieldLabel: 'Id',
            itemId: 'id',
            bind: {
                value: '{record.id}',
            },
        },
        {
            fieldLabel: 'Name',
            bind: {
                value: '{record.name}',
            },
        },
        {
            fieldLabel: 'Code',
            bind: {
                value: '{record.code}',
            },
        },
        {
            fieldLabel: 'Reference Key',
            readOnly: true,
            bind: {
                value: '{referenceKey}',

            },
        }
    ],
    buttons: [{
        text: 'OK',
    }]
});