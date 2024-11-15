import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
    additionalData: `$primary: #232536;
                    $accent: #ffd050;
                    $purple: #592ea9;
                    $stroke: #4c4c4c;
                    $secondary: #ffffff;`,
  },
};

export default withNextIntl(nextConfig);
