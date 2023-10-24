import { useState } from 'react';
import { OPENAI_API_KEY, infoAboutMe } from '../constants/constants';

const apiUrl = 'https://api.openai.com/v1/chat/completions';

export enum Role {
    ASSISTANT = 'assistant',
    USER = 'user',
}

export interface IMessage {
    role: Role;
    content?: string;
    loading?: boolean;
}

interface IMessages {
    message: IMessage;
}

interface IResponse {
    choices: IMessages[];
}
const chatHistory = [
    { role: 'user', content: 'Hello!' },
    {
        role: 'assistant',
        content: `Твоя роль отвечать от Имени Виталика из контекста ниже. На каком языке спрашивают на таком и отвечай. Если вопрос не связан с Виталиком возвращай пользователя на тему об Виталике.
${infoAboutMe}`,
    },
];
const useRequestToOpenAI = () => {
    const [response, setResponse] = useState<IResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);

    const requestDataToOpenAI = (content: IMessage[]) => {
        setLoading(true);
        const requestData = {
            model: 'gpt-3.5-turbo',
            messages: [...chatHistory, ...content],
            temperature: 0.7,
        };
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify(requestData),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setResponse(data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return {
        requestDataToOpenAI: requestDataToOpenAI,
        response,
        loading,
        error,
    };
};

export default useRequestToOpenAI;
