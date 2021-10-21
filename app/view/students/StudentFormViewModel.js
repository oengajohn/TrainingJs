Ext.define('TrainingJs.view.students.StudentFormViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.studentformviewmodel',
    stores: {

    },
    data: {
        record: {
            bindTo: 'TrainingJs.model.Student',
            deep: true,
            id: 2
        },
        isActive: true,
    },
    formulas: {
        myCustomTitle: function(get) {
            var record = get('record');
            return "Hello, " + record.get('name') + "=>" + record.get("regNo")
        }

    }

});