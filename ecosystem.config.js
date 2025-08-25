module.exports = {
  apps: [
    {
      name: 'admin-panel',
      script: 'pnpm',
      args: 'start',
      cwd: '/var/www/gayneco-main/admin-panel',
      env: {
        NODE_ENV: 'production',
        PORT: 3011
      }
    },
    {
      name: 'ahcccs-help',
      script: 'pnpm',
      args: 'start',
      cwd: '/var/www/gayneco-main/AHCCCSHelp',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      }
    },
    {
      name: 'first-trimester',
      script: 'pnpm',
      args: 'start',
      cwd: '/var/www/gayneco-main/First-Trimester',
      env: {
        NODE_ENV: 'production',
        PORT: 3002
      }
    },
    {
      name: 'free-pregnancy-test',
      script: 'pnpm',
      args: 'start',
      cwd: '/var/www/gayneco-main/FreePregnencyTest',
      env: {
        NODE_ENV: 'production',
        PORT: 3003
      }
    },
    {
      name: 'low-cost-pregnancy',
      script: 'pnpm',
      args: 'start',
      cwd: '/var/www/gayneco-main/Low-cost-pregnancy',
      env: {
        NODE_ENV: 'production',
        PORT: 3004
      }
    },
    {
      name: 'need-ultrasound',
      script: 'pnpm',
      args: 'start',
      cwd: '/var/www/gayneco-main/NeedUltraSound',
      env: {
        NODE_ENV: 'production',
        PORT: 3005
      }
    },
    {
      name: 'pregnancy-test',
      script: 'pnpm',
      args: 'start',
      cwd: '/var/www/gayneco-main/Pregnancy-Test',
      env: {
        NODE_ENV: 'production',
        PORT: 3006
      }
    },
    {
      name: 'same-day-ultrasound',
      script: 'pnpm',
      args: 'start',
      cwd: '/var/www/gayneco-main/SameDayUltraSound',
      env: {
        NODE_ENV: 'production',
        PORT: 3007
      }
    },
    {
      name: 'teen-pregnancy-support',
      script: 'pnpm',
      args: 'start',
      cwd: '/var/www/gayneco-main/Teen-Pregnancy-Support',
      env: {
        NODE_ENV: 'production',
        PORT: 3008
      }
    },
    {
      name: 'walkin-pregnancy',
      script: 'pnpm',
      args: 'start',
      cwd: '/var/www/gayneco-main/WalkIn-Pregnancy',
      env: {
        NODE_ENV: 'production',
        PORT: 3009
      }
    },
    {
      name: 'wic-pregnancy-help',
      script: 'pnpm',
      args: 'start',
      cwd: '/var/www/gayneco-main/Wic-Pregnancy-help',
      env: {
        NODE_ENV: 'production',
        PORT: 3010
      }
    }
  ]
}