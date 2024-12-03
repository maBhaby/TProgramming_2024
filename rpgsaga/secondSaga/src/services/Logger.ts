class Logger {
    log(message: string) {
        console.log({
            level: 'info',
            message: message,
            timestamp: new Date(),
        });
    }
}   

export const logger = new Logger()
