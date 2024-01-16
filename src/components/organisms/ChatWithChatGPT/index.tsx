import React, { useState, KeyboardEvent, useRef, useEffect } from 'react';
import { ReactComponent as ChatIcon } from './img/chat.svg';
import styles from './index.module.css';
import classNames from 'classnames';
import useRequestToOpenAI, { IMessage, Role } from '../../../hooks/useRequestToOpenAI';

const ChatWithChatGPT = () => {
    const [isOpenChat, setIsOpenChat] = useState(false);
    const [messages, setMessages] = useState<IMessage[]>([]);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const { requestDataToOpenAI, loading, response, error } = useRequestToOpenAI();

    const handleTextArea = (event: KeyboardEvent<HTMLTextAreaElement> | React.MouseEvent<HTMLElement>): void => {
        if (
            (('key' in event && event.key === 'Enter') || ('type' in event && event.type === 'click')) &&
            textAreaRef.current
        ) {
            const question = textAreaRef.current.value;
            event.preventDefault();
            setMessages([...messages, { role: Role.USER, content: question }, { role: Role.ASSISTANT, loading: true }]);
            try {
                requestDataToOpenAI([...messages, { role: Role.USER, content: question }]);
            } catch (error) {
                console.log(error);
            }
            textAreaRef.current.value = '';
        }
    };

    const handleCloseAndOpenChat = () => {
        setIsOpenChat(!isOpenChat);
    };
    useEffect(() => {
        if (response) {
            const answer = response.choices?.[0]?.message.content;
            const newMessage = messages.map((message) => {
                if (message.loading) {
                    return { role: Role.ASSISTANT, content: answer };
                }
                return message;
            });
            setMessages(newMessage);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response, error]);

    return (
        <div className={styles.chatWrapper}>
            {isOpenChat ? (
                <>
                    <span className={styles.closeChatButton} onClick={handleCloseAndOpenChat}>
                        &#x78;
                    </span>
                    <div className={styles.openChat}>
                        <div className={styles.header}>
                            <p>Напишите ваше сообщение</p>
                            <span>Я отвечу на любые ваши вопросы с помощью AI</span>
                        </div>
                        <div className={styles.messages}>
                            {messages.map(({ role, content, loading }, index) => {
                                return (
                                    <div key={index}>
                                        <span
                                            className={classNames(styles.question, {
                                                [styles.answer]: role === Role.ASSISTANT,
                                            })}
                                        >
                                            {!loading ? content : '...'}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        <textarea
                            className={styles.textAreaWrapper}
                            disabled={loading}
                            ref={textAreaRef}
                            placeholder="Send a message"
                            onKeyDown={handleTextArea}
                        />
                        <span
                            className={classNames(styles.sendMessageButton, {
                                [styles.sendMessageButtonDisable]: loading,
                            })}
                            onClick={handleTextArea}
                        >
                            &#x2191;
                        </span>
                    </div>
                </>
            ) : (
                <div className={styles.openChatButton} onClick={handleCloseAndOpenChat}>
                    <ChatIcon />
                </div>
            )}
        </div>
    );
};

export default ChatWithChatGPT;
