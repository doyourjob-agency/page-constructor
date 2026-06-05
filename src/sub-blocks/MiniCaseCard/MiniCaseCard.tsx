import React from 'react';

import {HTML, Image} from '../../components';
import {MiniCaseCardProps} from '../../models';
import {block} from '../../utils';

import './MiniCaseCard.scss';

const b = block('mini-case-card');

const MiniCaseCard: React.FC<MiniCaseCardProps> = ({
    title,
    showStory = true,
    showQuote = true,
    text,
    quote,
    avatar,
    author,
    position,
    logo,
    tagUsecase,
    tagIndustry,
    data,
    background,
    backgroundData,
}) => {
    const shouldShowStory = showStory && Boolean(text);
    const shouldShowQuote = showQuote && Boolean(quote || avatar || author || position);
    return (
        <div className={b()} style={background ? {background} : undefined}>
            <div className={b('lhs')}>
                <div className={b('content')}>
                    {logo && (
                        <div className={b('wrap-logo')}>
                            <Image src={logo} className={b('logo')} />
                        </div>
                    )}
                    {(title || shouldShowStory || shouldShowQuote) && (
                        <div className={b('head')}>
                            {title && (
                                <div className={b('title')}>
                                    <HTML>{title}</HTML>
                                </div>
                            )}
                            {shouldShowStory && <HTML className={b('text')}>{text}</HTML>}
                            {showQuote && quote && <HTML className={b('quote')}>{quote}</HTML>}
                            {showQuote && (avatar || author || position) && (
                                <div className={b('author')}>
                                    {avatar && (
                                        <Image src={avatar} className={b('author-avatar')} />
                                    )}
                                    {(author || position) && (
                                        <div className={b('author-text')}>
                                            {author && (
                                                <span className={b('author-name')}>{author}</span>
                                            )}
                                            {author && position && <br />}
                                            {position && (
                                                <span className={b('author-position')}>
                                                    {position}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
                {(tagUsecase?.length || tagIndustry?.length) && (
                    <div className={b('tags')}>
                        {tagUsecase?.map((tag, index) => (
                            <div key={`usecase-${index}`} className={b('tag', {usecase: true})}>
                                <HTML>{tag}</HTML>
                            </div>
                        ))}
                        {tagIndustry?.map((tag, index) => (
                            <div key={`industry-${index}`} className={b('tag', {industry: true})}>
                                <HTML>{tag}</HTML>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className={b('rhs')}>
                {data?.map((item, index) => (
                    <div
                        key={index}
                        className={b('box')}
                        style={backgroundData ? {background: backgroundData} : undefined}
                    >
                        <div className={`${b('value')} title-font-family`}>{item.value}</div>
                        <div className={b('label')}>{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MiniCaseCard;
