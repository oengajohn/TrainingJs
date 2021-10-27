Ext.define('TrainingJs.view.auth.LoginWindow', {
    extend: 'Ext.window.Window',
    xtype: 'loginwindow',
    controller: 'loginwindowcontroller',
    autoShow: true,
    width: 520,
    closable: true,
    items: [{
        xtype: 'form',
        layout: 'form',
        reference: 'login-form',
        defaults: {
            xtype: 'textfield',
            inputType: 'password',
        },
        items: [{
            fieldLabel: 'Password',
            name: 'userPassword',
        }],
        buttons: [{
            iconCls: 'fas fa-sign-in-alt',
            text: 'Login',
            handler: 'onLogin',
        }]

    }]
});