import PropTypes from 'prop-types';
import { Component } from 'react';
import { IMessage, Reply } from './types';
interface QuickRepliesProps {
    nextMessage?: IMessage;
    currentMessage?: IMessage;
    color?: string;
    sendText?: string;
    onQuickReply?(reply: Reply[]): void;
}
interface QuickRepliesState {
    replies: Reply[];
}
export default class QuickReplies extends Component<QuickRepliesProps, QuickRepliesState> {
    static defaultProps: {
        currentMessage: {
            quickReplies: never[];
        };
        onQuickReply: () => void;
        color: string;
        sendText: string;
        keepReplies: boolean;
    };
    static propTypes: {
        currentMessage: PropTypes.Validator<object>;
        onQuickReply: PropTypes.Requireable<(...args: any[]) => any>;
        color: PropTypes.Requireable<string>;
    };
    state: {
        replies: never[];
    };
    handlePress: (reply: Reply) => () => void;
    handleSend: (replies: Reply[]) => () => void;
    shouldComponentDisplay: () => boolean;
    render(): JSX.Element | null;
}
export {};
