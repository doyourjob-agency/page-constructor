import React from 'react';

import {HTML, Image} from '../../components';
import {MiniCaseCardProps} from '../../models';
import {block} from '../../utils';

import './MiniCaseCard.scss';

const b = block('mini-case-card');

interface MiniCaseCardAuthorProps {
    showQuote: boolean;
    avatar?: string;
    author?: string;
    position?: string;
}

const MiniCaseCardAuthor: React.FC<MiniCaseCardAuthorProps> = ({
    showQuote,
    avatar,
    author,
    position,
}) => {
    if (!showQuote || !(avatar || author || position)) {
        return null;
    }

    return (
        <div className={b('author')}>
            {avatar && <Image src={avatar} className={b('author-avatar')} />}
            {(author || position) && (
                <div className={b('author-text')}>
                    {author && (
                        <span className={b('author-name')}>
                            <HTML>{author}</HTML>
                        </span>
                    )}
                    {position && (
                        <span className={b('author-position')}>
                            <HTML>{position}</HTML>
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};

interface MiniCaseCardTagsProps {
    tagUsecase?: string[];
    tagIndustry?: string[];
}

const MiniCaseCardTags: React.FC<MiniCaseCardTagsProps> = ({tagUsecase, tagIndustry}) => {
    if (!tagUsecase?.length && !tagIndustry?.length) {
        return null;
    }

    return (
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
    );
};

interface MiniCaseCardHeadProps {
    title?: string;
    shouldShowStory: boolean;
    showQuote: boolean;
    text?: string;
    quote?: string;
    avatar?: string;
    author?: string;
    position?: string;
}

const MiniCaseCardHead: React.FC<MiniCaseCardHeadProps> = ({
    title,
    shouldShowStory,
    showQuote,
    text,
    quote,
    avatar,
    author,
    position,
}) => {
    const shouldShowQuote = showQuote && Boolean(quote || avatar || author || position);

    if (!title && !shouldShowStory && !shouldShowQuote) {
        return null;
    }

    return (
        <div className={b('head')}>
            {title && (
                <div className={b('title')}>
                    <HTML>{title}</HTML>
                </div>
            )}
            {shouldShowStory && <HTML className={b('text')}>{text}</HTML>}
            {showQuote && quote && <HTML className={b('quote')}>{quote}</HTML>}
            <MiniCaseCardAuthor
                showQuote={showQuote}
                avatar={avatar}
                author={author}
                position={position}
            />
        </div>
    );
};

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

    return (
        <div className={b()} style={background ? {background} : undefined}>
            <div className={b('lhs')}>
                <div className={b('content')}>
                    {logo && (
                        <div className={b('wrap-logo')}>
                            <Image src={logo} className={b('logo')} />
                        </div>
                    )}
                    <MiniCaseCardHead
                        title={title}
                        shouldShowStory={shouldShowStory}
                        showQuote={showQuote}
                        text={text}
                        quote={quote}
                        avatar={avatar}
                        author={author}
                        position={position}
                    />
                </div>
                <MiniCaseCardTags tagUsecase={tagUsecase} tagIndustry={tagIndustry} />
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
