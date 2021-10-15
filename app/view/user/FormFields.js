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
        jsonSubmit: true,
        //default layout => anchor 100%
        defaults: {
            anchor: '100%',
            // allowBlank: false,
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
                multiSelect: true,
                forceSelection: true,
                // typeAhead: true,
                store: {
                    type: 'counties'
                }
            },
            {
                xtype: 'tagfield',
                valueField: 'id',
                displayField: 'countyName',
                fieldLabel: 'Counties',
                name: 'counties',
                queryMode: 'remote',
                forceSelection: true,
                // typeAhead: true,
                store: {
                    type: 'counties'
                },
                filterPickList: true
            },
            // {
            //     name: 'photo',
            //     xtype: 'filefield',
            //     fieldLabel: 'Photo',
            //     accept: ['.xls', '.xlsx']

            // },
            {
                name: 'email',
                xtype: 'textfield',
                fieldLabel: 'Email',
                vtype: 'email',
            }, {
                name: 'mywebsite',
                xtype: 'textfield',
                fieldLabel: 'Website',
                vtype: 'url',
            }, {
                name: 'username',
                xtype: 'textfield',
                fieldLabel: 'Username',
                vtype: 'alpha',
            },
            {
                name: 'password',
                xtype: 'textfield',
                vtype: 'customPass',
                fieldLabel: 'Password',
            },
            {
                fieldLabel: 'Start Date',
                name: 'startdt',
                itemId: 'startdt',
                vtype: 'daterange',
                xtype: 'datefield',
                endDateField: 'enddt' // id of the end date field
            },
            {
                fieldLabel: 'End Date',
                name: 'enddt',
                xtype: 'datefield',
                itemId: 'enddt',
                vtype: 'daterange',
                startDateField: 'startdt' // id of the start date field
            },
            {
                fieldLabel: 'Password',
                name: 'pass',
                xtype: 'textfield',
                itemId: 'pass',
                allowBlank: false,
                // listeners: {
                //     validitychange: 'validateField',
                //     blur: 'validateField'
                // }
            }, {
                fieldLabel: 'Confirm Password',
                name: 'pass-cfrm',
                vtype: 'password',
                xtype: 'textfield',
                initialPassField: 'pass' // id of the initial password field
            }
        ],
        buttons: [{
            text: 'Submit',
            handler: 'onSubmit'
        }]
    }]
});