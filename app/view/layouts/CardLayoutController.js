Ext.define('TrainingJs.view.layouts.CardLayoutController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.cardlayoutcontroller',
    /**
     * Called when the view is created
     */
    mixins: [
        // 'FundMaster.view.mixins.WindowMixin',
    ],
    init: function() {

    },
    onPrevMove: function(btn, e, eOpts) {
        var me = this,
            window = me.getView(),
            cardpanel = window.lookupReference('cardpanel');
        this.navigate(cardpanel, "prev");

    },
    onNextMove: function(btn, e, eOpts) {
        var me = this,
            window = me.getView(),
            cardpanel = window.lookupReference('cardpanel');
        this.navigate(cardpanel, "next");

    },
    navigate: function(panel, direction) {
        console.log(panel);
        var layout = panel.getLayout();
        layout[direction]();
        Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
        Ext.getCmp('move-next').setDisabled(!layout.getNext());
    }
});