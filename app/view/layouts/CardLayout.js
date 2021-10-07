Ext.define('TrainingJs.view.layouts.CardLayout', {
    extend: 'Ext.window.Window',
    xtype: 'cardlayout',
    controller: 'cardlayoutcontroller',
    autoShow: true,
    width: 520,
    shadow: true,
    modal: true,
    autoShow: true,
    closable: true,
    maximizable: true,
    title: 'Card layout',
    height: 400,
    layout: 'fit',
    items: [{
        xtype: 'panel',
        reference: 'cardpanel',
        layout: 'card',
        items: [{
            id: 'card-0',
            html: '<h1>Welcome to the Wizard!</h1><p>Step 1 of 3</p>'
        }, {
            id: 'card-1',
            html: '<p>Step 2 of 3</p>'
        }, {
            id: 'card-2',
            html: '<h1>Congratulations!</h1><p>Step 3 of 3 - Complete</p>'
        }]
    }],
    bbar: [{
            id: 'move-prev',
            text: 'Back',
            handler: 'onPrevMove',

            disabled: true
        },
        '->', // greedy spacer so that the buttons are aligned to each side
        {
            id: 'move-next',
            text: 'Next',
            handler: 'onNextMove'
        }
    ],
});