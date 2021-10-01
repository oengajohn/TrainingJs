Ext.define('TrainingJs.view.students.StudentViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.studentviewcontroller',

    init: function() {
        var studentView = this.getView();
        var store = studentView.getStore();
        store.load();
    }


})