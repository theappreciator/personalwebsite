import React from 'react';
import ContentBlock from '../ContentBlock';
import styles from './Resume.module.scss';



const LANGUAGES = "React, Angular, Java, TypeScript, Javascript, shell-scripting, C#, jQuery, PHP, Objective C, VB.NET, SQL, PL/SQL, SQR, Python".split(", ");
const APPLICATION_SERVERS = "GraphQL, Node.js, Express, tomcat, apache, IIS, ASP.NET".split(", ");
const DATABASES = "PostgreSQL, Oracle, Microsoft SQL Server, MySQL, SQLite, Solr".split(", ");
const OSES = "Windows, Linux, Mac".split(", ");
const VERSIONING = "Github personal and enterprise, Gitlab, SVN".split(", ");
const IDES = "VS Code, IntelliJ, PHPStorm, Xcode, PL/SQL Developer, MyEclipse".split(", ");
const OTHER_TOOLS = "Photoshop, putty".split(", ");


interface ContentBlockRowProps {
    left: string,
    right?: string;
    middle?: string;
}
const ContentBlockRowOneItem: React.FunctionComponent<ContentBlockRowProps> = ({
    left
}) => {
    return (
        <div className={styles.ContentBlockRowOneItem}>
            <div className={styles.left}>{left}</div>
        </div>
    );
}

const ContentBlockRowTwoItems: React.FunctionComponent<ContentBlockRowProps> = ({
    left,
    right
}) => {
    return (
        <div className={styles.ContentBlockRowTwoItems}>
            <div className={styles.left}>{left}</div>
            <div className={styles.right}>{right}</div>
        </div>
    );
}

const ContentBlockRowThreeItems: React.FunctionComponent<ContentBlockRowProps> = ({
    left,
    middle,
    right
}) => {
    return (
        <div className={styles.ContentBlockRowThreeItems}>
            <div className={styles.left}>{left}</div>
            <div className={styles.middle}>{middle}</div>
            <div className={styles.right}>{right}</div>
        </div>
    );
}

const Resume: React.FunctionComponent = () => {
    return (
        <div className={styles.Resume}>
            <ContentBlock isTopLevel={true} heading={'Jess B. Tucker'} subheading={['jessebtucker@gmail.com']}>
                
                <div>
                    <ul>
                        <li>14 years professional IT experience, looking to solve business value through tech with a great team as a Staff Software Engineer/Tech Lead</li>
                        <li>Breadth of experience includes all aspects of SDLC: Project Management, Analysis, Requirements Gathering, Design, Stakeholder Approval, Development, Implementation, Support, and Ownership.</li>
                        <li>Capable of learning and delivering enterprise quality products quickly in new languages.</li>
                        <li>Strong patience in mentoring teammates, sharing knowledge, and empathy</li>
                        <li>Experienced in Agile methodology, including coaching and scrum master roles</li>
                    </ul>
                </div>
            </ContentBlock>
            <ContentBlock isTopLevel={false} heading={'Technical Expertise'}>
                <div>
                    <ContentBlockRowTwoItems left="Programming Languages:" right={LANGUAGES.join(", ")} />
                    <ContentBlockRowTwoItems left="Application/Web Servers:" right={APPLICATION_SERVERS.join(", ")} />
                    <ContentBlockRowTwoItems left="Databases:" right={DATABASES.join(", ")} />
                    <ContentBlockRowTwoItems left="Operating Systems:" right={OSES.join(", ")} />
                    <ContentBlockRowTwoItems left="Versioning:" right={VERSIONING.join(", ")} />
                    <ContentBlockRowTwoItems left="IDE:" right={IDES.join(", ")} />
                    <ContentBlockRowTwoItems left="Other Tools:" right={OTHER_TOOLS.join(", ")} />
                </div>
            </ContentBlock>
            <ContentBlock isTopLevel={false} heading={'Certifications'}>
                <div>
                    <ContentBlockRowThreeItems left="Microsoft" middle={"AZ-203 Developing Solutions for Microsoft Azure"} right={"Jan 2020"} />
                    <ContentBlockRowThreeItems left="Microsoft" middle={"AZ-400 Designing and Implementing Microsoft DevOps Solutions"} right={"Mar 2020"} />
                </div>
            </ContentBlock>
            <ContentBlock>
                <ContentBlockRowOneItem left="jessebtucker@gmail.com" />
                <ContentBlockRowOneItem left="https://www.linkedin.com/in/jess-tucker-4a407621/"/>
                <ContentBlockRowOneItem left="https://github.com/theappreciator/"/>
            </ContentBlock>
        </div>
    );
}

export default Resume;