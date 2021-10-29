Ext.define('TrainingJs.view.base.MainViewPortController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainviewportcontroller',
    /**
     * Called when the view is created
     */
    mixins: [

    ],
    routes: {
        'students': 'onStudentUrlActivated',
        'counties': 'onCountiesActivated',
        'student-form-panel': 'onShowStudentFormPanel',
        "students/:id": "onShowStudentWithId"
    },
    onShowStudentWithId: function(id) {
        console.log("Student with id routes was executed");
        //? show form panel
        this.onShowStudentFormPanel();
        //? fill the form with the data
        //! http://localhost:3000/students/2
        let form = Ext.ComponentQuery.query('studentformpanel')[0];
        form.load({
            url: `http://localhost:3000/students/${id}`,
            method: 'GET',
            failure: function(form, action) {
                console.log(action.responseText);
                // Ext.Msg.alert("Load failed", action.result.errorMessage);
            }
        });



    },
    onShowStudentFormPanel: function() {
        console.log("Student new form  was executed");
        //? show add form panel
        this.showView('Add Student', 'studentformpanel', 'fa fa-plus-square');
    },

    onStudentUrlActivated: function() {
        this.showView("Students", "studentview", "fa fa-list-alt");
    },
    showView: function(title, xtype, iconCls) {
        //? get hold of the center panel 
        var centerPanel = Ext.ComponentQuery.query('mainviewport #center')[0];
        //? create the view with students 
        let tab = centerPanel.items.findBy((item, index) => {
            return title === item.title;
        });
        //? add the view to the tabpanel and make it active
        if (!tab) {
            tab = centerPanel.add({
                xtype: xtype,
                title: title,
                iconCls: iconCls,
                closable: true,
            });
        }
        //? make the item active
        centerPanel.setActiveItem(tab);

    },

    onCountiesActivated: function() {
        this.showView("Counties", "countypanel", "fa fa-list-alt");
    },
    init: function() {
        var me = this,
            viewport = me.getView(),
            center = viewport.lookupReference('center');
        // console.log(center);
    },
    onLogout: function() {
        var me = this,
            view = me.getView(),
            model = me.getViewModel(),
            refs = me.getReferences();

        localStorage.removeItem('isLoggedIn');
        view.destroy();
        Ext.create({
            xtype: 'loginwindow'
        });

    }
});