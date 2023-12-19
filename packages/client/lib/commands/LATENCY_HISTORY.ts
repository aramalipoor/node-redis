export type EventType = (
    'active-defrag-cycle' |
    'aof-fsync-always' |
    'aof-stat' |
    'aof-rewrite-diff-write' |
    'aof-rename' |
    'aof-write' |
    'aof-write-active-child' |
    'aof-write-alone' |
    'aof-write-pending-fsync' |
    'command' |
    'expire-cycle' |
    'eviction-cycle' |
    'eviction-del' |
    'fast-command' |
    'fork' |
    'rdb-unlink-temp-file'
);

export function transformArguments(event: EventType) {
    return ['LATENCY', 'HISTORY', event];
}

export declare function transformReply(): Array<[
    timestamp: number,
    latency: number,
]>;
