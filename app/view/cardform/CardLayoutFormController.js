Ext.define('TrainingJs.view.cardform.CardLayoutFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.cardlayoutformcontroller',
    /**
     * Called when the view is created
     */
    mixins: [],
    init: function() {

    },
    onPrev: function(btn, e, eOpts) {
        var me = this,
            window = me.getView(),
            formpanel = window.lookupReference('formpanel');
        this.navigate(formpanel, "prev");
    },
    onNext: function(btn, e, eOpts) {
        var me = this,
            window = me.getView(),
            formpanel = window.lookupReference('formpanel');
        this.navigate(formpanel, "next");

    },
    onFinish: function(btn, e, eOpts) {
        var me = this,
            window = me.getView(),
            formpanel = window.lookupReference('formpanel'),
            form = formpanel.getForm();
        if (form.isValid()) {
            form.submit({
                url: 'http://localhost:3000/responses/',
                method: 'POST',
                success: function(form, action) {
                    Ext.Msg.alert('Success', action.result.msg);
                },
                failure: function(form, action) {
                    if (action.response.status === 201 || action.response.status === 200) {
                        Ext.Msg.alert('Success', "Saved successfully");
                        window.close();
                    } else {
                        switch (action.failureType) {
                            case Ext.form.action.Action.CLIENT_INVALID:
                                Ext.Msg.alert(
                                    'Failure',
                                    'Form fields may not be submitted with invalid values'
                                );
                                break;
                            case Ext.form.action.Action.CONNECT_FAILURE:
                                Ext.Msg.alert('Failure', 'Ajax communication failed');
                                break;
                            case Ext.form.action.Action.SERVER_INVALID:
                                Ext.Msg.alert('Failure', action.result.msg);
                        }
                    }

                }
            });
        } else {
            alert('Not valid');
        }
    },
    navigate: function(panel, direction) {
        console.log(panel);

        var layout = panel.getLayout();
        layout[direction]();
        Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
        Ext.getCmp('move-next').setDisabled(!layout.getNext());
        Ext.getCmp('card-finish').setDisabled(layout.getNext());

    }
});