Ext.define('TrainingJs.view.students.StudentViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.studentviewcontroller',

    init: function() {
        var studentView = this.getView();
        var store = studentView.getStore();
        store.load();
    },
    onAddButtonClick: function() {
        // Ext.create('TrainingJs.view.students.StudentForm').show();
        // Ext.create({
        //     xtype: 'studentform'
        // }).show();
        Ext.create({
            xtype: 'studentform'
        });

    },
    onDetailsButtonClick: function() {
        console.log("details  student");
    },
    onRemoveButtonClick: function() {
        console.log("remove  student");
    },
    onRefreshButtonClick: function() {
        var me = this,
            grid = me.getView(),
            store = grid.getStore();
        store.reload();
    },



})