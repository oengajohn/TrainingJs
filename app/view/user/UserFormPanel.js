Ext.define('TrainingJs.view.user.UserFormPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'userformpanel',
    reference: 'add-form',
    controller: 'userformpanelcontroller',
    jsonSubmit: true,
    width: '100%',
    defaults: {
        anchor: '100%'
    },
    //content of the form
    items: [{
            xtype: 'numberfield',
            name: 'id',
            fieldLabel: 'Student ID',
            minValue: 0,
            readOnly: true,
        },
        {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Name'
        },

        {
            xtype: 'textfield',
            name: 'company.companyName',
            fieldLabel: 'Company Name'
        },
        {
            xtype: 'textfield',
            name: 'address.suite',
            fieldLabel: 'Suite'
        }, , {
            xtype: 'textfield',
            name: 'address.geo.lat',
            fieldLabel: 'Lat'
        }
    ],
    buttons: [{
            xtype: 'button',
            text: 'Reset',
            // handler: 'onReset'
        },
        {
            xtype: 'button',
            text: 'Save',
            // handler: 'onSave'

        }
    ]


});