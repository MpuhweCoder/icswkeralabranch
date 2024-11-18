import React from 'react';
import {  Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';

const resources = [
  {
    title: 'Annual Report 2023-2024',
    description: 'The Annual General Body Meeting of ICSW Kerala State Branch for the year 2023-24 was conducted on 29th July, 2023 at Rajagiri College of Social Sciences (Autonomous), Kalamassery, Kochi. 28 members were present during the meeting. Dr. Kiran Thampi presented the annual report for the years 2022 to 2023. Mr. Anoop Joseph Joy, Treasurer presented the audited statements for the year 2022 to 2023.',
    link: '/resources/Report2023-24CSWKeralaState.pdf',
  },
  {
    title: 'Annual Report 2022-2023 ',
    description: 'The Annual General Body Meeting of ICSW Kerala State Branch for the year 2022-23 was conducted on 24th April, 2022 at Rajagiri College of Social Sciences (Autonomous), Kalamassery, Kochi. 27 members were present during the meeting. Mr.Aniyan Cheriyan presented the annual report for the years 2019 to 2022. Mr.Santhosh M, Treasurer presented the audited statements for the year 2019-2022. ',
    link: '/resources/Report2022-23ICSWKeralaState.pdf',
  },
  {
    title: 'Annual Report 2021-2022',
    description: 'The Executive meeting (virtual) of ICSW Kerala State Branch held on Saturday, 20-6-2020. Meeting commenced with a silent prayer. Mr. Aniyan Cheriyan , Gen: Secretary, ICSW Kerala delivered a warm welcome to all  the members Dr. Mary Venus Joseph, President, ICSW Kerala in her presidential address expressed her happiness to see the executive members virtually and stated Covid-19 as the reason for organising the executive meeting virtually.',
    link: '/resources/Report202-2022ICSWKeralState.pdf',
  },
  {
    title: 'Annual Report 2020-2021',
    description: 'Comprehensive guide for students covering policies, procedures, and services.',
    link: '/resources/Report2020-21ICSWKeralaState.pdf',
  },
  {
    title: 'Annual Report 2019-2020',
    description: 'University policies and expectations for student behavior.',
    link: '/resources/Report2019-20ICSWKeralaState.pdf',
  },
  {
    title: 'Annual Report 2018-2019',
    description: 'Outline of requirements necessary for graduation.',
    link: '/resources/Report2018-19ICSWKeralaState.pdf',
  },
];

const ResourcesPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        icswkerala Resources
      </Typography>
      <Grid container spacing={4}>
        {resources.map((resource, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {resource.title}
                </Typography>
                <Typography variant="body2" color="textPrimary" gutterBottom>
                  {resource.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={resource.link}
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer" // Security feature
                >
                  Download
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ResourcesPage;
