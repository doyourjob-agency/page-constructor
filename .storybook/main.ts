import {resolve} from 'path';
import WebpackShellPluginNext from 'webpack-shell-plugin-next';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
import {StorybookConfig} from '@storybook/react-webpack5';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

const ASSET_PATH = 'story-assets';
const PREVIEW_DEST_PATH = process.env.PREVIEW_DEST_PATH;

const customAlias = {
    widget: resolve(__dirname, '../widget'),
};
const config: StorybookConfig = {
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },

    core: {
        disableTelemetry: true,
        disableWhatsNewNotifications: true,
    },

    stories: ['./stories/**/*.mdx', '../src/**/__stories__/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
    staticDirs: ['./public'],

    addons: [
        '@storybook/preset-scss',
        './addons/yaml-addon/preset',
        './addons/theme-addon/register.tsx',
        '@storybook/addon-webpack5-compiler-babel',
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
    ],

    webpackFinal: async (storybookBaseConfig) => {
        if (storybookBaseConfig.plugins) {
            storybookBaseConfig.plugins.push(
                new NodePolyfillPlugin(),
                new MonacoWebpackPlugin(),
                new WebpackShellPluginNext({
                    onBuildStart: {
                        scripts: ['npm run build:widget'],
                        blocking: false,
                    },
                }),
            );
        }

        if (storybookBaseConfig.resolve) {
            storybookBaseConfig.resolve.alias = {
                ...(storybookBaseConfig.resolve?.alias || {}),
                ...customAlias,
            };
        }

        // main and branch storybook previews are deployed in subfolders
        // so we need to add subfolder prefix to stories asset static path:
        if (PREVIEW_DEST_PATH) {
            storybookBaseConfig.module?.rules?.push({
                test: /data\.json$/,
                loader: 'string-replace-loader',
                options: {
                    search: `/${ASSET_PATH}/`,
                    replace: `${PREVIEW_DEST_PATH}/${ASSET_PATH}/`,
                    flags: 'g',
                },
            });
        }

        return storybookBaseConfig;
    },

    features: {
        backgrounds: false,
        actions: false,
    },
};

export default config;
