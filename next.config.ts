import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
    additionalData: `$primary: #232536;
                    $accent: #ffd050;
                    $accentHover: #fbf6ea;
                    $purple: #592ea9;
                    $purpleLight: #f4f0f8;
                    $stroke: #4c4c4c;
                    $strokeLight: #e8e8e9;
                    $secondary: #ffffff;
                    $secondaryText: #6d6e7688;
                    $secondaryBackground: #f4f4f4;`,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gravatar.com',
        pathname: '/avatar/**',
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cloudflare-ipfs.com',
        pathname: '/ipfs/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
