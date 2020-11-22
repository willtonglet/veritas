const baseUrl = 'http://localhost:3000';
const headers = new Headers({
    'Content-Type': 'application/json'
});

interface ContactParams {
    name: string;
    email: string;
    phone: string;
    cellphone: string;
    message: string;
}

export default {
    async contact(data: ContactParams): Promise<boolean> {
        return new Promise((resolve, reject) => {
            fetch('/api/submit', {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    cellphone: data.cellphone,
                    message: data.message
                })
            })
                .then((response) => {
                    if (response.ok && response.status === 200) {
                        resolve(true);
                    } else {
                        reject(response);
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
};
