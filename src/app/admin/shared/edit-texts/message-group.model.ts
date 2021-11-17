import { MessageTypeEnum } from './MessageTypeEnum';

export class MessageGroup {
    name: string;
    subgroups: any[];
}

export class UpdateMessageGroupRequest {
    messages: MessageUpdate[];
}

export class MessageUpdate {
    id: string;
    text: string;
}