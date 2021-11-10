Ext.define('TrainingJs.view.students.StudentViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.studentviewcontroller',
    mixins: [
        'TrainingJs.mixins.GridMixin',
    ],

    init: function() {
        //load the data
        this.loadGridStore();

    },
    onAddButtonClick: function() {
        // Ext.create('TrainingJs.view.students.StudentForm').show();
        // Ext.create({
        //     xtype: 'studentform'
        // }).show();
        var me = this;
        me.showForm(null, "Add new Student");


    },
    showForm: function(record) {
        var window = Ext.create({
            xtype: 'studentform',
            viewModel: {
                data: {
                    record: record
                }
            }
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
            record = me.getSelectedRecord();
        if (record) {
            me.showForm(record);
        }
    },
    onRemoveButtonClick: function() {
        var me = this,
            grid = me.getView(),
            record = me.getSelectedRecord();
        if (record) {
            var url = `http://localhost:3000/students/${record.get('id')}`;
            me.removeSelectedRecord(url, grid);

            //case 1
            // grid.getStore().reload();
            //case 2 
            // storeName => reload
        }

        // ajax request,
        //reload the store of the grid

    },
    onRefreshButtonClick: function() {
        this.loadGridStore();
    },
    onShowFormButtonClick: function() {
        Ext.create({
            xtype: 'cardlayoutform',
        });
    },
    onToggleIsAdminButtonClick: function(btn, e, eOpts) {
        var me = this,
            view = me.getView(),
            vm = me.getViewModel();
        var isAdmin = vm.get('isAdmin');
        // console.log(isAdmin);
        // vm.set('isAdmin', !isAdmin);
        // var isAdmin2 = vm.get('isAdmin');
        // console.log(isAdmin2);
        var myStudent = vm.get('myStudent');
        console.log();
        var isStudentAdmin = (myStudent.get('id') === 78);
        console.log(isStudentAdmin);

        vm.set('isAdmin', isStudentAdmin);



    }



})