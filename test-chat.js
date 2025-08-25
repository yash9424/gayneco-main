// Simple chat test script
const testChat = async () => {
  const API_BASE = 'http://72.60.30.153';
  
  console.log('🧪 Testing Chat System...\n');
  
  // Test 1: Check if admin panel API is accessible
  try {
    console.log('1️⃣ Testing admin panel API...');
    const response = await fetch(`${API_BASE}/api/chat`, {
      method: 'OPTIONS'
    });
    console.log(`   Status: ${response.status}`);
    console.log(`   CORS Headers: ${response.headers.get('Access-Control-Allow-Origin')}`);
  } catch (err) {
    console.log(`   ❌ Admin panel not accessible: ${err.message}`);
  }
  
  // Test 2: Try to create a chat
  try {
    console.log('\n2️⃣ Testing chat creation...');
    const response = await fetch(`${API_BASE}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: 'Test message',
        project: 'AHCCCSHelp',
        userInfo: { name: 'Test User', age: '25', contact: 'test@test.com' }
      })
    });
    
    const data = await response.json();
    console.log(`   Status: ${response.status}`);
    console.log(`   Response:`, data);
    
    if (data.success) {
      console.log('   ✅ Chat creation successful');
      return data.chatId;
    } else {
      console.log('   ❌ Chat creation failed');
    }
  } catch (err) {
    console.log(`   ❌ Chat creation error: ${err.message}`);
  }
  
  return null;
};

// Test 3: Check MongoDB connection
const testMongoDB = async () => {
  console.log('\n3️⃣ Testing MongoDB connection...');
  try {
    const response = await fetch('http://72.60.30.153/api/blogs');
    const data = await response.json();
    console.log(`   Status: ${response.status}`);
    console.log(`   Blogs found: ${Array.isArray(data) ? data.length : 'Error'}`);
    
    if (response.ok) {
      console.log('   ✅ MongoDB connection working');
    } else {
      console.log('   ❌ MongoDB connection failed');
    }
  } catch (err) {
    console.log(`   ❌ MongoDB test error: ${err.message}`);
  }
};

// Run tests
(async () => {
  await testChat();
  await testMongoDB();
  
  console.log('\n📋 Quick Fixes:');
  console.log('1. Check if PM2 apps are running: pm2 status');
  console.log('2. Check if MongoDB is running: sudo systemctl status mongod');
  console.log('3. Check Nginx config: sudo nginx -t');
  console.log('4. Restart services: pm2 restart all && sudo systemctl reload nginx');
})();

module.exports = { testChat, testMongoDB };