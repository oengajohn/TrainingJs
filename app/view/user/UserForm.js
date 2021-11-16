Ext.define('TrainingJs.view.user.UserForm', {
    extend: 'Ext.window.Window',
    xtype: 'userform',
    // controller: '',
    autoShow: true,
    items: [{
        xtype: 'form',
        reference: 'add-form',
        jsonSubmit: true,
        defaults: {
            anchor: '100%'
        },
        //content of the form
        items: [{
                xtype: 'textfield',
                name: 'company.companyName',
                fieldLabel: 'Company Name'
            }, {
                xtype: 'numberfield',
                itemId: 'id',
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
                name: 'address.suite',
                fieldLabel: 'Suite'
            }, , {
                xtype: 'textfield',
                name: 'address.geo.lat',
                fieldLabel: 'Lat'
            }
        ],
        // buttons: [{
        //         xtype: 'button',
        //         text: 'Reset',
        //         handler: 'onReset'
        //     },
        //     {
        //         xtype: 'button',
        //         text: 'Save',
        //         handler: 'onSave'

        //     }
        // ]
    }]
});