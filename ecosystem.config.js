module.exports = {
    apps: [
        {
            name: 'jeomaechoo',
            script: 'dist/main.js',
            exec_mode: 'cluster',
            instance_var: 'INSTANCE_ID',
            instances: 'max',
            autorestart: true,
            watch: false,
            ignore_watch: ['node_modules', 'logs'],
            max_memory_restart: '1G',
            merge_logs: true,
            output: './logs/access.log',
            error: './logs/error.log',
            env: {
                PORT: 8080,
            },
        },
    ],
};