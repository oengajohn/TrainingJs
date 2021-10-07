Ext.define('TrainingJs.view.layouts.FormLayout', {
    extend: 'Ext.window.Window',
    xtype: 'formlayout',

    autoShow: true,
    width: 520,
    shadow: true,
    modal: true,
    autoShow: true,
    closable: true,
    title: 'V Box layout',
    // height: 400,
    // layout: 'fit',
    items: [{
            xtype: 'form',
            // layout: 'form',
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },
            items: [{
                fieldLabel: 'First Name',
                name: 'first',
                allowBlank: false,

            }, {
                fieldLabel: 'Last Name',
                name: 'last',
                anchor: '80%'
            }, {
                fieldLabel: 'Company',
                name: 'company',
                anchor: '50%'
            }, {
                fieldLabel: 'Email',
                name: 'email',
                vtype: 'email',
            }, {
                fieldLabel: 'DOB',
                name: 'dob',
                xtype: 'datefield',
                anchor: '-20%'

            }, {
                fieldLabel: 'Age',
                name: 'age',
                xtype: 'numberfield',
                minValue: 0,
                maxValue: 100
            }, {
                xtype: 'timefield',
                fieldLabel: 'Time',
                name: 'time',
                minValue: '8:00am',
                maxValue: '6:00pm'
            }]
        }

    ]
});