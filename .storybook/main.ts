import {resolve} from 'path';
import {StorybookConfig} from '@storybook/react-vite';
import StringReplace from 'vite-plugin-string-replace';
import {exec} from 'child_process';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

const ASSET_PATH = 'story-assets';
const PREVIEW_DEST_PATH = process.env.PREVIEW_DEST_PATH;

const customPluginShell = () => {
    return {
        name: 'vite-plugin-shell',
        buildStart() {
            exec('npm run build:widget', (err, stdout, stderr) => {
                if (err) {
                    console.error(stderr);
                } else {
                    console.log(stdout);
                }
            });
        },
    };
};

const customAlias = {
    widget: resolve(__dirname, '../widget'),
};

const config: StorybookConfig = {
    framework: '@storybook/react-vite',

    core: {
        disableTelemetry: true,
        disableWhatsNewNotifications: true,
    },

    stories: ['./stories/**/*.mdx', '../src/**/__stories__/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
    staticDirs: ['./public'],

    addons: [
        './addons/yaml-addon/preset',
        './addons/theme-addon/register.tsx',
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
        '@storybook/addon-vitest',
    ],

    async viteFinal(config, {configType}) {
        const {mergeConfig, defineConfig} = await import('vite');
        return mergeConfig(
            config,
            defineConfig({
                define: {
                    'process.env': process.env,
                },
                resolve: {
                    alias: {
                        ...config.resolve?.alias,
                        ...customAlias,
                    },
                },
                plugins: [
                    monacoEditorPlugin({}),
                    customPluginShell(),
                    ...(PREVIEW_DEST_PATH
                        ? [
                              StringReplace([
                                  {
                                      fileName: /data\.json$/,
                                      search: new RegExp(`/${ASSET_PATH}/`, 'g'),
                                      replace: `${PREVIEW_DEST_PATH}/${ASSET_PATH}/`,
                                  },
                              ]),
                          ]
                        : []),
                ],
            }),
        );
    },

    features: {
        backgrounds: false,
        actions: false,
    },
};

export default config;
