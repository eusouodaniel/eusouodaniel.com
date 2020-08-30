import Api from './api';

const MailService = {
    send: async (params) => Api.post("/send-mail", params),
}

export default MailService;