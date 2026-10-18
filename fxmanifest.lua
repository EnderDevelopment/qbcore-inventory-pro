fx_version 'cerulean'
game 'gta5'

description 'Custom Inventory System for QBCore'
author 'EnderDevelopment'
version '1.0.0'

client_scripts {
    'client/main.lua'
}

server_scripts {
    'server/main.lua'
}

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/styles.css',
    'html/scripts.js',
    'html/images/*.png'
}

dependencies {
    'qb-core'
}