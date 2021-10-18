Ext.define('TrainingJs.view.students.StudentViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.studentviewmodel',
    data: {
        isAdmin: null,
        myStudent: Ext.create('TrainingJs.model.Student', {
            id: 78,
            name: "Seventy Eight",
            regNo: '78',
            county: "Seventy Eight",
        })
    }

})