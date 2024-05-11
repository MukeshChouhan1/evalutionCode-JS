// let str = "babad"
// let max=""
// function substring(arr) {
//     for (let i = 0; i < arr.length; i++){
//         let sub = ""
//         for (let j = i; j < arr.length; j++){
//             sub += arr[j]
             
//             if (pal(sub) == true && sub.length > max.length) {
              
//                 max=sub
//             }
//         }
//     }
//     return max
// }
// console.log(substring(str));
// function pal(arr) {
//     let left = 0
//     let right = arr.length - 1
//     let flag=false
//     while (left < right) {
//         if (arr[left] !== arr[right]) {
//             flag = true
           
//         }
//         left++;
//         right--;
//     }
//      if (flag) {
//        return false;
//      } else {
//        return true;
//      }
// }

let str = "babad"
console.log(palin(str));

function palin(str) {
    if (str == null || str.length < 1) return ""
    
    let start = 0;
    let end = 0;
    for (let i = 0; i < str.length; i++){
        let len1 = expand(str, i, i)
        let len2 = expand(str, i, i + 1)
        let len = Math.max(len1, len2)
        if (len > end - start) {
            start = i - ((len - 1) / 2)
            end=i+(len/2)
        }
    }
    return str.substring(start,end+1)
}

function expand(str, left, right) {
    if (str == null || left > right) return 0
    
    while (left >= 0 && right < str.length && str.charAt(left) == str.charAt(right)) {
        left--;
        right++;
    }
    return right-left-1;
}