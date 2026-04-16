/**
 * Journey Maps — Miro board links
 * Source: https://mckinsey.atlassian.net/wiki/spaces/DSCC/pages/1208880597/User+Journey+Maps
 * Add or edit Miro board links below. Get the links from the Confluence page when logged in.
 */
const journeyMapsData = {
  sourceUrl: 'https://mckinsey.atlassian.net/wiki/spaces/DSCC/pages/1208880597/User+Journey+Maps',
  sourceLabel: 'DSCC Confluence — User Journey Maps',
  maps: [
    {
      id: 'jm-1',
      scope: 'general',
      title: 'User Journey Maps (main)',
      description: 'Overview and index of user journey maps from the DSCC space.',
      miroUrl: 'https://miro.com/app/board/',
      category: 'Overview'
    },
    {
      id: 'jm-od-1',
      scope: 'onedata',
      title: 'One Data — Data Discovery Journey',
      description: 'End-to-end journey of how data practitioners discover, access, and use data assets across the firm.',
      miroUrl: 'https://miro.com/app/board/',
      category: 'One Data'
    },
    {
      id: 'jm-od-2',
      scope: 'onedata',
      title: 'One Data — Data Quality & Governance Journey',
      description: 'Journey map covering data quality assessment, governance workflows, and accountability touchpoints.',
      miroUrl: 'https://miro.com/app/board/',
      category: 'One Data'
    }
  ]
};
if (typeof window !== 'undefined') window.journeyMapsData = journeyMapsData;
