import { Grid } from "@mui/material";
import { MainTemplate } from "../templates";
import { CardItem } from "../molecules";
import { translationsData } from './../../constants/gloabals';
import { Project } from "../../types/types";
import { useLanguage } from "../../context/LanguageContext";

export default function HomePage() {
  useLanguage();

  const projects: Project[] = translationsData.en.portfolio.projects;
  return (
    <MainTemplate>
      <Grid container spacing={3}>
        {projects.map((_item: Project, index) => (
          <Grid item xs={12} md={6} lg={4} key={index} >
            <CardItem key_id={index} />
          </Grid>
        ))
        }
      </Grid>
    </MainTemplate>
  )
}
