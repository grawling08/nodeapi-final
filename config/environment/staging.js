/*jshint camelcase: false */

'use strict';

module.exports = {
    env: 'staging',
    db_host: process.env.DB_HOST || '',
    db_user: process.env.DB_USER || '',
    db_password: process.env.DB_PASSWORD || '',
    db_name: '',
    db_port: 3306,
    port: 3000, // PLEASE DONT REMOVE 'process.env.PORT'
    ip: process.env.IP,
    api_host_url: process.env.API_HOST_URL || '',
    frontend_host_url: process.env.FRONTEND_HOST_URL || '',
    frontend_portal_host_url: process.env.FRONTEND_HOST_URL || '',
    api_version: process.env.API_VERSION || '/api/1.0',
    sync_version: process.env.API_VERSION || '/sync/1.0',
    app_version: process.env.APP_VERSION || '/1.0',
    FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || '',
    GOOGLE_SECRET: process.env.GOOGLE_SECRET || '',
    LINKEDIN_SECRET: process.env.LINKEDIN_SECRET || '',
    TWITTER_KEY: process.env.TWITTER_KEY || '',
    TWITTER_SECRET: process.env.TWITTER_SECRET || ''
};
