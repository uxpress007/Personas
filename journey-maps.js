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
      title: 'User Journey Maps (main)',
      description: 'Overview and index of user journey maps from the DSCC space.',
      miroUrl: 'https://miro.com/app/board/',
      category: 'Overview'
    }
    // Add more entries from Confluence when you have the Miro links, e.g.:
    // { id: 'jm-2', title: 'Example Journey', description: '...', miroUrl: 'https://miro.com/app/board/...', category: 'Product' },
  ]
};
if (typeof window !== 'undefined') window.journeyMapsData = journeyMapsData;
