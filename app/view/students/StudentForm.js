Ext.define('TrainingJs.view.students.StudentForm', {
    extend: 'Ext.window.Window',
    xtype: 'studentform',
    controller: 'studentformcontroller',
    width: 520,
    shadow: true,
    modal: true,
    autoShow: true,
    title: 'Student Form',
    //content of window -form
    items: [{
        xtype: 'form',
        reference: 'add-form',
        jsonSubmit: true,
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
                name: 'regNo',
                fieldLabel: 'Registration Number'
            },
            {
                xtype: 'textfield',
                name: 'county',
                fieldLabel: 'County'
            }
        ],
        buttons: [{
                xtype: 'button',
                text: 'Reset',
                handler: 'onReset'
            },
            {
                xtype: 'button',
                text: 'Save',
                handler: 'onSave'

            }
        ]
    }]
});