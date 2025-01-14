/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            boxShadow: {
                userMenu: 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
            },
            animation: {
                spin: 'spin 0.5s linear infinite', // Điều chỉnh thời gian tùy chỉnh
            },
            colors: {
                borderColor: '#949494',
                iconColor: '#666666',
                // bgClient: '#181C25',
                bgHeaderDark: '#171717',
                bgMainDark: '#212121',
                mainColor: '#0077FF',
            },
            screens: {
                // Thêm custom breakpoint
                xs: '400px', // Điểm ngắt cho màn hình nhỏ hơn (ví dụ điện thoại nhỏ)
                sm: '640px', // Đã có trong Tailwind mặc định, nhưng bạn có thể tùy chỉnh
                md: '768px', // Tùy chỉnh hoặc giữ nguyên
                md1: '868px',
                lg: '1024px', // Tùy chỉnh hoặc giữ nguyên
                xl: '1280px', // Tùy chỉnh hoặc giữ nguyên
                '2xl': '1536px', // Thêm custom breakpoint lớn hơn
                '3xl': '1920px', // Custom cho màn hình siêu lớn
            },
        },
    },
    plugins: [],
};
