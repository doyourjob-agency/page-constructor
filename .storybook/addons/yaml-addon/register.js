import React, {useMemo} from 'react';
import {AddonPanel} from '@storybook/components';
import {addons, types, useGlobals, useArgs} from '@storybook/manager-api';
import yaml from 'js-yaml';
import {ClipboardButton, ThemeProvider} from '@gravity-ui/uikit';

import './AddonYaml.css';

const ADDON_ID = 'yamladdon';
const PANEL_ID = `${ADDON_ID}/panel`;

function removeContextKeys(obj) {
    if (!obj) return obj;
    return Object.fromEntries(Object.entries(obj).filter(([key]) => !key.includes('Context')));
}

const YamlPanel = () => {
    const [params] = useArgs();
    const [globals] = useGlobals();

    const content = useMemo(
        () =>
            yaml.dump([removeContextKeys(params)], {
                flowLevel: -1,
                lineWidth: -1,
                forceQuotes: true,
                skipInvalid: true,
            }),
        [params],
    );

    return (
        <ThemeProvider theme={globals.theme}>
            <div className="yaml-addon">
                <ClipboardButton text={content} />
                <pre>{content}</pre>
            </div>
        </ThemeProvider>
    );
};

addons.register(ADDON_ID, (api) => {
    addons.add(PANEL_ID, {
        type: types.PANEL,
        title: 'YAML',
        render: ({active, key}) => (
            <AddonPanel active={Boolean(active)} key={key}>
                <YamlPanel />
            </AddonPanel>
        ),
    });
});
