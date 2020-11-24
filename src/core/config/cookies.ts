const lgpdCookie = typeof window !== 'undefined' && window.localStorage.getItem('lgpd') === 'true';

export default lgpdCookie;
