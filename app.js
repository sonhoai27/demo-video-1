
const apiKey = 'sk-1234567890abcdef1234567890abcdef';

async function callDemoApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, data: 'đây là kết quả demo' });
    }, 500);
  });
}

(async () => {
  try {
    const result = await callDemoApi();
    console.log('🎉 Kết quả từ “API”:', result);
  } catch (err) {
    console.error('❌ Lỗi khi gọi API:', err);
  }
})();