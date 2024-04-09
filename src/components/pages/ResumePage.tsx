import React from "react";
import { Stack, Typography, Grid, Paper, Box, ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { format, intervalToDuration, formatDuration, parseISO } from 'date-fns'
import { publicPath, translationsData } from './../../constants/gloabals';
import { LinkItem } from "../atoms";
import i18n from "../../utils/i18n";
import { MainTemplate } from "../templates";

interface Work {
    position: string;
    company: string;
    start_date: string;
    end_date?: string;
    description: string;
    tasks?: string[];
    achievements?: {
        url: string;
        title: string;
        description: string;
    }[];
}

interface Education {
    start_date: string;
    end_date: string;
    title: string;
    school: string;
}

interface Contact {
    url: string;
    title: string;
}

interface Language {
    language: string;
    level: string;
}

interface TechSkill {
    title: string;
    stars: number;
    tools: string[];
}

interface Resume {
    summary: string;
    work_history: Work[];
    education: Education;
    contact_url: Contact[];
    languages: Language[];
    tech_skills: TechSkill[];
}

function ResumePage() {
    const resume: Resume = translationsData.en.resume;

    const stars = (num: number) => {
        let renderStars = "";
        for (let i = 0; i < num; i++) {
            renderStars += "★";
        }
        return <span> {renderStars} </span>;
    };

    const workHistory = resume?.work_history?.map((work, index) => (
        <Paper key={index} elevation={0} style={{ padding: '20px', marginBottom: '20px' }}>
            <Stack direction="row" spacing={3} sx={{ flexGrow: 1 }}>
                <div>
                    <Typography variant="subtitle1">
                        {format(parseISO(work.start_date), 'MMM, yy')} - {format(work.end_date ? parseISO(work.end_date) : new Date(), 'MMM,yy', {})}
                    </Typography>
                    <Typography variant="subtitle1">
                        {formatDuration(intervalToDuration({ start: parseISO(work.start_date), end: work.end_date ? parseISO(work.end_date) : new Date() }), { format: ['years', 'months'] })}
                    </Typography>
                </div>
                <div>
                    <Typography variant="h5">{work.position}</Typography>
                    <Typography variant="h6">{work.company}</Typography>
                </div>
            </Stack>
            <div style={{ marginLeft: "140px" }}>
                <div>
                    <Typography>{work.description}</Typography>
                    <ul>
                        {work?.tasks?.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    {work.achievements?.map((achievement, index) => (
                        <Typography key={index} paragraph>
                            <a href={achievement.url} className="h5">{achievement?.title}</a> | {achievement.description}
                        </Typography>
                    ))}
                </div>
            </div>
        </Paper>
    ));

    return (
        <MainTemplate>
            <Box sx={{ padding: 0, margin: 0 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={9}>
                        <section>
                            <Typography paragraph>{resume.summary}</Typography>
                        </section>
                        <section>
                            <Typography variant="h5">Experience</Typography>
                            <hr />
                            {workHistory}
                        </section>
                        <section>
                            <Typography variant="h5">{i18n.t('education')}</Typography>
                            <hr />
                            <Stack direction="row" spacing={3}>
                                <div>
                                    <Typography>{resume.education.start_date}</Typography>
                                    <Typography>{resume.education.end_date}</Typography>
                                </div>
                                <div>
                                    <Typography variant="h5">{resume.education.title}</Typography>
                                    <Typography variant="h6">{resume.education.school}</Typography>
                                </div>
                            </Stack>
                        </section>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <section style={{ marginBottom: '5em' }}>
                            <Typography variant="h5">Contact Info</Typography>
                            <hr />
                            <Stack direction="column" spacing={1}>
                                {resume.contact_url.map((item, index) => (
                                    <ListItem key={index} component="div" disablePadding>
                                        <LinkItem to={item.url} >{item.title}</LinkItem>
                                    </ListItem>
                                ))}
                            </Stack>
                        </section>
                        <section style={{ marginBottom: '5em' }}>
                            <Typography variant="h5">Languages</Typography>
                            <hr />
                            <Stack direction="column" spacing={1}>
                                {resume.languages.map((item, index) => (
                                    <Typography key={index} variant="h6">{item.language} | {item.level}</Typography>
                                ))}
                            </Stack>
                        </section>
                        <section style={{ marginBottom: '5em' }}>
                            <Typography variant="h5">Skills</Typography>
                            <hr />
                            {resume.tech_skills.map((item, index) => (
                                <section key={index} style={{ marginBottom: 30 }}>
                                    <Typography variant="h6">{item.title}{stars(item.stars)}</Typography>
                                    <Stack display="inline" spacing={1}>
                                        {item.tools.map((tool, index) => (
                                            <Typography key={index} variant="body2" display="inline-block">{tool} |</Typography>
                                        ))}
                                    </Stack>
                                </section>
                            ))}
                        </section>
                    </Grid>
                </Grid>
            </Box>
        </MainTemplate>
    );
}

export default ResumePage;
