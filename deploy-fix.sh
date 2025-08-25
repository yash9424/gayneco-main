#!/bin/bash

# VPS Deployment Fix Script
# Run this on your VPS to fix all API connection issues

echo "🚀 Starting deployment fix..."

# Set your VPS IP
VPS_IP="72.60.30.153"

# Navigate to project directory
cd /var/www/gayneco

# 1. Fix all API URLs
echo "📝 Fixing API URLs..."
node fix-blog-api-all-sites.js
node fix-all-sites-api.js

# 2. Create environment files for all sites
echo "🔧 Creating environment files..."
for dir in AHCCCSHelp First-Trimester FreePregnencyTest Low-cost-pregnancy NeedUltraSound Pregnancy-Test SameDayUltraSound Teen-Pregnancy-Support WalkIn-Pregnancy Wic-Pregnancy-help admin-panel; do
  if [ -d "$dir" ]; then
    echo "NEXT_PUBLIC_ADMIN_API_URL=http://$VPS_IP" > "$dir/.env.production"
    echo "NODE_ENV=production" >> "$dir/.env.production"
    echo "✅ Created .env.production for $dir"
  fi
done

# 3. Install dependencies and build all sites
echo "📦 Building all sites..."
for dir in AHCCCSHelp First-Trimester FreePregnencyTest Low-cost-pregnancy NeedUltraSound Pregnancy-Test SameDayUltraSound Teen-Pregnancy-Support WalkIn-Pregnancy Wic-Pregnancy-help admin-panel; do
  if [ -d "$dir" ]; then
    echo "Building $dir..."
    cd "$dir"
    pnpm install --frozen-lockfile
    pnpm build
    cd ..
    echo "✅ Built $dir"
  fi
done

# 4. Update Nginx configuration
echo "🌐 Updating Nginx..."
sudo cp nginx.conf /etc/nginx/sites-available/gayneco
sudo nginx -t
if [ $? -eq 0 ]; then
  sudo systemctl reload nginx
  echo "✅ Nginx updated successfully"
else
  echo "❌ Nginx configuration error"
  exit 1
fi

# 5. Restart PM2 applications
echo "🔄 Restarting applications..."
pm2 restart all
pm2 save

# 6. Check MongoDB connection
echo "🗄️ Checking MongoDB..."
if systemctl is-active --quiet mongod; then
  echo "✅ MongoDB is running"
else
  echo "⚠️ Starting MongoDB..."
  sudo systemctl start mongod
  sudo systemctl enable mongod
fi

echo ""
echo "🎉 Deployment fix completed!"
echo ""
echo "📋 Verification steps:"
echo "1. Check admin panel: http://$VPS_IP"
echo "2. Test blog creation in admin panel"
echo "3. Check if blogs appear on sites"
echo "4. Test chat functionality"
echo ""
echo "🔍 Troubleshooting:"
echo "- Check logs: pm2 logs"
echo "- Check Nginx: sudo nginx -t"
echo "- Check MongoDB: sudo systemctl status mongod"