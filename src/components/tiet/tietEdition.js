import React from "react";
import CustomImage from "../images/image";
import { Container, Row, Col } from "react-bootstrap";
import CustomHeading from "../custom-heading";
import * as styles from "../../style/tiet-edition.module.css";

const PARTICIPANTS_TITLE = "Tunas Participantes";
const EXTRAS_TITLE = "Tunas Extra-Concurso";
const GUESTS_TITLE = "Grupos Convidados";
const AWARDS_TITLE = "Prémios Atribuídos";
const JURY_TITLE = "Júri";
const HOST_TITLE = "Apresentação";

const Group = ({ title, items, awards = false }) => {
    if (!items?.length) return null;
    return (
        <section className={styles.group}>
            <h4 className={styles.groupTitle}>{title}</h4>
            <ul
                className={`${styles.list}${
                    awards ? ` ${styles.awardList}` : ""
                }`}
            >
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </section>
    );
};

const TietEdition = ({ edition, theme, withDivider = false }) => {
    const fm = edition?.frontmatter;
    if (!fm) return null;

    const isDark = theme?.color === "#F0F0F0";
    const jury = fm.jury?.filter(Boolean) || [];
    const host = fm.host?.filter(Boolean) || [];
    const hasImage = Boolean(fm.image);
    const hasMeta = Boolean(fm.date || fm.local);
    const anchor = fm.id;

    return (
        <article
            id={anchor}
            className={`${styles.edition}${
                withDivider ? ` ${styles.withDivider}` : ""
            }`}
            data-tiet-theme={isDark ? "dark" : "light"}
            style={{
                color: theme.color,
                backgroundColor: theme.backgroundColor,
            }}
        >
            <Container style={{ position: "relative", zIndex: 2 }}>
                <CustomHeading
                    ruleColor={
                        isDark
                            ? "var(--light-neutral)"
                            : "var(--light-engineer)"
                    }
                >
                    {fm.title?.text}
                </CustomHeading>

                <Row
                    className={`g-4 g-lg-5 ${styles.layout}${
                        hasImage ? "" : ` ${styles.layoutNoImage}`
                    }`}
                >
                    {hasImage ? (
                        <Col xs={12} md={6} lg={6} className={styles.posterCol}>
                            <div className={styles.posterFrame}>
                                <CustomImage
                                    src={fm.image}
                                    alt={fm.title?.text || "Edição TIET"}
                                    className={styles.posterImage}
                                    sizes="(min-width: 992px) 42vw, (min-width: 768px) 48vw, 94vw"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                    }}
                                    imgStyle={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                        borderRadius: "8px",
                                    }}
                                />
                            </div>
                            {hasMeta ? (
                                <div className={styles.meta}>
                                    {fm.date ? (
                                        <p className={styles.metaDate}>
                                            {fm.date}
                                        </p>
                                    ) : null}
                                    {fm.local ? (
                                        <p className={styles.metaLocal}>
                                            {fm.local}
                                        </p>
                                    ) : null}
                                </div>
                            ) : null}
                        </Col>
                    ) : null}

                    <Col
                        xs={12}
                        md={hasImage ? 6 : 12}
                        lg={hasImage ? 6 : 12}
                        className={hasImage ? "" : styles.contentColNoImage}
                    >
                        {!hasImage && hasMeta ? (
                            <div className={styles.metaInline}>
                                {fm.date ? <span>{fm.date}</span> : null}
                                {fm.date && fm.local ? (
                                    <span
                                        className={styles.metaDot}
                                        aria-hidden="true"
                                    >
                                        ·
                                    </span>
                                ) : null}
                                {fm.local ? <span>{fm.local}</span> : null}
                            </div>
                        ) : null}
                        <div className={styles.details}>
                            <Group
                                title={PARTICIPANTS_TITLE}
                                items={fm.participants}
                            />
                            <Group title={EXTRAS_TITLE} items={fm.extras} />
                            <Group title={GUESTS_TITLE} items={fm.guests} />
                            <Group
                                title={AWARDS_TITLE}
                                items={fm.awards}
                                awards
                            />
                            <Group title={JURY_TITLE} items={jury} />
                            <Group title={HOST_TITLE} items={host} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </article>
    );
};

export default TietEdition;
