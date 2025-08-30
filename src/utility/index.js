export const redirectUserToUrl = (url = 'http://www.data-analyst-fyp.com/login', target = '_blank') => {
    window.open(url, target);
}