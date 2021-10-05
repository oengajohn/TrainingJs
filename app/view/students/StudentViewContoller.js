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
        var me = this;
        me.showForm();


    },
    showForm: function(record) {
        var window = Ext.create({
            xtype: 'studentform'
        });
        if (record) {
            var form = window.lookupReference('add-form').getForm();
            // case 1
            form.loadRecord(record);
            //case 2
            /*form.load({
                url: `http://localhost:3000/students/${record.get('id')}`,
                method: 'GET',
                
                success: function(form, action) {
                    console.log(action.response);
                    console.log(action.result);
                    console.log(action.type);

                },
                failure: function(form, action) {
                    console.log(action.failureType);
                    console.log(action.response);
                    console.log(action.result);
                    console.log(action.type);
                }
            })*/

        }

    },
    onDetailsButtonClick: function() {
        var me = this,
            grid = me.getView();
        var records = grid.getSelectionModel().getSelection(); //arary
        if (records[0]) {
            me.showForm(records[0]);
        }


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