Ext.define('TrainingJs.view.students.StudentFormPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'studentformpanel',
    reference: 'studentformpanel',
    layout: 'form',

    controller: 'studentformpanelcontroller',
    defaults: {
        xtype: 'textfield',
        allowBlank: false,
    },
    items: [{
            fieldLabel: 'Student ID',
            name: 'id'
        },
        {
            fieldLabel: 'Student Name',
            name: 'name'
        },
        {
            fieldLabel: 'Student Registration',
            name: 'regNo'
        },
        {
            fieldLabel: 'Student County',
            xtype: 'combobox',
            name: 'county',
            queryMode: 'local',
            store: {
                type: 'counties'
            },
            forceSelection: true,
            displayField: 'name',
            valueField: 'id',
            reference: 'county',
        }
    ],
    buttons: [{
            text: 'Save',
            handler: 'onSaveClick'
        },
        {
            text: 'Close',
            handler: 'onFormClose'
        }
    ]
});