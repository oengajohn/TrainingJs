Ext.define('TrainingJs.view.user.UserViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userviewcontroller',
    mixins: [
        'TrainingJs.mixins.GridMixin'
    ],

    init: function() {
        console.log("Calles from users init view");
        this.loadGridStore();
        console.log(TrainingJs.Util);
    },
    onRemoveButtonClick: function() {
        var me = this,
            grid = me.getView(),
            record = me.getSelectedRecord();
        if (record) {
            // var url = `http://localhost:8080/Jotech/api/users/${record.get('id')}`;
            var url = `http://localhost:8080/Jotech/api/users/100`;
            me.removeSelectedRecord(url, grid);
        }
    },
    onVbox: function() {
        Ext.create({
            xtype: 'borderlayout'
        });
    },
    onShowForm: function(btn, e, eOpts) {
        Ext.create({
            xtype: 'cardlayoutform'
        });
    }
});