"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructorBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const pick_1 = tslib_1.__importDefault(require("lodash/pick"));
const BlockBase_1 = tslib_1.__importDefault(require("../../../../components/BlockBase/BlockBase"));
const BlockDecoration_1 = require("../../../../customization/BlockDecoration");
const utils_1 = require("../../../../utils");
const b = (0, utils_1.block)('constructor-block');
const ConstructorBlock = ({ index = 0, data, children, }) => {
    const { type } = data;
    const blockBaseProps = (0, react_1.useMemo)(() => (0, pick_1.default)(data, [
        'anchor',
        'visible',
        'hidden',
        'resetPaddings',
        'indent',
        'backgroundFull',
    ]), [data]);
    return (react_1.default.createElement(BlockDecoration_1.BlockDecoration, Object.assign({ type: type, index: index }, blockBaseProps),
        react_1.default.createElement(BlockBase_1.default, Object.assign({ className: b({ type }) }, blockBaseProps), children)));
};
exports.ConstructorBlock = ConstructorBlock;
