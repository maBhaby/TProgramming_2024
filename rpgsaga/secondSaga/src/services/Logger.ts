import { Player } from "./Players";

interface DebugParams {
    message: string
    player: Player | null
    metaInfo?: string
}

interface LoggerService {
    log(msg: string): void
    debug(params: DebugParams): void
}

/**
 * @description
 * * Js-ная реализация 
 */
class Logger implements LoggerService {
    log(message: string) {
        console.log({
            level: 'INFO',
            message: message,
            timestamp: new Date(),
        });
    }

    debug({message, player = null, metaInfo}: DebugParams) {
        console.log({
            level: 'DEBUG',
            Player: Boolean(player) ? `${player.fullName}` : undefined,
            message: message,
            metaInfo,
            timestamp: new Date(),
        });
    }
}   

export const logger = new Logger()
