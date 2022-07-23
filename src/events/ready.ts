'use strict';
import Client from '../structures/Client';

export = (client: Client) => {
    console.clear();
    console.log(`[INFORMATION] - Bot launched. Authorized as ${client.user?.tag} | Servers: ${client.guilds.cache.size} | Users: ${client.users.cache.size}
        [INFORMATION] - Time: ${new Date().toLocaleTimeString('ru-RU', { timeZone: 'Europe/Moscow'})}
        [INFORMATION] - RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);
    client.user?.setPresence({ activities: [{ name: 'Rodina RolePlay', type: 2 }], status: 'idle' });
    
    const commands: any = [];
    client.commands.each(command => commands.push(command.config));
    
    // client.application?.commands.set(commands, 'GuildId'); // Binding to a specific guild
    // client.application?.commands.set(commands); // Global Commands Registration
    
    process.on('unhandledRejection', (reason, p) => {
        console.log(' [antiCrash] :: Unhandled Rejection/Catch');
        console.log(reason, p);
    });
    process.on('uncaughtException', (err, origin) => {
        console.log(' [antiCrash] :: Uncaught Exception/Catch');
        console.log(err, origin);
    });
    process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log(' [antiCrash] :: Uncaught Exception/Catch (MONITOR)');
        console.log(err, origin);
    });
};