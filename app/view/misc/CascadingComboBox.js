Ext.define('TrainingJs.view.misc.CascadingComboBox', {
    extend: 'Ext.window.Window',
    xtype: 'cascadingcombobox',
    controller: 'cascadingcomboboxcontroller',
    autoShow: true,
    width: 520,
    viewModel: {
        type: 'cascadingcomboboxviewmodel'
    },
    title: 'Cascading Combobox => Select Events',
    modal: true,
    items: [{
        xtype: 'form',
        layout: 'form',
        reference: 'form',
        items: [{
                xtype: 'combobox',
                fieldLabel: 'Choose your County',
                queryMode: 'local',
                store: {
                    type: 'counties'
                },
                forceSelection: true,
                displayField: 'name',
                valueField: 'id',
                reference: 'county',
                listeners: {
                    select: 'onCountySelect'
                }
            },
            {
                xtype: 'textfield',
                reference: 'countyCode',
                fieldLabel: 'County Code',
                readOnly: true,
                bind: {
                    hidden: '{!county.selection}',
                },
            },
            {
                xtype: 'combobox',
                queryMode: 'local',
                fieldLabel: 'Sub County',
                store: {
                    type: 'subcounties'
                },
                displayField: 'name',
                valueField: 'id',
                forceSelection: true,
                reference: 'subCounty',
                bind: {
                    hidden: '{!county.selection}',
                },
            }
        ]
    }]
});