Ext.define('TrainingJs.view.cardform.CardLayoutForm', {
    extend: 'Ext.window.Window',
    xtype: 'cardlayoutform',
    controller: 'cardlayoutformcontroller',
    autoShow: true,
    width: 600,
    modal: true,
    closable: false,
    items: [{
        xtype: 'form',
        reference: 'formpanel',
        id: 'formpanel',
        layout: 'card',
        items: [{
                xtype: 'panel',
                title: 'Bio Info',
                id: 'card-0',
                layout: 'form',
                defaults: {
                    xtype: 'textfield',
                    allowBlank: false,
                },
                items: [{
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        fieldLabel: 'Name',
                        flex: 1,
                        items: [{
                                xtype: 'textfield',
                                name: 'firstName',
                            },
                            {
                                xtype: 'textfield',
                                name: 'middleName',
                            },
                            {
                                xtype: 'textfield',
                                name: 'lastName',
                            },
                        ]

                    },
                    {
                        fieldLabel: 'What is your birthday',
                        name: 'userdob',
                        xtype: 'datefield',
                        maxValue: new Date()

                    },
                    {
                        xtype: 'radiogroup',
                        fieldLabel: 'Gender',
                        columns: 3,
                        vertical: true,
                        simpleValue: true,
                        items: [{
                                boxLabel: 'MALE',
                                name: 'gender',
                                inputValue: 'MALE'
                            },
                            {
                                boxLabel: 'FEMALE',
                                name: 'gender',
                                inputValue: 'FEMALE'
                            },
                            {
                                boxLabel: 'OTHER',
                                name: 'gender',
                                inputValue: 'OTHER'
                            },

                        ]
                    }


                ]

            },
            {
                xtype: 'panel',
                id: 'card-1',
                title: 'Education Info',
                layout: 'form',
                defaults: {
                    xtype: 'textfield',
                    allowBlank: false,
                },
                items: [{
                        fieldLabel: 'What is your current education?',
                        name: 'usercurrentLevel'
                    },
                    {
                        fieldLabel: 'School',
                        name: "userSchool"
                    }


                ]

            },
            {
                xtype: 'panel',
                id: 'card-2',
                html: '<h1>Congratulations!</h1><p>Step 3 of 3 - Complete</p>'
            }

        ],
        buttons: [{
                id: 'move-prev',
                text: 'Back',
                handler: 'onPrev',
                disabled: true
            },
            '->',
            {
                id: 'move-next',
                text: 'Next',
                handler: 'onNext'
            },
            {
                text: 'Finish',
                id: 'card-finish',
                handler: 'onFinish'
            }
        ]

    }]
});