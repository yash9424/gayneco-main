module.exports = {
  apps: [
    {
      name: 'gayneco-admin',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/gayneco/admin-panel',
      env: {
        NODE_ENV: 'production',
        PORT: 3011
      }
    },
    {
      name: 'ahcccs-help',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/gayneco/AHCCCSHelp',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      }
    },
    {
      name: 'first-trimester',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/gayneco/First-Trimester',
      env: {
        NODE_ENV: 'production',
        PORT: 3002
      }
    },
    {
      name: 'free-pregnancy-test',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/gayneco/FreePregnencyTest',
      env: {
        NODE_ENV: 'production',
        PORT: 3003
      }
    },
    {
      name: 'low-cost-pregnancy',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/gayneco/Low-cost-pregnancy',
      env: {
        NODE_ENV: 'production',
        PORT: 3004
      }
    },
    {
      name: 'need-ultrasound',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/gayneco/NeedUltraSound',
      env: {
        NODE_ENV: 'production',
        PORT: 3005
      }
    },
    {
      name: 'pregnancy-test',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/gayneco/Pregnancy-Test',
      env: {
        NODE_ENV: 'production',
        PORT: 3006
      }
    },
    {
      name: 'same-day-ultrasound',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/gayneco/SameDayUltraSound',
      env: {
        NODE_ENV: 'production',
        PORT: 3007
      }
    },
    {
      name: 'teen-pregnancy-support',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/gayneco/Teen-Pregnancy-Support',
      env: {
        NODE_ENV: 'production',
        PORT: 3008
      }
    },
    {
      name: 'walk-in-pregnancy',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/gayneco/WalkIn-Pregnancy',
      env: {
        NODE_ENV: 'production',
        PORT: 3009
      }
    },
    {
      name: 'wic-pregnancy-help',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/gayneco/Wic-Pregnancy-help',
      env: {
        NODE_ENV: 'production',
        PORT: 3010
      }
    }
  ]
}