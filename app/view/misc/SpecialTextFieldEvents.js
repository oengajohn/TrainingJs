Ext.define('TrainingJs.view.misc.SpecialTextFieldEvents', {
    extend: 'Ext.window.Window',
    xtype: 'specialtextfieldevents',
    controller: 'specialtextfieldeventscontroller',
    autoShow: true,
    width: 520,
    viewModel: {
        type: 'specialtextfieldeventsviewmodel'
    },
    title: 'Text Field Events',
    modal: true,
    items: [{
        xtype: 'form',
        layout: 'form',
        reference: 'form',
        items: [{
                fieldLabel: 'Search Field',
                name: 'name',
                xtype: 'textfield',
                listeners: {
                    specialkey: 'onSpecialKeyPress',
                    focus: 'onFocusSearchFieldFocused',
                }
            },
            {
                fieldLabel: 'Number One',
                name: 'numberOne',
                reference: 'numberOne',
                xtype: 'numberfield',
                listeners: {
                    focusleave: 'onFocusLeave',
                    change: 'onValueChange',
                },
                allowDecimals: true,
            },
            {
                fieldLabel: 'NumberTwo',
                name: 'numberTwo',
                reference: 'numberTwo',
                xtype: 'numberfield',
                allowDecimals: true,
                listeners: {
                    focusleave: 'onFocusLeave',
                    change: 'onValueChange',
                }
            },
            {
                fieldLabel: 'Result',
                name: 'result',
                reference: 'result',
                readOnly: true,
                xtype: 'numberfield',
                allowDecimals: true,
            },

        ]
    }]
});