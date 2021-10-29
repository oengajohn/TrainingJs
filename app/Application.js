/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('TrainingJs.Application', {
    extend: 'Ext.app.Application',

    name: 'TrainingJs',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    defaultToken: 'dashboard',
    onAppUpdate: function() {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function(choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },
    launch: function(profile) {
        //? check if user is already logged in 
        //? if true => create the main view
        //? otherwise create login window
        let isLoggedIn = localStorage.getItem('isLoggedIn');
        console.log(typeof isLoggedIn);

        if (isLoggedIn) {
            Ext.widget('mainviewport');
        } else {
            Ext.widget('loginwindow');
        }
    }
});