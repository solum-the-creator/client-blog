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
                    $secondary: #ffffff;`,
  },
};

export default withNextIntl(nextConfig);
