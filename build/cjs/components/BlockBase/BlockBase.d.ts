import { PropsWithChildren } from 'react';
import { BlockBaseProps, ClassNameProps, QAProps } from '../../models';
export type BlockBaseFullProps = BlockBaseProps & ClassNameProps & PropsWithChildren & QAProps;
declare const BlockBase: (props: BlockBaseFullProps) => JSX.Element;
export default BlockBase;
