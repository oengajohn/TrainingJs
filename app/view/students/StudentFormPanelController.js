Ext.define('TrainingJs.view.students.StudentFormPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.studentformpanelcontroller',
    /**
     * Called when the view is created
     */
    init: function() {},
    onSaveClick: function() {

    },
    onFormClose: function() {
        this.getView().destroy();
    },
});