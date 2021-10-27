Ext.define('TrainingJs.store.Menu', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.menu',
    storeId: 'menu',

    root: {
        expanded: true,
        children: [{
                text: 'Counties',
                expanded: true,
                children: [{
                        text: 'Counties',
                        leaf: true,
                        xtype: 'countypanel',
                    },
                    {
                        text: 'Add County',
                        leaf: true,
                        xtype: 'countyformpanel',
                    }
                ]
            }, {
                text: 'Students',
                expanded: true,
                children: [{
                        text: 'Students',
                        leaf: true,
                        xtype: 'studentview',
                        iconCls: 'fas fa-users',
                    },
                    {
                        text: 'Add User',
                        leaf: true,
                        xtype: 'userformpanel',
                        iconCls: 'fas fa-user-edit'
                    }
                ]
            },
            {
                text: 'homework',
                expanded: true,
                children: [{
                        text: 'Users',
                        leaf: true,
                        xtype: 'userview'
                    },
                    {
                        text: 'algebra',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Posts',
                expanded: true,
                children: []
            }
        ]
    }

});