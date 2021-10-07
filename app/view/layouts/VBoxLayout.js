Ext.define('TrainingJs.view.layouts.VBoxLayout', {
    extend: 'Ext.window.Window',
    xtype: 'vboxlayout',
    autoShow: true,
    width: 520,
    shadow: true,
    modal: true,
    autoShow: true,
    closable: true,
    title: 'V Box layout',
    height: 400,
    layout: 'fit',
    items: [{
            xtype: 'panel',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'panel',
                title: 'Inner Panel One',
                flex: 1,
            }, {
                xtype: 'panel',
                title: 'Inner Panel Two',
                flex: 2,
            }, {
                xtype: 'panel',
                title: 'Inner Panel Three',
                flex: 3
            }, ]
        }

    ]
});