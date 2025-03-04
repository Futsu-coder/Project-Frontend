const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

// ข้อมูลผู้ใช้จำลอง (ในระบบจริงควรดึงจากฐานข้อมูล)
const users = [
    { username: 'user1', password: 'password1' }, 
    { username: 'user2', password: 'password2' }  
];

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // ป้องกันการส่งแบบฟอร์มแบบปกติ

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // ตรวจสอบว่ามีผู้ใช้ในระบบหรือไม่
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // ล็อกอินสำเร็จ
        errorMessage.textContent = ''; 
        // ทำสิ่งที่ต้องการหลังล็อกอินสำเร็จ เช่น Redirect ไปหน้าอื่น
        alert('เข้าสู่ระบบสำเร็จ!'); 
    } else {
        // ล็อกอินไม่สำเร็จ
        errorMessage.textContent = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'; 
    }
});