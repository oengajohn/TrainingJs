Ext.define('TrainingJs.view.base.MainViewPortController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainviewportcontroller',
    /**
     * Called when the view is created
     */
    mixins: [

    ],
    listen: {
        controller: {
            '#': {
                unmatchedroute: 'onUnmatchedRoute'
            }
        }
    },
    routes: {
        'students': 'onStudentView'
    },
    onUnmatchedRoute: function(route) {
        TrainingJs.Util.showError('No matching route found for route ' + route);
        this.redirectTo('students', {
            replace: true
        });
    },
    onStudentView: function(args) {

        var center = Ext.ComponentQuery.query('mainviewport #center')[0];

        var newItem = center.items.findBy(function(item, index) {
            return 'Students' === item.title;
        });

        if (newItem === null || newItem === undefined) {
            newItem = center.add({
                xtype: 'studentview',
                iconCls: 'fa fas-users',
                title: 'Students',
                closable: true,
            });
        }
        center.setActiveItem(newItem);

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