import { send } from 'emailjs-com';
import { YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID } from '../../constants/constants';
import { IFormData } from '../../components/organisms/ContactForm';

const sendMessage = (formData: IFormData) => {
    send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, { ...formData }, YOUR_USER_ID).then(
        (response) => {
            if (response && response.status === 200) {
                console.log('Email sent successfully:', response.text);
                alert('Ваше сообщение успешно отправлено!');
            } else {
                console.log('Failed to send email:', response);
            }
        },
        (error) => {
            console.log('Failed to send email:', error);
            alert('Возникла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.');
        }
    );
};

export default sendMessage;
