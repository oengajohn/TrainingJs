Ext.define('TrainingJs.view.user.FormFields', {
    extend: 'Ext.window.Window',
    xtype: 'formfields',
    controller: 'formfieldscontroller',
    autoShow: true,
    width: 600,
    shadow: true,
    modal: 'true',
    closable: true,
    maximizable: true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        reference: 'form',
        //default layout => anchor 100%
        defaults: {
            anchor: '100%',
        },
        items: [{
                xtype: 'radiofield',
                name: 'isPromotion',
                inputValue: true,
                fieldLabel: 'YES',
            },
            {
                xtype: 'radiofield',
                name: 'isPromotion',
                checked: true,
                inputValue: false,
                fieldLabel: 'NO',
            },
            {
                xtype: 'datefield',
                name: 'dob',
                format: 'd-m-Y',
                disabledDays: [0, 6],
                disabledDates: ["20-10-2021"],
                maxValue: Ext.Date.add(new Date(), Ext.Date.DAY, 10),
                fieldLabel: 'Dob'
            },
            {
                xtype: 'combobox',
                valueField: 'id',
                displayField: 'countyName',
                fieldLabel: 'County',
                name: 'county',
                queryMode: 'remote',
                forceSelection: true,
                typeAhead: true,
                store: {
                    type: 'counties'
                }
            }
        ],
        buttons: [{
            text: 'Submit',
            handler: 'onSubmit'
        }]
    }]
});