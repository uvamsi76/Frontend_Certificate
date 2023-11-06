// utils/cookie.js

export function setCookie(name:string, value:string, days:number) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
    console.log(document.cookie)
  }
  
  // utils/cookie.js

export function getCookie(name:string) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        console.log(cookie.substring(name.length + 1))
        return cookie.substring(name.length + 1);
      }
    }
    return '';
  }
  