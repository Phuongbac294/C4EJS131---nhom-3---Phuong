// 1. Cho mảng A = [5,4,7,8,10,20,1], output -> [1,4,5,7,8,10,20] (hint: sử dụng hàm Array.sort)
// 2. Cho mảng B = [1,2,'a',{}, 'b', 'c', 2,4,5], output -> mảng C = [1,2,2,4,5] 
// 3. Cho mảng D = [1,4,10,100,50,69, 96], output -> số lớn nhất trong mảng, số nhỏ nhất trong mảng
// 4. Cho mảng E = [1,2,'a', 'b', 'c', 2,4,5], không sử dụng thêm mảng mới, đưa các số về đầu mảng và các chữ về cuối mảng, sử dụng các hàm pop, push, shift, unshift
// 5. Cho mảng F = [1,23,41,5,6,1,14,66,1124,1,1,55,15,0], tìm ra vị trí thứ 4 của số 1 trong mảng (hint: dùng findIndex)

// Bài 1
let A = [5, 4, 7, 8, 10, 20, 1];
console.log(A.sort(function(a, b){return a - b}));

function compare (a, b) {
    return b-a
}
console.log(A.sort(compare));

// Bài 2
let B = [1, 2, 'a', {}, 'b', 'c', 2, 4, 5]
let C = [];
let C1 = [];
let C2 = [];
for (let i = 0; i < B.length; i++) {
    if (typeof B[i] === "number") {
        C.push(B[i]);
    }
        else { 
            if (typeof B[i] === "string") {
                C1.push(B[i]);
            }
                else { 
                    C2.push(B[i]);
                }
        }
}
    

console.log(C);
console.log(C1);
console.log(C2);

// Bai 3
let D = [1, 4, 10, 100, 50, 69, 96, 0];
// D1 = D.sort(compare);
// console.log(D1);
// console.log (D1.length);
console.log('so nho nhat =', D[(D.sort(compare)).length - 1]);
console.log('so lon nhat = ', D1[0]);

// bai 4
let E = [1, 2,'a', 'b', 'c', 2, 4, 5]
// cach 1
let E1 = [];
let E2 = [];
for (let i = 0; i < E.length; i++) {
    if (typeof E[i] === "number") {
        E1.push(E[i]);
    }
        else { 
            if (typeof E[i] === "string") {
                E2.push(E[i]);
            }
        }
}
console.log(E.length);
console.log(E1.concat(E2));

// cach 2 ko dung mang khac





