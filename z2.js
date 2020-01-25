class MyString { 

    reverse (string) { 
    return string.split('').reverse().join(''); 
    } 
    
    ucFirst(string) { 
    return string.substr(0, 1).toUpperCase() + string.substr(1); 
    } 
    
    ucWords (string) { 
    let arr = string.split(' '); 
    for (let key in arr) { 
    arr[key] = arr[key].substr(0, 1).toUpperCase() + arr[key].substr(1); 
    } 
    return string = arr.join(' '); 
    } 
    } 
    
    var str = new MyString(); 
    console.log(str.reverse('abcde')); //выведет 'edcba' 
    console.log(str.ucFirst('abcde')); //выведет 'Abcde' 
    console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde' 