import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dev.lovable.project2f9d1203fbf94058',
  appName: 'Lovable Project',
  webDir: 'dist',
  server: {
    url: 'https://2f9d1203-fbf9-4058-80ed-e9cc9d6c8dab.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  bundledWebRuntime: false
};

export default config;