function isPalindrome(str) {
    //   تبدیل به حروف کوچک و حذف کاراکترهای غیرالفبایی
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // معکوس کردن رشته نرمال‌شده
    const reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}


console.log(isPalindrome("1991")); 
console.log(isPalindrome("rotor"));
console.log(isPalindrome("Not a palindrome")); 