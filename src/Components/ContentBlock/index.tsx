import styles from './ContentBlock.module.scss';

type ContentBlockProps = {
    isTopLevel?: boolean;
    heading?: string;
    subheading?: string[];
    children: React.ReactNode
}
const ContentBlock: React.FunctionComponent<ContentBlockProps> = ({
    isTopLevel = false,
    heading,
    subheading,
    children
}) => {

    const childrenContent = (
        <div className={styles.content}>
            {children}
        </div>
    );

    const getHeadingContent = (mainContent: string, subContent?: string[], capitalFirstLetter: boolean = false) => {
        const words = mainContent.split(' ');

        const mainContentModified = words.map(w => {
            const firstLetter = w.substr(0, 1);
            const restOfWord = w.substr(1);

            return (
                <div className={styles.word}>
                    <span className={`${styles.capital}`}>{firstLetter}</span>
                    <span>{restOfWord}</span>
                </div>
            )
        });

        const content = [];
        content.push(
            <div className={styles.main}>
                {mainContentModified}
            </div>
        )

        content.push(
            <div className={styles.sub}>
                {subContent?.map(s => (
                    <div>{s}</div>
                ))}
            </div>
        );

        return content;
    }

    return (
        <div className={styles.ContentBlock}>
            {isTopLevel && heading && (
                <>
                    <h1>{getHeadingContent(heading, subheading, true)}</h1>
                </>
            )}
            {!isTopLevel && heading && (
                <>
                    <h2>{getHeadingContent(heading, subheading)}</h2>
                </>
            )}
            {!heading && (
                    <div className={styles.spacer}></div>
            )}
            {childrenContent}
        </div>
    )
}

export default ContentBlock;