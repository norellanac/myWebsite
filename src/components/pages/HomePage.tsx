import { Grid } from "@mui/material";
import { MainTemplate } from "../templates";
import { CardItem } from "../molecules";
import { translationsData } from './../../constants/gloabals';
import { Project } from "../../types/types";

export default function HomePage() {
  console.error('translationsData', translationsData.en.portfolio.projects);

  const projects: Project[] = translationsData.en.portfolio.projects;
  return (
    <MainTemplate>
      <Grid container spacing={3}>
        {projects.map((item: Project, index) => (
          <Grid item xs={12} md={6} lg={4} key={index} >
            <CardItem data={item} />
          </Grid>
        ))
        }
      </Grid>
    </MainTemplate>
  )
}
